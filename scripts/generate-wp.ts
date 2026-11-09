import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { FIELD_TYPES, type Field } from "./field-types";

const OUT = "wordpress/cms-schema";
const titleCase = (s: string) =>
  s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// Converts one schema field into an SCF field definition
function toAcf(field: Field, parentKey: string): any {
  const key = `field_${parentKey}_${field.name}`;
  const definition = FIELD_TYPES[field.type];

  if (!definition) {
    throw new Error(`Unknown field type "${field.type}" at ${key}`);
  }

  return {
    key,
    name: field.name,
    label: field.label ?? titleCase(field.name),
    ...definition.wp(field, { key, toAcf }),
  };
}

async function loadAll(dir: string) {
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".ts") && f !== "constants.ts");

  return Promise.all(
    files.map(async (f) => {
      const filePath = path.resolve(dir, f);
      return (await import(pathToFileURL(filePath).href)).default;
    })
  );
}

async function main() {
  const jsonDir = path.join(OUT, "acf-json");
  fs.mkdirSync(jsonDir, { recursive: true });

  // wipe old generated files so deleted schemas disappear too
  for (const f of fs.readdirSync(jsonDir)) {
    if (f.endsWith(".json")) fs.rmSync(path.join(jsonDir, f));
  }

  const write = (name: string, data: unknown) =>
    fs.writeFileSync(
      path.join(jsonDir, `${name}.json`),
      JSON.stringify(data, null, 2)
    );

  // Pages: each section becomes a "group" field holding its inputs
  for (const schema of await loadAll("cms/pages")) {
    const slug = schema.page.slug;
    write(`group_page_${slug}`, {
      key: `group_page_${slug}`,
      title: `Page: ${schema.page.label}`,
      fields: Object.entries<any>(schema.sections).map(([name, section]) => ({
        key: `field_${slug}_${name}`,
        name,
        label: section.label,
        type: "group",
        layout: "block",
        sub_fields: section.fields.map((f: Field) =>
          toAcf(f, `${slug}_${name}`)
        ),
      })),
      location: [
        [
          { param: "post_type", operator: "==", value: "page" },
          { param: "page_slug", operator: "==", value: slug },
        ],
      ],
      show_in_rest: 1,
    });
  }

  // Collections: fields attach directly to the post type
  const postTypes: { slug: string; label: string }[] = [];
  for (const schema of await loadAll("cms/collections")) {
    const { slug, label } = schema.postType;
    postTypes.push({ slug, label });
    write(`group_collection_${slug}`, {
      key: `group_collection_${slug}`,
      title: label,
      fields: schema.fields.map((f: Field) => toAcf(f, slug)),
      location: [[{ param: "post_type", operator: "==", value: slug }]],
      show_in_rest: 1,
    });
  }
  fs.writeFileSync(
    path.join(OUT, "post-types.json"),
    JSON.stringify(postTypes, null, 2)
  );

  console.log("WordPress field groups generated.");
}

main();
