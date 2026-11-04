import Image from "next/image";
import Link from "next/link";
import { SAVE_INITIATIVE } from "@/lib/impact";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border px-[clamp(18px,2.6vw,26px)] py-[clamp(11px,1.2vw,14px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

// PLACEHOLDER — identity descriptors only. Status and registration wording
// must be approved against current documentation before publication.
const FACTS: { label: string; value: string }[] = [
  { label: "Status", value: "Independent nonprofit" },
  { label: "Relationship", value: "Separate organisation" },
  { label: "External site", value: "Link pending" },
];

export default function InitiativeHero() {
  return (
    <section
      aria-labelledby="initiative-hero-title"
      className="relative isolate overflow-hidden bg-[color-mix(in_srgb,var(--chart-4)_9%,var(--background))]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[24vw] -right-[18vw] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.18),transparent_64%)] blur-[70px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-[clamp(94px,11vw,138px)] pb-[clamp(40px,5vw,64px)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase"
          >
            <Link
              href="/impact"
              className="text-foreground/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
            >
              Impact
            </Link>
            <span aria-hidden="true" className="text-foreground/35">
              /
            </span>
            <span aria-current="page" className="text-foreground">
              Waterlight Save Initiative
            </span>
          </nav>

          <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-[#7a5414] uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-chart-4" />
            Impact 03 — Separate organisation
          </p>
        </div>

        <div className="mt-[clamp(20px,3vw,38px)] grid gap-[clamp(26px,4vw,54px)] lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="relative flex flex-col justify-between">
            <div className="relative z-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-[2px] border border-chart-4/45 bg-background/60 px-3 py-[7px] text-[0.6rem] font-semibold tracking-[0.1em] text-[#7a5414] uppercase">
                {SAVE_INITIATIVE.label}
              </span>

              <h1
                id="initiative-hero-title"
                className="mt-[clamp(18px,2.6vw,28px)] max-w-[12ch] font-sans text-[clamp(2.4rem,7.6vw,3.9rem)] leading-[0.9] font-extrabold tracking-[-0.015em] uppercase [font-stretch:112%] lg:text-[clamp(3.9rem,5.6vw,5.8rem)] lg:[font-stretch:118%]"
              >
                Waterlight
                <br />
                <span className="text-[#8a5e12]">Save</span>
                <br />
                Initiative.
              </h1>

              <p className="mt-[clamp(16px,2.2vw,26px)] max-w-[48ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-foreground/70">
                A separate development organisation with its own mandate,
                governance and programmes. It is not a commercial subsidiary, a
                group company or a fundraising channel on this site.
              </p>

              <div className="mt-[clamp(20px,2.8vw,30px)] flex flex-wrap items-center gap-3">
                <a
                  href={SAVE_INITIATIVE.externalSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN_BASE_CLASS} border-chart-4 bg-chart-4 text-[#241c12] hover:-translate-y-px hover:bg-[#e0b566] motion-reduce:transform-none`}
                >
                  Visit the organisation
                  <span aria-hidden="true">↗</span>
                </a>
                <Link
                  href="/impact"
                  className={`${BTN_BASE_CLASS} border-foreground/25 bg-transparent text-foreground hover:bg-foreground hover:text-background`}
                >
                  Impact overview
                </Link>
              </div>

              <p className="mt-3 text-[0.58rem] leading-[1.5] text-foreground/45">
                PLACEHOLDER external link — confirm the organisation&apos;s own
                URL with the owner before launch.
              </p>
            </div>

            <dl className="relative z-10 mt-[clamp(26px,3.4vw,38px)] grid grid-cols-3 gap-x-[clamp(12px,2vw,28px)] border-t border-[#7a5414]/20 pt-[clamp(16px,2.2vw,24px)]">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/55 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 font-sans text-[0.7rem] leading-[1.35] font-semibold tracking-[0.02em] text-foreground/85 uppercase [font-stretch:108%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="flex flex-col">
            <div className="relative min-h-[clamp(320px,48vh,520px)] overflow-hidden border border-chart-4/40 bg-muted">
              <Image
                src="/placeholders/group-structure-save.png"
                alt="Placeholder artwork standing in for photography of community water and health programme work"
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <p className="absolute top-[clamp(14px,2.2vw,24px)] left-[clamp(14px,2.2vw,24px)] max-w-[22ch] border border-chart-4/40 bg-[#f4efe3]/92 px-2.5 py-1.5 text-[0.54rem] font-semibold tracking-[0.12em] text-[#7a5414] uppercase">
                {SAVE_INITIATIVE.label}
              </p>
            </div>
            <figcaption className="mt-3 text-[0.6rem] leading-[1.5] text-foreground/50">
              PLACEHOLDER — programme photography slot. Replace with an image
              cleared for publication and documented consent.
            </figcaption>
          </figure>
        </div>

        <p className="mt-[clamp(12px,1.6vw,18px)] text-[0.6rem] leading-[1.5] tracking-[0.04em] text-foreground/50">
          PLACEHOLDER — identity copy, status descriptors and imagery are
          illustrative until approved organisational content is supplied.
        </p>
      </div>
    </section>
  );
}
