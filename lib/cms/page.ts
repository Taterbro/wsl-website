import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { cmsGet } from "./client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getPageAcf(slug: string): Promise<Record<string, any>> {
  "use cache";
  cacheLife("hours");
  cacheTag(`page_${slug}`);

  const pages = await cmsGet<{ acf: Record<string, unknown> | null }[]>(
    "pages",
    {
      slug,
      _fields: "acf",
    }
  );

  if (!pages[0]?.acf) throw new Error(`CMS: missing ACF fields for "${slug}"`);
  return pages[0].acf;
}
