---
name: remove-placeholder-text
description: Remove rendered "PLACEHOLDER -" notes from a page and its components. Use when given a page path and asked to "remove the placeholder texts", "strip PLACEHOLDER notes", "get rid of the PLACEHOLDER - block", or clean up placeholder copy on a page.
---

# Remove PLACEHOLDER text blocks

Given a page path, find rendered text blocks whose text starts with
`PLACEHOLDER -` and remove them, or gate them behind a CMS empty check.

Do NOT change any other content, copy, layout, styling, ordering or markup.

## Inputs

- **Page path**: a route directory containing `page.tsx`
  (e.g. `app/[locale]/businesses/industrial-development`). A direct
  `page.tsx` path is also accepted.
- If no path is given, ask for one. Do not infer a page from the placeholder
  matches alone.

## Scope

Candidates are **rendered JSX text nodes** that start with `PLACEHOLDER`
followed by `-`, `–` or `—` (with optional whitespace). Treat all three as
the same marker. Example:

```tsx
<p className="...">
  PLACEHOLDER — hero imagery and scope descriptors are illustrative until
  approved sector photography and content are supplied.
</p>
```

Files to check:

1. The target `page.tsx`.
2. Every component under the same route directory (`_components/**`,
   `_data/**`, etc.) that the page renders, following local imports.
3. If the page imports a component from outside the route directory and that
   component renders a candidate, handle it too and report the path. Never
   edit shared homepage components unless they are actually rendered by the
   target page.

Out of scope (leave untouched):

- Source comments: `// PLACEHOLDER …` and `/* PLACEHOLDER … */`.
- Non-rendered strings, test fixtures, CMS schemas, generated files, and
  `aria-label`/`alt`/`title` attributes unless the attribute text itself
  begins with the marker.
- Lowercase `placeholder` attributes or flags.

## Workflow

### 1. Find candidates

Search the scoped files for the marker in JSX text. Record, for each
candidate, the file, the enclosing element, and the data it describes.

### 2. Classify the data source

For each candidate, inspect the component and its imports to decide what
content is being shown alongside it.

- **CMS-backed**: the component receives a `data` prop typed from
  `@/lib/cms/generated`, or the page fetches with a `get<Page>Page()`
  fetcher. The placeholder describes a CMS array that is (or should be)
  mapped in the same section, e.g. `data.people.map(...)`,
  `data.items.map(...)`. Identify the exact array expression (including an
  aliased variable such as `members` assigned from `data.people`).
- **Constant-backed**: the section maps a local/module constant or an
  imported data file (`_data/*`, `lib/*`, `const X = [...]`,
  `FALLBACK_*`), with no CMS array driving it.

If the source is genuinely ambiguous, stop and ask instead of guessing.
Do not delete content that may be real.

### 3. Apply the rule

**CMS-backed (rule 2):** the placeholder may render only when the fetched
array is empty — `array.length === 0` (equivalently `< 1`).

- Already gated on the array being empty (e.g.
  `{data.people.length === 0 && ( ... )}`)? Leave it unchanged.
- Ungated, or gated on something other than the fetched array? Wrap the
  placeholder element in its own conditional:

  ```tsx
  {data.people.length === 0 && (
    <p className="...">PLACEHOLDER — …</p>
  )}
  ```

  Use the same array expression the section maps. If the generated type
  marks it optional, use `(data.people?.length ?? 0) === 0`. Do not change
  the surrounding markup.
- Inside a `.map()` over the CMS array? It would render alongside real
  data, so remove the placeholder block (do not restructure the list).
- Keep the placeholder if the component falls back to constant data when
  the CMS array is empty; the gate is still the CMS array length.

**Constant-backed (rule 3):** remove the entire placeholder block — the
text element and any wrapper that exists only to hold it (conditional,
paragraph, note container). Remove nothing else. If removing the block
leaves an empty container, remove that container only if it was created
solely for the placeholder. If the placeholder is one item among other
content, delete only the placeholder element.

Never edit, reword, restyle or reformat the surrounding content. Preserve
indentation and blank-line conventions as much as possible.

### 4. Verify

- Inspect `git diff` for the touched files and confirm every change is
  either a removed placeholder block or a CMS length gate.
- Run lint on the touched files:
  `npx eslint <files>`; if a project lint script is preferred, `npm run lint`.
  Fix only errors introduced by this change; report pre-existing ones.
- Do not run the build unless explicitly asked.

### 5. Report (short)

3-5 lines: page cleaned, files touched, how many placeholders removed vs.
gated on CMS emptiness, and lint result.
