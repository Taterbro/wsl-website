export type CmsImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export const toStr = (v: unknown): string => (typeof v === "string" ? v : "");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toArray = (v: unknown): any[] => (Array.isArray(v) ? v : []);

export function toImage(v: unknown): CmsImage | null {
  if (!v || typeof v !== "object") return null;
  const i = v as Record<string, unknown>;
  if (typeof i.url !== "string") return null;
  return {
    url: i.url,
    alt: toStr(i.alt),
    width: Number(i.width) || 0,
    height: Number(i.height) || 0,
  };
}

export const toIds = (v: unknown): number[] =>
  toArray(v).map(Number).filter(Number.isFinite);

// Resolves selected IDs against the full list, keeps editor order, drops missing
export function pickByIds<T extends { id: number }>(
  all: T[],
  ids: number[]
): T[] {
  const byId = new Map(all.map((x) => [x.id, x]));
  return ids.map((id) => byId.get(id)).filter((x): x is T => Boolean(x));
}
