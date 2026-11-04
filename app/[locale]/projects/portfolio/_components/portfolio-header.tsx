import Link from "next/link";
import type { Project, ProjectStage } from "@/lib/projects";

const STAGE_ORDER: ProjectStage[] = [
  "Concept",
  "Development",
  "Investment Ready",
  "Financing",
  "Construction",
  "Operational",
];

interface PortfolioHeaderProps {
  projects: Project[];
}

export default function PortfolioHeader({ projects }: PortfolioHeaderProps) {
  const countries = new Set(projects.map((project) => project.country)).size;
  const sectors = new Set(projects.map((project) => project.sectorSlug)).size;
  const stageCounts = STAGE_ORDER.map((stage) => ({
    stage,
    count: projects.filter((project) => project.stage === stage).length,
  })).filter((entry) => entry.count > 0);
  const highest = Math.max(...stageCounts.map((entry) => entry.count), 1);

  return (
    <section
      aria-labelledby="portfolio-title"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[8%] h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(48px,7vw,96px)]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.74rem] font-medium tracking-[0.06em] text-muted-foreground uppercase">
            <li>
              <Link
                href="/"
                className="transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>Projects</li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground">
              Portfolio
            </li>
          </ol>
        </nav>

        <div className="mt-[clamp(32px,5vw,56px)] grid gap-[clamp(32px,5vw,64px)] lg:grid-cols-[1.45fr_0.8fr] lg:items-end">
          <div className="max-w-[68ch]">
            <p className="font-sans text-[0.78rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
              Projects · Approved summaries
            </p>
            <h1
              id="portfolio-title"
              className="mt-4 font-sans text-[clamp(3rem,8.5vw,7rem)] leading-[0.86] font-extrabold tracking-[-0.015em] uppercase [font-stretch:120%]"
            >
              Portfolio
            </h1>
            <p className="mt-6 max-w-[56ch] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.65] text-muted-foreground">
              Selected projects from across the Waterlight platform. Browse by
              sector, market, stage and opportunity type; restricted detail is
              released on request.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href="#project-filters"
                className="inline-flex items-center gap-2 rounded-[2px] border border-primary bg-primary px-[clamp(16px,2.4vw,24px)] py-[clamp(10px,1.1vw,12px)] font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-primary-foreground uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Browse projects
              </a>
              <Link
                href="/partner-with-us/investors"
                className="font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-primary uppercase underline decoration-primary/30 underline-offset-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:decoration-primary"
              >
                Request access
              </Link>
              <p className="text-[0.72rem] tracking-[0.04em] text-muted-foreground/80 uppercase">
                Illustrative portfolio · placeholder data
              </p>
            </div>
          </div>

          <div className="border border-sidebar-border bg-sidebar p-[clamp(22px,3vw,32px)] text-muted">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-accent uppercase">
                Portfolio index
              </h2>
              <span className="text-[0.7rem] tracking-[0.08em] text-muted/60 uppercase">
                By stage
              </span>
            </div>

            <dl className="mt-6 space-y-4">
              {stageCounts.map(({ stage, count }) => (
                <div key={stage}>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[0.78rem] font-medium tracking-[0.04em] text-muted/80">
                      {stage}
                    </dt>
                    <dd className="font-sans text-[0.82rem] font-semibold text-accent">
                      {count.toString().padStart(2, "0")}
                    </dd>
                  </div>
                  <div
                    aria-hidden
                    className="mt-2 h-px w-full bg-muted/15"
                  >
                    <div
                      className="h-px bg-accent"
                      style={{ width: `${(count / highest) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-sidebar-border pt-5">
              <div>
                <p className="font-sans text-[1.5rem] leading-none font-bold text-muted">
                  {projects.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-2 text-[0.64rem] tracking-[0.1em] text-muted/60 uppercase">
                  Projects
                </p>
              </div>
              <div>
                <p className="font-sans text-[1.5rem] leading-none font-bold text-muted">
                  {countries.toString().padStart(2, "0")}
                </p>
                <p className="mt-2 text-[0.64rem] tracking-[0.1em] text-muted/60 uppercase">
                  Countries
                </p>
              </div>
              <div>
                <p className="font-sans text-[1.5rem] leading-none font-bold text-muted">
                  {sectors.toString().padStart(2, "0")}
                </p>
                <p className="mt-2 text-[0.64rem] tracking-[0.1em] text-muted/60 uppercase">
                  Sectors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
