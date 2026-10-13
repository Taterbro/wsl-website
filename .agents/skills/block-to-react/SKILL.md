---
name: block-to-react
description: Convert a block of an HTML mockup into a Next.js TypeScript component styled with Tailwind. Use when the user says "convert mockup block to React component", "turn this HTML section into a component", "extract block by ID from HTML", or gives a block ID or raw HTML plus a target file path. Handles very large HTML mockups without reading the whole file.
---

# HTML block to React component

Turns one block of a large HTML mockup into a Next.js component in TypeScript,
styled with Tailwind, following the project's existing conventions.

## Inputs

1. **Block reference**: an element ID (or unique class / data attribute), OR raw HTML.
   Detect which one it is.
2. **Output file path** (required): where the component goes. If missing, ask before
   doing anything else.
3. **Mockup path** (optional): defaults to the mockup file named in the project docs
   or the one the user mentioned earlier. Ask if unknown.

Never read the whole mockup file. It is very large.

## Workflow

### 1. Extract the block

Run the helper script:

```
node scripts/extract_block.js <mockup-path> <block-id>
```

It prints the block's full HTML, the CSS rules that apply to it, and any JS that
references it. Work from that output only.

- Raw HTML given: use it as the source of truth, then search the mockup for the same
  block to find its related CSS and JS.
- ID matches nothing: say so and suggest close matches.
- ID matches several elements: list them and ask which one. Never guess.
- Check the script output for CSS variables, keyframes, media queries, and
  inline `<style>` rules the block depends on.

### 2. Learn the project conventions (before writing code)

Read 2-3 existing components near the target path, plus `package.json`,
`tsconfig.json`, the ESLint/Prettier config, and any README / CLAUDE.md / AGENTS.md.
Match what you find:

- App Router vs Pages Router, import aliases (e.g. `@/`), file and folder naming.
- Named vs default exports, props typing style (`interface` vs `type`), how
  components are structured.
- Tailwind version and where the theme lives("app/globals.css"): colors, spacing, fonts, breakpoints, and **transition tokens**.
- Class-merging helper (`cn`) and any existing UI components (Button, Container, Section, Heading) to reuse instead of rebuilding.

If something is unclear, ask rather than guess.

### 3. Convert to JSX with TypeScript

- `class` to `className`, `for` to `htmlFor`, self-close void tags, camelCase
  attributes and events, style strings to objects, SVG attributes to camelCase,
  HTML comments to JSX comments.
- Use `next/image` for images and `next/link` for internal links. Fix asset paths to
  match `public/` or imports.
- Type everything. Define a props interface for anything configurable. No `any`; use
  proper React and DOM types (`React.ReactNode`, `React.ComponentProps<'button'>`).
- Repeated items (cards, nav links, list rows) become a typed data array plus `.map()`
  with stable keys. Clearly configurable text becomes props with sensible defaults.
- Keep accessibility intact: alt text, aria attributes, semantic tags, labels.
- Preserve the visual result exactly: structure, responsive behavior, hover and focus
  states.

### 4. Convert the CSS to Tailwind

- Translate mockup CSS to Tailwind utility classes. Do not copy raw CSS or create
  CSS files for things Tailwind can express.
- Prefer the project's theme values (colors, spacing, font sizes, breakpoints) over
  arbitrary values. Map mockup values to the closest theme token. Use arbitrary
  values (`w-[437px]`) only when no token is close, and mention it in the report.
- Mockup media queries become responsive prefixes (`sm:`, `md:`, `lg:`), mobile-first.
- Pseudo-classes and elements become variants (`hover:`, `focus-visible:`, `before:`,
  `group-hover:`, `peer-checked:`, `aria-expanded:`, `data-[state=open]:`).
- Mockup keyframes: use an existing project animation if one matches, otherwise add
  the keyframe to the Tailwind theme (config or `@theme`) and reference it as a utility.
- Use the project's class-merging helper when classes are conditional.
- Only add global CSS when Tailwind truly cannot express it. Mention any such addition.

### 5. Server components first

- Default to a server component. Add `"use client"` only when the component needs
  state, effects, refs, browser APIs, or event handlers that cannot be avoided.
- Check whether CSS or native HTML can replace the mockup's JS before writing any:
  `hover:`, `focus-within:`, `group` / `peer` variants, `has-[...]:`, `target:`,
  `<details>` / `<summary>`, `<dialog>` / popover, scroll-snap, CSS-only toggles.
- When interactivity is needed, extract the smallest interactive piece (a toggle
  button, a carousel controller, a form) into its own `"use client"` component.
  Keep the surrounding layout, text, and images server-rendered. Pass server content
  into client components through `children` or props.
- Never put `"use client"` on a parent just because a child needs it. Put it on the
  leaf.
- Convert remaining JS to idiomatic React (`useState`, `useEffect`, `useRef`,
  controlled inputs). Remove `querySelector` / `getElementById` patterns and clean up
  listeners in effects.

### 6. Transitions on every state change

Every element that changes from one style state to another gets a transition: hover,
focus, focus-visible, active, disabled, selected/current, open/closed, expanded/
collapsed, visible/hidden, or any state driven by a class, data attribute, or aria
attribute. Check every state-based rule from the extracted CSS.

- Use the project's transition tokens found in step 2 (custom durations, easings, and
  presets in the Tailwind theme or CSS variables), referenced the same way existing
  components do it. Do not hardcode durations or easing curves when a project value
  exists.
- If the mockup has its own timing, map it to the closest project token. If no match
  exists or the project defines no tokens, flag it in the report and ask. Don't
  invent values silently.
- Put the transition on the resting state so it animates both in and out.
- Transition only the properties that change (`transition-colors`,
  `transition-opacity`, `transition-transform`, `transition-shadow`) rather than
  `transition-all`. Prefer opacity and transform over layout properties when the
  visual result is the same.
- Show/hide using `display: none` or conditional rendering will not animate. Use
  opacity plus transform, `grid-rows-[0fr]` to `grid-rows-[1fr]`, or the project's
  existing pattern, and keep it accessible.
- Respect reduced motion: follow the project's convention, or add
  `motion-reduce:transition-none` to transitioned elements.
- Keep mockup keyframe animations. Transitions complement them, not replace them.

### 7. Write and verify

- Create the file at the exact path given, creating folders as needed. Do not
  overwrite an existing file without confirming.
- Do not modify the mockup or unrelated files.
- Run the project's lint, type-check (`tsc --noEmit` or the project script), and
  format commands. Fix all errors. Do not claim success if anything fails.
- Final checklist:
  - `"use client"` only where necessary, as deep in the tree as possible.
  - Every state-based style change has a transition using project tokens.
  - No raw CSS, no `any`, no unnecessary arbitrary values.

### 8. Report back (short)

In a few lines: files created, which mockup block was used, what was converted and
how, server vs client for each component and why, which transitions were added and
which tokens they use, and anything needing attention (arbitrary values used,
missing assets, missing transition tokens, global CSS added, JS that could not be
cleanly converted).