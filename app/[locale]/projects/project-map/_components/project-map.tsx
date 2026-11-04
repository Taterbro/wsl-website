"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BUSINESS_SECTORS } from "@/lib/businesses";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import {
  COUNTRY_COORDINATES,
  LEGEND_ORDER,
  STATUS_INFO,
  TARGET_MARKETS,
  WORLD_ELLIPSES,
  type MapStatus,
} from "../_data";

interface MapPoint {
  id: string;
  name: string;
  status: MapStatus;
  x: number;
  y: number;
  projects: Project[];
  note?: string;
}

interface ProjectMapProps {
  projects: Project[];
}

const MAP_DOTS: { cx: number; cy: number }[] = [];
for (let c = 0; c < 64; c++) {
  for (let r = 0; r < 32; r++) {
    const gx = c + 0.5;
    const gy = r + 0.5;
    const inside = WORLD_ELLIPSES.some((ellipse) => {
      const dx = (gx - ellipse.cx) / ellipse.rx;
      const dy = (gy - ellipse.cy) / ellipse.ry;
      return dx * dx + dy * dy <= 1;
    });
    if (inside) MAP_DOTS.push({ cx: gx * 10, cy: gy * 10 });
  }
}

const SECTOR_NAMES = Object.fromEntries(
  BUSINESS_SECTORS.map((sector) => [sector.slug, sector.shortName])
);

const SWATCH_CLASS: Record<MapStatus, string> = {
  ops: "bg-accent",
  partner: "bg-chart-4",
  project: "bg-accent",
  target: "border border-muted/70 bg-transparent",
};

export default function ProjectMap({ projects }: ProjectMapProps) {
  const projectPoints = useMemo<MapPoint[]>(() => {
    const groups = new Map<string, Project[]>();
    for (const project of projects) {
      const list = groups.get(project.country) ?? [];
      list.push(project);
      groups.set(project.country, list);
    }

    const points: MapPoint[] = [];
    for (const [country, countryProjects] of groups.entries()) {
      const coordinate = COUNTRY_COORDINATES[country];
      if (!coordinate) continue;
      points.push({
        id: `project-${country.toLowerCase().replace(/\s+/g, "-")}`,
        name: country,
        status: "project",
        x: coordinate.x,
        y: coordinate.y,
        projects: countryProjects,
      });
    }

    return points.sort(
      (a, b) =>
        b.projects.length - a.projects.length ||
        a.name.localeCompare(b.name)
    );
  }, [projects]);

  const targetPoints = useMemo<MapPoint[]>(
    () =>
      TARGET_MARKETS.map((market) => ({
        id: market.id,
        name: market.name,
        status: "target" as const,
        x: market.x,
        y: market.y,
        projects: [],
        note: market.note,
      })),
    []
  );

  const allPoints = useMemo(
    () => [...projectPoints, ...targetPoints],
    [projectPoints, targetPoints]
  );

  const [activeStatus, setActiveStatus] = useState<Record<MapStatus, boolean>>({
    ops: true,
    partner: true,
    project: true,
    target: true,
  });
  const [selectedId, setSelectedId] = useState<string | null>(
    () => projectPoints[0]?.id ?? null
  );

  const selected = allPoints.find((point) => point.id === selectedId) ?? null;

  const statusCounts: Record<MapStatus, number> = {
    ops: 0,
    partner: 0,
    project: projectPoints.length,
    target: targetPoints.length,
  };

  const toggleStatus = (status: MapStatus) => {
    const nextActive = !activeStatus[status];
    setActiveStatus((previous) => ({ ...previous, [status]: nextActive }));
    if (!nextActive && selected?.status === status) setSelectedId(null);
  };

  const selectPoint = (point: MapPoint) => setSelectedId(point.id);

  return (
    <section
      aria-labelledby="project-map-stage-title"
      className="bg-sidebar py-[clamp(52px,7vw,92px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Portfolio footprint
            </p>
            <h2
              id="project-map-stage-title"
              className="mt-3 font-sans text-[clamp(1.9rem,4vw,3.1rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              The map, layer by layer
            </h2>
          </div>
          <p className="max-w-[36ch] text-[0.78rem] leading-[1.5] text-muted/60">
            Filter the layers to compare approved project markets with
            strategic target markets.
          </p>
        </div>

        <div className="mt-[clamp(28px,4vw,44px)] grid gap-4 lg:grid-cols-[1.55fr_0.85fr]">
          <div className="border border-accent/20 bg-sidebar/60 p-[clamp(14px,2.4vw,28px)]">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[0.68rem] font-semibold tracking-[0.12em] text-muted/60 uppercase">
                Interactive map
              </span>
              <span className="text-[0.66rem] tracking-[0.1em] text-muted/40 uppercase">
                Country level
              </span>
            </div>

            <p id="map-instructions" className="sr-only">
              Use Tab to move between markets, then press Enter or Space to show
              that market in the detail panel.
            </p>

            <svg
              viewBox="0 0 640 320"
              role="group"
              aria-label="Interactive project map showing project markets and strategic target markets"
              aria-describedby="map-instructions"
              className="mt-3 block h-auto w-full"
            >
              {[80, 160, 240].map((y) => (
                <line
                  key={`lat-${y}`}
                  x1="0"
                  y1={y}
                  x2="640"
                  y2={y}
                  className="stroke-muted/8"
                  strokeWidth="0.5"
                />
              ))}
              {[160, 320, 480].map((x) => (
                <line
                  key={`lon-${x}`}
                  x1={x}
                  y1="0"
                  x2={x}
                  y2="320"
                  className="stroke-muted/8"
                  strokeWidth="0.5"
                />
              ))}

              {MAP_DOTS.map((dot) => (
                <circle
                  key={`${dot.cx}-${dot.cy}`}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={1.4}
                  className="fill-muted/22"
                />
              ))}

              {allPoints.map((point) => {
                const isVisible = activeStatus[point.status];
                if (!isVisible) return null;
                const isSelected = point.id === selectedId;
                const countLabel =
                  point.projects.length > 1 ? point.projects.length : null;

                return (
                  <g
                    key={point.id}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-label={`${point.name}, ${STATUS_INFO[point.status].label}${
                      point.projects.length
                        ? `, ${point.projects.length} project${
                            point.projects.length === 1 ? "" : "s"
                          }`
                        : ""
                    }`}
                    onClick={() => selectPoint(point)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        selectPoint(point);
                      }
                    }}
                    className="group cursor-pointer focus:outline-none"
                  >
                    <circle
                      cx={point.x * 10}
                      cy={point.y * 10}
                      r={13}
                      className="fill-transparent"
                    />
                    {point.status === "project" ? (
                      <circle
                        cx={point.x * 10}
                        cy={point.y * 10}
                        r={9}
                        className="fill-accent/15"
                      />
                    ) : null}
                    <circle
                      cx={point.x * 10}
                      cy={point.y * 10}
                      r={isSelected ? 8.5 : 7}
                      className={cn(
                        "fill-none stroke-[1.2] transition-all duration-(--transition-fast) ease-(--ease-standard)",
                        isSelected ? "stroke-accent" : "stroke-transparent",
                        "group-focus-visible:stroke-accent"
                      )}
                    />
                    <circle
                      cx={point.x * 10}
                      cy={point.y * 10}
                      r={point.status === "project" ? 4.4 : 3.8}
                      className={cn(
                        "transition-all duration-(--transition-fast) ease-(--ease-standard) group-hover:[r:5.4]",
                        point.status === "project"
                          ? "fill-accent"
                          : "fill-sidebar stroke-muted/80 stroke-[1.4]"
                      )}
                    />
                    {countLabel ? (
                      <text
                        x={point.x * 10 + 7}
                        y={point.y * 10 - 6}
                        className="fill-accent font-sans text-[7px] font-semibold"
                      >
                        {countLabel}
                      </text>
                    ) : null}
                  </g>
                );
              })}
            </svg>

            <div
              role="group"
              aria-label="Map layers"
              className="mt-4 flex flex-wrap gap-x-[clamp(10px,2vw,24px)] gap-y-2.5 border-t border-accent/15 pt-4"
            >
              {LEGEND_ORDER.map((status) => {
                const info = STATUS_INFO[status];
                const count = statusCounts[status];
                return (
                  <button
                    key={status}
                    type="button"
                    aria-pressed={activeStatus[status]}
                    onClick={() => toggleStatus(status)}
                    className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left text-[0.72rem] tracking-[0.02em] text-muted/55 transition-opacity duration-(--transition-fast) ease-(--ease-standard) hover:text-muted hover:opacity-100 aria-pressed:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span
                      className={cn(
                        "block h-2.5 w-2.5 flex-none rounded-full",
                        SWATCH_CLASS[status],
                        activeStatus[status]
                          ? "shadow-[0_0_0_3px_rgba(100,216,232,0.14)]"
                          : "opacity-40"
                      )}
                    />
                    <span className="opacity-80">
                      {info.label}
                      <span className="ml-1 text-[0.66rem] text-muted/45">
                        {count.toString().padStart(2, "0")}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-[0.68rem] leading-[1.5] text-muted/45">
              Operations and partnership layers publish only when verified; they
              are zero on this illustrative view.
            </p>
          </div>

          <div
            aria-live="polite"
            className="flex min-h-[280px] flex-col border border-accent/20 bg-sidebar-accent/45 p-[clamp(20px,3vw,32px)]"
          >
            {selected ? (
              <>
                <p className="text-[0.68rem] font-semibold tracking-[0.12em] text-chart-4 uppercase">
                  {STATUS_INFO[selected.status].label}
                </p>
                <h3 className="mt-3 font-sans text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-accent uppercase [font-stretch:115%]">
                  {selected.name}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-[1.6] text-muted/75">
                  {STATUS_INFO[selected.status].description}
                </p>

                {selected.projects.length > 0 ? (
                  <ul className="mt-5 divide-y divide-accent/15 border-y border-accent/15">
                    {selected.projects.map((project) => (
                      <li key={project.id} className="py-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-[2px] border border-accent/30 px-2 py-0.5 text-[0.62rem] font-semibold tracking-[0.08em] text-accent uppercase">
                            {project.stage}
                          </span>
                          <span className="text-[0.64rem] tracking-[0.06em] text-muted/50 uppercase">
                            {project.opportunityType}
                          </span>
                        </div>
                        <p className="mt-2 font-sans text-[1rem] font-bold leading-[1.2] uppercase [font-stretch:108%]">
                          {project.name}
                        </p>
                        <p className="mt-1 text-[0.74rem] text-muted/55">
                          {SECTOR_NAMES[project.sectorSlug] ??
                            project.sectorSlug}{" "}
                          · {project.region}
                        </p>
                        <Link
                          href={`/partner-with-us/investors?source=project-map&project=${project.slug}`}
                          className="mt-3 inline-flex items-center gap-2 rounded-[2px] border border-accent/40 px-3 py-1.5 font-sans text-[0.68rem] font-semibold tracking-[0.06em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:border-accent hover:bg-accent hover:text-sidebar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        >
                          Request information
                          <span aria-hidden>→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 border-t border-accent/15 pt-4 text-[0.82rem] leading-[1.6] text-muted/60">
                    {selected.note ??
                      "Approved activity for this market will be published when available."}
                  </p>
                )}

                {selected.projects.length > 0 ? (
                  <Link
                    href={`/projects/portfolio?country=${encodeURIComponent(
                      selected.name
                    )}`}
                    className="mt-auto pt-5 font-sans text-[0.7rem] font-semibold tracking-[0.08em] text-muted/70 uppercase underline decoration-muted/20 underline-offset-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent hover:decoration-accent"
                  >
                    View in portfolio
                  </Link>
                ) : null}
              </>
            ) : (
              <>
                <p className="text-[0.68rem] font-semibold tracking-[0.12em] text-chart-4 uppercase">
                  Select a market
                </p>
                <h3 className="mt-3 font-sans text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-accent uppercase [font-stretch:115%]">
                  Where the portfolio sits
                </h3>
                <p className="mt-3 text-[0.9rem] leading-[1.6] text-muted/75">
                  Choose a marker to see the approved projects or target-market
                  status for that location. Positions are indicative and shown
                  at country or corridor level only.
                </p>
                <div className="mt-auto grid grid-cols-2 gap-4 border-t border-accent/15 pt-5">
                  <div>
                    <p className="font-sans text-[1.4rem] leading-none font-bold text-muted">
                      {projectPoints.length.toString().padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-[0.62rem] tracking-[0.1em] text-muted/50 uppercase">
                      Project markets
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-[1.4rem] leading-none font-bold text-muted">
                      {targetPoints.length.toString().padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-[0.62rem] tracking-[0.1em] text-muted/50 uppercase">
                      Target markets
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
