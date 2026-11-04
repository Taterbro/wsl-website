"use client";

import { useState } from "react";

type Sector =
  | "all"
  | "water"
  | "energy"
  | "agriculture"
  | "technology"
  | "industry"
  | "logistics";

interface Project {
  sector: Exclude<Sector, "all">;
  stage: string;
  location: string;
  title: string;
  description: string;
  background: string;
}

const FILTERS: { key: Sector; label: string }[] = [
  { key: "all", label: "All" },
  { key: "water", label: "Water" },
  { key: "energy", label: "Energy" },
  { key: "agriculture", label: "Agriculture" },
  { key: "technology", label: "Technology" },
  { key: "industry", label: "Industry" },
  { key: "logistics", label: "Logistics" },
];

const PROJECTS: Project[] = [
  {
    sector: "water",
    stage: "Investment Ready",
    location: "Rwanda",
    title: "Kigali Smart Water Network",
    description:
      "Municipal distribution upgrade with digital metering, leak detection and solar-pumped supply.",
    background:
      "radial-gradient(90% 90% at 30% 10%, rgba(95, 227, 198, 0.6), transparent 60%), linear-gradient(150deg, #0f4c57, #06181f)",
  },
  {
    sector: "energy",
    stage: "Financing",
    location: "Ghana",
    title: "Accra Solar & Storage Hub",
    description:
      "Utility-scale solar with battery storage and hybrid controls serving industry and the grid.",
    background:
      "radial-gradient(90% 90% at 30% 10%, rgba(218, 156, 67, 0.62), transparent 60%), linear-gradient(150deg, #0f4c57, #06181f)",
  },
  {
    sector: "agriculture",
    stage: "Development",
    location: "Nigeria",
    title: "Lagos Cold-Chain & Agri-Processing",
    description:
      "Cold chain, processing and aggregation infrastructure reducing post-harvest loss.",
    background:
      "radial-gradient(90% 90% at 30% 10%, rgba(120, 200, 120, 0.55), transparent 60%), linear-gradient(150deg, #0f4c57, #06181f)",
  },
  {
    sector: "technology",
    stage: "Concept",
    location: "Kenya",
    title: "Nairobi Digital Infrastructure Campus",
    description:
      "Data, compute and innovation campus designed for regional digital demand.",
    background:
      "radial-gradient(90% 90% at 30% 10%, rgba(95, 227, 198, 0.45), transparent 60%), linear-gradient(150deg, #0f4c57, #06181f)",
  },
  {
    sector: "industry",
    stage: "Operational",
    location: "Morocco",
    title: "Casablanca Industrial Park",
    description:
      "Manufacturing and technology-localisation park serving domestic and export markets.",
    background:
      "radial-gradient(90% 90% at 30% 10%, rgba(160, 160, 175, 0.55), transparent 60%), linear-gradient(150deg, #0f4c57, #06181f)",
  },
  {
    sector: "logistics",
    stage: "Construction",
    location: "Tanzania",
    title: "Dar es Salaam Logistics Terminal",
    description:
      "Warehousing and cross-border trade terminal linking inland markets to port capacity.",
    background:
      "radial-gradient(90% 90% at 30% 10%, rgba(95, 180, 220, 0.55), transparent 60%), linear-gradient(150deg, #0f4c57, #06181f)",
  },
];

export default function ProjectGrid() {
  const [active, setActive] = useState<Sector>("all");

  const visible = PROJECTS.filter(
    (project) => active === "all" || project.sector === active
  );

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by sector"
        className="mt-[clamp(26px,4vw,40px)] mb-[34px] flex flex-wrap gap-2"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            type="button"
            aria-pressed={active === filter.key}
            onClick={() => setActive(filter.key)}
            className="cursor-pointer rounded-[2px] border border-[rgba(9,29,42,0.16)] bg-transparent px-4 py-[9px] text-[0.76rem] font-semibold tracking-[0.05em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:text-primary aria-pressed:border-foreground aria-pressed:bg-foreground aria-pressed:text-muted"
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
        {visible.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col bg-background"
          >
            <div className="relative aspect-16/10 overflow-hidden">
              <div
                className="absolute inset-0 scale-[1.03] transition-transform duration-(--transition-slower) ease-(--ease-standard) group-hover:scale-100"
                style={{ background: project.background }}
              />
              <span className="absolute top-4 left-4 border-l-2 border-accent bg-sidebar/82 px-3 py-[7px] text-[0.66rem] font-semibold tracking-[0.1em] text-muted uppercase">
                {project.stage}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 px-[22px] pt-[22px] pb-6">
              <span className="text-[0.72rem] tracking-[0.08em] text-muted-foreground uppercase">
                {project.location}
              </span>
              <h3 className="font-sans text-[1.12rem] leading-[1.1] font-bold tracking-[0.01em] uppercase [font-stretch:110%]">
                {project.title}
              </h3>
              <p className="flex-1 text-[0.88rem] leading-[1.5] text-muted-foreground">
                {project.description}
              </p>
              <div className="flex items-center justify-between gap-3 border-t border-[rgba(9,29,42,0.16)] pt-[14px] text-[0.72rem] tracking-[0.03em]">
                <span className="font-semibold text-primary">
                  Public summary available
                </span>
                <a
                  href="#partner"
                  className="font-semibold text-foreground transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
                >
                  Request information
                </a>
              </div>
            </div>
          </article>
        ))}
        {visible.length === 0 && (
          <p className="col-span-full bg-muted p-10 text-[0.95rem] text-muted-foreground">
            No projects match this sector yet. Try another sector, or{" "}
            <a href="#partner" className="underline">
              submit a project
            </a>
            .
          </p>
        )}
      </div>
    </>
  );
}
