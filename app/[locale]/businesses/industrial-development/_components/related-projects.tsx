import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";

// PLACEHOLDER — projects, stages and geographies are illustrative concepts,
// not a record of delivered work.
const PROJECTS: {
  id: string;
  title: string;
  stage: string;
  opportunity: string;
  geography: string;
  image: string;
  alt: string;
}[] = [
  {
    id: "PL-01",
    title: "Industrial Park Phase",
    stage: "Development",
    opportunity: "Joint venture",
    geography: "West Africa",
    image: "/placeholders/industry-facilities.png",
    alt: "Industrial park and shared utilities (placeholder image)",
  },
  {
    id: "PL-02",
    title: "Equipment Assembly Plant",
    stage: "Investment ready",
    opportunity: "Equity",
    geography: "East Africa",
    image: "/placeholders/industry-manufacturing.png",
    alt: "Equipment assembly line (placeholder image)",
  },
  {
    id: "PL-03",
    title: "Agro-Processing Equipment Line",
    stage: "Concept",
    opportunity: "PPP",
    geography: "Southern Africa",
    image: "/placeholders/industry-processing.png",
    alt: "Agro-processing equipment line (placeholder image)",
  },
];

export default function RelatedProjects() {
  return (
    <section
      aria-labelledby="industrial-projects-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                06 — Project dockets
              </p>
              <h2
                id="industrial-projects-title"
                className="mt-4 max-w-[16ch] font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                The next plant
                <br />
                starts here.
              </h2>
            </div>
            <a
              href="/projects/development-pipeline"
              className="inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent lg:self-auto"
            >
              View development pipeline
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-[clamp(28px,4vw,48px)] grid gap-[clamp(14px,2vw,22px)] lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href="/projects/development-pipeline"
                className="group flex h-full flex-col border border-foreground/15 bg-card transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-foreground/35"
              >
                <div className="relative aspect-[16/6] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-[1.03] motion-reduce:transform-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-sidebar/60 to-transparent"
                  />
                  <span className="absolute top-3 left-3 border border-accent/40 bg-sidebar/85 px-2 py-1 text-[0.56rem] font-semibold tracking-[0.12em] text-accent uppercase">
                    {project.stage}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute right-3 bottom-2 font-sans text-[2rem] leading-none font-extrabold tracking-[-0.04em] text-muted/35 tabular-nums [font-stretch:120%]"
                  >
                    {project.id.slice(-2)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-dashed border-foreground/20 px-[clamp(16px,2vw,24px)] py-2.5">
                  <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase">
                    Illustrative project
                  </p>
                  <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase tabular-nums">
                    {project.id}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-[clamp(16px,2vw,24px)]">
                  <h3 className="font-sans text-[clamp(1.1rem,1.9vw,1.45rem)] leading-[1.12] font-extrabold tracking-[-0.005em] uppercase [font-stretch:110%]">
                    {project.title}
                  </h3>

                  <dl className="mt-[clamp(16px,2vw,22px)] grid gap-px border border-foreground/15 bg-foreground/15 sm:grid-cols-3">
                    <div className="bg-card p-2.5">
                      <dt className="text-[0.54rem] font-semibold tracking-[0.12em] text-foreground/60 uppercase">
                        Stage
                      </dt>
                      <dd className="mt-1.5 text-[0.72rem] leading-[1.35] font-semibold text-foreground/75">
                        {project.stage}
                      </dd>
                    </div>
                    <div className="bg-card p-2.5">
                      <dt className="text-[0.54rem] font-semibold tracking-[0.12em] text-foreground/60 uppercase">
                        Opportunity
                      </dt>
                      <dd className="mt-1.5 text-[0.72rem] leading-[1.35] font-semibold text-foreground/75">
                        {project.opportunity}
                      </dd>
                    </div>
                    <div className="bg-card p-2.5">
                      <dt className="text-[0.54rem] font-semibold tracking-[0.12em] text-foreground/60 uppercase">
                        Geography
                      </dt>
                      <dd className="mt-1.5 text-[0.72rem] leading-[1.35] font-semibold text-foreground/75">
                        {project.geography}
                      </dd>
                    </div>
                  </dl>

                  <span className="mt-auto flex items-center justify-between gap-3 pt-[clamp(18px,2.4vw,26px)] text-[0.66rem] font-semibold tracking-[0.1em] text-foreground/65 uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:text-accent">
                    View pipeline
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-6 text-[0.62rem] leading-[1.5] text-foreground/60">
            PLACEHOLDER — these are illustrative project concepts with assumed
            stages, structures and geographies. They are not a record of
            delivered work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
