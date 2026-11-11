"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { getSector } from "@/lib/businesses";
import type { CmsImage } from "@/lib/cms/normalize";
import type { ClimateEsgSolutionsCircularLoop } from "@/lib/cms/generated";

const SECTOR = getSector("climate-esg-solutions");

const FALLBACK_DESCRIPTION =
  "Climate is not a single service. Select a node to see how resilience, circularity and clean technology reinforce each other.";

// PLACEHOLDER — capability copy, imagery and loop positions are illustrative
// until approved sector content is supplied. Media has no value fallback;
// images render only from the CMS.
interface Detail {
  copy: string;
  chips: string[];
  connection: string;
  image: CmsImage | null;
  alt: string;
}

const FALLBACK_DETAILS: Detail[] = [
  {
    copy: "Infrastructure designed for heat, flood, water stress and a changing operating envelope.",
    chips: ["Adaptation", "Resilience planning", "Asset hardening"],
    connection: "Water · Real estate · Logistics",
    image: null,
    alt: "Climate-resilient urban infrastructure (placeholder image)",
  },
  {
    copy: "Material loops that keep resources in use and waste out of the system.",
    chips: ["Reuse", "Recovery", "Industrial symbiosis"],
    connection: "Industrial development · Agriculture",
    image: null,
    alt: "Circular resource and landscape systems (placeholder image)",
  },
  {
    copy: "Less energy, water and material per unit of output across the asset life cycle.",
    chips: ["Efficiency audits", "Retrofit", "Metering"],
    connection: "Renewable energy · Industrial development",
    image: null,
    alt: "Resource-efficient processing operations (placeholder image)",
  },
  {
    copy: "Lower-emission generation, treatment and industrial processes deployed at asset scale.",
    chips: ["Clean generation", "Low-carbon process", "Storage"],
    connection: "Renewable energy · Technology",
    image: null,
    alt: "Clean energy and technology infrastructure (placeholder image)",
  },
  {
    copy: "Capital allocation with measurable environmental and social criteria built in.",
    chips: ["Screening", "Reporting", "Transition finance"],
    connection: "Investments · Impact",
    image: null,
    alt: "Field measurement and sustainability reporting (placeholder image)",
  },
];

const FALLBACK_LABELS = SECTOR.capabilities;

const RADIUS = 38;

function toPoint(angle: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: 50 + RADIUS * Math.cos(radians),
    y: 50 + RADIUS * Math.sin(radians),
  };
}

function arcPath(angle: number) {
  const start = toPoint(angle - 34);
  const end = toPoint(angle + 34);
  return `M ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 0 1 ${end.x} ${end.y}`;
}

function parseChips(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

type Node = {
  label: string;
  code: string;
  detail: Detail;
  position: { x: number; y: number };
  angle: number;
};

function toDetail(
  capability: ClimateEsgSolutionsCircularLoop["capabilities"][number],
  index: number
): Detail {
  const legacy = FALLBACK_DETAILS[index];
  const chips = parseChips(capability.chips);

  return {
    copy: capability.copy || legacy?.copy || "",
    chips: chips.length ? chips : (legacy?.chips ?? []),
    connection: capability.connection || legacy?.connection || "",
    image: capability.image,
    alt: capability.image?.alt || capability.image_alt || legacy?.alt || "",
  };
}

function toNodes(data: ClimateEsgSolutionsCircularLoop): Node[] {
  const base = data.capabilities.length
    ? data.capabilities.map((capability, index) => ({
        label: capability.label || FALLBACK_LABELS[index] || "",
        detail: toDetail(capability, index),
      }))
    : FALLBACK_LABELS.map((label, index) => ({
        label,
        detail:
          FALLBACK_DETAILS[index] ??
          ({ copy: "", chips: [], connection: "", image: null, alt: "" } as Detail),
      }));

  const step = 360 / base.length;

  return base.map((node, index) => {
    const angle = -90 + step * index;
    return {
      ...node,
      code: `C-0${index + 1}`,
      position: toPoint(angle),
      angle,
    };
  });
}

export default function CircularLoop({
  data,
}: {
  data: ClimateEsgSolutionsCircularLoop;
}) {
  const nodes = toNodes(data);
  const total = String(nodes.length).padStart(2, "0");
  const [activeIndex, setActiveIndex] = useState(0);
  const active = nodes[activeIndex];
  const headingLines = data.heading ? data.heading.split("\n") : [];

  return (
    <section
      id="capabilities"
      aria-labelledby="climate-loop-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-col gap-[clamp(22px,3vw,40px)] lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              02 — Capability loop
            </p>
            <h2
              id="climate-loop-title"
              className="mt-4 max-w-[16ch] font-sans text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              {data.heading ? (
                headingLines.length === 2 ? (
                  <>
                    {headingLines[0]}
                    <br />
                    {headingLines[1]}
                  </>
                ) : (
                  data.heading
                )
              ) : (
                <>
                  Five loops.
                  <br />
                  One system.
                </>
              )}
            </h2>
          </div>

          <div className="max-w-[46ch] lg:text-right">
            <p className="text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted/70">
              {data.description || FALLBACK_DESCRIPTION}
            </p>
            <a
              href="/impact"
              className="mt-5 inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent"
            >
              Impact at Waterlight
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-[clamp(28px,4vw,48px)] grid gap-[clamp(20px,3vw,36px)] xl:grid-cols-[1.38fr_0.62fr]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-muted/60 uppercase">
                Select a node
              </p>
              <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-muted/60 uppercase tabular-nums">
                {total} loops — live brief
              </p>
            </div>

            <div
              role="group"
              aria-label="Climate capability loops"
              className="relative mt-3 border border-accent/25 bg-sidebar p-[clamp(8px,2vw,24px)]"
            >
              <div className="relative mx-auto aspect-square w-full max-w-[560px]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="rgba(100,216,232,0.12)"
                    strokeWidth="0.4"
                    strokeDasharray="1 2.4"
                  />
                  {nodes.map((node, index) => (
                    <path
                      key={node.code}
                      d={arcPath(node.angle)}
                      fill="none"
                      stroke={
                        index === activeIndex
                          ? "rgba(100,216,232,0.95)"
                          : "rgba(100,216,232,0.3)"
                      }
                      strokeWidth={index === activeIndex ? 1.1 : 0.7}
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                  {nodes.map((node) => (
                    <circle
                      key={`${node.code}-tick`}
                      cx={node.position.x}
                      cy={node.position.y}
                      r="1.4"
                      fill="rgba(6,21,34,1)"
                      stroke="rgba(100,216,232,0.55)"
                      strokeWidth="0.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </svg>

                <div className="pointer-events-none absolute inset-1/2 flex size-[38%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/25 bg-sidebar/85 p-[clamp(10px,2vw,20px)] text-center">
                  <p className="text-[0.52rem] font-semibold tracking-[0.16em] text-accent uppercase">
                    Closed loop
                  </p>
                  <p className="mt-1.5 font-sans text-[clamp(0.78rem,1.6vw,1.15rem)] leading-[1.05] font-extrabold tracking-[0.01em] uppercase [font-stretch:110%]">
                    Resource
                    <br />
                    in use
                  </p>
                  <p className="mt-2 text-[0.5rem] tracking-[0.12em] text-muted/55 uppercase">
                    {total} capability nodes
                  </p>
                </div>

                {nodes.map((node, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={node.code}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      aria-controls="climate-loop-brief"
                      aria-label={`${node.code} — ${node.label}`}
                      className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-sm p-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar focus-visible:outline-none"
                      style={{
                        left: `${node.position.x}%`,
                        top: `${node.position.y}%`,
                      }}
                    >
                      <span
                        className={cn(
                          "grid size-[clamp(36px,4.4vw,48px)] place-items-center rounded-full border text-[0.52rem] font-semibold tracking-[0.04em] tabular-nums transition-colors duration-(--transition-normal) ease-(--ease-standard)",
                          isActive
                            ? "border-accent bg-accent text-sidebar"
                            : "border-accent/55 bg-sidebar text-accent group-hover:border-accent"
                        )}
                      >
                        {node.code}
                      </span>
                      <span
                        className={cn(
                          "hidden max-w-[15ch] border px-2 py-1 text-[0.5rem] leading-[1.35] font-semibold tracking-[0.1em] uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) md:block",
                          isActive
                            ? "border-accent/60 bg-sidebar text-accent"
                            : "border-muted/25 bg-sidebar/90 text-muted/70 group-hover:text-muted"
                        )}
                      >
                        {node.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="mt-2 text-center text-[0.52rem] leading-[1.5] tracking-[0.1em] text-muted/55 uppercase md:hidden">
                Select a node to open its brief
              </p>
              <p className="absolute right-3 bottom-3 hidden text-[0.52rem] leading-[1.5] tracking-[0.1em] text-muted/55 uppercase md:block">
                Illustrative loop — not live measurement
              </p>
            </div>
          </div>

          <div
            id="climate-loop-brief"
            aria-live="polite"
            className="flex flex-col border border-accent/30 bg-muted text-foreground"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-sidebar">
              {nodes.map((node, index) =>
                node.detail.image ? (
                  <div
                    key={`${node.code}-image`}
                    role={
                      index === activeIndex && node.detail.alt
                        ? "img"
                        : undefined
                    }
                    aria-label={
                      index === activeIndex && node.detail.alt
                        ? node.detail.alt
                        : undefined
                    }
                    aria-hidden={
                      index === activeIndex && node.detail.alt
                        ? undefined
                        : true
                    }
                    className={cn(
                      "absolute inset-0 bg-cover bg-center transition-opacity duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transition-none",
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    )}
                    style={{
                      backgroundImage: `url(${node.detail.image.url})`,
                    }}
                  />
                ) : null
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/10 to-sidebar/40"
              />
              <p className="absolute top-3 left-3 border border-accent/35 bg-sidebar/80 px-2 py-1 text-[0.52rem] font-semibold tracking-[0.12em] text-accent uppercase tabular-nums">
                Loop {active.code} / {total}
              </p>
              <p className="absolute right-3 bottom-3 left-3 text-[0.55rem] tracking-[0.1em] text-muted/70 uppercase">
                Capability node
              </p>
            </div>

            <div className="flex flex-1 flex-col p-[clamp(18px,2.4vw,28px)]">
              <div className="flex items-center justify-between gap-4 border-b border-foreground/15 pb-3">
                <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase">
                  Node brief — {active.code}
                </p>
                <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")} / {total}
                </p>
              </div>

              <h3 className="mt-[clamp(14px,2vw,20px)] font-sans text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.05] font-extrabold tracking-[-0.01em] uppercase [font-stretch:112%]">
                {active.label}
              </h3>
              <p className="mt-3 text-[0.88rem] leading-[1.6] text-foreground/70">
                {active.detail.copy}
              </p>

              <ul className="mt-[clamp(14px,2vw,20px)] flex flex-wrap gap-1.5">
                {active.detail.chips.map((chip) => (
                  <li
                    key={chip}
                    className="border border-foreground/20 px-2 py-1 text-[0.58rem] font-semibold tracking-[0.08em] text-foreground/65 uppercase"
                  >
                    {chip}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-foreground/15 pt-[clamp(16px,2.2vw,22px)]">
                <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase">
                  Connects to
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-[1.5] font-semibold text-foreground/80">
                  {active.detail.connection}
                </p>
                <a
                  href="/impact/sustainability"
                  className="mt-[clamp(14px,2vw,20px)] inline-flex items-center gap-2 border-b border-primary pb-1 text-[0.68rem] font-semibold tracking-[0.1em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-primary"
                >
                  Sustainability at Waterlight
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-[0.6rem] leading-[1.5] text-muted/60">
          PLACEHOLDER — loop copy, node positions and imagery are illustrative
          until approved sector content and photography are supplied. The
          diagram is not a live measurement or reporting system.
        </p>
      </div>
    </section>
  );
}
