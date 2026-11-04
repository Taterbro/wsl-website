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
    title: "Riverfront Mixed-Use District",
    stage: "Development",
    opportunity: "JV",
    geography: "West Africa",
    image: "/placeholders/district-commercial.png",
    alt: "Riverfront commercial and mixed-use district (placeholder image)",
  },
  {
    id: "PL-02",
    title: "Urban Housing Phase",
    stage: "Investment ready",
    opportunity: "Equity",
    geography: "East Africa",
    image: "/placeholders/district-housing.png",
    alt: "Urban housing phase with shared public realm (placeholder image)",
  },
  {
    id: "PL-03",
    title: "Civic Infrastructure Package",
    stage: "Concept",
    opportunity: "PPP",
    geography: "Southern Africa",
    image: "/placeholders/district-panorama.png",
    alt: "Civic infrastructure and district public realm (placeholder image)",
  },
];

export default function RelatedProjects() {
  return (
    <section
      aria-labelledby="urban-projects-title"
      className="bg-muted py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary"
                />
                06 — Development register
              </p>
              <h2
                id="urban-projects-title"
                className="mt-4 max-w-[16ch] font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                Sites in
                <br />
                preparation.
              </h2>
            </div>
            <a
              href="/projects/development-pipeline"
              className="inline-flex items-center gap-2 self-start border-b border-primary pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-primary lg:self-auto"
            >
              View development pipeline
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className="mt-[clamp(26px,4vw,44px)] border-t border-foreground/15">
            {PROJECTS.map((project) => (
              <li key={project.id} className="border-b border-foreground/15">
                <a
                  href="/projects/development-pipeline"
                  className="group grid grid-cols-[clamp(80px,13vw,160px)_1fr_auto] items-center gap-[clamp(14px,2.4vw,30px)] py-[clamp(14px,2vw,22px)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-foreground/10">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 1024px) 160px, 80px"
                      className="object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-[1.05] motion-reduce:transform-none"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center bg-primary px-2 py-1 text-[0.52rem] font-semibold tracking-[0.1em] text-background uppercase">
                        {project.stage}
                      </span>
                      <span className="border border-foreground/20 px-2 py-1 text-[0.52rem] font-semibold tracking-[0.1em] text-foreground/65 uppercase">
                        {project.opportunity}
                      </span>
                      <span className="text-[0.54rem] font-semibold tracking-[0.12em] text-foreground/65 uppercase tabular-nums">
                        {project.id}
                      </span>
                    </div>
                    <h3 className="mt-2 font-sans text-[clamp(1.02rem,1.9vw,1.45rem)] leading-[1.12] font-extrabold tracking-[-0.005em] uppercase [font-stretch:110%]">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[0.74rem] leading-[1.45] text-foreground/60">
                      {project.geography} · PLACEHOLDER
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="grid size-[clamp(34px,3.6vw,46px)] place-items-center border border-foreground/20 text-foreground/60 transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:border-primary group-hover:bg-primary group-hover:text-background"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[0.6rem] leading-[1.5] text-foreground/60">
            PLACEHOLDER — these are illustrative project concepts with assumed
            stages, structures and geographies. They are not a record of
            delivered work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
