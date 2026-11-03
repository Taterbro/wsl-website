import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { cmsGet } from "../client";
import { GroupThesisResponse, GroupThesis } from "./homepage.types";

type GroupThesisBody = {
  acf: Partial<GroupThesisResponse> | null;
};

export async function getGroupThesis(): Promise<GroupThesis[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("home_group_thesis");

  const pages = await cmsGet<GroupThesisBody[]>("pages", {
    slug: "home",
    _fields: "acf",
  });

  const acf = pages[0]?.acf;

  if (!acf) {
    throw new Error('CMS: missing ACF fields for the "home" page.');
  }

  return acf.data ?? [];
}
