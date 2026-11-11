---
name: wire-page-cms
description: Wire an existing App Router page.tsx (path given) to its generated CMS API. Use only when given a page path and asked to wire/connect the CMS or implement the API.
---

# Wire page to generated CMS API

Edit only the target `page.tsx` and the components it renders. Never edit `cms/`, `lib/cms/generated/`, or legacy `lib/*`. Reference example: `app/[locale]/page.tsx`, `app/[locale]/(home)/_components/impact/impact.tsx` and `app\[locale]\impact\development-partnerships\_components\engagement-checklist.tsx`.

## 1. Slug and preconditions

- Slug = last route segment after stripping `app/`, `[locale]/`, route groups (home = `home`). On collision, prefix parent segments (`investments-joint-ventures`).
- Fetcher = `get<PascalSlug>Page()`, types = `<PascalSlug><PascalSection>`.
- Both `cms/pages/<slug>.ts` and `lib/cms/generated/pages/<slug>.ts` must exist. If not, stop and report. Never run generators.
- Stop and ask if: page is `"use client"`, route is dynamic, or a schema key is missing from the generated type (stale).

## 2. Read

Read the schema, the generated page file, the target page, and each component it renders. Read other files (`normalize.ts`, `_shared.ts`, `_report.md`, `lib/*`, `next.config.ts`) only if something is unclear or a legacy import is used. Skip commented-out sections. Match components to schema keys by import and render order, keeping existing keys.

## 3. page.tsx

Make it `async`, call the page fetcher once, and pass `data.<section>` to each component. No try/catch. Keep metadata and commented-out sections unchanged.

## 4. Components

Add `data` prop typed with `import type` (never runtime-import generated modules in client components). Keep original hardcoded values as module-level `FALLBACK_*` constants.

- Strings: `data.x || FALLBACK_X`
- Numbers/booleans: `??`
- Arrays: pick before mapping: `data.x.length ? data.x : FALLBACK_X`
- Styled headings: keep original JSX as fallback. For multi-segment headings, use CMS text in the same structure only if segment count matches; otherwise render plainly and report lost styling.
- Keep stable keys (CMS id if present).

Keep hardcoded unless the schema provides them: eyebrows/ordinals, breadcrumbs, CTAs, footnotes, captions, layout classes, computed values. Report unused schema fields; do not add UI for them.

## 5. Relationships

Use the fetched array (`data.section.items`) as the primary list. Fall back to the legacy list only when empty. Adapt to the legacy shape with a small module-scope function, done in the server page when the component is a client component. If a required field is missing from the CMS type, keep that component on legacy data and report. Alias legacy imports that collide with generated names.

## 6. Media

No hardcoded fallback for images, videos, posters, or files. If the CMS value is missing, render nothing and keep the surrounding layout. Hide captions tied to that media. Fall back only on alt text (`data.image.alt || FALLBACK_ALT`); decorative images stay `aria-hidden`. Use the CSS-background pattern (`style={{ backgroundImage }}`) for remote images. Do not use `next/image` or edit `remotePatterns` without asking.

## 7. Verify

Run `npx eslint` on the page and its components, then `npx tsc --noEmit`. Run `npm run build`. Fix only errors you introduced; report pre-existing ones. Confirm no edits to generated files, no media fallbacks, and no `console.log`.

## 8. Report

Briefly: slug, sections wired, fallbacks added, what stayed hardcoded, adapters, media changes, verification results, gaps.
