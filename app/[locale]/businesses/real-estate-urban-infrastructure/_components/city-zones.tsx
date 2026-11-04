"use client";

import Image from "next/image";
import { useState } from "react";
import { getSector } from "@/lib/businesses";
import { cn } from "@/lib/utils";

// PLACEHOLDER — capability imagery, copy and interfaces are illustrative until
// approved sector content and photography are supplied.
type ZoneDetail = {
  code: string;
  copy: string;
  chips: string[];
  connection: string;
  image: string;
  alt: string;
};

const DETAILS: Record<string, ZoneDetail> = {
  "Affordable housing": {
    code: "Z-01",
    copy: "Housing models that remain accessible as cities grow.",
    chips: ["Build-to-suit", "Mixed tenure", "Rent-to-own"],
    connection: "Urban infrastructure · Sustainable buildings",
    image: "/placeholders/district-housing.png",
    alt: "Urban housing and mixed-tenure development (placeholder image)",
  },
  "Smart cities": {
    code: "Z-02",
    copy: "Connected districts with shared data, services and operations.",
    chips: ["District platforms", "Mobility", "Utilities"],
    connection: "Technology & digital infrastructure · Urban infrastructure",
    image: "/placeholders/district-smart-city.png",
    alt: "Smart city district with connected services (placeholder image)",
  },
  "Commercial development": {
    code: "Z-03",
    copy: "Commercial districts designed for changing work and trade.",
    chips: ["Offices", "Retail", "Mixed-use"],
    connection: "Logistics & supply chains · Smart cities",
    image: "/placeholders/district-commercial.png",
    alt: "Commercial district and mixed-use buildings (placeholder image)",
  },
  "Urban infrastructure": {
    code: "Z-04",
    copy: "The streets, utilities and public realm that make density work.",
    chips: ["Utilities", "Public realm", "Mobility"],
    connection: "Water · Energy · Mobility",
    image: "/placeholders/district-panorama.png",
    alt: "Urban infrastructure and public realm (placeholder image)",
  },
  "Sustainable buildings": {
    code: "Z-05",
    copy: "Buildings designed to perform across their whole life cycle.",
    chips: ["Energy", "Water", "Materials"],
    connection: "Climate & ESG · Renewable energy",
    image: "/placeholders/district-sustainable.png",
    alt: "Sustainable buildings and green urban systems (placeholder image)",
  },
};

const SPANS = [
  "col-span-2 row-span-1 lg:row-span-2",
  "col-span-2",
  "col-span-1 lg:col-span-2",
  "col-span-1 lg:col-span-2",
  "col-span-2",
];

export default function CityZones() {
  const sector = getSector("real-estate-urban-infrastructure");
  const zones = sector.capabilities.map((label) => ({
    label,
    ...DETAILS[label],
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const active = zones[activeIndex];

  return (
    <section
      id="capabilities"
      aria-labelledby="urban-zones-title"
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
              02 — City zones
            </p>
            <h2
              id="urban-zones-title"
              className="mt-4 max-w-[15ch] font-sans text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Five zones.
              <br />
              One city.
            </h2>
          </div>

          <div className="max-w-[46ch] lg:text-right">
            <p className="text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted/70">
              Select a zone to open its brief. Each capability is a layer of the
              same urban system, not a standalone product.
            </p>
            <a
              href="/projects/development-pipeline"
              className="mt-5 inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent"
            >
              Development pipeline
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-[clamp(28px,4vw,48px)] grid gap-[clamp(20px,3vw,36px)] xl:grid-cols-[1.4fr_0.6fr]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-muted/60 uppercase">
                Select a zone
              </p>
              <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-muted/60 uppercase tabular-nums">
                05 zones — live brief
              </p>
            </div>

            <div
              role="group"
              aria-label="Urban capability zones"
              className="mt-3 grid auto-rows-[clamp(148px,15vw,200px)] grid-cols-2 gap-px border border-accent/25 bg-accent/25 lg:grid-cols-6"
            >
              {zones.map((zone, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={zone.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    aria-controls="urban-zone-detail"
                    className={cn(
                      "group relative overflow-hidden text-left focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset focus-visible:outline-none",
                      SPANS[index],
                      isActive && "ring-2 ring-accent ring-inset"
                    )}
                  >
                    <Image
                      src={zone.image}
                      alt={zone.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      className={cn(
                        "object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) motion-reduce:transform-none",
                        isActive
                          ? "scale-105"
                          : "group-hover:scale-[1.04]"
                      )}
                    />
                    <div
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-0 transition-colors duration-(--transition-normal) ease-(--ease-standard)",
                        isActive
                          ? "bg-sidebar/55"
                          : "bg-sidebar/75 group-hover:bg-sidebar/60"
                      )}
                    />

                    <div className="relative z-10 flex h-full flex-col justify-between p-[clamp(12px,1.6vw,20px)]">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[0.56rem] font-semibold tracking-[0.14em] text-accent uppercase tabular-nums">
                          {zone.code}
                        </span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            "grid size-5 place-items-center border text-[0.6rem] leading-none",
                            isActive
                              ? "border-accent bg-accent text-sidebar"
                              : "border-muted/40 text-muted/70"
                          )}
                        >
                          {isActive ? "•" : "+"}
                        </span>
                      </div>

                      <div>
                        <span className="block max-w-[20ch] font-sans text-[clamp(0.85rem,1.4vw,1.15rem)] leading-[1.1] font-extrabold tracking-[0.005em] uppercase [font-stretch:108%]">
                          {zone.label}
                        </span>
                        <span
                          className={cn(
                            "mt-1.5 block text-[0.56rem] font-semibold tracking-[0.12em] uppercase",
                            isActive ? "text-accent" : "text-muted/65"
                          )}
                        >
                          {isActive ? "Brief open" : "Open brief"}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="urban-zone-detail"
            aria-live="polite"
            className="flex flex-col border border-accent/30 bg-muted p-[clamp(18px,2.4vw,30px)] text-foreground"
          >
            <div className="flex items-center justify-between gap-4 border-b border-foreground/15 pb-3">
              <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase">
                Zone brief — {active.code}
              </p>
              <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")} / 05
              </p>
            </div>

            <p className="mt-[clamp(16px,2vw,24px)] flex items-center gap-2.5 text-[0.58rem] font-semibold tracking-[0.14em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-primary" />
              Active capability
            </p>
            <h3 className="mt-2.5 font-sans text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.05] font-extrabold tracking-[-0.01em] uppercase [font-stretch:112%]">
              {active.label}
            </h3>
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
                See the pipeline
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-[0.6rem] leading-[1.5] text-muted/60">
          PLACEHOLDER — zone copy, interfaces and imagery are illustrative until
          approved sector content and photography are supplied.
        </p>
      </div>
    </section>
  );
}
