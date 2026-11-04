import Link from "next/link";
import type { Project, ProjectStage } from "@/lib/projects";
import { PIPELINE_STAGES } from "../_data";

interface PipelineGeographyProps {
  projects: Project[];
}

const STAGE_POSITION: Record<ProjectStage, number> = {
  Concept: 0,
  Development: 1,
  "Investment Ready": 2,
  Financing: 3,
  Construction: 4,
  Operational: 5,
};

export default function PipelineGeography({
  projects,
}: PipelineGeographyProps) {
  const groups = new Map<string, Project[]>();
  for (const project of projects) {
    const list = groups.get(project.country) ?? [];
    list.push(project);
    groups.set(project.country, list);
  }

  const markets = Array.from(groups.entries())
    .map(([country, countryProjects]) => {
      const stages = Array.from(
        new Set(countryProjects.map((project) => project.stage))
      ).sort((a, b) => STAGE_POSITION[a] - STAGE_POSITION[b]);
      return { country, projects: countryProjects, stages };
    })
    .sort(
      (a, b) =>
        b.projects.length - a.projects.length ||
        a.country.localeCompare(b.country)
    );

  return (
    <section
      aria-labelledby="pipeline-geography-title"
      className="border-t border-border bg-secondary/35 py-[clamp(56px,8vw,104px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
              Pipeline geography
            </p>
            <h2
              id="pipeline-geography-title"
              className="mt-3 max-w-[22ch] font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Where the pipeline is forming
            </h2>
          </div>
          <p className="max-w-[42ch] text-[0.86rem] leading-[1.6] text-muted-foreground">
            Markets with projects currently between concept and financing. This
            is not a statement of operating presence.
          </p>
        </div>

        <ul className="mt-8 border-t border-border">
          {markets.map((market) => (
            <li
              key={market.country}
              className="group border-b border-border transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:bg-background/60"
            >
              <Link
                href={`/projects/portfolio?country=${encodeURIComponent(
                  market.country
                )}`}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-5 py-[clamp(18px,2.4vw,26px)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:gap-8"
              >
                <span className="font-sans text-[clamp(1.8rem,3vw,2.6rem)] leading-none font-extrabold text-primary/85">
                  {market.projects.length.toString().padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-sans text-[clamp(1.2rem,2.2vw,1.7rem)] leading-[1.05] font-bold uppercase [font-stretch:112%]">
                    {market.country}
                  </span>
                  <span className="mt-2 flex flex-wrap gap-1.5">
                    {market.stages.map((stage) => (
                      <span
                        key={stage}
                        className="rounded-[2px] border border-primary/20 bg-background px-2 py-0.5 text-[0.62rem] font-medium tracking-[0.04em] text-muted-foreground uppercase"
                      >
                        {stage}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="flex items-center gap-3 text-[0.66rem] font-semibold tracking-[0.06em] text-muted-foreground uppercase">
                  <span className="hidden sm:inline">View in portfolio</span>
                  <span
                    aria-hidden
                    className="text-[1rem] text-primary/50 transition-transform duration-(--transition-normal) ease-(--ease-standard) group-hover:translate-x-1 group-hover:text-primary"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.7rem] tracking-[0.04em] text-muted-foreground/75 uppercase">
          <span>Stage order:</span>
          {PIPELINE_STAGES.map((definition, index) => (
            <span key={definition.stage}>
              {index + 1}. {definition.stage}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
