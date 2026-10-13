#!/usr/bin/env node
/*
 * extract_block.js — pull a block out of a large single-file HTML mockup,
 * together with the CSS, JS and assets it depends on.
 *
 * Dependency-free (Node >= 18). No cheerio / parse5 required.
 *
 * Usage:
 *   node extract_block.js --selector "#hero-section"
 *   node extract_block.js --selector ".hero"
 *   node extract_block.js --selector "[data-block='pricing']"
 *   node extract_block.js --file ./mockup/index.html --selector "#group"
 *   node extract_block.js --raw-file ./snippet.html      # block given as a file of HTML
 *   node extract_block.js --selector "#group" --html     # outer HTML only
 *   node extract_block.js --selector "#group" --json     # machine-readable JSON
 *   node extract_block.js --list                         # list every id + section class
 *   node extract_block.js --selector "#missing" --list   # prints suggestions instead
 *
 * Options:
 *   --file <path>      mockup path (default ./mockup/index.html)
 *   --selector <s>     id (#x), class (.x), [data-*], tag, or raw HTML string
 *   --raw <html>       raw HTML block instead of a selector
 *   --raw-file <path>  raw HTML block read from a file
 *   --html             print only the outer HTML
 *   --css / --js / --assets   print only that section
 *   --json             emit JSON instead of the text report
 *   --all-matches      if a class matches several elements, use all of them
 *   --list             list ids/classes (or suggestions when a selector is given)
 *   --context <n>      JS context window in lines (default 8)
 *
 * Exit codes: 0 ok · 2 ambiguous selector · 3 selector not found
 */

'use strict';

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// tiny arg parser
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith('--')) {
        out[key] = next;
        i++;
      } else {
        out[key] = true;
      }
    } else {
      out._.push(a);
    }
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
const MOCKUP = path.resolve(args.file || './mockup/index.html');
const CONTEXT = Number(args.context || 8);
const ALL_MATCHES = !!args['all-matches'];

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);
const RAWTEXT = new Set(['script', 'style', 'textarea', 'title']);

// ---------------------------------------------------------------------------
// HTML primitives
// ---------------------------------------------------------------------------

// End of the tag that starts at `i` (points at '<'), returning index after '>'.
function findTagEnd(html, i) {
  let j = i + 1;
  while (j < html.length) {
    const ch = html[j];
    if (ch === '"' || ch === "'") {
      const q = ch;
      j++;
      while (j < html.length && html[j] !== q) j++;
      j++;
      continue;
    }
    if (ch === '>') return j + 1;
    j++;
  }
  return html.length;
}

// Parse attributes out of a full "<tag ...>" string.
function parseAttrs(tagStr) {
  const attrs = {};
  const body = tagStr.replace(/^<\s*[^\s/>]+/, '');
  const re = /([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let m;
  while ((m = re.exec(body))) {
    const val = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : m[4] !== undefined ? m[4] : '';
    attrs[m[1].toLowerCase()] = val;
  }
  return attrs;
}

// Walk the document, yielding real element tags (comments/raw-text skipped).
function listTags(html) {
  const tags = [];
  const lower = html.toLowerCase();
  let i = 0;
  while (i < html.length) {
    const lt = html.indexOf('<', i);
    if (lt === -1) break;
    if (html.startsWith('<!--', lt)) {
      const e = html.indexOf('-->', lt + 4);
      i = e === -1 ? html.length : e + 3;
      continue;
    }
    if (html.startsWith('<!', lt) || html.startsWith('<?', lt)) {
      i = findTagEnd(html, lt);
      continue;
    }
    if (html[lt + 1] === '/') {
      const e = findTagEnd(html, lt);
      const name = (html.slice(lt + 2, e).replace(/[>\s].*$/, '')).toLowerCase();
      tags.push({ closing: true, name, start: lt, end: e });
      i = e;
      continue;
    }
    const m = /^<([a-zA-Z][\w:-]*)/.exec(html.slice(lt, lt + 80));
    if (!m) {
      i = lt + 1;
      continue;
    }
    const e = findTagEnd(html, lt);
    const inner = html.slice(lt, e);
    const name = m[1].toLowerCase();
    const selfClose = /\/\s*>$/.test(inner);
    tags.push({ closing: false, name, start: lt, end: e, selfClose, attrs: parseAttrs(inner) });
    i = e;
    if (!selfClose && RAWTEXT.has(name)) {
      const closeIdx = lower.indexOf('</' + name, e);
      i = closeIdx === -1 ? html.length : closeIdx;
    }
  }
  return tags;
}

// Extract the full outer HTML of the element whose opening tag begins at `start`.
function extractOuterHTML(html, start) {
  const m = /^<([a-zA-Z][\w:-]*)/.exec(html.slice(start, start + 80));
  if (!m) return '';
  const name = m[1].toLowerCase();
  const firstEnd = findTagEnd(html, start);
  const firstInner = html.slice(start, firstEnd);
  if (/\/\s*>$/.test(firstInner) || VOID.has(name)) return html.slice(start, firstEnd);

  let depth = 1;
  let i = firstEnd;
  const lower = html.toLowerCase();
  while (i < html.length) {
    const lt = html.indexOf('<', i);
    if (lt === -1) break;
    if (html.startsWith('<!--', lt)) {
      const e = html.indexOf('-->', lt + 4);
      i = e === -1 ? html.length : e + 3;
      continue;
    }
    if (html.startsWith('<!', lt) || html.startsWith('<?', lt)) {
      i = findTagEnd(html, lt);
      continue;
    }
    if (html[lt + 1] === '/') {
      const e = findTagEnd(html, lt);
      const cname = (html.slice(lt + 2, e).replace(/[>\s].*$/, '')).toLowerCase();
      if (cname === name) {
        depth--;
        if (depth === 0) return html.slice(start, e);
      }
      i = e;
      continue;
    }
    const mm = /^<([a-zA-Z][\w:-]*)/.exec(html.slice(lt, lt + 80));
    if (!mm) {
      i = lt + 1;
      continue;
    }
    const e = findTagEnd(html, lt);
    const inner = html.slice(lt, e);
    const tname = mm[1].toLowerCase();
    if (tname === name && !/\/\s*>$/.test(inner)) depth++;
    i = e;
    if (RAWTEXT.has(tname) && !/\/\s*>$/.test(inner)) {
      const closeIdx = lower.indexOf('</' + tname, e);
      i = closeIdx === -1 ? html.length : closeIdx;
    }
  }
  return html.slice(start);
}

// class / id / data-attr / tag names used inside a fragment.
function collectTokens(fragment) {
  const clean = fragment
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');
  const classes = new Set();
  const ids = new Set();
  const dataAttrs = new Set();
  const tags = new Set();
  const re = /<([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>])*)>/g;
  let m;
  while ((m = re.exec(clean))) {
    const name = m[1].toLowerCase();
    tags.add(name);
    const attrs = parseAttrs('<' + name + m[2] + '>');
    if (attrs.class) attrs.class.split(/\s+/).forEach((c) => c && classes.add(c));
    if (attrs.id) ids.add(attrs.id);
    Object.keys(attrs).forEach((k) => {
      if (k.startsWith('data-')) dataAttrs.add(k);
    });
  }
  return { classes, ids, dataAttrs, tags };
}

function lineOf(html, index) {
  let line = 1;
  for (let i = 0; i < index && i < html.length; i++) if (html[i] === '\n') line++;
  return line;
}

// ---------------------------------------------------------------------------
// CSS parsing + selection
// ---------------------------------------------------------------------------

// Split a stylesheet into top-level {prelude, block}; block===null for statements.
function readBlocks(css) {
  const res = [];
  let i = 0;
  const n = css.length;
  const skipWs = () => {
    while (i < n) {
      if (/\s/.test(css[i])) i++;
      else if (css[i] === '/' && css[i + 1] === '*') {
        const e = css.indexOf('*/', i + 2);
        i = e === -1 ? n : e + 2;
      } else break;
    }
  };
  while (i < n) {
    skipWs();
    if (i >= n) break;
    const start = i;
    let depthParen = 0;
    while (i < n) {
      const ch = css[i];
      if (ch === '/' && css[i + 1] === '*') {
        const e = css.indexOf('*/', i + 2);
        i = e === -1 ? n : e + 2;
        continue;
      }
      if (ch === '"' || ch === "'") {
        const q = ch;
        i++;
        while (i < n && css[i] !== q) {
          if (css[i] === '\\') i++;
          i++;
        }
        i++;
        continue;
      }
      if (ch === '(') depthParen++;
      else if (ch === ')') depthParen--;
      else if ((ch === '{' || ch === ';' || ch === '}') && depthParen === 0) break;
      i++;
    }
    const prelude = css.slice(start, i).trim();
    if (i >= n) {
      if (prelude) res.push({ prelude, block: null });
      break;
    }
    if (css[i] === ';') {
      if (prelude) res.push({ prelude, block: null });
      i++;
      continue;
    }
    if (css[i] === '}') {
      i++;
      continue;
    }
    // '{'
    let depth = 1;
    const bodyStart = i + 1;
    i++;
    while (i < n && depth > 0) {
      const ch = css[i];
      if (ch === '/' && css[i + 1] === '*') {
        const e = css.indexOf('*/', i + 2);
        i = e === -1 ? n : e + 2;
        continue;
      }
      if (ch === '"' || ch === "'") {
        const q = ch;
        i++;
        while (i < n && css[i] !== q) {
          if (css[i] === '\\') i++;
          i++;
        }
        i++;
        continue;
      }
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
      i++;
    }
    res.push({ prelude, block: css.slice(bodyStart, i - 1) });
  }
  return res;
}

function ruleMatches(sel, tokens) {
  for (const simple of sel.split(',')) {
    let m;
    const cRe = /\.([A-Za-z0-9_-]+)/g;
    while ((m = cRe.exec(simple))) if (tokens.classes.has(m[1])) return true;
    const iRe = /#([A-Za-z0-9_-]+)/g;
    while ((m = iRe.exec(simple))) if (tokens.ids.has(m[1])) return true;
    const dRe = /\[(data-[A-Za-z0-9_-]+)/g;
    while ((m = dRe.exec(simple))) if (tokens.dataAttrs.has(m[1])) return true;
  }
  return false;
}

const AT_WRAPPERS = new Set(['@media', '@supports', '@layer', '@container', '@scope', '@starting-style']);

// Walk CSS, select rules touching the block, gather keyframes/fonts/custom props.
function walkCss(css, tokens, state) {
  for (const r of readBlocks(css)) {
    if (r.block === null) continue;
    const at = r.prelude.startsWith('@') ? r.prelude.split(/[\s({]/)[0].toLowerCase() : null;
    if (at === '@keyframes' || at === '@-webkit-keyframes') {
      const name = r.prelude.replace(/@[-\w]*keyframes\s*/i, '').trim();
      state.keyframes.set(name, `${r.prelude}{${r.block}}`);
      continue;
    }
    if (at && AT_WRAPPERS.has(at)) {
      const inner = { rules: [], keyframes: state.keyframes, fonts: state.fonts, customProps: state.customProps };
      walkCss(r.block, tokens, inner);
      if (inner.rules.length) state.rules.push(`${r.prelude}{\n  ${inner.rules.join('\n  ')}\n}`);
      continue;
    }
    if (at === '@font-face') {
      const fam = /font-family\s*:\s*([^;}]+)/.exec(r.block);
      state.fonts.push({ family: fam ? fam[1].trim().replace(/^["']|["']$/g, '') : '', css: `${r.prelude}{${r.block}}` });
      continue;
    }
    if (at) {
      continue; // @import, @page … not block-scoped
    }
    // record custom-property definitions regardless of match
    const cpRe = /(--[\w-]+)\s*:\s*([^;{}]+);?/g;
    let cp;
    while ((cp = cpRe.exec(r.block))) {
      state.customProps.set(cp[1], { prelude: r.prelude, value: cp[2].trim() });
    }
    if (ruleMatches(r.prelude, tokens)) {
      state.rules.push(`${r.prelude}{${r.block}}`);
    }
  }
}

function selectCss(tokenSources, tokens) {
  const state = { rules: [], keyframes: new Map(), fonts: [], customProps: new Map() };
  for (const css of tokenSources) walkCss(css, tokens, state);

  const joined = state.rules.join('\n');
  const usedVars = new Set([...joined.matchAll(/var\(\s*(--[\w-]+)/g)].map((m) => m[1]));
  const fontFams = new Set(
    [...joined.matchAll(/font-family\s*:\s*([^;}]+)/g)].map((m) => m[1].trim().replace(/^["']|["']$/g, '').split(',')[0].trim())
  );
  const usedAnim = new Set();
  for (const m of joined.matchAll(/animation(?:-name)?\s*:\s*([^;}]+)/g)) {
    for (const part of m[1].split(/[\s,]+/)) {
      if (part && !part.startsWith('var(') && !/^[-\d.]/.test(part) &&
        !['none', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'infinite', 'forwards',
          'backwards', 'both', 'alternate', 'reverse', 'running', 'paused', 'initial', 'inherit',
          'normal', 'steps'].includes(part)) {
        usedAnim.add(part);
      }
    }
  }

  const keyframes = [];
  for (const name of usedAnim) if (state.keyframes.has(name)) keyframes.push(state.keyframes.get(name));

  const fontFaces = state.fonts.filter((f) => fontFams.has(f.family)).map((f) => f.css);

  const varRules = [];
  const byPrelude = new Map();
  for (const v of usedVars) {
    const def = state.customProps.get(v);
    if (!def) continue;
    if (!byPrelude.has(def.prelude)) byPrelude.set(def.prelude, []);
    byPrelude.get(def.prelude).push(`${v}: ${def.value}`);
  }
  for (const [prelude, decls] of byPrelude) varRules.push(`${prelude}{ ${decls.join('; ')}; }`);

  return { rules: state.rules, keyframes, fontFaces, varRules };
}

// ---------------------------------------------------------------------------
// JS + assets
// ---------------------------------------------------------------------------

function collectStyleText(html, baseDir) {
  const out = [];
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  // local stylesheets
  const linkRe = /<link\b[^>]*>/gi;
  let l;
  while ((l = linkRe.exec(html))) {
    const attrs = parseAttrs(l[0]);
    if (attrs.rel && attrs.rel.toLowerCase() === 'stylesheet' && attrs.href && !/^https?:|^\/\//.test(attrs.href)) {
      const p = path.resolve(baseDir, attrs.href);
      if (fs.existsSync(p)) out.push(fs.readFileSync(p, 'utf8'));
    }
  }
  return out;
}

function collectScripts(html) {
  const inline = [];
  const external = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = parseAttrs('<script' + m[1] + '>');
    if (attrs.src) external.push(attrs.src);
    else inline.push({ text: m[2], line: lineOf(html, m.index) });
  }
  return { inline, external };
}

function jsReferences(scripts, tokens) {
  const needles = [];
  for (const id of tokens.ids) needles.push({ kind: 'id', text: id });
  for (const c of tokens.classes) needles.push({ kind: 'class', text: c });
  for (const d of tokens.dataAttrs) needles.push({ kind: 'data', text: d });

  const hits = [];
  for (const script of scripts) {
    const lines = script.text.split('\n');
    for (let idx = 0; idx < lines.length; idx++) {
      const line = lines[idx];
      for (const n of needles) {
        let needleLine = null;
        if (n.kind === 'id') {
          if (line.includes(`"${n.text}"`) || line.includes(`'${n.text}'`) || line.includes(`#${n.text}`)) needleLine = n;
        } else if (n.kind === 'class') {
          const boundary = new RegExp(`\\.${n.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\w-])`);
          if (boundary.test(line) || line.includes(`"${n.text}"`) || line.includes(`'${n.text}'`)) needleLine = n;
        } else {
          if (line.includes(`[${n.text}`) || line.includes(n.text)) needleLine = n;
        }
        if (needleLine) {
          hits.push({ absLine: script.line + idx, needle: n.text, kind: n.kind, idx, lines });
          break;
        }
      }
    }
  }
  return hits;
}

function renderJsWindows(hits) {
  const seen = new Set();
  const windows = [];
  for (const h of hits) {
    const from = Math.max(0, h.idx - CONTEXT);
    const to = Math.min(h.lines.length, h.idx + CONTEXT + 1);
    const key = `${h.lines[0] !== undefined ? '' : ''}${from}:${to}`;
    if (seen.has(key)) continue;
    seen.add(key);
    windows.push({
      absFrom: h.absLine - (h.idx - from),
      absTo: h.absLine + (to - h.idx) - 1,
      needle: h.needle,
      text: h.lines.slice(from, to).join('\n'),
    });
  }
  return windows;
}

function eventHandlers(fragment) {
  const re = /\s(on[a-z-]+)\s*=\s*("([^"]*)"|'([^']*)')/gi;
  const out = [];
  let m;
  while ((m = re.exec(fragment))) out.push({ name: m[1], code: m[3] !== undefined ? m[3] : m[4] });
  return out;
}

function collectAssets(fragment) {
  const assets = { images: new Set(), media: new Set(), svgUse: new Set(), links: new Set(), cssUrls: new Set() };
  const re = /<([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>])*)>/g;
  let m;
  while ((m = re.exec(fragment))) {
    const tag = m[1].toLowerCase();
    const attrs = parseAttrs('<' + tag + m[2] + '>');
    if (attrs.src) {
      if (tag === 'img' || tag === 'source') assets.images.add(attrs.src);
      else if (tag === 'video' || tag === 'audio') assets.media.add(attrs.src);
      else assets.media.add(attrs.src);
    }
    if (attrs.srcset) attrs.srcset.split(',').forEach((s) => assets.images.add(s.trim().split(/\s+/)[0]));
    if (attrs.poster) assets.media.add(attrs.poster);
    if (tag === 'use' && (attrs.href || attrs['xlink:href'])) assets.svgUse.add(attrs.href || attrs['xlink:href']);
    if (tag === 'a' && attrs.href && !attrs.href.startsWith('#')) assets.links.add(attrs.href);
    if (tag === 'image' && (attrs.href || attrs['xlink:href'])) assets.images.add(attrs.href || attrs['xlink:href']);
  }
  return assets;
}

function cssUrls(cssList) {
  const urls = new Set();
  for (const css of cssList) {
    for (const m of css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) {
      if (!m[1].startsWith('data:')) urls.add(m[1]);
    }
  }
  return urls;
}

// ---------------------------------------------------------------------------
// Selector resolution
// ---------------------------------------------------------------------------

function selectorToCriteria(selector) {
  const s = selector.trim();
  if (s.startsWith('#')) return { type: 'id', value: s.slice(1) };
  if (s.startsWith('.')) return { type: 'class', value: s.slice(1) };
  const data = /^\[(data-[\w-]+)(?:\s*=\s*['"]?([^'"\]]*)['"]?)?\]$/.exec(s);
  if (data) return { type: 'data', value: data[1], match: data[2] };
  // attribute value selector  [data-block="x"] handled above; also id="x" forms
  return { type: 'bare', value: s };
}

function findMatches(html, tags, criteria) {
  const pick = (pred) => tags.filter((t) => !t.closing && !t.selfClose && t.attrs && pred(t.attrs));
  if (criteria.type === 'id') return pick((a) => a.id === criteria.value);
  if (criteria.type === 'class') return pick((a) => a.class && a.class.split(/\s+/).includes(criteria.value));
  if (criteria.type === 'data') return pick((a) => a[criteria.value] !== undefined && (criteria.match === undefined || a[criteria.value] === criteria.match));
  // bare: id first, then class, then data-attr value
  let m = pick((a) => a.id === criteria.value);
  if (m.length) return m;
  m = pick((a) => a.class && a.class.split(/\s+/).includes(criteria.value));
  if (m.length) return m;
  return pick((a) => Object.entries(a).some(([k, v]) => k.startsWith('data-') && v === criteria.value));
}

// Nearest ancestor id for every opening tag, via an ordered stack.
function buildAncestors(tags) {
  const stack = [];
  const ancFor = new Map();
  for (const t of tags) {
    if (t.closing) {
      for (let k = stack.length - 1; k >= 0; k--) {
        if (stack[k].name === t.name) { stack.length = k; break; }
      }
      continue;
    }
    let anc = null;
    for (let k = stack.length - 1; k >= 0; k--) {
      if (stack[k].attrs && stack[k].attrs.id) { anc = stack[k].attrs.id; break; }
    }
    ancFor.set(t, anc);
    if (!t.selfClose && !VOID.has(t.name)) stack.push(t);
  }
  return ancFor;
}

function describeContext(html, tags, match, ancFor) {
  const ancestor = ancFor && ancFor.get(match) ? `#${ancFor.get(match)}` : '';
  const line = lineOf(html, match.start);
  const label = match.attrs.id ? `#${match.attrs.id}` : match.attrs.class ? '.' + match.attrs.class.split(/\s+/).join('.') : match.name;
  return { label, ancestor, line, tag: match.name };
}

function suggest(value, all) {
  const scored = all.map((name) => {
    let score = 0;
    const a = value.toLowerCase();
    const b = name.toLowerCase();
    if (b === a) score = 100;
    else if (b.includes(a) || a.includes(b)) score = 60;
    else {
      // cheap similarity: shared prefix + length closeness
      let i = 0;
      while (i < a.length && i < b.length && a[i] === b[i]) i++;
      score = i * 4 - Math.abs(a.length - b.length);
    }
    return { name, score };
  });
  return scored.sort((x, y) => y.score - x.score).slice(0, 6).map((s) => s.name);
}

function listInventory(html, tags) {
  const ids = new Set();
  const sectionClasses = new Set();
  for (const t of tags) {
    if (t.closing || !t.attrs) continue;
    if (t.attrs.id) ids.add(t.attrs.id);
    if (t.attrs.class && ['section', 'main', 'header', 'footer', 'nav'].includes(t.name)) {
      t.attrs.class.split(/\s+/).forEach((c) => c && sectionClasses.add(c));
    }
  }
  return { ids: [...ids].sort(), sectionClasses: [...sectionClasses].sort() };
}

// ---------------------------------------------------------------------------
// Reporting
// ---------------------------------------------------------------------------

function fmtSet(set) {
  return [...set].sort().join(', ') || '(none)';
}

function textReport(res) {
  const L = [];
  L.push('=== TARGET ===');
  L.push(`mockup:   ${res.file}`);
  L.push(`selector: ${res.selectorLabel}`);
  if (res.context) L.push(`location: line ${res.context.line}${res.context.ancestor ? ' (inside ' + res.context.ancestor + ')' : ''}`);
  if (res.matches && res.matches.length > 1) L.push(`matches:  ${res.matches.length} (${res.matches.join(', ')})`);
  L.push('');
  L.push('=== TOKENS (drive CSS/JS matching) ===');
  L.push(`ids:        ${fmtSet(res.tokens.ids)}`);
  L.push(`classes:    ${fmtSet(res.tokens.classes)}`);
  L.push(`data-attrs: ${fmtSet(res.tokens.dataAttrs)}`);
  L.push(`tags:       ${fmtSet(res.tokens.tags)}`);
  L.push('');
  if (!res.only || res.only === 'html') {
    L.push('=== OUTER HTML ===');
    L.push(res.outerHTML);
    L.push('');
  }
  if (!res.only || res.only === 'css') {
    L.push(`=== CSS RULES (${res.css.rules.length}) ===`);
    L.push(res.css.rules.join('\n\n') || '(none matched)');
    L.push('');
    if (res.css.keyframes.length) {
      L.push(`=== KEYFRAMES (${res.css.keyframes.length}) ===`);
      L.push(res.css.keyframes.join('\n\n'));
      L.push('');
    }
    if (res.css.fontFaces.length) {
      L.push(`=== @font-face (${res.css.fontFaces.length}) ===`);
      L.push(res.css.fontFaces.join('\n\n'));
      L.push('');
    }
    if (res.css.varRules.length) {
      L.push(`=== CSS VARIABLES REFERENCED (${res.css.varRules.length}) ===`);
      L.push(res.css.varRules.join('\n'));
      L.push('');
    }
  }
  if (!res.only || res.only === 'js') {
    L.push('=== INLINE EVENT HANDLERS ===');
    L.push(res.handlers.length ? res.handlers.map((h) => `${h.name}="${h.code}"`).join('\n') : '(none)');
    L.push('');
    L.push(`=== JS RELEVANT SNIPPETS (${res.jsWindows.length}) ===`);
    if (!res.jsWindows.length) L.push('(no inline script references the block tokens)');
    for (const w of res.jsWindows) {
      L.push(`--- lines ${w.absFrom}-${w.absTo} · via "${w.needle}" ---`);
      L.push(w.text);
      L.push('');
    }
  }
  if (!res.only || res.only === 'assets') {
    L.push('=== EXTERNAL SCRIPTS ===');
    L.push(res.externalScripts.length ? res.externalScripts.join('\n') : '(none)');
    L.push('');
    L.push('=== ASSETS ===');
    L.push(`images:   ${fmtSet(res.assets.images)}`);
    L.push(`media:    ${fmtSet(res.assets.media)}`);
    L.push(`svg <use>: ${fmtSet(res.assets.svgUse)}`);
    L.push(`links:    ${fmtSet(res.assets.links)}`);
    L.push(`css url(): ${fmtSet(res.assets.cssUrls)}`);
  }
  return L.join('\n');
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

function main() {
  if (args.list && !args.selector && !args.raw && !args['raw-file']) {
    if (!fs.existsSync(MOCKUP)) {
      console.error(`mockup not found: ${MOCKUP}`);
      process.exit(1);
    }
    const html = fs.readFileSync(MOCKUP, 'utf8');
    const inv = listInventory(html, listTags(html));
    console.log('IDs:\n  ' + inv.ids.join('\n  '));
    console.log('\nSection classes:\n  ' + inv.sectionClasses.join('\n  '));
    return;
  }

  if (!fs.existsSync(MOCKUP)) {
    console.error(`mockup not found: ${MOCKUP}`);
    process.exit(1);
  }
  const html = fs.readFileSync(MOCKUP, 'utf8');
  const tags = listTags(html);
  const ancFor = buildAncestors(tags);

  let rawHTML = null;
  let selector = args.selector || args._[0] || null;

  if (args['raw-file']) {
    rawHTML = fs.readFileSync(path.resolve(args['raw-file']), 'utf8');
  } else if (args.raw) {
    rawHTML = String(args.raw);
  } else if (selector && selector.includes('<') && selector.includes('>')) {
    rawHTML = selector;
    selector = null;
  }

  let fragment;
  let selectorLabel;
  let context = null;
  let matches = null;

  if (rawHTML) {
    fragment = rawHTML;
    selectorLabel = '(raw HTML input)';
    // find a representative block in the doc for context
    const rawTokens = collectTokens(rawHTML);
    const firstId = [...rawTokens.ids][0];
    const firstClass = [...rawTokens.classes][0];
    let searchCriteria = firstId ? { type: 'id', value: firstId } : firstClass ? { type: 'class', value: firstClass } : null;
    if (searchCriteria) {
      const found = findMatches(html, tags, searchCriteria);
      if (found.length) context = describeContext(html, tags, found[0], ancFor);
    }
  } else if (selector) {
    const criteria = selectorToCriteria(selector);
    const found = findMatches(html, tags, criteria);
    selectorLabel = selector;

    if (found.length === 0) {
      const inv = listInventory(html, tags);
      console.error(`\nNo element matches "${selector}".\n`);
      console.error('Closest IDs:     ' + suggest(criteria.value, inv.ids).join(', '));
      console.error('Closest classes: ' + suggest(criteria.value, inv.sectionClasses).join(', '));
      console.error('\nRun with --list to see everything.');
      process.exit(3);
    }

    if (found.length > 1 && !ALL_MATCHES) {
      console.error(`\n"${selector}" matches ${found.length} elements — choose one (or pass --all-matches):\n`);
      for (const f of found) {
        const d = describeContext(html, tags, f, ancFor);
        console.error(`  <${d.tag}> ${d.label}  at line ${d.line}${d.ancestor ? ' (inside ' + d.ancestor + ')' : ''}`);
      }
      process.exit(2);
    }

    const chosen = ALL_MATCHES ? found : [found[0]];
    if (chosen.length === 1) context = describeContext(html, tags, chosen[0], ancFor);
    matches = chosen.map((f) => {
      const d = describeContext(html, tags, f, ancFor);
      return `${d.label}@${d.line}`;
    });
    fragment = chosen.map((f) => extractOuterHTML(html, f.start)).join('\n\n<!-- ---- next match ---- -->\n\n');
  } else {
    console.error('Provide --selector, --raw, --raw-file (or run --list).');
    process.exit(1);
  }

  const tokens = collectTokens(fragment);
  const styleTexts = collectStyleText(html, path.dirname(MOCKUP));
  const css = selectCss(styleTexts, tokens);
  const scripts = collectScripts(html);
  const jsHits = jsReferences(scripts.inline, tokens);
  const jsWindows = renderJsWindows(jsHits);
  const handlers = eventHandlers(fragment);
  const assets = collectAssets(fragment);
  const cssAssetUrls = cssUrls(styleTexts);
  assets.cssUrls = cssAssetUrls;

  const only = args.html ? 'html' : args.css ? 'css' : args.js ? 'js' : args.assets ? 'assets' : null;

  const result = {
    file: MOCKUP,
    selectorLabel,
    context,
    matches,
    tokens: {
      ids: [...tokens.ids],
      classes: [...tokens.classes],
      dataAttrs: [...tokens.dataAttrs],
      tags: [...tokens.tags],
    },
    outerHTML: fragment,
    css,
    handlers,
    jsWindows,
    externalScripts: scripts.external,
    assets: {
      images: [...assets.images],
      media: [...assets.media],
      svgUse: [...assets.svgUse],
      links: [...assets.links],
      cssUrls: [...assets.cssUrls],
    },
    only,
  };

  if (args.json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(textReport(result));
  }
}

main();
