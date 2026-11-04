import Link from "next/link";
import type { Project } from "@/lib/projects";
import { getSectorName } from "@/lib/projects";
import { PIPELINE_STAGES } from "../_data";

interface PipelineBoardProps {
  projects: Project[];
}

export default function PipelineBoard({ projects }: PipelineBoardProps) {
  const columns = PIPELINE_STAGES.map((definition, index) => ({
    ...definition,
    index,
    projects: projects.filter((project) => project.stage === definition.stage),
  }));

  return (
    <section
      aria-labelledby="pipeline-board-title"
      className="bg-sidebar py-[clamp(56px,8vw,104px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Staged board
            </p>
            <h2
              id="pipeline-board-title"
              className="mt-3 font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              From concept to financing
            </h2>
          </div>
          <p className="max-w-[40ch] text-[0.8rem] leading-[1.55] text-muted/60">
            Each column is a stage gate. A project moves forward only when the
            evidence for the next stage is in place.
          </p>
        </div>

        <div className="mt-[clamp(28px,4vw,44px)] grid gap-px border border-accent/15 bg-accent/15 lg:grid-cols-4">
          {columns.map((column) => (
            <div
              key={column.stage}
              className="flex flex-col bg-sidebar p-[clamp(16px,2.2vw,22px)]"
            >
              <div className="border-b border-accent/15 pb-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-sans text-[0.64rem] font-semibold tracking-[0.1em] text-muted/40">
                    Stage {(column.index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[1.7rem] leading-none font-extrabold text-accent">
                    {column.projects.length.toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 font-sans text-[1.02rem] leading-[1.05] font-bold uppercase [font-stretch:110%]">
                  {column.stage}
                </h3>
                <p className="mt-2 text-[0.74rem] leading-[1.5] text-muted/50">
                  {column.description}
                </p>
              </div>

              <div className="mt-4 flex flex-1 flex-col gap-3">
                {column.projects.length > 0 ? (
                  column.projects.map((project) => (
                    <article
                      key={project.id}
                      className="group border-l-2 border-accent/40 bg-sidebar-accent/25 p-3.5 transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:bg-sidebar-accent/45"
                    >
                      <p className="text-[0.62rem] font-semibold tracking-[0.08em] text-muted/50 uppercase">
                        {project.country} · {project.region}
                      </p>
                      <h4 className="mt-2 font-sans text-[0.98rem] leading-[1.18] font-bold uppercase [font-stretch:108%]">
                        {project.name}
                      </h4>
                      <p className="mt-2 line-clamp-3 text-[0.74rem] leading-[1.55] text-muted/60">
                        {project.summary}
                      </p>
                      <p className="mt-3 text-[0.64rem] tracking-[0.05em] text-muted/45 uppercase">
                        {getSectorName(project.sectorSlug)}
                      </p>
                      <dl className="mt-3 grid grid-cols-2 gap-2 border-t border-accent/15 pt-3">
                        <div>
                          <dt className="text-[0.56rem] tracking-[0.08em] text-muted/40 uppercase">
                            Opportunity
                          </dt>
                          <dd className="mt-0.5 text-[0.7rem] font-semibold text-muted/80">
                            {project.opportunityType}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[0.56rem] tracking-[0.08em] text-muted/40 uppercase">
                            Indicative
                          </dt>
                          <dd className="mt-0.5 text-[0.7rem] font-semibold text-muted/80">
                            {project.investmentSize}
                          </dd>
                        </div>
                      </dl>
                      <Link
                        href={`/partner-with-us/investors?source=pipeline&project=${project.slug}`}
                        className="mt-3 inline-flex items-center gap-1.5 font-sans text-[0.64rem] font-semibold tracking-[0.06em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        Request information
                        <span aria-hidden>→</span>
                        <span className="sr-only"> about {project.name}</span>
                      </Link>
                    </article>
                  ))
                ) : (
                  <div className="flex flex-1 items-center justify-center rounded-[2px] border border-dashed border-accent/20 px-4 py-8 text-center">
                    <p className="text-[0.72rem] leading-[1.5] text-muted/40">
                      No approved projects at this stage.
                      <span className="mt-1 block text-[0.64rem] tracking-[0.05em] uppercase">
                        Financing-ready entries publish here.
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-[64ch] text-[0.74rem] leading-[1.55] text-muted/45">
            Projects leave this board once construction begins. Public entries
            show approved summaries only; partner names, business models and
            expected impact remain withheld until approved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects/project-map"
              className="font-sans text-[0.68rem] font-semibold tracking-[0.08em] text-muted/70 uppercase underline decoration-muted/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Project map
            </Link>
            <Link
              href="/projects/portfolio"
              className="font-sans text-[0.68rem] font-semibold tracking-[0.08em] text-muted/70 uppercase underline decoration-muted/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
