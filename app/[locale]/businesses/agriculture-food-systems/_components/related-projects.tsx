import Link from "next/link";
import type {
  AgricultureFoodSystemsRelatedProjects,
  Project,
} from "@/lib/cms/generated";

type ProjectCard = {
  id: number | string;
  name: string;
  geography: string;
  stage: string;
  opportunity: string;
  image: string | null;
  alt: string;
};

const FALLBACK_HEADING = "The pipeline\nstarts in the field.";

const FALLBACK_DESCRIPTION =
  "Illustrative concepts show how production, processing and cold-chain needs become structured opportunities.";

const FALLBACK_IMAGE_ALT = "Illustrative agriculture project concept";

// PLACEHOLDER — illustrative project concepts only. Not a portfolio record.
// Media has no value fallback; images render only from the CMS.
const FALLBACK_PROJECTS: ProjectCard[] = [
  {
    id: "fallback-irrigation",
    name: "Solar-Powered Irrigation Scheme",
    geography: "West Africa · placeholder",
    stage: "Development",
    opportunity: "PPP",
    image: null,
    alt: "Irrigated agricultural fields concept (placeholder image)",
  },
  {
    id: "fallback-cold-chain",
    name: "Regional Cold-Chain Hub",
    geography: "East Africa · placeholder",
    stage: "Investment Ready",
    opportunity: "JV",
    image: null,
    alt: "Cold-chain warehouse and distribution concept (placeholder image)",
  },
  {
    id: "fallback-processing",
    name: "Agro-Processing Estate",
    geography: "Southern Africa · placeholder",
    stage: "Concept",
    opportunity: "Equity",
    image: null,
    alt: "Agricultural processing estate concept (placeholder image)",
  },
];

function toProjectCard(project: Project): ProjectCard {
  return {
    id: project.id,
    name: project.title || project.postTitle || project.slug,
    geography: project.location || project.country || project.region,
    stage: project.stage || project.investment_status,
    opportunity: project.opportunity,
    image: project.background?.url ?? null,
    alt: project.background?.alt || project.background_alt,
  };
}

export default function RelatedProjects({
  data,
}: {
  data: AgricultureFoodSystemsRelatedProjects;
}) {
  const projects = data.projects.length
    ? data.projects.map(toProjectCard)
    : FALLBACK_PROJECTS;
  const heading = data.label || FALLBACK_HEADING;
  const headingLines = heading.split("\n");

  return (
    <section
      aria-labelledby="agriculture-projects-title"
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
              id="agriculture-projects-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              {headingLines.length === 2 ? (
                <>
                  {headingLines[0]}
                  <br />
                  {headingLines[1]}
                </>
              ) : (
                heading
              )}
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              {data.description || FALLBACK_DESCRIPTION}
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
          {projects.map((project) => {
            const alt = project.image
              ? project.alt || FALLBACK_IMAGE_ALT
              : "";

            return (
              <article
                key={project.id}
                className="group flex flex-col border border-[rgba(9,29,42,0.16)] bg-background"
              >
                <Link
                  href="/projects/development-pipeline"
                  className="flex flex-1 flex-col focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-sidebar">
                    {project.image ? (
                      <div
                        role={alt ? "img" : undefined}
                        aria-label={alt || undefined}
                        aria-hidden={alt ? undefined : true}
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                    ) : null}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-foreground/35 via-transparent to-foreground/10"
                    />
                    <div className="absolute top-[clamp(10px,1.4vw,16px)] left-[clamp(10px,1.4vw,16px)] flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-[2px] border border-background/40 bg-sidebar/85 px-[10px] py-[6px] text-[0.58rem] font-semibold tracking-[0.12em] text-background uppercase backdrop-blur-[3px]">
                        {project.stage}
                      </span>
                      <span className="inline-flex items-center rounded-[2px] bg-accent px-[10px] py-[6px] text-[0.58rem] font-semibold tracking-[0.12em] text-sidebar uppercase">
                        {project.opportunity}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 p-[clamp(16px,2.2vw,24px)]">
                    <p className="text-[0.58rem] font-semibold tracking-[0.18em] text-primary/55 uppercase">
                      Illustrative project
                    </p>
                    <h3 className="font-sans text-[clamp(1.08rem,1.6vw,1.3rem)] leading-[1.14] font-extrabold uppercase [font-stretch:112%]">
                      {project.name}
                    </h3>
                    <p className="text-[0.8rem] leading-[1.5] text-muted-foreground">
                      {project.geography}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[0.7rem] font-semibold tracking-[0.06em] text-primary uppercase">
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
            );
          })}
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
