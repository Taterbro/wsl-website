---
name: waterlight-page-builder
description: Build a new page or route for the Waterlight Group website (Next.js App Router, Tailwind v4) so it reads like the existing homepage and uses the project's existing design tokens. Use when the user asks for a page or a section of the site — "build the Projects page", "make the WSWIS page", "create the Impact page", "add an About page", "we need a Global Markets page" — or asks to extend the site with a new top-level route. Produces a server-first page from reusable homepage components, with visual sections and clearly flagged placeholder content.
---

# Waterlight page builder

Builds one new page for the Waterlight site so it feels like the homepage that
already exists, using only tokens and components that are already in the repo.

## Context to load

1. **`references/design-brief.md`** — the condensed brief. This is the ONLY
   design context loaded by default. Read it first, in full. It is short.
2. **`WSL-DESIGN-DOC.md`** — do **not** read in full. It is 450+ lines of dense
   strategy prose and will drown the task. Pull only the section you need
   (see *Targeted doc lookups* below).

Nothing else. Do not pre-load the design doc "to be safe".

## Workflow

### 1. Read the brief

`references/design-brief.md`. It defines brand, feel, visual system, the
reusable section patterns and the sitemap. Use it to decide the page's section
rhythm before writing any code.

### 2. Discover the tokens — never invent colour, font or spacing

Check in this order, and quote what you find:

1. **`app/globals.css`** — the whole design system lives here. There is **no
   `tailwind.config.*`** (Tailwind v4, CSS-first). Read `@theme inline`, the
   `:root` block, the transition/easing tokens and the animation keyframes.
2. **`app/layout.tsx`** — the font setup (next/font variables) and the site
   shell (`<Header>`, `<Footer>` are already mounted here).
3. **`app/_components/`** — the homepage's sections and their feature
   components. Copy the house patterns: section wrappers, container widths,
   buttons, cards, headings, motion helpers.

Known-good values (verify against the files — they may have moved):

| Concern | Value |
| --- | --- |
| Container | `mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]` |
| Section padding | `py-[clamp(72px,10vw,140px)]` |
| Section h2 | `font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]` |
| Card h3 | `font-sans text-[1.15rem] font-extrabold uppercase [font-stretch:114%]` |
| Eyebrow | `text-[0.72rem] font-semibold tracking-[0.1em] text-primary uppercase` |
| Lede | `mt-5 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted-foreground` |
| Buttons | hand-written `<a>`/`<button>`, `rounded-[2px]`, `px-[26px] py-[15px]`, `font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase` |
| Corners | sharp — `rounded-[2px]` in the UI, never `rounded-xl` |
| Field surfaces | `bg-background` / `bg-muted` / `bg-secondary` / `bg-sidebar` (dark) / `bg-sidebar-accent` |
| Hairline card grid | `grid grid-cols-3 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)]` with `bg-*` panels filling the gaps |
| Type | `font-sans` (Geist) for headings and display; body inherits `font-mono` (JetBrains Mono) because `html` is `font-mono` — always set `font-sans` explicitly on headings |
| Transitions | `duration-(--transition-normal) ease-(--ease-standard)`; tokens `--transition-fast/normal/slow/slower`, `--ease-standard/enter/exit` |
| Motion | CSS only. `animate-rise`, `animate-fade-in`, `animate-slide-in`, `animate-drift-1..4`, plus `app/_components/reveal.tsx` for scroll reveal. **There is no framer-motion** — do not add it |

Contrast notes (WCAG 2.2 AA): `text-muted-foreground` on light fields is fine
(~7.4:1). The cyan `--accent` is a fill/rule colour — it fails as small text
on light fields, so use it for rules, marks and dark-field text only. Gold
`--chart-4` fails as text on light; the site already uses `#855c18` for gold
text on light.

### 3. Reuse existing components

- Scan `app/_components/` first. The homepage ships reusable pieces:
  `reveal.tsx` (scroll reveal), `brand-mark.tsx`, `header/`, `footer/`,
  `business-platforms/business-rail.tsx` (horizontal snap rail),
  `investments/value-stages.tsx` (tabbed stages),
  `innovation/wswis-stages.tsx` (tabbed flow),
  `global-markets/world-map.tsx` (SVG dot map),
  `featured-projects/project-grid.tsx` (filterable grid),
  `partner/partner-panel.tsx` (role tabs + form).
- Only create a new component when nothing fits. Put it next to its siblings
  in `app/_components/<feature>/`, using the house split: a **shell** that owns
  `<section id=...>` + `<h2>`, and a **feature** that receives
  `title`/`lede`/`heading` as props.
- `components/ui/button.tsx` exists (shadcn `base-lyra` / Base UI) but is
  unused by the site. Prefer the homepage's hand-written button class strings
  so the new page matches the rest of the site visually.
- `components.json` exists (shadcn, Base UI, phosphor icons) but there is no
  `components/ui` library beyond `button.tsx`. Icons on the homepage are inline
  SVG; `@phosphor-icons/react` is installed but unused — inline SVG is the
  established pattern.

### 4. Build the page

- App Router: `app/<route>/page.tsx`, e.g. `app/projects/page.tsx`.
- **Server components by default.** Add `"use client"` only to the leaf
  component that needs interaction or motion (tabs, filters, hover, carousel).
  Never on `page.tsx` unless it truly needs it.
- Export page-level metadata (the root layout metadata is still the
  create-next-app default):
  ```tsx
  import type { Metadata } from "next";
  export const metadata: Metadata = { title: "Projects — Waterlight Group", description: "..." };
  ```
  `metadata` / `generateMetadata` are Server-Component only.
- Confirm the route matches a `href` already declared in
  `app/_components/header/constants.ts` (`NAV_LINKS` / `UTILITY_LINKS`). If the
  route is new, add it there too so the nav stays consistent.
- Check `node_modules/next/dist/docs/` for anything that looks unfamiliar in
  this Next version (16.4) before relying on an API.

### 5. Fill with flagged placeholders

Placeholder content must be realistic but obviously fake, and easy to find:

```tsx
// PLACEHOLDER: replace with approved pipeline data
const PROJECTS = [
  { name: "Kisumu Solar-Water Campus", sector: "Water & Smart Infrastructure", /* ... */ },
];
```

- Use a `// PLACEHOLDER` comment above every invented data array, metric,
  project name, market, partner or quote.
- Where the data has a shape, add an optional flag so it can be filtered later:
  `placeholder?: true`.
- Images: `next/image` with a placeholder path (`/placeholders/<name>.jpg`)
  plus a descriptive `alt`, or a gradient/SVG block when the visual is
  abstract. `public/` has no brand assets yet — list every missing file in
  the final summary so real assets can be dropped in.
- **Never present invented metrics, project names, locations or footprint as
  fact.** A metric that is not verified gets a placeholder flag, not a
  confident-looking number.
- No confidential investment material on public pages: show an approved-style
  summary plus a "Request access" CTA.

### 6. Verify

- `npm run lint`
- `npx tsc --noEmit`
- Fix every error before reporting.

### 7. Report

3–5 lines, no preamble:

- route created (and any nav entry added)
- components reused vs. added
- placeholders that need real content (copy, data, images)

## Page rules

**Show, don't tell.** Lead with imagery, diagrams, maps, cards, stats and
interactive sections. Copy is short: headline, one-line supporting text,
labels. Only write long-form copy if the user explicitly asks for it.

**Structure.** Every page opens with a strong visual hero (large type +
image/video slot), then alternates visual sections — light field, dark field,
light field. No walls of text.

**Responsive.** Mobile-first. Use the clamp-based scale and the
`max-[1080px]:grid-cols-1` / `max-[760px]:grid-cols-1` breakpoints the
homepage already uses.

**Accessibility (WCAG 2.2 AA).** Contrast per the notes above, visible focus
(`outline-ring/50` is set globally), keyboard-operable interactive elements,
`alt` on every meaningful image, `aria-labelledby` on sections, and correct
`role="tab"` / `aria-selected` / roving `tabIndex` on tab groups (copy the
pattern in `value-stages.tsx`).

**Motion is restrained.** Subtle parallax, fade/slide on scroll, data
count-ups, map transitions. Use `Reveal` for scroll reveal and the `animate-*`
tokens for entrances. Always respect reduced motion with
`motion-reduce:` variants (e.g. `motion-reduce:translate-y-0
motion-reduce:opacity-100 motion-reduce:transition-none`).

**Conversion.** Include a closing "Build With Waterlight" style conversion
section where it makes sense for the page, with role-based routes.

**Originality.** Learn from Brookfield and Hitachi — do not copy their
layouts, copy or assets.

## Targeted doc lookups

When a page needs content structure that the brief does not cover, grep
`WSL-DESIGN-DOC.md` by heading and read **only that section**.

Use the **Grep** tool with `include: "WSL-DESIGN-DOC.md"` and pattern
`^## \d+\.` to list every heading with its line number, then **Read** only the
lines for the section you need (`offset` = heading line, `limit` = section
length). `rg` is not installed on this machine — use the tools, not the shell.

| Need | Section | Lines |
| --- | --- | --- |
| Routes and nav structure | §6 Master Sitemap | 111–130 |
| Homepage section rhythm | §7 Homepage — Exact Experience | 131–151 |
| Project card fields, filters, stages | §9 Investment & Project Experience | 178–195 |
| WSWIS flow, applications, steps | §10 WSWIS Flagship Product Experience | 196–205 |
| Market strategy and map legend | §11 Global Markets Strategy | 206–219 |
| Impact metrics, Waterlight Save framing | §12 Impact, Sustainability & Waterlight Save Initiative | 220–229 |
| Leadership and governance | §13 Leadership & Governance | 230–237 |
| Visual direction, palette, motion, accessibility | §14 Content & Visual Direction, §15 Design System | 238–262 |
| Conversion routes and role copy | §17 Partner-With-Us Conversion Architecture | 278–294 |
| SEO and metadata expectations | §19 SEO & Thought Leadership | 312–319 |
| Developer acceptance criteria | §26 Developer Acceptance Criteria | 407–419 |

Line numbers are a hint, not a contract — re-grep if the file has changed.
Read the smallest range that answers the question. Never the whole file.
