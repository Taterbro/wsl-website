import Link from "next/link";
import { IHEAL_FRAMING } from "@/lib/impact";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border px-[clamp(18px,2.6vw,26px)] py-[clamp(11px,1.2vw,14px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

// PLACEHOLDER — descriptors only. Not a delivery record or a service offer.
const FACTS: { label: string; value: string }[] = [
  { label: "Type", value: "Development & impact framework" },
  { label: "Pillars", value: "Five, non-sequential" },
  { label: "Use", value: "A lens, not a service" },
];

export default function IhealHero() {
  return (
    <section
      aria-labelledby="iheal-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[22vw] -right-[16vw] h-[54vw] w-[54vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.16),transparent_64%)] blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-[clamp(104px,12vw,158px)] pb-[clamp(48px,6vw,86px)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase"
          >
            <Link
              href="/impact"
              className="text-muted/55 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
            >
              Impact
            </Link>
            <span aria-hidden="true" className="text-muted/30">
              /
            </span>
            <span aria-current="page" className="text-muted">
              iHEAL Framework
            </span>
          </nav>

          <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Impact 04 — Framework
          </p>
        </div>

        <div className="mt-[clamp(22px,3vw,40px)] grid gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                A shared philosophy
              </p>

              <h1
                id="iheal-hero-title"
                className="mt-[clamp(14px,2vw,22px)] max-w-[12ch] font-sans text-[clamp(2.6rem,7.8vw,4.2rem)] leading-[0.9] font-extrabold tracking-[-0.015em] uppercase [font-stretch:112%] lg:text-[clamp(4.2rem,6vw,6.4rem)] lg:[font-stretch:118%]"
              >
                The <span className="normal-case text-accent">iHEAL</span>
                <br />
                Framework.
              </h1>

              <p className="mt-[clamp(16px,2.2vw,26px)] max-w-[48ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/70">
                A development and impact framework — five lenses for reading
                opportunities and outcomes. Not a service line, and not a
                description of what any Waterlight company does.
              </p>

              <div className="mt-[clamp(20px,2.8vw,30px)] flex flex-wrap items-center gap-3">
                <a
                  href="#pillars"
                  className={`${BTN_BASE_CLASS} border-accent bg-accent text-accent-foreground hover:-translate-y-px hover:bg-[#7de4f2] motion-reduce:transform-none`}
                >
                  Explore the five pillars
                  <span aria-hidden="true">↓</span>
                </a>
                <Link
                  href="/impact"
                  className={`${BTN_BASE_CLASS} border-muted/30 bg-transparent text-muted hover:bg-muted hover:text-sidebar`}
                >
                  Impact overview
                </Link>
              </div>
            </div>

            <dl className="mt-[clamp(28px,3.6vw,42px)] grid grid-cols-3 gap-x-[clamp(12px,2vw,28px)] border-t border-muted/15 pt-[clamp(16px,2.2vw,24px)]">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.56rem] font-semibold tracking-[0.14em] text-muted/45 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 font-sans text-[0.7rem] leading-[1.35] font-semibold tracking-[0.02em] text-muted/85 uppercase [font-stretch:108%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="flex min-h-[clamp(300px,44vh,480px)] flex-col justify-between border border-muted/15 bg-sidebar-accent/35 p-[clamp(18px,2.6vw,30px)]">
            <div className="flex flex-wrap items-center justify-between gap-3 text-[0.56rem] font-semibold tracking-[0.14em] text-muted/55 uppercase">
              <span>Non-sequential</span>
              <span>05 lenses</span>
            </div>

            <div className="relative mx-auto my-[clamp(14px,3vw,30px)] aspect-square w-full max-w-[340px]">
              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                className="h-full w-full"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="rgba(233,241,244,0.08)"
                  strokeWidth="0.25"
                  strokeDasharray="0.8 1.6"
                />
                <line
                  x1="50"
                  y1="4"
                  x2="50"
                  y2="96"
                  stroke="rgba(233,241,244,0.06)"
                  strokeWidth="0.25"
                />
                <line
                  x1="4"
                  y1="50"
                  x2="96"
                  y2="50"
                  stroke="rgba(233,241,244,0.06)"
                  strokeWidth="0.25"
                />
                <circle cx="20" cy="25" r="1.6" fill="rgba(100,216,232,0.9)" />
                <circle cx="67" cy="17" r="1.6" fill="rgba(100,216,232,0.9)" />
                <circle cx="82" cy="52" r="1.6" fill="rgba(100,216,232,0.9)" />
                <circle cx="45" cy="79" r="1.6" fill="rgba(100,216,232,0.9)" />
                <circle cx="15" cy="61" r="1.6" fill="rgba(100,216,232,0.9)" />
              </svg>
            </div>

            <figcaption className="border-t border-muted/15 pt-3 text-[0.62rem] leading-[1.5] text-muted/55">
              Five pillars. No order, no hierarchy, no delivery sequence.
              PLACEHOLDER diagram — replace with approved framework artwork if
              supplied.
            </figcaption>
          </figure>
        </div>

        <div className="mt-[clamp(28px,4vw,48px)] border-y border-muted/15 py-[clamp(18px,2.6vw,28px)]">
          <p className="text-[0.56rem] font-semibold tracking-[0.16em] text-accent uppercase">
            Framing line
          </p>
          <p className="mt-2 max-w-[74ch] text-[clamp(1rem,1.5vw,1.28rem)] leading-[1.5] text-muted/85">
            {IHEAL_FRAMING}
          </p>
          <p className="mt-2 text-[0.58rem] leading-[1.5] text-muted/40">
            PLACEHOLDER — wording to be approved by the owner before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
