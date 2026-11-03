import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { cmsGet } from "./client";
import type { Home } from "./hero.types";

type HomePage = {
  acf: Partial<Home> | null;
};

export async function getHomeHero(): Promise<Home> {
  "use cache";
  cacheLife("hours");
  cacheTag("home_hero");

  const pages = await cmsGet<HomePage[]>("pages", {
    slug: "home",
    _fields: "acf",
    acf_format: "standard",
  });

  const acf = pages[0]?.acf;

  if (!acf) {
    throw new Error('CMS: missing ACF fields for the "home" page.');
  }

  return {
    hero_title: acf.hero_title ?? "",
    hero_description: acf.hero_description ?? "",
    hero_media: acf.hero_media ?? "",
  };
}
