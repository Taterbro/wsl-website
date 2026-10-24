// PLACEHOLDER — geographic positions are country/corridor level and illustrative.
// No office, investment or operating presence is implied by a marker.

export type MapStatus = "ops" | "partner" | "project" | "target";

export interface StatusInfo {
  label: string;
  description: string;
}

export const STATUS_INFO: Record<MapStatus, StatusInfo> = {
  ops: {
    label: "Established operations",
    description:
      "A verified operating presence with active business activity. No operations are published in this view yet.",
  },
  partner: {
    label: "Active partnerships",
    description:
      "Formal partnerships or market-development corridors. No partnerships are published in this view yet.",
  },
  project: {
    label: "Projects / opportunities",
    description:
      "Projects under development or open to partners. A marker shows approved project activity, not an office or operating presence.",
  },
  target: {
    label: "Strategic target markets",
    description:
      "Markets Waterlight is monitoring or targeting. No operating presence, investment or commitment is implied.",
  },
};

export const LEGEND_ORDER: MapStatus[] = ["ops", "partner", "project", "target"];

/** Marker positions in the 640 × 320 map viewBox, scaled ×10 by the map. */
export const COUNTRY_COORDINATES: Record<string, { x: number; y: number }> = {
  Kenya: { x: 38, y: 16 },
  Ghana: { x: 32, y: 14.8 },
  Rwanda: { x: 37, y: 16.6 },
};

// PLACEHOLDER: strategic target markets to be confirmed by the client.
export const TARGET_MARKETS: {
  id: string;
  name: string;
  note: string;
  x: number;
  y: number;
}[] = [
  {
    id: "gcc",
    name: "GCC",
    note: "Strategic target market — no operating presence implied.",
    x: 42.6,
    y: 11.4,
  },
  {
    id: "europe",
    name: "Europe",
    note: "Strategic target market — no operating presence implied.",
    x: 32.4,
    y: 6.2,
  },
  {
    id: "north-america",
    name: "North America",
    note: "Strategic target market — no operating presence implied.",
    x: 14,
    y: 9.6,
  },
  {
    id: "asia-pacific",
    name: "Asia-Pacific",
    note: "Strategic target market — no operating presence implied.",
    x: 51.6,
    y: 15.6,
  },
];

/** Stylised landmass ellipses used to generate the dot-matrix world map. */
export const WORLD_ELLIPSES = [
  { cx: 10, cy: 7, rx: 7, ry: 4 },
  { cx: 14, cy: 9, rx: 6, ry: 3 },
  { cx: 7, cy: 6, rx: 5, ry: 3 },
  { cx: 13, cy: 12.5, rx: 3, ry: 1.8 },
  { cx: 24, cy: 3.5, rx: 3, ry: 2.2 },
  { cx: 23, cy: 17, rx: 4.5, ry: 4 },
  { cx: 21, cy: 21, rx: 2.5, ry: 3.5 },
  { cx: 34, cy: 7, rx: 4.5, ry: 2.5 },
  { cx: 37, cy: 6, rx: 3, ry: 2.5 },
  { cx: 35, cy: 14, rx: 5, ry: 5 },
  { cx: 37, cy: 19, rx: 3.5, ry: 3.5 },
  { cx: 34, cy: 11, rx: 4, ry: 2.5 },
  { cx: 45, cy: 8, rx: 7, ry: 4 },
  { cx: 52, cy: 9, rx: 6, ry: 4 },
  { cx: 41, cy: 10.5, rx: 3, ry: 2.5 },
  { cx: 46, cy: 12.5, rx: 2.5, ry: 2 },
  { cx: 51, cy: 14, rx: 3, ry: 2 },
  { cx: 54, cy: 16.8, rx: 4, ry: 1.5 },
  { cx: 57, cy: 9.5, rx: 1.6, ry: 1.8 },
  { cx: 56, cy: 21, rx: 4.5, ry: 3 },
  { cx: 58, cy: 24, rx: 2.5, ry: 1.8 },
];
