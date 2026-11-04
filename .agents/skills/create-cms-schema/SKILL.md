---
name: create-cms-schema
description: Generate the CMS schema files (cms/pages/<page>.ts and, when justified, cms/collections/<plural>.ts) for an existing Next.js page so Secure Custom Fields / ACF fields can be generated later. Use when asked to "create a CMS schema", "make a schema for this page", "generate CMS fields for <page>", "add fields for the <page> page", or when given a page path under app/[locale]/... plus optional section overrides.
---

# Create CMS schema

Generates the schema descriptor for one App Router page in the Waterlight site.
The schema is later used to create Secure Custom Fields / ACF fields and the
`lib/cms` fetch functions. This skill writes only under `cms/`; it never edits
the page, components, or `lib/`.

## References (read first)

- `cms/pages/home.ts` — page schema shape and section ordering.
- `cms/pages/constants.ts` — the shared `CONSTANTS` helper.
- `cms/collections/projects.ts` and `cms/collections/businesses.ts` — collection
  shape.
- The target `app/[locale]/<route>/page.tsx` and every component it renders under
  `_components/`.
- `lib/businesses.ts`, `lib/projects.ts`, `lib/impact.ts` only when deciding
  whether a list is shared across pages.

Do not modify the reference files except the target page's own schema and the
collections that page needs.

## Inputs

| Input | Required | Meaning |
| --- | --- | --- |
| **page path** | yes | Path to an existing `page.tsx`, e.g. `app/[locale]/businesses/agriculture-food-systems/page.tsx`. |
| **section overrides** | no | Component file name plus instructions about what must stay fixed or become editable, e.g. "capability_journey header stays fixed". |

If the path does not resolve to exactly one page, ask. If the route contains a
dynamic segment (`[slug]`, `[...slug]`), ask for the concrete page instead of
inventing one.

## 1. Resolve the page identity

Remove `app/`, `[locale]/`, route groups (`(home)/`, `(marketing)/`), and the
trailing `page.tsx` to get the route.

- **Home:** `app/[locale]/page.tsx` → slug `home`, file `home.ts`, label `Home`.
- **Everything else:** the base slug is the last route segment
  (`businesses/agriculture-food-systems` → `agriculture-food-systems`).
- **Collisions:** if another route already resolves to the same slug, prefix the
  nearest distinguishing parent segments:
  `investments/joint-ventures` → `investments-joint-ventures`,
  `partner-with-us/joint-ventures` → `partner-with-us-joint-ventures`.
  Prefix only when needed; do not prefix every nested page.
- **Slug equals file name.** The slug must be unique because `cmsGet("pages",
  { slug })` queries by slug alone.
- **Label** is the humanized last segment (`agriculture-food-systems` →
  `Agriculture & Food Systems`, `joint-ventures` → `Joint Ventures`).
- If a schema already exists at that slug, check whether it belongs to the same
  route before updating it. If it belongs to another route, apply the collision
  prefix.

## 2. Read the page

- Follow the page's imports in render order and read each rendered component in
  full.
- Skip commented-out sections (`{/* <Insights /> */}`).
- Ignore wrappers such as `Reveal`; read the section component itself.
- Ignore `page.tsx` `metadata` (SEO title/description is not CMS content).
- Include every rendered section, even if the current page schema has no entry
  for it.

## 3. Build the section list

- One schema section per top-level component in the page's render tree, in render
  order. If a component renders multiple `<section>` elements, still use one
  schema section for that component.
- **Section key** = snake_case of the component file name
  (`capability-journey` → `capability_journey`). If two components share a file
  name in different folders, prefix the parent folder name in snake_case.
- **Preserve existing keys when updating.** If the page schema already has a key
  that clearly maps to the same component import, keep it instead of deriving a
  new one (e.g. keep `business_platforms` for
  `_components/business-platforms/businesses.tsx`). Only derive a key for new
  sections.
- **Section label** = the component's visible heading with markup and line breaks
  stripped. Fall back to the humanized file name.
- Skip components with no editable content and report them.
- Component file name is also the identifier used by user overrides.

### Section overrides

Treat overrides as instructions keyed by the component file name (kebab-case),
for example:

- `capability_journey: heading stays fixed` → omit the heading field.
- `sector_conversion: footnote editable` → add a `note` field for the footnote.
- `proof_strip: cards editable` → keep the stats repeater.

Overrides win over the defaults in step 4. When an override is ambiguous, ask.

## 4. Classify content

**Editable by default:**

- Heading text (`h1`–`h6`).
- Body and paragraph copy.
- Every image, video, or document.
- Stats and their values, suffixes, labels, and sources.
- Card, step, and capability item data (title, copy, label, image, etc.).

**Fixed by default:**

- Eyebrows and section ordinals (`02 — Field to market`).
- Breadcrumbs and navigation.
- CTA labels and hrefs.
- Footnotes, legal notes, and disclaimers.
- Decorative labels and image captions.
- Layout-only values (`row-span-2`, `span`, animation classes).
- Card link hrefs.
- Ordinals generated from the map index (`01`, `02`).

Overrides can move any item between editable and fixed. If a section header is
locked by an override, omit that field and report it.

## 5. Map content to fields

Use only these field types:

- `text`
- `textarea`
- `image`
- `file`
- `repeater`
- `relationship`

Mapping rules:

- Short string → `text`.
- Paragraph or long copy → `textarea`.
- Image / `<Image>` / placeholder path → `image` plus `<name>_alt` `text`.
- Video, audio, or document → `file` (add `<name>_alt` only when alt text
  exists).
- Array of objects → `repeater`.
- Array of strings → `text` holding comma-separated values, keeping the original
  property name (e.g. `applications`). Add a `// comma-separated` comment,
  matching `cms/collections/businesses.ts`.
- Reusable list → `relationship` (see step 6).
- Never nest a `repeater` inside a `repeater`; ACF/SCF does not allow it. Flatten
  nested arrays or use comma-separated `text`.
- Field names mirror the dummy data property names. When no dummy property
  exists, use `heading`, `description`, or `body`.
- Number-like display values stay `text` to preserve formatting (`24/7`, `~19`,
  `1.5bn`, `2x`).
- Every placeholder image path and every `<Image>` / `<video>` source gets a
  field.
- In collections, keep WordPress-native `title`; map a dummy `name` to `title`.

Field naming:

- snake_case.
- Images: `<name>_alt` for the companion alt field.
- Relationships: plural collection name (`businesses`, `projects`).
- Repeaters: plural dummy array name (`stages`, `indicators`, `roles`,
  `stats`); otherwise `items`.
- A single-item relationship uses `max: 1`.

`CONSTANTS`:

- Spread `...CONSTANTS` only when a section's editable header is exactly one
  heading plus one description. It emits `label` and `description`.
- Append stats, cards, and other fields after the spread.
- Do not modify `cms/pages/constants.ts`.

## 6. Repeater, relationship, or collection

Use a **relationship** when:

- An existing collection covers the item (`cms/collections/*`).
- The list comes from a shared domain (`businesses`/sectors, `projects`, people,
  testimonials, news/events, partners).
- The same items render on another page or route.
- The item shape is clearly a reusable entity.

Use a **repeater** when the list is local to this page and is not a reusable
entity.

Create a **collection** automatically when no collection exists and the list is
either a known reusable domain or appears in two or more places.

Collection file:

- Path: `cms/collections/<plural>.ts` (match `projects.ts`, `businesses.ts`).
- Shape:
  ```ts
  export default {
    postType: { slug: "project", label: "Projects" },
    fields: [
      { name: "title", type: "text" },
      { name: "background", type: "image" },
    ],
  };
  ```
- `postType.slug` is singular; `label` is plural Title Case.
- Check existing collections first. Never create a duplicate for the same domain.
- Collections contain item fields only, never section headings or page copy.
- Add missing fields to align with the dummy item shape.
- Do not delete existing collection fields automatically; collections are shared
  across pages. Report overlaps and conflicts instead.
- Keep WordPress-native `title`.

Relationship shape:

```ts
{ name: "projects", type: "relationship", collection: "project", max: 3 }
```

- `collection` is the target collection's `postType.slug`.
- `max` is the number of items rendered, or `1` for a single item.

## 7. Write and update files

Page schema:

- Path: `cms/pages/<slug>.ts`.
- Default export:
  ```ts
  export default {
    page: { slug: "agriculture-food-systems", label: "Agriculture & Food Systems" },
    sections: {
      section_key: {
        label: "Section Label",
        fields: [],
      },
    },
  };
  ```
- Preserve render order in `sections`.
- Use two-space indentation, double quotes, and semicolons, matching the existing
  CMS files.

When the page schema already exists:

- Align its fields to the current dummy data: rename, remove, and add as needed.
- Add missing rendered sections.
- Remove sections only when their component no longer exists.
- Preserve unrelated sections that are intentionally not in the render tree.
- Report every change after execution; do not ask for pre-approval.

Boundaries:

- Never edit app code, components, `lib/`, `lib/cms/client.ts`, or
  `cms/pages/constants.ts`.
- Do not add i18n or per-locale fields.
- Do not touch other pages' schemas.

## 8. Verify

Run:

```bash
npx tsc --noEmit
npm run lint
```

Fix every error before reporting success. Confirm:

- Every generated `type` is in the allowed list.
- Every `relationship.collection` matches an existing or newly created
  `postType.slug`.
- No repeater contains another repeater.
- Every image/video field has the intended alt field.

## 9. Report

Report concisely:

- Page schema file, slug, and label.
- Sections added, updated, or removed.
- Fields added, renamed, or removed per section.
- Collections created or updated, and why.
- Relationships added with collection and `max`.
- Content left fixed and why.
- Any assumption or unresolved ambiguity.

## Worked example (abbreviated)

For `app/[locale]/businesses/agriculture-food-systems/page.tsx`:

```ts
import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "agriculture-food-systems",
    label: "Agriculture & Food Systems",
  },
  sections: {
    sector_hero: {
      label: "Sector Hero",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "facts",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "value", type: "text" },
          ],
        },
        {
          name: "mosaic",
          type: "repeater",
          fields: [
            { name: "image", type: "image" },
            { name: "image_alt", type: "text" },
          ],
        },
      ],
    },
    capability_journey: {
      label: "Capability Journey",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "capabilities",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "copy", type: "textarea" },
            { name: "applications", type: "text" }, // comma-separated
            { name: "image", type: "image" },
            { name: "image_alt", type: "text" },
          ],
        },
      ],
    },
    proof_strip: {
      label: "Proof Strip",
      fields: [
        ...CONSTANTS,
        {
          name: "stats",
          type: "repeater",
          fields: [
            { name: "value", type: "text" },
            { name: "suffix", type: "text" },
            { name: "label", type: "text" },
          ],
        },
      ],
    },
    related_sectors: {
      label: "Related Sectors",
      fields: [
        ...CONSTANTS,
        {
          name: "businesses",
          type: "relationship",
          collection: "business",
          max: 4,
        },
      ],
    },
    related_projects: {
      label: "Related Projects",
      fields: [
        ...CONSTANTS,
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 3,
        },
      ],
    },
    sector_conversion: {
      label: "Sector Conversion",
      fields: [
        ...CONSTANTS,
        {
          name: "roles",
          type: "repeater",
          fields: [
            { name: "role", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
  },
};
```

## Edge cases

- **Index/listing page:** create the page schema for headings and descriptions;
  represent the listings as relationships, not repeaters, even when the page
  currently uses dummy cards.
- **Shared section component:** headings and body still belong to each page's
  schema; item lists rendered from shared data become collections/relationships.
- **Dynamic routes:** ask for the concrete page; do not invent a route slug.
- **Unrepresentable shape:** use the closest allowed type and report it, or ask
  when it would change behavior.
- **Override locks a header:** omit the field and note it as fixed.
- **Override unlocks a CTA/footnote:** add fields matching the dummy property
  names (e.g. `cta_label`, `cta_href`, `note`).
- **Tightly coupled caption:** if a fixed label or caption cannot be separated
  from an editable list item (e.g. an image caption inside an editable card),
  include it as a `text` field and report the exception. Otherwise keep it fixed
  and keep the list length fixed in the component.
