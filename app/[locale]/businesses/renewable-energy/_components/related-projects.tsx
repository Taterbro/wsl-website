import Image from "next/image";
import Link from "next/link";

// PLACEHOLDER — illustrative project concepts only. Not a portfolio record.
const PROJECTS: {
  name: string;
  geography: string;
  stage: string;
  opportunity: string;
  image: string;
  alt: string;
}[] = [
  {
    name: "Solar + Storage Microgrid",
    geography: "West Africa · placeholder",
    stage: "Development",
    opportunity: "JV",
    image: "/placeholders/group-sector-energy.png",
    alt: "Solar and storage microgrid concept (placeholder image)",
  },
  {
    name: "Industrial Hybrid Power",
    geography: "East Africa · placeholder",
    stage: "Investment Ready",
    opportunity: "Equity",
    image: "/placeholders/group-sector-industry.png",
    alt: "Industrial hybrid power concept (placeholder image)",
  },
  {
    name: "Community Energy Network",
    geography: "Southern Africa · placeholder",
    stage: "Concept",
    opportunity: "PPP",
    image: "/placeholders/district-sustainable.png",
    alt: "Community energy network concept (placeholder image)",
  },
];

export default function RelatedProjects() {
  return (
    <section
      aria-labelledby="energy-projects-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
          <div className="max-w-[56ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              06 — Project routes
            </p>
            <h2
              id="energy-projects-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Where energy
              <br />
              projects start.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              Early-stage concepts show how solar, storage and hybrid models
              move from site and offtake to structured opportunity.
            </p>
          </div>
          <Link
            href="/projects/development-pipeline"
            className="inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Development pipeline
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="mt-[clamp(28px,4vw,48px)] list-none border-t border-foreground/15 p-0">
          {PROJECTS.map((project) => (
            <li key={project.name} className="border-b border-foreground/15">
              <Link
                href="/projects/development-pipeline"
                className="group grid grid-cols-[92px_1fr] items-center gap-x-4 gap-y-2 py-[clamp(14px,2vw,22px)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring lg:grid-cols-[128px_1.6fr_18rem_auto] lg:gap-x-6"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 1024px) 92px, 128px"
                    className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.05]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[0.58rem] font-semibold tracking-[0.18em] text-primary/55 uppercase">
                    Illustrative project
                  </p>
                  <h3 className="mt-1 font-sans text-[clamp(1rem,1.7vw,1.3rem)] leading-[1.14] font-extrabold uppercase [font-stretch:112%]">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-[0.78rem] leading-[1.5] text-muted-foreground">
                    {project.geography}
                  </p>
                </div>

                <div className="col-start-2 flex flex-wrap items-center gap-2 lg:col-start-auto">
                  <span className="inline-flex items-center rounded-[2px] border border-primary/25 bg-secondary px-[10px] py-[6px] text-[0.6rem] font-semibold tracking-[0.12em] uppercase">
                    {project.stage}
                  </span>
                  <span className="inline-flex items-center rounded-[2px] border border-accent/70 bg-accent/15 px-[10px] py-[6px] text-[0.6rem] font-semibold tracking-[0.12em] uppercase">
                    {project.opportunity}
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden text-[1rem] text-primary transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1 lg:inline-flex"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-[clamp(16px,2.2vw,24px)] max-w-[82ch] text-[0.72rem] leading-[1.6] text-muted-foreground/70">
          PLACEHOLDER — project names, geographies, development stages and
          opportunity types are illustrative. They are not a portfolio record or
          an offer of investment.
        </p>
      </div>
    </section>
  );
}
