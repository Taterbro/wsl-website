import Link from "next/link";
import type { Project } from "@/lib/projects";

interface PipelineHeaderProps {
  projects: Project[];
}

export default function PipelineHeader({ projects }: PipelineHeaderProps) {
  const markets = new Set(projects.map((project) => project.country));
  const activeStages = new Set(projects.map((project) => project.stage));

  const stats = [
    { label: "Projects in preparation", value: projects.length },
    { label: "Active stage gates", value: activeStages.size },
    { label: "Markets represented", value: markets.size },
  ];

  return (
    <section
      aria-labelledby="pipeline-title"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(48px,7vw,92px)]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium tracking-[0.06em] text-muted-foreground uppercase">
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
              Development Pipeline
            </li>
          </ol>
        </nav>

        <div className="mt-[clamp(28px,4vw,48px)]">
          <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
            Projects · Concept to financing
          </p>
          <div className="mt-4 grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <h1
              id="pipeline-title"
              className="font-sans text-[clamp(2.8rem,8vw,6.8rem)] leading-[0.86] font-extrabold tracking-[-0.015em] uppercase [font-stretch:120%]"
            >
              Development
              <br />
              Pipeline
            </h1>
            <p className="max-w-[46ch] text-[clamp(0.98rem,1.4vw,1.16rem)] leading-[1.65] text-muted-foreground lg:pb-2">
              Projects in preparation, ordered by development stage. Construction
              and operational assets sit in the portfolio, not on this board.
            </p>
          </div>
        </div>

        <dl className="mt-[clamp(32px,5vw,56px)] grid gap-px border-y border-border bg-border sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline justify-between gap-4 bg-background py-4 sm:block sm:py-5 sm:pr-6"
            >
              <dt className="text-[0.68rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                {stat.label}
              </dt>
              <dd className="font-sans text-[2rem] leading-none font-extrabold text-primary sm:mt-3">
                {stat.value.toString().padStart(2, "0")}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-[0.7rem] tracking-[0.05em] text-muted-foreground/75 uppercase">
          Illustrative pipeline records · placeholder data pending approval
        </p>
      </div>
    </section>
  );
}
