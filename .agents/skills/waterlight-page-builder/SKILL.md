---
name: waterlight-page-builder
description: Build a new page for the Waterlight Group Next.js site (e.g. "build the Projects page", "make the WSWIS page", "create the Leadership page", "build the Our Businesses page or a sector page") so it feels like the existing homepage and reuses the project's design tokens and shared components. Use when asked to create or scaffold any route under app/<route>/page.tsx, including section indexes, detail pages, galleries, product pages, people pages, conversion pages, and legal pages.
---

# Waterlight page builder

Builds one page of the Waterlight Group website in the App Router, matching the
existing homepage's visual language without reusing its composition.

## References

- `references/design-brief.md`: loaded for every page. Default design context.
- `references/businesses.md`: loaded ONLY for `/businesses` and `/businesses/<sector>`. Never load it for any other route.
- `references/investments.md`: loaded ONLY for `/investments`,
  `/investments/<page>`, and the corridor module on `/global-markets/gcc`.

## Inputs

- **Page / route**: which page to build (e.g. "Projects", "WSWIS"). If the route
  is ambiguous, resolve it from the sitemap in `references/design-brief.md` and
  state the route you chose.
- If the request names a page that already exists (a `page.tsx` is present),
  confirm before overwriting.

## Workflow

### 1. Read the design brief

Read `references/design-brief.md`. This is the ONLY design context loaded by
default. Do not load `WSL-DESIGN-DOC.md` in full.
**Businesses routes:** if the route is `/businesses` or
`/businesses/<sector>`, also read `references/businesses.md`. Its rules
override the general rules in steps 3, 6 and 7 wherever they conflict. For
these routes, do NOT grep the design doc for sector definitions
(`## 4. Priority Business Platforms`); the sector table in `businesses.md` is
canonical for names, slugs and capabilities.
**Investments routes:** if the route is under `/investments`, also read `references/investments.md`. Its rules override steps 6 and 7 where they conflict. Do NOT grep the design doc for the lifecycle or project fields; `investments.md` is canonical.

If a page needs page-specific content structure (sitemap, project card fields,
WSWIS flow, sector definitions), grep the doc by heading and read ONLY that
section. Headings are `#`/`##`/`###` (e.g. `## 6. Master Sitemap`,
`## 10. WSWIS Flagship Product Experience`, `## 4. Priority Business Platforms`).
Never read the whole file.

### 2. Read the homepage for parts, not layout

Read the homepage components ONLY to learn the tokens, shared components and
spacing scale:

- `app/globals.css` — design tokens: color vars (`--primary`, `--accent`,
  `--sidebar`, `--chart-*`, `--muted`, `--card`, `--border`), radii, durations
  (`--transition-fast/normal/slow/slower`), easings (`--ease-standard`,
  `--ease-enter`), and animation utilities (`animate-rise`, `animate-fade-in`,
  `animate-drift-*`, `animate-slide-in`).
- `app/(home)/_components/**` — reusable parts: `reveal.tsx` (scroll fade/slide
  helper), `hero.tsx` / `featured-projects/project-grid.tsx` (card + filter
  patterns), `partner/partner.tsx`, `innovation/wswis-stages.tsx`,
  `investments/value-stages.tsx`, `global-markets/world-map.tsx`,
  `footer/footer.tsx`, `header/header.tsx`, `header/constants.ts` (nav + routes).
- `components/ui/button.tsx` + `lib/utils.ts` (`cn`).

Shared conventions to match:

- Wrapper: `mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]`.
- Button base: uppercase, `rounded-[2px]`, `font-sans text-[0.8rem]
font-semibold tracking-[0.06em]`, transitions via
  `duration-(--transition-normal) ease-(--ease-standard)`.
- Headlines: `font-sans font-extrabold uppercase`, `leading-[0.94]`,
  `tracking-[-0.01em]`, `[font-stretch:11x%]`, clamp font sizes.
- Section rhythm: `py-[clamp(72px,10vw,140px)]`, alternating light
  (`bg-background`) and dark (`bg-sidebar text-muted`) fields.

Do NOT copy the homepage's section order, layout structure or hero composition.
The homepage is a source of parts, not a template.

### 3. Reuse before creating

Prefer existing components. Only create new ones when nothing fits, and place
them in the page's local `_components/` folder next to `page.tsx`, in the same
style as the homepage parts (default export, typed data arrays, `cn` for conditional classes).
For Investments routes, read project data from `lib/projects.ts` and sector values from `lib/businesses.ts`. If `lib/projects.ts` doesn't exist, create it first, before building any Investments page.

Investments enquiry form lives in app/investments/\_components/ and is reused by all Request access CTAs and the Partner With Us routes.

### 4. Decide the archetype before writing code

State in 3-4 lines: the page's archetype (from the brief's list), its single
primary goal, and the section order chosen and why. Then build.

### 5. Build in the App Router

- `app/<route>/page.tsx`, server component by default.
- Add `"use client"` only on the smallest leaf that needs state, effects, refs,
  browser APIs or motion (follow `reveal.tsx` for the scroll-reveal pattern).
- Named metadata export (`title`, `description`), matching existing pages
  (e.g. `app/about/vision-mission/page.tsx`).
- Route the page under the correct parent and wire nav/breadcrumbs to the
  sitemap routes already in `header/constants.ts`.

### 6. Content and placeholders

- Show, don't tell. Lead with imagery, diagrams, maps, cards, stats and
  interactive sections. Copy is short: headline, one-line support, labels.
  Long-form copy only if explicitly requested.
- Every page opens with a strong page-specific visual hero (large type + image/video slot), smaller than the homepage’s full-screen cinematic hero. **Exception: Businesses routes, see `businesses.md`**
- Placeholders: realistic but obviously fake data. Images via `next/image` with
  a placeholder path under `public/placeholders/` (add a gradient block
  fallback if no asset) and a descriptive `alt`. Mark placeholder data with a
  `// PLACEHOLDER` comment or a `placeholder` flag. Never present invented
  metrics, project names or footprint as fact.
- Mobile-first, WCAG 2.2 AA: contrast, keyboard nav, alt text, and
  `motion-reduce:` on every animated element.
- Motion is restrained: subtle parallax, fade/slide on scroll (`Reveal`),
  count-ups, map transitions. **Exception: Businesses routes may use richer motion per `businesses.md`**
- Close with a "Build With Waterlight" conversion section where it fits
  (role-based routes pattern, see `vision-conversion.tsx`).

### 7. Variation rules

- Do not use the homepage's full-screen cinematic hero on inner pages.Businesses routes may use a tall immersive header per `businesses.md`, but it must not replicate the homepage hero’s composition or image treatment
- Choose the layout from the page's purpose; don't default to
  hero → cards → dark section → CTA.
- A page must not repeat a layout pattern more than once. Mix full-bleed,
  split, grid, strip and editorial layouts.
- Distinct from Brookfield / Hitachi: learn from them, never copy layout, copy
  or assets.

### 8. Verify

Run lint and type-check (`npm run lint`; `npx tsc --noEmit` if no script),
fix all errors, and confirm the route renders. Do not claim success if anything
fails.
For Businesses pages, confirm every capability from the sector table appears in the rendered page

### 9. Report back (short)

3-5 lines: the route created, components reused and added, and which
placeholders still need real content.
