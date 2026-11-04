import { locale } from "next/root-params";

import { defaultLocale, isLocale } from "./config";

export async function getLocale() {
  const value = await locale();

  return isLocale(value) ? value : defaultLocale;
}
