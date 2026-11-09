import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const { WORDPRESS_API_URL, WP_USER, WP_APP_PASSWORD } = process.env;
const auth = Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString("base64");

async function wp(endpoint: string, init: RequestInit = {}) {
  const res = await fetch(`${WORDPRESS_API_URL}${endpoint}`, {
    ...init,
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

async function main() {
  const files = fs
    .readdirSync("cms/pages")
    .filter((f) => f.endsWith(".ts") && f !== "constants.ts");

  for (const file of files) {
    const filePath = path.resolve("cms/pages", file);
    const { page } = (await import(pathToFileURL(filePath).href)).default;

    const existing = await wp(`pages?slug=${page.slug}&status=any`);
    if (existing.length) {
      console.log(`✓ exists: ${page.slug}`);
      continue;
    }

    await wp("pages", {
      method: "POST",
      body: JSON.stringify({
        title: page.label,
        slug: page.slug,
        status: "publish",
      }),
    });
    console.log(`+ created: ${page.slug}`);
  }
}

main();
