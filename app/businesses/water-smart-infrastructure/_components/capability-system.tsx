"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { getSector } from "@/lib/businesses";

const SECTOR = getSector("water-smart-infrastructure");

interface Detail {
  copy: string;
  applications: string[];
}

const DETAILS: Detail[] = [
  {
    copy: "Instrumented networks that treat water as live data: demand, pressure, quality and loss in one operating picture.",
    applications: ["Utilities", "Campuses", "Commercial estates"],
  },
  {
    copy: "Generation, pumping and treatment designed around solar, cutting fuel dependence and running cost from the supply chain.",
    applications: ["Off-grid supply", "Hybrid systems", "Municipal pumping"],
  },
  {
    copy: "Filtration and treatment sized to source quality and end use, from municipal supply to industrial process water.",
    applications: ["Municipal", "Industrial", "Institutional"],
  },
  {
    copy: "Pressure-managed networks and metering that move water where it is needed with minimal loss.",
    applications: ["Districts", "Estates", "Industry"],
  },
  {
    copy: "Sensors, telemetry and models that detect anomalies, forecast demand and support operators in real time.",
    applications: ["Remote operations", "Leak detection", "Demand planning"],
  },
  {
    copy: "Recovery and reuse loops for industry, irrigation and municipal systems, reducing draw on primary sources.",
    applications: ["Industry", "Irrigation", "Municipal"],
  },
  {
    copy: "Delivery models for cities, utilities, campuses, industry and commercial estates, structured around the operator.",
    applications: ["Municipalities", "Commercial", "Industrial"],
  },
];

const POSITIONS: { left: string; top: string }[] = [
  { left: "16%", top: "64%" },
  { left: "16%", top: "18%" },
  { left: "40%", top: "9%" },
  { left: "64%", top: "20%" },
  { left: "48%", top: "52%" },
  { left: "70%", top: "68%" },
  { left: "84%", top: "42%" },
];

const CAPABILITIES = SECTOR.capabilities.map((label, index) => ({
  label,
  no: String(index + 1).padStart(2, "0"),
  detail: DETAILS[index],
  position: POSITIONS[index],
}));

export default function CapabilitySystem() {
  const [active, setActive] = useState(0);
  const current = CAPABILITIES[active];

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(18px,3vw,40px)]">
          <div className="max-w-[58ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45" />
              02 — System capabilities
            </p>
            <h2
              id="capabilities-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              One system.
              <br />
              Seven capabilities.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              Every capability is a working part of the same water system — not
              a standalone service. Select a station to see what it covers.
            </p>
          </div>
          <a
            href="/innovation/wswis"
            className="inline-flex items-center gap-2 border-b border-primary/30 pb-1 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            The WSWIS flow
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-[clamp(30px,4.4vw,52px)] grid gap-px border border-accent/20 bg-accent/20 lg:grid-cols-[1.55fr_0.45fr]">
          <div className="relative overflow-hidden bg-sidebar">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(100,216,232,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(100,216,232,0.055) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-[20%] -left-[12%] h-[60%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.16),transparent_62%)] blur-[50px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-[16%] -bottom-[24%] h-[64%] w-[64%] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.12),transparent_62%)] blur-[50px]"
            />

            <div className="relative hidden min-h-[560px] lg:block">
              <span className="absolute top-5 left-6 text-[0.6rem] font-semibold tracking-[0.2em] text-accent/55 uppercase">
                Supply
              </span>
              <span className="absolute right-6 bottom-5 text-[0.6rem] font-semibold tracking-[0.2em] text-accent/55 uppercase">
                End use
              </span>
              <span className="absolute top-5 right-6 text-[0.6rem] font-semibold tracking-[0.2em] text-chart-4/65 uppercase">
                Digital layer
              </span>

              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M16 18 C24 12 31 8 40 9 C50 10 55 14 64 20 C72 26 78 33 84 42"
                  fill="none"
                  stroke="rgba(100,216,232,0.35)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M84 42 C90 56 82 70 70 68 C60 66 62 44 64 20"
                  fill="none"
                  stroke="rgba(100,216,232,0.2)"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M48 52 C44 40 42 22 40 9"
                  fill="none"
                  stroke="rgba(214,162,74,0.35)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M48 52 C54 42 59 30 64 20"
                  fill="none"
                  stroke="rgba(214,162,74,0.35)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M48 52 C62 48 74 44 84 42"
                  fill="none"
                  stroke="rgba(214,162,74,0.35)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M16 64 L16 18"
                  fill="none"
                  stroke="rgba(100,216,232,0.2)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M16 64 C28 60 38 58 48 52"
                  fill="none"
                  stroke="rgba(100,216,232,0.2)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M16 64 C40 78 56 76 70 68"
                  fill="none"
                  stroke="rgba(100,216,232,0.2)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M16 18 C24 12 31 8 40 9 C50 10 55 14 64 20 C72 26 78 33 84 42"
                  fill="none"
                  stroke="rgba(100,216,232,0.8)"
                  strokeWidth="1.5"
                  strokeDasharray="1.5 9"
                  vectorEffect="non-scaling-stroke"
                  className="motion-safe:animate-water-flow"
                />
              </svg>

              {CAPABILITIES.map((capability, index) => (
                <button
                  key={capability.label}
                  type="button"
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                  style={capability.position}
                  className={cn(
                    "group absolute z-10 flex w-[clamp(120px,11vw,170px)] -translate-x-1/2 -translate-y-1/2 flex-col gap-1.5 border px-3 py-2.5 text-left transition-[background-color,border-color,color,box-shadow] duration-(--transition-normal) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    active === index
                      ? "border-accent bg-accent text-sidebar shadow-[0_0_0_5px_rgba(100,216,232,0.14)]"
                      : "border-accent/25 bg-sidebar/85 text-muted hover:border-accent/70 hover:bg-sidebar-accent"
                  )}
                >
                  <span
                    className={cn(
                      "text-[0.56rem] font-semibold tracking-[0.18em] uppercase",
                      active === index ? "text-sidebar/65" : "text-accent/70"
                    )}
                  >
                    {capability.no}
                  </span>
                  <span className="font-sans text-[0.72rem] leading-[1.25] font-semibold tracking-[0.03em] uppercase [font-stretch:108%]">
                    {capability.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative flex flex-col p-[clamp(14px,2.4vw,22px)] lg:hidden">
              {CAPABILITIES.map((capability, index) => (
                <button
                  key={capability.label}
                  type="button"
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex w-full items-center gap-3 border-0 border-b border-b-accent/15 bg-transparent px-2 py-[14px] text-left transition-colors duration-(--transition-fast) ease-(--ease-standard) last:border-b-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                    active === index ? "text-accent" : "text-muted/80"
                  )}
                >
                  <span className="w-6 flex-none text-[0.6rem] font-semibold tracking-[0.14em] text-accent/65">
                    {capability.no}
                  </span>
                  <span className="flex-1 font-sans text-[0.82rem] leading-[1.3] font-semibold tracking-[0.03em] uppercase [font-stretch:108%]">
                    {capability.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-1.5 w-1.5 flex-none rounded-full transition-colors duration-(--transition-fast) ease-(--ease-standard)",
                      active === index ? "bg-accent" : "bg-accent/25"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          <div
            aria-live="polite"
            className="flex flex-col justify-between bg-sidebar-accent p-[clamp(22px,3.4vw,38px)] text-muted"
          >
            <div key={active} className="motion-safe:animate-slide-in">
              <p className="text-[0.64rem] font-semibold tracking-[0.2em] text-accent uppercase">
                {current.no} / 07
              </p>
              <h3 className="mt-4 font-sans text-[clamp(1.3rem,2.1vw,1.85rem)] leading-[1.08] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]">
                {current.label}
              </h3>
              <p className="mt-4 max-w-[42ch] text-[0.94rem] leading-[1.62] text-muted/78">
                {current.detail.copy}
              </p>
              <ul className="mt-7 flex list-none flex-wrap gap-2 p-0">
                {current.detail.applications.map((application) => (
                  <li
                    key={application}
                    className="rounded-[2px] border border-accent/25 px-[10px] py-[6px] text-[0.68rem] tracking-[0.04em] text-muted/80"
                  >
                    {application}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="/innovation/wswis"
              className="mt-10 inline-flex items-center gap-2 text-[0.74rem] font-semibold tracking-[0.08em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              How the system runs
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <p className="mt-[clamp(16px,2.2vw,24px)] max-w-[82ch] text-[0.74rem] leading-[1.6] text-muted-foreground/75">
          Scope capabilities, not a record of delivered projects. The WSWIS flow
          — solar, treatment, smart storage, intelligent distribution, digital
          monitoring, predictive maintenance and reliable access — is described
          on the{" "}
          <a
            href="/innovation/wswis"
            className="underline underline-offset-2 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
          >
            WSWIS page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
