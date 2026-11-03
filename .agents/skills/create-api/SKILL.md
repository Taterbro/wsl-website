---
name: create-api
description: Create a cached server function that fetches ACF data from the WordPress CMS and returns it, following the pattern in lib/cms/homepage/group-thesis.ts. Use when asked to "create an API", "add a CMS fetch", "create a CMS function", "wire up a WordPress query", or when given a file name, slug, and response shape under lib/cms.
---

# Create a CMS API function

Creates one WordPress fetch module and its companion type file under `lib/cms/`,
mirroring `lib/cms/homepage/group-thesis.ts`.

## Reference (read first)

Before writing anything, read the reference pair:

- `lib/cms/homepage/group-thesis.ts` — the function shape.
- `lib/cms/homepage/homepage.types.ts` — the type shape.
- `lib/cms/client.ts` — the `cmsGet` helper. Do not modify it.

Mirror their structure. Only deviate where an input explicitly requires it.

## Inputs

| Input | Required | Meaning |
| --- | --- | --- |
| **file name** | yes | Base file name without `.ts` (e.g. `group-thesis`). Normalize to kebab-case. |
| **function name** | no | Exported function name. If omitted, use `get` + PascalCase(file name) (`group-thesis` → `getGroupThesis`). |
| **cmsPath** | yes | Folder under `lib/cms/` (e.g. `homepage`). May contain nested segments. Create it if missing. |
| **slug** | yes | WordPress slug for the request (e.g. `home`). |
| **responseType** | yes | Name and shape of the ACF payload returned by the query (e.g. `GroupThesisResponse` = `{ data: GroupThesis[] \| null }`). |
| **extraParams** | no | Extra query params as literals (e.g. `{ lang: "en", per_page: 10 }`). |

If a required input is missing or ambiguous, ask. Never invent CMS field names;
use only the response shape supplied by the user.

## Path resolution

All generated files live in a folder under `lib/cms/`. Never write files directly
into `lib/cms/` unless the user explicitly says to.

Given `cmsPath` and `fileName`:

- **Folder:** `lib/cms/<cmsPath>/` — create recursively if absent. If the folder
  already exists, put the file in it.
- **Function file:** `lib/cms/<cmsPath>/<fileName>.ts`.
- **Types file:** `lib/cms/<cmsPath>/<lastFolderSegment>.types.ts` — one types file
  per folder, named after that folder (matches `homepage/homepage.types.ts`).
  Create it if absent; append to it if present.
- **Client import:** relative path from the function file to `lib/cms/client`
  (`../client` for one segment, `../../client` for two, etc.).
- **Types import:** `./<lastFolderSegment>.types`.

Reject an empty `cmsPath`, `.`, `/`, or a path that already starts with
`lib/cms`. Ask for a real subfolder instead.

Normalize names to kebab-case (`Group Thesis` → `group-thesis`). Never overwrite an
existing function file without confirming; when appending to an existing types
file, preserve its contents and avoid duplicate type names.

## Type file

Keep types in the folder's `<lastFolderSegment>.types.ts`.

- Reuse a type if it already exists in that file.
- Add the response type exactly as supplied.
- Add any item type it references (e.g. `GroupThesis` for `data: GroupThesis[]`).
- If the user supplies an inline shape instead of a name, name it
  `<PascalCaseFileName>Response` and its list item `<PascalCaseFileName>Item`.
- Add `export` to every type. No `any`; prefer `null` over optional for ACF fields.

Reference shape:

```ts
export type GroupThesis = {
  value: string | null;
  label: string | null;
};

export type GroupThesisResponse = {
  data: GroupThesis[] | null;
};
```

## Function file

Use this template, filling the `{{…}}` placeholders. Keep the import order,
`"server-only"`, `"use cache"`, caching calls, `cmsGet` call, ACF guard, and final
return exactly as shown.

```ts
import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { cmsGet } from "{{clientImport}}";
import type { {{ResponseType}} } from "{{typesImport}}";

type {{PascalFileName}}Body = {
  acf: Partial<{{ResponseType}}> | null;
};

export async function {{functionName}}(): Promise<{{ReturnType}}> {
  "use cache";
  cacheLife("hours");
  cacheTag("{{cacheTag}}");

  const pages = await cmsGet<{{PascalFileName}}Body[]>("pages", {
    slug: "{{slug}}",
    _fields: "acf",
    {{extraParams}}
  });

  const acf = pages[0]?.acf;

  if (!acf) {
    throw new Error('CMS: missing ACF fields for the "{{slug}}" page.');
  }

  return {{returnExpression}};
}
```

Rules for the placeholders:

- `{{PascalFileName}}`: PascalCase of the file name (`group-thesis` → `GroupThesis`).
- `{{cacheTag}}`: `<slug>_<snake_case(fileName)>` (`home` + `group-thesis` →
  `home_group_thesis`), matching the reference.
- `{{ReturnType}}` / `{{returnExpression}}`:
  - Default when the response has a `data` list (reference case):
    `NonNullable<{{ResponseType}}["data"]>` and `acf.data ?? []`.
  - If the supplied shape exposes the list under another key, use that key in both
    the return type and expression.
  - If the ACF payload is returned directly, use `{{ResponseType}}` and `acf`.
  - Never return `any` or cast the response.
- `{{extraParams}}`: inline each extra param as `key: value,`, merged after
  `slug` and `_fields`. If an extra param repeats `slug` or `_fields`, omit the
  default line and emit the param once (no duplicate object keys).
- Format params as an object with two-space indentation and a trailing comma where
  the project style uses one.

Example of the merged params block:

```ts
  const pages = await cmsGet<GroupThesisBody[]>("pages", {
    slug: "home",
    _fields: "acf",
    lang: "en",
  });
```

## Edge cases

- **Folder exists:** reuse it; do not move or rename it.
- **Types file exists:** append only missing types; keep existing exports intact.
- **Function file exists:** confirm before overwriting.
- **Nested `cmsPath`:** adjust the `client` import depth; the types file is named
  after the deepest folder.
- **Non-ACF payload:** keep the guard and caching; change only the unwrapping and
  return type.
- **Next.js caching APIs:** this project uses `"use cache"`, `cacheLife`, and
  `cacheTag`. If their behavior is unclear, check `node_modules/next/dist/docs/`
  before changing the template.

## Verify

After writing:

1. Run `npx tsc --noEmit` and `npm run lint`.
2. Fix every error. Do not claim success if either fails.
3. Confirm the new file imports resolve, the types file exports the referenced
   types, and the function returns the declared type.

## Report back (short)

List the function file, the types file (created or appended), the exported
function name, the cache tag, and any inputs still needing real values.
