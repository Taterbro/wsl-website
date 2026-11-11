import Link from "next/link";
import type { ProjectDevelopmentProjectDevelopmentHero } from "@/lib/cms/generated/pages/project-development";

const FALLBACK_HEADING = "Project Development";
const FALLBACK_DESCRIPTION =
  "From origination to execution readiness — shaping opportunities into bankable projects through structure, partners and disciplined delivery.";

export default function ProjectDevelopmentHero({
  data,
}: {
  data: ProjectDevelopmentProjectDevelopmentHero;
}) {
  return (
    <section
      aria-labelledby="pd-hero-title"
      className="relative overflow-hidden bg-sidebar text-muted"
    >
      {data.image ? (
        <div className="absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url("${data.image.url}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/90 to-sidebar/70" />
        </div>
      ) : null}
      <div className="relative mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(80px,12vw,150px)]">
        <div className="max-w-[72ch]">
          <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-accent uppercase">
            Investments
          </p>
          <h1
            id="pd-hero-title"
            className="mt-4 font-sans text-[clamp(2.6rem,7vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
          >
            {data.heading || FALLBACK_HEADING}
          </h1>
          <p className="mt-6 max-w-[58ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.6] text-muted/80">
            {data.description || FALLBACK_DESCRIPTION}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/partner-with-us/project-owners"
              className="inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(100,216,232,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Bring a Project
            </Link>
            <Link
              href="/investments/strategy"
              className="inline-flex items-center gap-2 rounded-[2px] border border-muted/40 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-muted uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Investment Strategy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
