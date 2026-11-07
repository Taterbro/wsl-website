import fs from "node:fs";
import path from "node:path";

const { WP_API_URL, WP_USER, WP_APP_PASSWORD } = process.env;
const auth = Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString("base64");

async function wp(endpoint: string, init: RequestInit = {}) {
  const res = await fetch(`${WP_API_URL}${endpoint}`, {
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
  const files = fs.readdirSync("cms/pages").filter((f) => f.endsWith(".ts"));

  for (const file of files) {
    const { page } = (await import(path.resolve("cms/pages", file))).default;

    const existing = await wp(`pages?slug=${page.slug}&status=any`);
    if (existing.length) {
      console.log(`✓ exists: ${page.slug}`);
      continue;
    }

    await wp("pages", {
      method: "POST",
      body: JSON.stringify({
        title: page.title,
        slug: page.slug,
        status: "publish",
      }),
    });
    console.log(`+ created: ${page.slug}`);
  }
}

main();
