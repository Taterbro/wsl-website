"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getSector } from "@/lib/businesses";

const SECTOR = getSector("agriculture-food-systems");

interface Detail {
  copy: string;
  applications: string[];
  image: string;
  alt: string;
}

// PLACEHOLDER — imagery and scope detail are illustrative until approved
// sector photography and capability copy are supplied.
const DETAILS: Detail[] = [
  {
    copy: "Irrigation, storage and field infrastructure that keeps production moving beyond the harvest.",
    applications: ["Irrigation", "On-farm storage", "Access roads"],
    image: "/placeholders/group-sector-agriculture.png",
    alt: "Agricultural field and production infrastructure (placeholder image)",
  },
  {
    copy: "Processing capacity placed close to production, sized to local supply and end markets.",
    applications: ["Milling", "Packing", "Value addition"],
    image: "/placeholders/industry-processing.png",
    alt: "Agricultural processing facility (placeholder image)",
  },
  {
    copy: "Sensors, data and advisory tools that make yield, water and inputs measurable.",
    applications: ["Remote sensing", "Farm data", "Advisory"],
    image: "/placeholders/story-field-digital.png",
    alt: "Digital technology deployed in an agricultural field (placeholder image)",
  },
  {
    copy: "Supply models that improve availability and affordability across communities and institutions.",
    applications: ["Community supply", "Institutions", "Market access"],
    image: "/placeholders/vision-impact.png",
    alt: "Community food supply and impact (placeholder image)",
  },
  {
    copy: "Cold storage and temperature-controlled movement that cut post-harvest loss.",
    applications: ["Cold storage", "Reefer transport", "Distribution"],
    image: "/placeholders/logistics-hub.png",
    alt: "Cold-chain warehouse and distribution infrastructure (placeholder image)",
  },
  {
    copy: "Water-efficient, resilient production systems designed for changing rainfall and heat.",
    applications: ["Water efficiency", "Soil health", "Climate resilience"],
    image: "/placeholders/group-sector-climate.png",
    alt: "Climate-resilient agricultural landscape (placeholder image)",
  },
];

const STAGES = SECTOR.capabilities.map((label, index) => ({
  label,
  no: String(index + 1).padStart(2, "0"),
  detail: DETAILS[index],
}));

export default function CapabilityJourney() {
  const [active, setActive] = useState(0);
  const current = STAGES[active];

  return (
    <section
      id="capabilities"
      aria-labelledby="agriculture-capabilities-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(18px,3vw,40px)]">
          <div className="max-w-[60ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              02 — Field to market
            </p>
            <h2
              id="agriculture-capabilities-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Six links in
              <br />
              one chain.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              From field infrastructure to the market shelf, each capability is
              a working link in the same food system. Select a link to see its
              scope.
            </p>
          </div>
          <a
            href="/businesses/logistics-supply-chains"
            className="inline-flex items-center gap-2 border-b border-primary/30 pb-1 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Cold chain &amp; logistics
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-[clamp(30px,4.4vw,52px)] border border-accent/20 bg-sidebar">
          <div
            role="group"
            aria-label="Field-to-market capabilities"
            className="flex gap-px overflow-x-auto bg-accent/20 md:grid md:grid-cols-6 md:overflow-visible"
          >
            {STAGES.map((stage, index) => (
              <button
                key={stage.label}
                type="button"
                aria-pressed={active === index}
                onClick={() => setActive(index)}
                className={cn(
                  "flex min-w-[168px] shrink-0 flex-col gap-2 border-0 px-[clamp(12px,1.6vw,18px)] py-[clamp(14px,1.8vw,20px)] text-left transition-colors duration-(--transition-fast) ease-(--ease-standard) md:min-w-0 md:shrink focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                  active === index
                    ? "bg-accent text-sidebar"
                    : "bg-sidebar text-muted/72 hover:bg-sidebar-accent hover:text-muted"
                )}
              >
                <span
                  className={cn(
                    "text-[0.58rem] font-semibold tracking-[0.18em] uppercase",
                    active === index ? "text-sidebar/60" : "text-accent/65"
                  )}
                >
                  {stage.no}
                </span>
                <span className="font-sans text-[0.72rem] leading-[1.25] font-semibold tracking-[0.03em] uppercase [font-stretch:108%]">
                  {stage.label}
                </span>
              </button>
            ))}
          </div>

          <div className="relative mt-px min-h-[clamp(460px,52vw,620px)] overflow-hidden">
            {STAGES.map((stage, index) => (
              <Image
                key={stage.label}
                src={stage.detail.image}
                alt={active === index ? stage.detail.alt : ""}
                aria-hidden={active !== index}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className={cn(
                  "object-cover transition-opacity duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transition-none",
                  active === index ? "opacity-100" : "opacity-0"
                )}
              />
            ))}

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/45 to-sidebar/25"
            />

            <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-[clamp(16px,2.4vw,30px)]">
              <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-accent uppercase">
                Field-to-market
              </p>
              <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted/60 uppercase">
                Link {current.no} / 06
              </p>
            </div>

            <div
              key={active}
              aria-live="polite"
              className="absolute inset-x-0 bottom-0 grid gap-[clamp(14px,2.4vw,30px)] p-[clamp(18px,3vw,38px)] text-muted motion-safe:animate-slide-in motion-reduce:animate-none lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
            >
              <div>
                <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-accent uppercase">
                  Capability {current.no}
                </p>
                <h3 className="mt-3 max-w-[18ch] font-sans text-[clamp(1.6rem,3.6vw,2.9rem)] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]">
                  {current.label}
                </h3>
                <p className="mt-4 max-w-[52ch] text-[clamp(0.92rem,1.2vw,1.02rem)] leading-[1.6] text-muted/82">
                  {current.detail.copy}
                </p>
              </div>
              <ul className="flex list-none flex-wrap gap-2 p-0 lg:justify-end">
                {current.detail.applications.map((application) => (
                  <li
                    key={application}
                    className="rounded-[2px] border border-accent/30 bg-sidebar/45 px-[10px] py-[6px] text-[0.68rem] tracking-[0.04em] text-muted/85 backdrop-blur-[3px]"
                  >
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-[clamp(16px,2.2vw,24px)] max-w-[82ch] text-[0.72rem] leading-[1.6] text-muted-foreground/70">
          Scope capabilities, not a record of delivered projects. Each link
          describes an area of work, not completed capacity.
        </p>
      </div>
    </section>
  );
}
