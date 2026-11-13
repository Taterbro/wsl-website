/**
 * scripts/check-links.ts
 *
 * Scans a Next.js (App Router) project for <a> and <Link> tags whose href
 * points to an internal route that doesn't exist, then writes a Markdown report.
 *
 * Usage (from the project root):
 *   npx tsx scripts/check-links.ts
 *   npx tsx scripts/check-links.ts path/to/project   (optional root override)
 *
 * Exits with code 1 if any broken/relative links were found (handy for CI).
 */
import * as fs from "node:fs";
import * as path from "node:path";
import * as tsNamespace from "typescript";
import { Expression, SourceFile } from "typescript";
import { Node } from "typescript";

// Works whether the project is CJS or ESM (typescript is a CJS package)
const ts = ((tsNamespace as any).default ?? tsNamespace) as typeof tsNamespace;

if (!ts.createSourceFile) {
  console.error(
    "The installed `typescript` package doesn't expose the compiler API (TypeScript 7+ native builds don't).\n" +
      "Install a 5.x/6.x copy for this script, e.g.: npm i -D typescript@5"
  );
  process.exit(1);
}

// ───────────────────────────── config ─────────────────────────────

const LINK_TAGS = new Set(["a", "Link"]); // add wrapper components here, e.g. "NavLink"
const SCAN_EXTENSIONS = new Set([".tsx", ".jsx", ".js"]);
const IGNORED_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "dist",
  "build",
  "out",
  "coverage",
  ".turbo",
  ".vercel",
]);
const IGNORED_PREFIXES = ["/_next/"]; // internal paths that are always fine
const ALLOWED_PATHS: string[] = []; // exact paths to never flag, e.g. "/legacy"
const REPORT_NAME = "broken-links-report.md";

const PAGE_FILE = /^page\.(tsx|jsx|ts|js|mdx)$/;
const ROUTE_FILE = /^route\.(ts|js)$/;
const SCHEME = /^[a-z][a-z0-9+.-]*:/i; // https:, http:, mailto:, tel:, javascript: ...
const LOCALE_SEGMENT = /^\[(locale|lang)\]$/;

// Placeholder used when a template literal contains ${...}
const DYN = "\u0001";

// ───────────────────────────── types ─────────────────────────────

interface Route {
  display: string; // e.g. /users/[id]
  regex: RegExp; // matches real URLs
  sample: string; // a concrete example path, e.g. /users/x
}

interface Ctx {
  routes: Route[];
  publicFiles: Set<string>;
}

type Verdict =
  | { status: "ok" }
  | { status: "broken" | "relative" | "unverifiable"; reason: string };

type Extracted =
  { kind: "string"; value: string } | { kind: "dynamic"; text: string };

interface Finding {
  href: string;
  status: "broken" | "relative" | "unverifiable";
  reason: string;
  file: string; // project-relative, forward slashes
  line: number;
  tag: string;
}

// ───────────────────────────── helpers ─────────────────────────────

const toPosix = (p: string) => p.split(path.sep).join("/");
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const trimSlash = (p: string) =>
  p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;

function* walk(dir: string, ignored: Set<string>): Generator<string> {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!ignored.has(entry.name)) yield* walk(full, ignored);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

// ───────────────────────────── phase 1: routes ─────────────────────────────

function segmentsToRoute(segments: string[]): Route | null {
  let re = "";
  let sample = "";
  const urlSegs: string[] = [];

  for (const seg of segments) {
    if (seg.startsWith("_")) return null; // private folder, not routable
    if (/^\(\.{1,3}\)/.test(seg)) return null; // intercepting route, not directly reachable
    if (seg.startsWith("@")) continue; // parallel route slot, no URL segment
    if (/^\(.*\)$/.test(seg)) continue; // route group, no URL segment

    let m: RegExpMatchArray | null;
    if ((m = seg.match(/^\[\[\.\.\.(.+)\]\]$/))) {
      re += "(?:/.+)?"; // optional catch-all
      sample += "";
    } else if ((m = seg.match(/^\[\.\.\.(.+)\]$/))) {
      re += "/.+"; // catch-all
      sample += "/x/x";
    } else if ((m = seg.match(/^\[(.+)\]$/))) {
      re += "/[^/]+"; // dynamic segment
      sample += "/x";
    } else {
      re += "/" + escapeRe(seg);
      sample += "/" + seg;
    }
    urlSegs.push(seg);
  }

  return {
    display: "/" + urlSegs.join("/"),
    regex: new RegExp("^" + re + "/?$"),
    sample: sample || "/",
  };
}

function discover(root: string): { ctx: Ctx; appDir: string } {
  const appDir = ["app", path.join("src", "app")]
    .map((p) => path.join(root, p))
    .find((p) => fs.existsSync(p) && fs.statSync(p).isDirectory());

  if (!appDir) {
    throw new Error(`Couldn't find an "app" folder in ${root}`);
  }

  const routes: Route[] = [];
  const publicFiles = new Set<string>();

  // routes from app/
  for (const file of walk(appDir, new Set(["node_modules"]))) {
    const name = path.basename(file);
    const dirSegs = path
      .relative(appDir, path.dirname(file))
      .split(path.sep)
      .filter(Boolean);

    if (PAGE_FILE.test(name) || ROUTE_FILE.test(name)) {
      const route = segmentsToRoute(dirSegs);
      if (route) {
        routes.push(route);

        // Also register the route without the locale segment,
        // so /about matches app/[locale]/about
        const first = dirSegs.findIndex(
          (s) => !/^\(.*\)$/.test(s) && !s.startsWith("@")
        );
        if (first !== -1 && LOCALE_SEGMENT.test(dirSegs[first])) {
          const stripped = segmentsToRoute(
            dirSegs.filter((_, i) => i !== first)
          );
          if (stripped) routes.push(stripped);
        }
      }
    } else if (dirSegs.length === 0) {
      // metadata files in the app root that become real URLs
      if (name === "favicon.ico") publicFiles.add("/favicon.ico");
      if (/^robots\.(txt|ts|js)$/.test(name)) publicFiles.add("/robots.txt");
      if (/^sitemap\.(xml|ts|js)$/.test(name)) publicFiles.add("/sitemap.xml");
      if (/^manifest\.(json|webmanifest|ts|js)$/.test(name)) {
        publicFiles.add("/manifest.webmanifest");
        publicFiles.add("/manifest.json");
      }
    }
  }

  // static files from public/
  const publicDir = path.join(root, "public");
  if (fs.existsSync(publicDir)) {
    for (const file of walk(publicDir, new Set())) {
      publicFiles.add("/" + toPosix(path.relative(publicDir, file)));
    }
  }

  return { ctx: { routes, publicFiles }, appDir };
}

// ───────────────────────────── phase 2: classify hrefs ─────────────────────────────

function isKnownPath(p: string, ctx: Ctx): boolean {
  let candidate = trimSlash(p);
  try {
    candidate = decodeURI(candidate);
  } catch {
    /* keep raw */
  }
  if (ctx.publicFiles.has(candidate)) return true;
  return ctx.routes.some((r) => r.regex.test(candidate));
}

function classify(raw: string, ctx: Ctx): Verdict {
  const value = raw.trim();

  if (value === "" || value.startsWith("#") || value.startsWith("?"))
    return { status: "ok" };
  if (SCHEME.test(value) || value.startsWith("//")) return { status: "ok" }; // external / mailto / tel
  if (value.startsWith(DYN)) {
    return {
      status: "unverifiable",
      reason: "href starts with a dynamic value",
    };
  }
  if (!value.startsWith("/")) {
    return {
      status: "relative",
      reason: "Relative link (doesn't start with `/`)",
    };
  }

  const pathname = value.split(/[?#]/)[0];
  if (
    ALLOWED_PATHS.includes(pathname) ||
    IGNORED_PREFIXES.some((p) => pathname.startsWith(p))
  ) {
    return { status: "ok" };
  }

  // Fully static path
  if (!pathname.includes(DYN)) {
    return isKnownPath(pathname, ctx)
      ? { status: "ok" }
      : { status: "broken", reason: "No matching route" };
  }

  // Template literal with ${...}: try two strategies.
  // 1) fill each placeholder with a sample segment and see if a route matches
  if (isKnownPath(pathname.split(DYN).join("x"), ctx)) return { status: "ok" };
  // 2) treat placeholders as wildcards and see if they fit any known concrete path
  const wildcard = new RegExp(
    "^" + pathname.split(DYN).map(escapeRe).join("[^/]*") + "/?$"
  );
  if (
    ctx.routes.some((r) => wildcard.test(r.sample)) ||
    [...ctx.publicFiles].some((p) => wildcard.test(p))
  ) {
    return { status: "ok" };
  }
  return { status: "broken", reason: "No route matches this dynamic path" };
}

// ───────────────────────────── phase 3: AST scan ─────────────────────────────

function extract(expr: Expression, sf: SourceFile): Extracted[] {
  if (ts.isStringLiteralLike(expr))
    return [{ kind: "string", value: expr.text }];

  if (ts.isTemplateExpression(expr)) {
    const value =
      expr.head.text +
      expr.templateSpans.map((s) => DYN + s.literal.text).join("");
    return [{ kind: "string", value }];
  }

  if (
    ts.isParenthesizedExpression(expr) ||
    ts.isAsExpression(expr) ||
    ts.isNonNullExpression(expr)
  ) {
    return extract(expr.expression, sf);
  }

  if (ts.isConditionalExpression(expr)) {
    return [...extract(expr.whenTrue, sf), ...extract(expr.whenFalse, sf)];
  }

  if (ts.isBinaryExpression(expr)) {
    const op = expr.operatorToken.kind;
    if (
      op === ts.SyntaxKind.BarBarToken ||
      op === ts.SyntaxKind.QuestionQuestionToken
    ) {
      return [...extract(expr.left, sf), ...extract(expr.right, sf)];
    }
    if (op === ts.SyntaxKind.AmpersandAmpersandToken)
      return extract(expr.right, sf);
  }

  // Link's object form: href={{ pathname: "/x", query: {...} }}
  if (ts.isObjectLiteralExpression(expr)) {
    for (const prop of expr.properties) {
      if (
        ts.isPropertyAssignment(prop) &&
        (ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name)) &&
        prop.name.text === "pathname"
      ) {
        return extract(prop.initializer, sf);
      }
    }
  }

  return [{ kind: "dynamic", text: expr.getText(sf) }];
}

function scanFile(
  file: string,
  root: string,
  ctx: Ctx,
  findings: Finding[],
  counter: { links: number }
): void {
  const text = fs.readFileSync(file, "utf8");
  const ext = path.extname(file);
  const kind = ext === ".tsx" ? ts.ScriptKind.TSX : ts.ScriptKind.JSX;
  const sf = ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.Latest,
    true,
    kind
  );
  const relFile = toPosix(path.relative(root, file));

  const visit = (node: Node): void => {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tag = node.tagName.getText(sf);
      if (LINK_TAGS.has(tag)) {
        for (const prop of node.attributes.properties) {
          if (!ts.isJsxAttribute(prop) || prop.name.getText(sf) !== "href")
            continue;
          const init = prop.initializer;
          if (!init) continue;

          let items: Extracted[];
          if (ts.isStringLiteral(init))
            items = [{ kind: "string", value: init.text }];
          else if (ts.isJsxExpression(init) && init.expression)
            items = extract(init.expression, sf);
          else continue;

          const line =
            sf.getLineAndCharacterOfPosition(prop.getStart(sf)).line + 1;

          for (const item of items) {
            counter.links++;
            if (item.kind === "dynamic") {
              findings.push({
                href: `href={${item.text}}`,
                status: "unverifiable",
                reason: "Value is computed at runtime",
                file: relFile,
                line,
                tag,
              });
              continue;
            }
            const verdict = classify(item.value, ctx);
            if (verdict.status === "ok") continue;
            findings.push({
              href: item.value.split(DYN).join("${…}"),
              status: verdict.status,
              reason: verdict.reason,
              file: relFile,
              line,
              tag,
            });
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
}

// ───────────────────────────── report ─────────────────────────────

function section(title: string, note: string, items: Finding[]): string {
  if (items.length === 0) return "";
  const groups = new Map<string, Finding[]>();
  for (const f of items) {
    const list = groups.get(f.href) ?? [];
    list.push(f);
    groups.set(f.href, list);
  }
  let out = `## ${title}\n\n${note}\n\n`;
  for (const [href, list] of [...groups].sort((a, b) =>
    a[0].localeCompare(b[0])
  )) {
    out += `### \`${href}\`\n\n`;
    list.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);
    for (const f of list) out += `- \`${f.file}:${f.line}\` (\`<${f.tag}>\`)\n`;
    out += "\n";
  }
  return out;
}

function buildReport(
  findings: Finding[],
  files: number,
  links: number,
  ctx: Ctx
): string {
  const broken = findings.filter((f) => f.status === "broken");
  const relative = findings.filter((f) => f.status === "relative");
  const unverifiable = findings.filter((f) => f.status === "unverifiable");
  const flagged = broken.length + relative.length;

  let md = `# Broken Link Report\n\n`;
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += `- Files scanned: ${files}\n`;
  md += `- Links checked: ${links}\n`;
  md += `- Routes found: ${ctx.routes.length}\n`;
  md += `- **Flagged: ${flagged}**\n`;
  md += `- Could not verify: ${unverifiable.length}\n\n`;

  if (flagged === 0) md += `No broken links found.\n\n`;

  md += section(
    "Broken internal links",
    "These point to a path with no matching route or public file.",
    broken
  );
  md += section(
    "Relative links",
    "Relative hrefs are flagged by policy. Use an absolute path starting with `/`.",
    relative
  );
  md += section(
    "Could not verify",
    "These hrefs are computed at runtime, so they can't be checked statically.",
    unverifiable
  );
  return md;
}

// ───────────────────────────── main ─────────────────────────────

function main(): void {
  const root = path.resolve(
    process.argv[2] ?? path.join(path.dirname(process.argv[1]), "..")
  );
  console.log(`Project root: ${root}`);

  const { ctx } = discover(root);
  console.log(ctx.routes.map((r) => `${r.display}  ->  ${r.regex}`).join("\n"));
  console.log(
    `Found ${ctx.routes.length} routes, ${ctx.publicFiles.size} public/metadata files`
  );

  const findings: Finding[] = [];
  const counter = { links: 0 };
  let files = 0;

  for (const file of walk(root, IGNORED_DIRS)) {
    if (!SCAN_EXTENSIONS.has(path.extname(file))) continue;
    files++;
    try {
      scanFile(file, root, ctx, findings, counter);
    } catch (err) {
      console.warn(
        `Skipped ${toPosix(path.relative(root, file))}: ${(err as Error).message}`
      );
    }
  }

  const reportPath = path.join(root, REPORT_NAME);
  fs.writeFileSync(
    reportPath,
    buildReport(findings, files, counter.links, ctx),
    "utf8"
  );

  const flagged = findings.filter((f) => f.status !== "unverifiable").length;
  const unverifiable = findings.length - flagged;
  console.log(`Scanned ${files} files, ${counter.links} links.`);
  console.log(`Flagged ${flagged}, unverifiable ${unverifiable}.`);
  console.log(`Report written to ${reportPath}`);

  process.exitCode = flagged > 0 ? 1 : 0;
}

main();
