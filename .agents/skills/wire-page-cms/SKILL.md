---
name: wire-page-cms
description: Wire an existing App Router page to its generated CMS API. Use when given a page path such as app/[locale]/projects/project-map/page.tsx and asked to "implement the API", "wire the CMS", "connect this page to CMS", "add CMS data", or "use the generated CMS fetchers". Requires an existing cms/pages/<slug>.ts and lib/cms/generated/pages/<slug>.ts; fetches get<Page>Page() once, passes typed section data into components, and keeps the current hardcoded content as fallbacks. Images/videos are not fallback-rendered; only alt text falls back.
---

# Wire a page to the generated CMS API

Wires one existing App Router page in the Waterlight site to its generated CMS API.
This skill edits only the target `page.tsx` and the components it renders. It never
creates or edits `cms/`, `lib/cms/generated/`, or the legacy `lib/*` data modules.

## References (read first)

- `app/[locale]/page.tsx` and `app/[locale]/(home)/_components/**` - canonical
  wiring and fallback examples.
- The target `app/[locale]/<route>/page.tsx` and every component it imports under
  `_components/`.
- `cms/pages/<slug>.ts` - page schema; must already exist.
- `lib/cms/generated/pages/<slug>.ts` - generated fetchers and types; must already
  exist.
- `lib/cms/generated/index.ts` - public barrel import.
- `lib/cms/generated/_report.md` - generator warnings.
- `lib/cms/page.ts` - `getPageAcf`; throws when ACF is missing.
- `lib/cms/client.ts` and `lib/cms/normalize.ts` - fetch and normalizer semantics.
- `lib/cms/generated/_shared.ts` - shared section normalizers.
- `lib/projects.ts`, `lib/businesses.ts`, `lib/impact.ts` - only when the target
  page imports them.
- `next.config.ts` - `cacheLife` profile and image host configuration.
- `AGENTS.md` - this repo uses a Next.js version with breaking changes; consult
  `node_modules/next/dist/docs/` before relying on memory.

Do not modify the reference files except the target page and its components.

## Inputs

| Input            | Required | Meaning                                                                                     |
| ---------------- | -------- | ------------------------------------------------------------------------------------------- |
| **page path**    | yes      | Path to one existing `page.tsx`, e.g. `app/[locale]/projects/project-map/page.tsx`.         |
| **overrides**    | no       | Component file names plus instructions about content that must stay hardcoded.               |

If the path does not resolve to exactly one page, ask. If the route contains a
dynamic segment (`[slug]`, `[...slug]`), ask for the concrete page instead of
inventing one.

## 1. Resolve the page identity

Remove `app/`, `[locale]/`, route groups (`(home)/`, `(marketing)/`), and the
trailing `page.tsx` to get the route.

- **Home:** `app/[locale]/page.tsx` -> slug `home`.
- **Everything else:** the base slug is the last route segment
  (`projects/project-map` -> `project-map`).
- **Collisions:** if another route already resolves to the same slug, prefix the
  nearest distinguishing parent segments:
  `investments/joint-ventures` -> `investments-joint-ventures`,
  `partner-with-us/joint-ventures` -> `partner-with-us-joint-ventures`.
  Prefix only when needed. The slug must be unique because `cmsGet("pages", { slug })`
  queries by slug alone.
- **Generated names:** `project-map` -> `getProjectMapPage`, `ProjectMapPage`.
  A section key adds its PascalCase form:
  `map_header` -> `ProjectMapMapHeader`,
  `vision_hero` -> `VisionMissionVisionHero`.

Require both of these files to already exist:

- `cms/pages/<slug>.ts`
- `lib/cms/generated/pages/<slug>.ts`

If either is missing, stop and report it. Do not create a schema, do not run
`generate-wp.ts`, and do not run `generate-next.ts`. Point the user to the
`create-cms-schema` skill and the generator instead.

Also confirm the target `page.tsx` is a server component. If it starts with
`"use client"`, stop and ask before converting it into a server shell.

If the schema contains a section key that is missing from the generated page type,
the generated API is stale. Stop and report it; do not edit the generated file.

## 2. Read the page and map the sections

- Follow the page's imports in render order and read every rendered component in
  full.
- Skip commented-out sections (`{/* <ProjectMap /> */}`) and do not fetch data for
  them.
- Ignore wrappers such as `Reveal`; read the section component itself.
- Ignore `page.tsx` `metadata`; SEO title and description are not CMS content.
- One top-level component maps to one schema section, even if it renders multiple
  `<section>` elements.
- Preserve existing schema keys. Match by component import and render order, not
  only by an assumed snake_case name.
- A shared component can have a generated section fetcher of its own. If the page
  fetcher already includes that section (for example `vision_conversion` inside
  `getVisionMissionPage()`), use the page slice.
- Record relationships, legacy imports, and media before editing.

Build a short mapping table:

| Component | Schema key | Generated type | Wired fields | Left hardcoded |
| --------- | ---------- | -------------- | ------------ | -------------- |

If a rendered section has no schema entry, leave its content hardcoded and report
the gap. Do not invent fields.

## 3. Wire `page.tsx`

Make the default export `async` and call the page fetcher once:

```tsx
import { getVisionMissionPage } from "@/lib/cms/generated";

import VisionHero from "./_components/vision-hero";
import VisionStatement from "./_components/vision-statement";
import VisionMission from "./_components/vision-mission";
import VisionDelivery from "./_components/vision-delivery";
import VisionCommitments from "./_components/vision-commitments";
import VisionConversion from "./_components/vision-conversion";

export default async function VisionMissionPage() {
  const data = await getVisionMissionPage();

  return (
    <main>
      <VisionHero data={data.vision_hero} />
      <VisionStatement data={data.vision_statement} />
      <VisionMission data={data.vision_mission} />
      <VisionDelivery data={data.vision_delivery} />
      <VisionCommitments data={data.vision_commitments} />
      <VisionConversion data={data.vision_conversion} />
    </main>
  );
}
```

Rules:

- Use one page-level fetch. Do not call each section fetcher from `page.tsx` when
  the page fetcher already returns the section.
- Pass `data.<section>` slices; keep the mapping visible.
- Keep `metadata` and unrelated static exports unchanged.
- Keep commented-out sections commented out.
- Do not add a page-level `try`/`catch`. Field-level fallbacks handle empty CMS
  content; a missing ACF group still throws by design.
- When a relationship exists, use it as the primary list. Keep the existing
  legacy fetch/list as the fallback only when the relationship is empty. If there
  is no relationship, keep the existing fetch unchanged.
- If the page was synchronous, make it async. If it was a client component, stop
  and ask first.

## 4. Wire the section components

Add a typed `data` prop. Import generated types with `import type` in client
components; generated modules import `server-only` and must never be imported at
runtime from a client component.

```tsx
import type { VisionMissionVisionHero } from "@/lib/cms/generated";

const FALLBACK_HEADING = "Vision. Mission. Delivery.";
const FALLBACK_DESCRIPTION =
  "Where Waterlight Group is going, what it does to get there, and the discipline that keeps both honest.";

export default function VisionHero({
  data,
}: {
  data: VisionMissionVisionHero;
}) {
  // ...
}
```

### Fallback rules

Keep the original hardcoded values as module-level `FALLBACK_*` constants. Do not
move them into a new file and do not duplicate them inline in JSX.

- Strings:
  ```tsx
  {data.heading || FALLBACK_HEADING}
  ```
- Numbers and booleans use `??` so a valid `0` or `false` is not replaced:
  ```tsx
  const count = data.count ?? FALLBACK_COUNT;
  ```
- Arrays and repeaters:
  ```tsx
  const verbs = data.verbs.length ? data.verbs : FALLBACK_VERBS;
  ```
  Do not use `data.verbs || FALLBACK_VERBS`; an empty array is truthy.
- Mapped lists: choose the fallback before mapping.
  ```tsx
  const sectors = data.businesses.length
    ? data.businesses.map(toSector)
    : FALLBACK_SECTORS;
  ```
- Styled headings with fixed markup: keep the original JSX as the fallback so
  `<br />`, accent spans, and line breaks survive.
  ```tsx
  {data.heading ? (
    data.heading
  ) : (
    <>
      African roots.
      <br />
      <span className="text-primary">Global vision.</span>
    </>
  )}
  ```
- Structured headings (for example `Vision.` / `Mission.` / accented
  `Delivery.`): render the CMS heading through the same segment structure only
  when it splits into the same number of segments. Otherwise render it plainly
  and report the lost accent styling. Do not guess which CMS words should be
  accented.
- `CONSTANTS` sections emit `label` and `description`. Wire each only where the
  component actually renders it; `label` is not automatically an eyebrow.
- If a schema field exists but the component never renders it, report it. Do not
  invent new UI just to consume a field.

Preserve stable React keys. Use CMS IDs when present; otherwise use an existing
index-based key or a derived string, matching the page's current pattern.

### Keep hardcoded

Leave these fixed unless the schema explicitly provides them:

- Eyebrows and section ordinals (`02 - Our mission`).
- Breadcrumbs and navigation.
- CTA labels and hrefs.
- Footnotes, legal notes, disclaimers, and placeholder warnings.
- Image captions and decorative labels.
- Layout, animation, and spacing classes.
- Computed stats and values derived from data.
- Any content that has no matching schema field.

Report everything left hardcoded so the user knows what is still not editable.

## 5. Wire relationships and legacy adapters

Use the relationship array returned by the page fetch:

```tsx
const projects = data.map_index.projects;
```

The generated normalizer already resolves selected IDs, preserves editor order,
and drops missing items. Do not re-query the collection inside the component.

When the component expects a legacy shape, add a small module-scope adapter:

```tsx
import type { Project } from "@/lib/cms/generated";

type ProjectCard = {
  id: string | number;
  title: string;
  description: string;
};

function toProjectCard(project: Project): ProjectCard {
  return {
    id: project.id,
    title: project.title || project.postTitle,
    description: project.description,
  };
}
```

Map every field the existing target type requires. If the CMS type cannot supply a
required field, keep that component on the legacy data and report the gap.

Rules:

- Keep the legacy modules. They remain the fallback source and may be used by
  other pages.
- If the fallback list lives in a server-only module (`lib/projects.ts`), select
  it in the server page or another server module. Never import it at runtime from
  a client component.
- Prefer adapting at the server page boundary when the target component is a
  client component. Pass plain, already-adapted props.
- If an adapter needs a field the CMS type does not expose, keep that component on
  the legacy data and report the missing field. Do not invent schema fields.
- If a legacy function name collides with the generated fetcher name (for example
  `getProjects`), alias the legacy import instead of shadowing it.
- Keep `lib/businesses.ts` and `lib/impact.ts` imports only where the page
  currently uses them; check whether each module is server-only before importing
  it into client code.

Example at the page boundary:

```tsx
const data = await getProjectMapPage();

const projects = data.map_index.projects.length
  ? data.map_index.projects.map(toLegacyProject)
  : getProjects();

return (
  <main>
    <MapHeader data={data.map_header} />
    {/* <ProjectMap projects={projects} /> */}
    <MapIndex data={data.map_index} projects={projects} />
    <MapCta data={data.map_cta} />
  </main>
);
```

Here `getProjects()` is the existing legacy server-only fallback, while the CMS
list comes from `data.map_index.projects`. The commented-out map stays unwired.

## 6. Media rules

Images, videos, posters, and files have **no value fallback**. Never substitute
the original hardcoded asset path when CMS media is missing.

- If the CMS value is absent, render nothing for that media element. Keep the
  surrounding gradient, colour, aspect ratio, and layout.
- If a fixed caption or placeholder warning describes the media, hide it with the
  media. Keep unrelated hardcoded captions.
- If the CMS value exists, render it and fall back only on alt text:
  `data.image.alt || data.image_alt || FALLBACK_ALT`.
- If the original image was decorative (`alt=""`), keep it decorative with
  `aria-hidden="true"` rather than adding a fake label.

For a background image, prefer the home page's CSS-background pattern because
`next.config.ts` currently has no `images.remotePatterns`:

```tsx
{data.background ? (
  <div
    role="img"
    aria-label={
      data.background.alt ||
      data.background_alt ||
      FALLBACK_BACKGROUND_ALT
    }
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${data.background.url})` }}
  />
) : null}
```

If the original media was decorative, omit `role`/`aria-label` and use
`aria-hidden="true"` on the container instead.

For video, render only when the video exists and never add a fallback poster:

```tsx
{data.video ? (
  <video
    src={data.video}
    poster={data.poster?.url}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  />
) : null}
```

For files, the generated field normalizes to a URL string; render the link or
media only when that string is non-empty.

If an existing component uses `next/image` and the CMS URL is remote, either
switch the media container to the CSS-background pattern or ask the user before
adding `images.remotePatterns` to `next.config.ts`. Do not silently add remote
hosts.

## 7. Verify

Run:

```bash
npx eslint "app/[locale]/<route>/page.tsx" "app/[locale]/<route>/_components"
npx tsc --noEmit
npm run lint
npm run build
```

Fix every error introduced by this work. Do not fix unrelated pre-existing errors
(for example `structure-sectors.tsx` or `scripts/generate-wp.ts`); report them
instead.

Confirm:

- `lib/cms/generated/**` has no manual edits.
- Every wired component receives its generated type and uses `data.*` fields that
  exist in that type.
- No generated module is imported at runtime by a client component.
- Schema-backed UI reads from `data.*`; remaining hardcoded literals are only
  fallback constants or intentionally fixed content listed in the report.
- No media fallback uses a hardcoded image, video, or poster path.
- No `console.log` debug statements remain.
- Old commented-out sections remain commented out.

`npm run build` may need CMS network access. If it fails only because the CMS is
unreachable, report that instead of changing the API code.

## 8. Report

Report concisely:

- Page, route, and slug.
- Schema and generated files used.
- Sections wired.
- Fallbacks added, per section.
- Content intentionally left hardcoded.
- Relationship adapters added, and any legacy fallback sources.
- Media handling, including any structurally changed media containers.
- Verification results, including pre-existing failures.
- Any schema/generated gaps or unresolved styling changes.

## Worked examples

### `about/vision-mission`

`page.tsx` becomes async and passes one slice per component:

```tsx
const data = await getVisionMissionPage();

<VisionHero data={data.vision_hero} />
<VisionStatement data={data.vision_statement} />
```

`vision-hero.tsx` keeps its structured headline as the fallback, hides the
background when `data.background` is null, and falls back only on alt text. The
breadcrumb, CTAs, meta labels, and descriptor styling stay hardcoded.

`vision-statement.tsx` wires `heading` and `description`, renders the image only
when `data.image` exists, and hides the placeholder caption with the image.

`vision-mission.tsx` prefers `data.verbs` when non-empty and otherwise keeps the
four-verb `FALLBACK_VERBS` array. Its "Critical sectors" links and ordinals stay
hardcoded unless the schema has a relationship for them.

### `projects/project-map`

`getProjectMapPage()` returns `map_header`, `map_index`, and `map_cta`. The
`map_index.projects` relationship is adapted to the legacy project shape at the
server page boundary, with `getProjects()` from `lib/projects.ts` as the fallback
when the relationship is empty. The commented-out `<ProjectMap />` is not wired.
`MapIndex` remains a server component; if it were a client component, the adapted
projects would still be passed from the server page, never imported from
`lib/projects.ts`.

### `home`

`app/[locale]/page.tsx` is the canonical single-fetch example.
`hero.tsx` shows string fallbacks and conditional video rendering.
`businesses.tsx` shows an array fallback plus relationship adaptation.
`project-grid.tsx` shows a client component receiving an adapted list and using a
gradient-only fallback for missing media.
`group-thesis.tsx` shows a styled heading fallback with `<br />` and an accent
span.

## Edge cases

- **Missing schema or generated file:** stop and report both paths; do not create
  or regenerate anything.
- **Stale generated API:** schema key absent from the generated page type; stop
  and report.
- **Section key mismatch:** match by import and render order, preserve the existing
  key, and report the discrepancy.
- **Shared section:** use the page slice when the page fetch includes it.
- **Empty relationship:** use the hardcoded fallback list.
- **Empty string vs missing field:** `||` handles both; use `??` for numbers and
  booleans.
- **Structured headline:** preserve accent styling only when the CMS text splits
  into the same number of segments; otherwise report the simplification.
- **Client page:** stop and ask before converting it to a server shell.
- **Dynamic route:** ask for the concrete page.
- **Server-only legacy module:** adapt or select fallback data in the server page,
  never in a client component.
- **Remote image host:** use CSS backgrounds or ask before changing
  `images.remotePatterns`.
- **Media caption:** hide caption/placeholder text when the media is absent.
- **Schema field unused by the component:** report it; do not add UI.
- **Rendered content not in the schema:** leave it hardcoded and report it.
- **Commented-out component:** do not wire it and do not fetch data for it.
- **Multiple DOM sections in one component:** still use one schema slice.
- **Pre-existing lint errors:** leave them alone and report them.
