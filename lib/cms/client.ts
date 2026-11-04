// lib/cms/client.ts
import { api } from "@/lib/api";
import { getLocale } from "@/lib/i18n/get-locale";

export async function cmsGet<T>(
  path: string,
  params?: Record<string, string | number>
) {
  const lang = await getLocale();

  return api.get<T>(path, {
    raw: true,
    params: { lang, ...params },
    cache: "force-cache",
  });
}
