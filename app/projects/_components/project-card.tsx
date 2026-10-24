import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  sectorName: string;
}

export default function ProjectCard({ project, sectorName }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2px] border border-border bg-background transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_40px_80px_-64px_rgba(6,21,34,0.9)]">
      <div className="relative aspect-16/11 overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-sidebar/70 via-sidebar/10 to-transparent"
        />
        <div className="absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-2 p-4">
          <span className="rounded-[2px] border border-accent/50 bg-sidebar/80 px-2.5 py-1 font-sans text-[0.68rem] font-semibold tracking-[0.1em] text-accent uppercase backdrop-blur-sm">
            {project.stage}
          </span>
          <span className="rounded-[2px] border border-muted/30 bg-sidebar/70 px-2.5 py-1 font-sans text-[0.68rem] font-semibold tracking-[0.1em] text-muted uppercase backdrop-blur-sm">
            {project.opportunityType}
          </span>
        </div>
        <p className="absolute inset-x-0 bottom-0 px-4 pb-3 font-sans text-[0.7rem] font-semibold tracking-[0.1em] text-muted/85 uppercase">
          {project.country} · {project.region}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-[clamp(20px,2.6vw,28px)]">
        <div>
          <p className="text-[0.72rem] font-semibold tracking-[0.1em] text-primary/70 uppercase">
            {sectorName}
          </p>
          <h3 className="mt-2 font-sans text-[1.22rem] leading-[1.1] font-bold tracking-[0.01em] uppercase [font-stretch:112%]">
            {project.name}
          </h3>
          <p className="mt-2.5 text-[0.92rem] leading-[1.65] text-muted-foreground">
            {project.summary}
          </p>
        </div>

        <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-4">
          <div>
            <dt className="text-[0.66rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              Indicative size
            </dt>
            <dd className="mt-1 text-[0.9rem] font-semibold text-foreground">
              {project.investmentSize}
            </dd>
          </div>
          <div>
            <dt className="text-[0.66rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              Status
            </dt>
            <dd className="mt-1 text-[0.9rem] font-semibold text-foreground">
              {project.investmentStatus}
            </dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-1.5" aria-label="Impact areas">
          {project.impactArea.map((area) => (
            <span
              key={area}
              className="rounded-[2px] border border-border bg-card/60 px-2 py-1 text-[0.66rem] font-medium tracking-[0.04em] text-muted-foreground uppercase"
            >
              {area}
            </span>
          ))}
        </div>

        <Link
          href={`/partner-with-us/investors?source=portfolio&project=${project.slug}`}
          className="inline-flex items-center justify-between gap-3 rounded-[2px] border border-primary/30 px-3.5 py-2.5 font-sans text-[0.74rem] font-semibold tracking-[0.07em] text-primary uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Request information
          <span aria-hidden>→</span>
          <span className="sr-only"> about {project.name}</span>
        </Link>
      </div>

      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-x-100"
      />
    </article>
  );
}
