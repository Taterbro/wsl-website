"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getSector } from "@/lib/businesses";

const SECTOR = getSector("renewable-energy");

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
    copy: "Utility-scale and rooftop solar arrays shaped around irradiance, grid conditions and the load they serve.",
    applications: ["Ground-mount", "Rooftop", "Utility"],
    image: "/placeholders/group-sector-energy.png",
    alt: "Solar generation array at golden hour (placeholder image)",
  },
  {
    copy: "Generation placed close to demand: campuses, industrial parks, towns and remote operations that cannot wait on the grid.",
    applications: ["Campuses", "Industrial parks", "Towns"],
    image: "/placeholders/district-sustainable.png",
    alt: "Sustainable urban district with distributed power infrastructure (placeholder image)",
  },
  {
    copy: "Battery systems that shift supply, firm output and keep critical loads running after sunset or through grid instability.",
    applications: ["Firming", "Peak shifting", "Backup"],
    image: "/placeholders/industry-facilities.png",
    alt: "Industrial energy facility with storage infrastructure (placeholder image)",
  },
  {
    copy: "Solar paired with storage, back-up generation or water systems so supply keeps working when one source does not.",
    applications: ["Solar + storage", "Solar + water", "Grid backup"],
    image: "/placeholders/group-sector-water.png",
    alt: "Solar-powered water and energy infrastructure (placeholder image)",
  },
  {
    copy: "Grid connection, metering and balance-of-system works engineered for long-life renewable supply.",
    applications: ["Grid connection", "Metering", "Balance of system"],
    image: "/placeholders/group-sector-climate.png",
    alt: "Climate-resilient renewable infrastructure landscape (placeholder image)",
  },
  {
    copy: "Power models sized to industrial load or community demand, with operating support built into the structure.",
    applications: ["Industry", "Communities", "Institutions"],
    image: "/placeholders/group-sector-industry.png",
    alt: "Industrial operations powered by on-site energy (placeholder image)",
  },
];

const CAPABILITIES = SECTOR.capabilities.map((label, index) => ({
  label,
  no: String(index + 1).padStart(2, "0"),
  detail: DETAILS[index],
}));

export default function CapabilityDeck() {
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
          <div className="max-w-[62ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              02 — Capability set
            </p>
            <h2
              id="capabilities-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Generation,
              <br />
              storage, dispatch.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              Six capability areas, designed as one energy system rather than
              six separate services. Select a layer to see what it covers.
            </p>
          </div>
          <a
            href="/businesses/water-smart-infrastructure"
            className="inline-flex items-center gap-2 border-b border-primary/30 pb-1 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Solar-powered water
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-[clamp(30px,4.4vw,52px)] grid gap-px border border-accent/20 bg-accent/20 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="order-2 flex flex-col bg-sidebar text-muted lg:order-1">
            <div className="border-b border-accent/15 p-[clamp(18px,2.4vw,28px)]">
              <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-accent uppercase">
                Capabilities / 06
              </p>
              <p className="mt-2 max-w-[34ch] text-[0.82rem] leading-[1.55] text-muted/60">
                Choose a capability to preview its scope.
              </p>
            </div>

            <div className="flex flex-col">
              {CAPABILITIES.map((capability, index) => (
                <button
                  key={capability.label}
                  type="button"
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                  className={cn(
                    "group flex items-center gap-4 border-0 border-b border-b-accent/12 bg-transparent px-[clamp(16px,2.4vw,26px)] py-[clamp(13px,1.6vw,17px)] text-left transition-colors duration-(--transition-fast) ease-(--ease-standard) last:border-b-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                    active === index
                      ? "bg-sidebar-accent text-accent"
                      : "text-muted/78 hover:bg-sidebar-accent/55 hover:text-muted"
                  )}
                >
                  <span
                    className={cn(
                      "w-6 flex-none text-[0.6rem] font-semibold tracking-[0.14em]",
                      active === index ? "text-accent" : "text-accent/55"
                    )}
                  >
                    {capability.no}
                  </span>
                  <span className="flex-1 font-sans text-[0.88rem] leading-[1.28] font-semibold tracking-[0.03em] uppercase [font-stretch:108%]">
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

            <p className="mt-auto border-t border-accent/15 p-[clamp(16px,2.4vw,26px)] text-[0.7rem] leading-[1.55] text-muted/45">
              Scope capabilities, not a record of delivered projects.
            </p>
          </div>

          <div className="relative order-1 min-h-[clamp(360px,48vw,620px)] overflow-hidden bg-sidebar text-muted lg:order-2">
            {CAPABILITIES.map((capability, index) => (
              <Image
                key={capability.label}
                src={capability.detail.image}
                alt={active === index ? capability.detail.alt : ""}
                aria-hidden={active !== index}
                fill
                sizes="(max-width: 1024px) 100vw, 62vw"
                className={cn(
                  "object-cover transition-opacity duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transition-none",
                  active === index ? "opacity-100" : "opacity-0"
                )}
              />
            ))}

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-b from-sidebar/70 via-sidebar/5 to-sidebar/95"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-r from-sidebar/45 via-transparent to-transparent"
            />

            <div className="relative flex h-full flex-col justify-between p-[clamp(18px,3vw,34px)]">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-accent uppercase">
                  Renewable Energy
                </p>
                <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted/55 uppercase">
                  {current.no} / 06
                </p>
              </div>

              <div
                key={active}
                aria-live="polite"
                className="max-w-[44ch] motion-safe:animate-slide-in motion-reduce:animate-none"
              >
                <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-accent uppercase">
                  Capability {current.no}
                </p>
                <h3 className="mt-3 font-sans text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]">
                  {current.label}
                </h3>
                <p className="mt-4 text-[clamp(0.92rem,1.2vw,1.02rem)] leading-[1.6] text-muted/82">
                  {current.detail.copy}
                </p>
                <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
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
        </div>
      </div>
    </section>
  );
}
