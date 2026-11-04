"use client";

import { useState } from "react";
import { getSector } from "@/lib/businesses";
import { cn } from "@/lib/utils";

type NodeType = "core" | "interface" | "digital";

// PLACEHOLDER — capability copy, node positions and interfaces are
// illustrative until approved sector content is supplied.
type NodeDetail = {
  code: string;
  type: NodeType;
  copy: string;
  chips: string[];
  connection: string;
  image: string;
  alt: string;
};

const NODE_DETAILS: Record<string, NodeDetail> = {
  "Transportation infrastructure": {
    code: "N-01",
    type: "core",
    copy: "Road, rail and port links that keep freight moving between origin and market.",
    chips: ["Corridor planning", "Multimodal links", "Terminal access"],
    connection: "Industrial development · Cross-border trade",
    image: "/placeholders/logistics-corridor.png",
    alt: "Freight corridor with road and rail links (placeholder image)",
  },
  Warehousing: {
    code: "N-02",
    type: "core",
    copy: "Storage and handling capacity positioned where goods change hands.",
    chips: ["Inland hubs", "Bonded storage", "Cold rooms"],
    connection: "Agriculture & food systems · Distribution",
    image: "/placeholders/logistics-hub.png",
    alt: "Warehouse and inland logistics hub (placeholder image)",
  },
  Distribution: {
    code: "N-03",
    type: "core",
    copy: "Regional and last-mile flows that turn stored stock into delivery.",
    chips: ["Regional depots", "Urban delivery", "Fleet operations"],
    connection: "Real estate & urban infrastructure · Technology",
    image: "/placeholders/group-sector-logistics.png",
    alt: "Distribution fleet and terminal operations (placeholder image)",
  },
  "Supply-chain technology": {
    code: "N-04",
    type: "digital",
    copy: "Visibility, tracking and control across every node and hand-off.",
    chips: ["Tracking", "Control tower", "Forecasting"],
    connection: "Technology & digital infrastructure",
    image: "/placeholders/tech-wswis.png",
    alt: "Digital supply-chain monitoring interface (placeholder image)",
  },
  "Cross-border trade infrastructure": {
    code: "N-05",
    type: "interface",
    copy: "Border systems and trade interfaces that shorten clearance time.",
    chips: ["Border posts", "Customs interfaces", "Trade corridors"],
    connection: "Climate & ESG solutions · Industrial development",
    image: "/placeholders/logistics-corridor.png",
    alt: "Cross-border trade corridor and border post (placeholder image)",
  },
};

const POSITIONS: Record<string, { left: string; top: string }> = {
  "Transportation infrastructure": { left: "16%", top: "50%" },
  Warehousing: { left: "47%", top: "64%" },
  Distribution: { left: "66%", top: "30%" },
  "Supply-chain technology": { left: "28%", top: "16%" },
  "Cross-border trade infrastructure": { left: "86%", top: "56%" },
};

const TYPE_LABELS: Record<NodeType, string> = {
  core: "Core node",
  interface: "Interface node",
  digital: "Digital layer",
};

const LEGEND: { type: NodeType | "corridor"; label: string }[] = [
  { type: "core", label: "Core node" },
  { type: "interface", label: "Interface node" },
  { type: "digital", label: "Digital layer" },
  { type: "corridor", label: "Corridor" },
];

function NodeShape({
  type,
  label,
  active,
}: {
  type: NodeType;
  label: string;
  active: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-11 place-items-center border text-[0.52rem] font-semibold tracking-[0.04em] tabular-nums transition-colors duration-(--transition-normal) ease-(--ease-standard)",
        type === "core" && "rounded-full",
        type === "interface" && "rotate-45",
        type === "digital" && "border-dashed",
        active
          ? "border-accent bg-accent text-sidebar"
          : "border-accent/55 bg-sidebar/90 text-accent group-hover:border-accent"
      )}
    >
      <span className={cn(type === "interface" && "-rotate-45")}>{label}</span>
    </span>
  );
}

export default function CorridorMap() {
  const sector = getSector("logistics-supply-chains");
  const nodes = sector.capabilities.map((label) => ({
    label,
    ...NODE_DETAILS[label],
    position: POSITIONS[label],
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const active = nodes[activeIndex];

  return (
    <section
      id="capabilities"
      aria-labelledby="logistics-map-title"
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
              02 — Corridor network
            </p>
            <h2
              id="logistics-map-title"
              className="mt-4 max-w-[15ch] font-sans text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Five nodes.
              <br />
              One corridor.
            </h2>
          </div>

          <div className="max-w-[46ch] lg:text-right">
            <p className="text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted/70">
              Select a node to open its brief. Each capability is a layer of the
              same trade system, not a standalone service.
            </p>
            <a
              href="/investments/opportunities"
              className="mt-5 inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent"
            >
              Trade opportunities
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-[clamp(28px,4vw,48px)] grid gap-[clamp(20px,3vw,36px)] xl:grid-cols-[1.42fr_0.58fr]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-muted/60 uppercase">
                Select a node
              </p>
              <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-muted/60 uppercase tabular-nums">
                05 nodes — live brief
              </p>
            </div>

            <div
              role="group"
              aria-label="Logistics network nodes"
              className="relative mt-3 min-h-[clamp(400px,44vw,540px)] overflow-hidden border border-accent/25 bg-sidebar"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(100,216,232,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100,216,232,0.07) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />

              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <path
                  d="M 28 16 C 22 28, 16 38, 16 50 S 30 66, 47 64 S 60 44, 66 30 S 78 48, 86 56"
                  fill="none"
                  stroke="rgba(100,216,232,0.55)"
                  strokeWidth="0.7"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M 28 16 C 38 22, 52 24, 66 30"
                  fill="none"
                  stroke="rgba(100,216,232,0.4)"
                  strokeWidth="0.6"
                  strokeDasharray="2 1.6"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M 47 64 C 58 64, 70 62, 86 56"
                  fill="none"
                  stroke="rgba(233,241,244,0.28)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M 47 64 C 54 72, 62 76, 72 78"
                  fill="none"
                  stroke="rgba(233,241,244,0.2)"
                  strokeWidth="0.5"
                  strokeDasharray="1.4 1.8"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {nodes.map((node, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={node.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    aria-controls="logistics-node-brief"
                    aria-label={`${node.code} — ${node.label}`}
                    className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-sm p-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar focus-visible:outline-none"
                    style={{ left: node.position.left, top: node.position.top }}
                  >
                    <NodeShape
                      type={node.type}
                      label={node.code}
                      active={isActive}
                    />
                    <span
                      className={cn(
                        "hidden max-w-[14ch] border px-2 py-1 text-[0.5rem] leading-[1.35] font-semibold tracking-[0.1em] uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) sm:block",
                        isActive
                          ? "border-accent/60 bg-sidebar text-accent"
                          : "border-muted/25 bg-sidebar/85 text-muted/70 group-hover:text-muted"
                      )}
                    >
                      {node.label}
                    </span>
                  </button>
                );
              })}

              <p className="absolute bottom-3 left-3 text-[0.52rem] leading-[1.5] tracking-[0.1em] text-muted/55 uppercase">
                Illustrative network — not live tracking
              </p>
            </div>
          </div>

          <div
            id="logistics-node-brief"
            aria-live="polite"
            className="flex flex-col border border-accent/30 bg-muted p-[clamp(18px,2.4vw,30px)] text-foreground"
          >
            <div className="flex items-center justify-between gap-4 border-b border-foreground/15 pb-3">
              <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase">
                Node brief — {active.code}
              </p>
              <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")} / 05
              </p>
            </div>

            <div className="mt-[clamp(16px,2vw,24px)] flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2.5 text-[0.58rem] font-semibold tracking-[0.14em] text-primary uppercase">
                  <span aria-hidden="true" className="h-px w-6 bg-primary" />
                  Active capability
                </p>
                <h3 className="mt-2.5 font-sans text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.05] font-extrabold tracking-[-0.01em] uppercase [font-stretch:112%]">
                  {active.label}
                </h3>
              </div>
              <span className="shrink-0 border border-foreground/25 px-2 py-1 text-[0.5rem] font-semibold tracking-[0.1em] text-foreground/65 uppercase">
                {TYPE_LABELS[active.type]}
              </span>
            </div>

            <p className="mt-3 text-[0.88rem] leading-[1.6] text-foreground/70">
              {active.copy}
            </p>

            <ul className="mt-[clamp(14px,2vw,20px)] flex flex-wrap gap-1.5">
              {active.chips.map((chip) => (
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
                {active.connection}
              </p>
              <a
                href="/projects/development-pipeline"
                className="mt-[clamp(14px,2vw,20px)] inline-flex items-center gap-2 border-b border-primary pb-1 text-[0.68rem] font-semibold tracking-[0.1em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-primary"
              >
                View the pipeline
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="mt-5 border-t border-foreground/15 pt-4">
              <p className="text-[0.52rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase">
                Legend
              </p>
              <ul className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-2">
                {LEGEND.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-[0.56rem] leading-[1.4] text-foreground/65"
                  >
                    {item.type === "corridor" ? (
                      <span
                        aria-hidden="true"
                        className="h-px w-5 bg-primary"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className={cn(
                          "size-2.5 shrink-0 border border-primary",
                          item.type === "core" && "rounded-full bg-primary",
                          item.type === "interface" && "rotate-45",
                          item.type === "digital" && "border-dashed"
                        )}
                      />
                    )}
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-6 text-[0.6rem] leading-[1.5] text-muted/60">
          PLACEHOLDER — node copy, positions, capability imagery and roles are
          illustrative until approved sector content and photography are
          supplied. The schematic is not a live network or tracking map.
        </p>
      </div>
    </section>
  );
}
