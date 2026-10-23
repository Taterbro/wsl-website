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
    title: "Coastal Resilience Programme",
    stage: "Development",
    opportunity: "PPP",
    geography: "West Africa",
    image: "/placeholders/district-sustainable.png",
    alt: "Coastal resilience and sustainable district infrastructure (placeholder image)",
  },
  {
    id: "PL-02",
    title: "Industrial Circularity Hub",
    stage: "Investment ready",
    opportunity: "JV",
    geography: "Southern Africa",
    image: "/placeholders/industry-processing.png",
    alt: "Industrial processing and circular material hub (placeholder image)",
  },
  {
    id: "PL-03",
    title: "Clean Energy Retrofit Portfolio",
    stage: "Concept",
    opportunity: "Equity",
    geography: "East Africa",
    image: "/placeholders/group-sector-energy.png",
    alt: "Clean energy retrofit across an operating portfolio (placeholder image)",
  },
];

const [FEATURED, ...SECONDARY] = PROJECTS;

export default function RelatedProjects() {
  return (
    <section
      aria-labelledby="climate-projects-title"
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
                06 — Climate portfolio
              </p>
              <h2
                id="climate-projects-title"
                className="mt-4 max-w-[16ch] font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                Assets in
                <br />
                transition.
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

          <ul className="mt-[clamp(26px,4vw,44px)] grid gap-[clamp(16px,2.4vw,28px)] lg:grid-cols-[1.18fr_0.82fr]">
            <li className="lg:row-span-2">
              <a
                href="/projects/development-pipeline"
                className="group relative flex h-full min-h-[clamp(400px,50vw,640px)] flex-col justify-end overflow-hidden border border-foreground/20 bg-sidebar text-muted"
              >
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) group-hover:scale-[1.03] motion-reduce:transform-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/25 to-sidebar/35"
                />

                <div className="absolute top-[clamp(14px,2.2vw,24px)] right-[clamp(14px,2.2vw,24px)] left-[clamp(14px,2.2vw,24px)] flex flex-wrap items-center justify-between gap-3">
                  <span className="bg-primary px-2 py-1 text-[0.52rem] font-semibold tracking-[0.1em] text-background uppercase">
                    {FEATURED.stage}
                  </span>
                  <span className="border border-accent/40 bg-sidebar/75 px-2 py-1 text-[0.52rem] font-semibold tracking-[0.12em] text-accent uppercase tabular-nums">
                    {FEATURED.id}
                  </span>
                </div>

                <div className="relative p-[clamp(18px,3vw,34px)]">
                  <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-accent uppercase">
                    Featured concept
                  </p>
                  <h3 className="mt-2.5 max-w-[14ch] font-sans text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]">
                    {FEATURED.title}
                  </h3>
                  <div className="mt-[clamp(14px,2vw,20px)] flex flex-wrap items-center justify-between gap-4 border-t border-accent/25 pt-3">
                    <p className="text-[0.66rem] leading-[1.5] tracking-[0.06em] text-muted/70 uppercase">
                      {FEATURED.geography} · {FEATURED.opportunity} · PLACEHOLDER
                    </p>
                    <span
                      aria-hidden="true"
                      className="grid size-9 place-items-center border border-muted/35 text-[0.72rem] text-muted/80 transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:border-accent group-hover:bg-accent group-hover:text-sidebar"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            </li>

            {SECONDARY.map((project) => (
              <li key={project.id} className="h-full">
                <a
                  href="/projects/development-pipeline"
                  className="group grid h-full overflow-hidden border border-foreground/20 bg-background transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-foreground/35 sm:grid-cols-[0.78fr_1.22fr] lg:grid-cols-[0.72fr_1.28fr]"
                >
                  <div className="relative min-h-[170px] overflow-hidden bg-foreground/10 lg:min-h-0">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 1024px) 40vw, 18vw"
                      className="object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-[1.04] motion-reduce:transform-none"
                    />
                  </div>

                  <div className="flex flex-col p-[clamp(14px,2vw,22px)]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-primary px-2 py-1 text-[0.5rem] font-semibold tracking-[0.1em] text-background uppercase">
                        {project.stage}
                      </span>
                      <span className="text-[0.52rem] font-semibold tracking-[0.12em] text-foreground/60 uppercase tabular-nums">
                        {project.id}
                      </span>
                    </div>

                    <h3 className="mt-2.5 font-sans text-[clamp(1rem,1.6vw,1.3rem)] leading-[1.12] font-extrabold tracking-[0.005em] uppercase [font-stretch:110%]">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[0.7rem] leading-[1.45] text-foreground/60">
                      {project.geography} · PLACEHOLDER
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-dashed border-foreground/25 pt-3">
                      <span className="text-[0.52rem] font-semibold tracking-[0.1em] text-foreground/55 uppercase">
                        Opportunity
                      </span>
                      <span className="border border-foreground/20 px-2 py-1 text-[0.5rem] font-semibold tracking-[0.1em] text-foreground/70 uppercase">
                        {project.opportunity}
                      </span>
                    </div>
                  </div>
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
