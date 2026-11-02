// lib/cms/client.ts
import { api } from "@/lib/api";

export function cmsGet<T>(
  path: string,
  params?: Record<string, string | number>
) {
  return api.get<T>(path, {
    raw: true,
    params,
    cache: "force-cache",
  });
}
