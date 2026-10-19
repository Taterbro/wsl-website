"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Status = "ops" | "partner" | "project" | "target";

interface Marker {
  n: string;
  x: number;
  y: number;
  s: Status;
}

const STATUS_INFO: Record<Status, { label: string; desc: string }> = {
  ops: {
    label: "Established operations",
    desc: "A verified operating presence with active business activity.",
  },
  partner: {
    label: "Active partnerships",
    desc: "Formal partnerships and market-development corridors in place.",
  },
  project: {
    label: "Projects & opportunities",
    desc: "Projects under development, plus market opportunities open to partners.",
  },
  target: {
    label: "Strategic target market",
    desc: "A market Waterlight is targeting. No operating presence is implied.",
  },
};

const LEGEND: { s: Status; label: string }[] = [
  { s: "ops", label: "Established operations" },
  { s: "partner", label: "Active partnerships" },
  { s: "project", label: "Projects & opportunities" },
  { s: "target", label: "Strategic target markets" },
];

const ELLIPSES = [
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

function inside(x: number, y: number): boolean {
  return ELLIPSES.some((e) => {
    const dx = (x - e.cx) / e.rx;
    const dy = (y - e.cy) / e.ry;
    return dx * dx + dy * dy <= 1;
  });
}

const MAP_DOTS: { cx: number; cy: number }[] = [];
for (let c = 0; c < 64; c++) {
  for (let r = 0; r < 32; r++) {
    const gx = c + 0.5;
    const gy = r + 0.5;
    if (inside(gx, gy)) {
      MAP_DOTS.push({ cx: gx * 10, cy: gy * 10 });
    }
  }
}

const MARKERS: Marker[] = [
  { n: "Lagos", x: 33.5, y: 14.5, s: "ops" },
  { n: "Accra", x: 32, y: 14.8, s: "ops" },
  { n: "Nairobi", x: 38, y: 16, s: "ops" },
  { n: "Johannesburg", x: 35.6, y: 21.5, s: "ops" },
  { n: "Cairo", x: 37, y: 11, s: "ops" },
  { n: "Dubai", x: 42.6, y: 11.4, s: "partner" },
  { n: "Riyadh", x: 41.4, y: 11, s: "partner" },
  { n: "London", x: 32.4, y: 6.2, s: "partner" },
  { n: "Frankfurt", x: 34, y: 6.4, s: "partner" },
  { n: "Kigali", x: 37, y: 16.6, s: "project" },
  { n: "Dar es Salaam", x: 38.4, y: 17, s: "project" },
  { n: "Cape Town", x: 34.5, y: 22.6, s: "project" },
  { n: "Casablanca", x: 31.4, y: 11.5, s: "project" },
  { n: "Singapore", x: 51.6, y: 15.6, s: "target" },
  { n: "New York", x: 14, y: 9.6, s: "target" },
  { n: "Toronto", x: 13, y: 7.6, s: "target" },
  { n: "Tokyo", x: 57.4, y: 9.4, s: "target" },
  { n: "Sydney", x: 58, y: 22.4, s: "target" },
];

const DOT_FILL: Record<Status, string> = {
  ops: "fill-accent",
  partner: "fill-chart-4",
  project: "fill-[#8fbfd6]",
  target: "fill-none stroke-muted stroke-[1.4]",
};

const SWATCH_CLASS: Record<Status, string> = {
  ops: "bg-accent",
  partner: "bg-chart-4",
  project: "bg-[#8fbfd6]",
  target: "border-[1.5px] border-muted",
};

export default function WorldMap() {
  const [activeFilter, setActiveFilter] = useState<Record<Status, boolean>>({
    ops: true,
    partner: true,
    project: true,
    target: true,
  });
  const [selected, setSelected] = useState<Marker | null>(null);

  const toggleStatus = (s: Status) => {
    setActiveFilter((prev) => ({ ...prev, [s]: !prev[s] }));
  };

  const selectedInfo = selected ? STATUS_INFO[selected.s] : null;

  return (
    <div className="grid grid-cols-1 gap-[clamp(30px,4vw,52px)]">
      <div className="relative border border-accent/20 bg-sidebar/50 p-[clamp(14px,2.5vw,30px)]">
        <svg
          viewBox="0 0 640 320"
          role="img"
          aria-label="Stylised world map marking established operations, active partnerships, projects and strategic target markets"
          className="block h-auto w-full"
        >
          {MAP_DOTS.map((dot) => (
            <circle
              key={`${dot.cx}-${dot.cy}`}
              cx={dot.cx}
              cy={dot.cy}
              r={1.5}
              className="fill-muted/22"
            />
          ))}
          {MARKERS.map((marker) => (
            <g
              key={marker.n}
              role="button"
              tabIndex={0}
              aria-label={`${marker.n}, ${STATUS_INFO[marker.s].label}`}
              onClick={() => setSelected(marker)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(marker);
                }
              }}
              className={cn(
                "group cursor-pointer transition-opacity duration-(--transition-fast) ease-(--ease-standard)",
                !activeFilter[marker.s] && "pointer-events-none opacity-0"
              )}
            >
              <circle
                cx={marker.x * 10}
                cy={marker.y * 10}
                r={11}
                className="fill-transparent"
              />
              <circle
                cx={marker.x * 10}
                cy={marker.y * 10}
                r={4.2}
                className={cn(
                  DOT_FILL[marker.s],
                  "transition-[r,fill,opacity] duration-(--transition-fast) ease-(--ease-standard) group-hover:[r:6]"
                )}
              />
            </g>
          ))}
        </svg>
        <div className="mt-5 flex flex-wrap gap-x-[clamp(14px,2vw,34px)] gap-y-3 border-t border-accent/20 pt-[18px]">
          {LEGEND.map((item) => (
            <button
              key={item.s}
              type="button"
              aria-pressed={activeFilter[item.s]}
              onClick={() => toggleStatus(item.s)}
              className="flex cursor-pointer items-center gap-2.5 border-0 bg-none p-0 text-[0.78rem] tracking-[0.02em] text-muted opacity-55 transition-opacity duration-(--transition-fast) ease-(--ease-standard) hover:opacity-100 aria-pressed:opacity-100"
            >
              <span
                className={cn(
                  "block h-3 w-3 flex-none rounded-full",
                  SWATCH_CLASS[item.s],
                  activeFilter[item.s] &&
                    "shadow-[0_0_0_4px_rgba(100,216,232,0.16)]"
                )}
              />
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div
        aria-live="polite"
        key={selected?.n ?? "default"}
        className={cn(
          "flex min-h-[180px] flex-col justify-center gap-3.5 border border-accent/20 bg-sidebar-accent/50 p-[clamp(20px,3vw,34px)]",
          selected && "animate-slide-in"
        )}
      >
        <span className="text-[0.72rem] font-semibold tracking-[0.1em] text-chart-4 uppercase">
          {selectedInfo?.label ?? "Select a market"}
        </span>
        <h4 className="font-sans text-[1.3rem] font-extrabold text-accent uppercase [font-stretch:114%]">
          {selected?.n ?? "Where Waterlight is active"}
        </h4>
        <p className="max-w-[60ch] text-[0.98rem] leading-[1.6] text-muted/82">
          {selectedInfo
            ? `${selectedInfo.desc} Approved activity summaries are released to qualified parties through the investor gateway.`
            : "Choose any marker — or filter by status — to see approved activity. Positions are indicative and shown at country or corridor level only."}
        </p>
      </div>
    </div>
  );
}
