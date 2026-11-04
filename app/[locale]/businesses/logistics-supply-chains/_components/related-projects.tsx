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
    title: "Inland Port & Warehousing Hub",
    stage: "Development",
    opportunity: "JV",
    geography: "West Africa",
    image: "/placeholders/logistics-hub.png",
    alt: "Inland port and warehousing hub (placeholder image)",
  },
  {
    id: "PL-02",
    title: "Cross-Border Trade Corridor",
    stage: "Investment ready",
    opportunity: "PPP",
    geography: "East Africa",
    image: "/placeholders/logistics-corridor.png",
    alt: "Cross-border trade corridor (placeholder image)",
  },
  {
    id: "PL-03",
    title: "Last-Mile Distribution Network",
    stage: "Concept",
    opportunity: "Equity",
    geography: "Southern Africa",
    image: "/placeholders/group-sector-logistics.png",
    alt: "Last-mile distribution fleet and depot (placeholder image)",
  },
];

const BARCODE = [3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 4, 1, 2];

export default function RelatedProjects() {
  return (
    <section
      aria-labelledby="logistics-projects-title"
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
                06 — Cargo register
              </p>
              <h2
                id="logistics-projects-title"
                className="mt-4 max-w-[16ch] font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                Freight in
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

          <ul className="mt-[clamp(26px,4vw,44px)] grid gap-[clamp(16px,2.4vw,28px)] md:grid-cols-3">
            {PROJECTS.map((project) => (
              <li key={project.id} className="h-full">
                <a
                  href="/projects/development-pipeline"
                  className="group flex h-full flex-col border border-foreground/20 bg-background transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-foreground/35"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-foreground/10">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-[1.04] motion-reduce:transform-none"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-sidebar/55 via-transparent to-transparent"
                    />
                    <span className="absolute top-3 left-3 bg-primary px-2 py-1 text-[0.52rem] font-semibold tracking-[0.1em] text-background uppercase">
                      {project.stage}
                    </span>
                    <span className="absolute top-3 right-3 border border-accent/40 bg-sidebar/75 px-2 py-1 text-[0.52rem] font-semibold tracking-[0.12em] text-accent uppercase tabular-nums">
                      {project.id}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-[clamp(16px,2.2vw,24px)]">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[0.52rem] font-semibold tracking-[0.14em] text-foreground/55 uppercase">
                        Waybill — {project.id}
                      </p>
                      <span
                        aria-hidden="true"
                        className="text-foreground/50 transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:text-primary"
                      >
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-2.5 font-sans text-[clamp(1.02rem,1.9vw,1.45rem)] leading-[1.12] font-extrabold tracking-[-0.005em] uppercase [font-stretch:110%]">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[0.74rem] leading-[1.45] text-foreground/60">
                      {project.geography} · PLACEHOLDER
                    </p>

                    <dl className="mt-[clamp(16px,2vw,22px)] border-t border-dashed border-foreground/25 pt-3">
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-[0.54rem] font-semibold tracking-[0.1em] text-foreground/55 uppercase">
                          Opportunity
                        </dt>
                        <dd className="border border-foreground/20 px-2 py-1 text-[0.52rem] font-semibold tracking-[0.1em] text-foreground/70 uppercase">
                          {project.opportunity}
                        </dd>
                      </div>
                    </dl>

                    <div
                      aria-hidden="true"
                      className="mt-auto flex h-7 items-stretch gap-[3px] pt-4"
                    >
                      {BARCODE.map((width, index) => (
                        <span
                          key={index}
                          className="bg-foreground/25"
                          style={{ width: `${width}px` }}
                        />
                      ))}
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
