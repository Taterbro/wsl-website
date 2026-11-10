"use client";

import { useState } from "react";
import type { Project } from "@/lib/cms/generated";

const FALLBACK_BACKGROUND = "linear-gradient(150deg, #0f4c57, #06181f)";

function toBackground(project: Project): string {
  return project.background
    ? `linear-gradient(150deg, rgba(6, 24, 31, 0.35), rgba(6, 24, 31, 0.7)), url(${project.background.url}) center/cover no-repeat`
    : FALLBACK_BACKGROUND;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const sectors: string[] = [];
  for (const project of projects) {
    const sector = project.sector.trim();
    if (sector && !sectors.includes(sector)) sectors.push(sector);
  }

  const [active, setActive] = useState("all");

  const visible = projects.filter(
    (project) => active === "all" || project.sector === active
  );

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by sector"
        className="mt-[clamp(26px,4vw,40px)] mb-[34px] flex flex-wrap gap-2"
      >
        {["all", ...sectors].map((sector) => (
          <button
            key={sector}
            type="button"
            aria-pressed={active === sector}
            onClick={() => setActive(sector)}
            className="cursor-pointer rounded-[2px] border border-[rgba(9,29,42,0.16)] bg-transparent px-4 py-[9px] text-[0.76rem] font-semibold tracking-[0.05em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:text-primary aria-pressed:border-foreground aria-pressed:bg-foreground aria-pressed:text-muted"
          >
            {sector === "all" ? "All" : sector}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
        {visible.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col bg-background"
          >
            <div className="relative aspect-16/10 overflow-hidden">
              <div
                className="absolute inset-0 scale-[1.03] transition-transform duration-(--transition-slower) ease-(--ease-standard) group-hover:scale-100"
                style={{ background: toBackground(project) }}
              />
              <span className="absolute top-4 left-4 border-l-2 border-accent bg-sidebar/82 px-3 py-[7px] text-[0.66rem] font-semibold tracking-[0.1em] text-muted uppercase">
                {project.stage || project.investment_status}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 px-[22px] pt-[22px] pb-6">
              <span className="text-[0.72rem] tracking-[0.08em] text-muted-foreground uppercase">
                {project.location || project.country}
              </span>
              <h3 className="font-sans text-[1.12rem] leading-[1.1] font-bold tracking-[0.01em] uppercase [font-stretch:110%]">
                {project.title || project.postTitle}
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
