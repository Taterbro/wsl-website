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
    name: "Smart Water Monitoring Network",
    geography: "West Africa · placeholder",
    stage: "Development",
    opportunity: "JV",
    image: "/placeholders/tech-wswis.png",
    alt: "Smart water monitoring network concept (placeholder image)",
  },
  {
    name: "Industrial Automation Platform",
    geography: "East Africa · placeholder",
    stage: "Investment Ready",
    opportunity: "Equity",
    image: "/placeholders/group-sector-industry.png",
    alt: "Industrial automation platform concept (placeholder image)",
  },
  {
    name: "Municipal Data Exchange",
    geography: "Southern Africa · placeholder",
    stage: "Concept",
    opportunity: "PPP",
    image: "/placeholders/district-smart-city.png",
    alt: "Municipal data exchange concept (placeholder image)",
  },
];

export default function RelatedProjects() {
  return (
    <section
      aria-labelledby="technology-projects-title"
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
              id="technology-projects-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Where the stack
              <br />
              meets the asset.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              Illustrative concepts show how monitoring, automation and data
              platforms become structured digital-infrastructure opportunities.
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

        <div className="mt-[clamp(28px,4vw,48px)] grid gap-[clamp(14px,1.8vw,22px)] md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="flex flex-col border border-[rgba(9,29,42,0.16)] bg-background"
            >
              <Link
                href="/projects/development-pipeline"
                className="group flex flex-1 flex-col focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
              >
                <div className="relative aspect-[16/7] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-foreground/40 via-transparent to-foreground/10"
                  />
                  <p className="absolute top-[clamp(10px,1.4vw,16px)] left-[clamp(10px,1.4vw,16px)] rounded-[2px] border border-background/40 bg-sidebar/85 px-[10px] py-[6px] text-[0.58rem] font-semibold tracking-[0.16em] text-background uppercase backdrop-blur-[3px]">
                    Illustrative
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-[clamp(16px,2.2vw,24px)]">
                  <div>
                    <h3 className="font-sans text-[clamp(1.06rem,1.55vw,1.26rem)] leading-[1.16] font-extrabold uppercase [font-stretch:112%]">
                      {project.name}
                    </h3>
                    <p className="mt-1.5 text-[0.78rem] leading-[1.5] text-muted-foreground">
                      {project.geography}
                    </p>
                  </div>

                  <dl className="grid grid-cols-2 gap-px border border-foreground/15 bg-foreground/15">
                    <div className="bg-background px-3 py-2.5">
                      <dt className="text-[0.56rem] font-semibold tracking-[0.14em] text-muted-foreground/70 uppercase">
                        Stage
                      </dt>
                      <dd className="mt-1 text-[0.7rem] font-semibold tracking-[0.04em] text-foreground uppercase">
                        {project.stage}
                      </dd>
                    </div>
                    <div className="bg-background px-3 py-2.5">
                      <dt className="text-[0.56rem] font-semibold tracking-[0.14em] text-muted-foreground/70 uppercase">
                        Opportunity
                      </dt>
                      <dd className="mt-1 text-[0.7rem] font-semibold tracking-[0.04em] text-foreground uppercase">
                        {project.opportunity}
                      </dd>
                    </div>
                  </dl>

                  <span className="mt-auto inline-flex items-center gap-2 pt-1 text-[0.7rem] font-semibold tracking-[0.06em] text-primary uppercase">
                    View pipeline
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-[clamp(16px,2.2vw,24px)] max-w-[82ch] text-[0.72rem] leading-[1.6] text-muted-foreground/70">
          PLACEHOLDER — project names, geographies, development stages and
          opportunity types are illustrative. They are not a portfolio record or
          an offer of investment.
        </p>
      </div>
    </section>
  );
}
