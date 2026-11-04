import type { Project } from "@/lib/projects";
import { SDG_LABELS, STAGE_ORDER } from "../_data";

interface FlagshipDossierProps {
  project: Project;
  sectorName: string;
}

export default function FlagshipDossier({
  project,
  sectorName,
}: FlagshipDossierProps) {
  const currentStage = STAGE_ORDER.indexOf(project.stage);

  return (
    <section
      aria-labelledby="flagship-dossier-title"
      className="bg-sidebar py-[clamp(60px,9vw,120px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Dossier 01 · Lead flagship
            </p>
            <h2
              id="flagship-dossier-title"
              className="mt-3 max-w-[24ch] font-sans text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              Inside the
              <br />
              lead project
            </h2>
          </div>
          <p className="max-w-[40ch] text-[0.84rem] leading-[1.6] text-muted/60">
            {project.name}
            <span className="mt-1 block text-[0.72rem] tracking-[0.06em] uppercase">
              {sectorName} · {project.country}
            </span>
          </p>
        </div>

        <div className="mt-[clamp(32px,5vw,56px)] grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-3">
            <div className="border border-muted/15 bg-sidebar-accent/30 p-[clamp(20px,3vw,32px)]">
              <p className="font-sans text-[0.68rem] font-semibold tracking-[0.12em] text-chart-4 uppercase">
                01 · The challenge
              </p>
              <p className="mt-3 text-[clamp(1.05rem,1.7vw,1.34rem)] leading-[1.5] text-muted/85">
                {project.problem}
              </p>
            </div>

            <div aria-hidden className="flex items-center gap-3 pl-6">
              <span className="h-8 w-px bg-accent/40" />
              <span className="font-sans text-[1rem] text-accent">↓</span>
              <span className="h-px flex-1 bg-accent/20" />
            </div>

            <div className="border border-accent/40 bg-accent/5 p-[clamp(20px,3vw,32px)]">
              <p className="font-sans text-[0.68rem] font-semibold tracking-[0.12em] text-accent uppercase">
                02 · Waterlight response
              </p>
              <p className="mt-3 text-[clamp(1.05rem,1.7vw,1.34rem)] leading-[1.5] text-muted/85">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="border border-muted/15 p-[clamp(20px,3vw,32px)]">
              <h3 className="font-sans text-[0.68rem] font-semibold tracking-[0.12em] text-muted/55 uppercase">
                Technology
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technology.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-[2px] border border-accent/30 bg-accent/5 px-3 py-1.5 text-[0.76rem] text-accent"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-muted/15 p-[clamp(20px,3vw,32px)]">
              <h3 className="font-sans text-[0.68rem] font-semibold tracking-[0.12em] text-muted/55 uppercase">
                SDG alignment
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.sdgs.map((sdg) => (
                  <li
                    key={sdg}
                    className="flex items-baseline gap-3 border-l-2 border-accent/50 pl-3"
                  >
                    <span className="font-sans text-[0.92rem] font-bold text-accent">
                      {sdg.toString().padStart(2, "0")}
                    </span>
                    <span className="text-[0.78rem] leading-[1.4] text-muted/70">
                      {SDG_LABELS[sdg] ?? "Sustainable development goal"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-muted/15 p-[clamp(20px,3vw,32px)]">
              <h3 className="font-sans text-[0.68rem] font-semibold tracking-[0.12em] text-muted/55 uppercase">
                Development path
              </h3>
              <ol className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {STAGE_ORDER.map((stage, index) => {
                  const isCurrent = index === currentStage;
                  const isPast = index < currentStage;
                  return (
                    <li
                      key={stage}
                      aria-current={isCurrent ? "step" : undefined}
                      className={
                        isCurrent
                          ? "rounded-[2px] border border-accent bg-accent/10 px-2.5 py-2"
                          : isPast
                            ? "rounded-[2px] border border-muted/15 px-2.5 py-2"
                            : "rounded-[2px] border border-muted/10 px-2.5 py-2 opacity-55"
                      }
                    >
                      <span
                        className={
                          isCurrent
                            ? "block font-sans text-[0.6rem] font-semibold tracking-[0.08em] text-accent"
                            : "block font-sans text-[0.6rem] font-semibold tracking-[0.08em] text-muted/40"
                        }
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span
                        className={
                          isCurrent
                            ? "mt-0.5 block text-[0.72rem] font-semibold text-accent"
                            : "mt-0.5 block text-[0.72rem] text-muted/70"
                        }
                      >
                        {stage}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-[84ch] text-[0.72rem] leading-[1.6] text-muted/45">
          Restricted fields — partner names, business model and expected impact —
          are withheld from this public summary until written approval is in
          place. Figures and locations are placeholders.
        </p>
      </div>
    </section>
  );
}
