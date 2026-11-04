import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { getSectorName } from "@/lib/projects";

interface FlagshipShowcaseProps {
  flagships: Project[];
}

function RequestLink({
  project,
  emphasis = false,
}: {
  project: Project;
  emphasis?: boolean;
}) {
  return (
    <Link
      href={`/partner-with-us/investors?source=flagship&project=${project.slug}`}
      className={
        emphasis
          ? "inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-4 py-2.5 font-sans text-[0.74rem] font-semibold tracking-[0.07em] text-sidebar uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(100,216,232,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          : "inline-flex items-center gap-2 rounded-[2px] border border-primary/30 px-3.5 py-2 font-sans text-[0.7rem] font-semibold tracking-[0.07em] text-primary uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      }
    >
      Request information
      <span aria-hidden>→</span>
      <span className="sr-only"> about {project.name}</span>
    </Link>
  );
}

export default function FlagshipShowcase({ flagships }: FlagshipShowcaseProps) {
  const [lead, ...rest] = flagships;

  if (!lead) return null;

  return (
    <section
      aria-labelledby="flagship-showcase-title"
      className="bg-background py-[clamp(52px,7vw,96px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <h2 id="flagship-showcase-title" className="sr-only">
          Flagship project portfolio
        </h2>

        <article className="overflow-hidden rounded-[2px] border border-border bg-background">
          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            <div className="relative min-h-[320px] overflow-hidden bg-secondary sm:min-h-[420px]">
              <Image
                src={lead.image}
                alt={lead.alt}
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-sidebar/75 via-sidebar/5 to-transparent"
              />
              <div className="absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-2 p-[clamp(16px,2.4vw,24px)]">
                <span className="rounded-[2px] border border-accent/50 bg-sidebar/80 px-3 py-1.5 font-sans text-[0.68rem] font-semibold tracking-[0.1em] text-accent uppercase backdrop-blur-sm">
                  Flagship 01 · Lead
                </span>
                <span className="rounded-[2px] border border-muted/30 bg-sidebar/70 px-3 py-1.5 font-sans text-[0.68rem] font-semibold tracking-[0.1em] text-muted uppercase backdrop-blur-sm">
                  {lead.stage}
                </span>
              </div>
              <p className="absolute inset-x-0 bottom-0 p-[clamp(16px,2.4vw,24px)] font-sans text-[0.7rem] font-semibold tracking-[0.1em] text-muted/85 uppercase">
                {lead.country} · {lead.region}
              </p>
            </div>

            <div className="flex flex-col p-[clamp(24px,4vw,48px)]">
              <p className="text-[0.72rem] font-semibold tracking-[0.1em] text-primary/70 uppercase">
                {getSectorName(lead.sectorSlug)}
              </p>
              <h3 className="mt-3 font-sans text-[clamp(1.7rem,3.6vw,2.8rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]">
                {lead.name}
              </h3>
              <p className="mt-4 max-w-[50ch] text-[0.98rem] leading-[1.7] text-muted-foreground">
                {lead.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {lead.impactArea.map((area) => (
                  <span
                    key={area}
                    className="rounded-[2px] border border-border bg-card/60 px-2.5 py-1 text-[0.66rem] font-medium tracking-[0.04em] text-muted-foreground uppercase"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-border pt-5">
                <div>
                  <dt className="text-[0.64rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                    Opportunity
                  </dt>
                  <dd className="mt-1 text-[0.9rem] font-semibold text-foreground">
                    {lead.opportunityType}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.64rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                    Status
                  </dt>
                  <dd className="mt-1 text-[0.9rem] font-semibold text-foreground">
                    {lead.investmentStatus}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.64rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                    Indicative size
                  </dt>
                  <dd className="mt-1 text-[0.9rem] font-semibold text-foreground">
                    {lead.investmentSize}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.64rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                    Market
                  </dt>
                  <dd className="mt-1 text-[0.9rem] font-semibold text-foreground">
                    {lead.country}
                  </dd>
                </div>
              </dl>

              <div className="mt-auto pt-6">
                <RequestLink project={lead} emphasis />
              </div>
            </div>
          </div>
        </article>

        {rest.length > 0 ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.map((project, index) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-[2px] border border-border bg-background transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_40px_80px_-64px_rgba(6,21,34,0.8)]"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-sidebar/60 via-transparent to-transparent"
                  />
                  <span className="absolute top-4 left-4 rounded-[2px] border border-accent/50 bg-sidebar/80 px-2.5 py-1 font-sans text-[0.64rem] font-semibold tracking-[0.1em] text-accent uppercase backdrop-blur-sm">
                    Flagship {(index + 2).toString().padStart(2, "0")}
                  </span>
                  <p className="absolute inset-x-0 bottom-0 px-4 pb-3 font-sans text-[0.66rem] font-semibold tracking-[0.1em] text-muted/85 uppercase">
                    {project.country} · {project.stage}
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-[clamp(20px,2.6vw,28px)]">
                  <div>
                    <p className="text-[0.68rem] font-semibold tracking-[0.1em] text-primary/70 uppercase">
                      {getSectorName(project.sectorSlug)}
                    </p>
                    <h3 className="mt-2 font-sans text-[1.25rem] leading-[1.08] font-bold uppercase [font-stretch:112%]">
                      {project.name}
                    </h3>
                    <p className="mt-2.5 text-[0.9rem] leading-[1.65] text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                    <p className="text-[0.76rem] text-muted-foreground">
                      {project.opportunityType} ·{" "}
                      <span className="text-foreground">
                        {project.investmentSize}
                      </span>
                    </p>
                    <RequestLink project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        <p className="mt-5 text-[0.72rem] tracking-[0.04em] text-muted-foreground/75 uppercase">
          PLACEHOLDER · records, imagery and ranges are illustrative pending
          approval.
        </p>
      </div>
    </section>
  );
}
