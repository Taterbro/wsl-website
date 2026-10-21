import Image from "next/image";
import { BTN_BASE_CLASS, WRAP_CLASS } from "./founder-shared";
import { OFFICE } from "../_data/founder";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "The conviction", href: "#founder-statement", variant: "glow" },
  { label: "Executive leadership", href: "/leadership/executive-leadership", variant: "ghost" },
];

const FACTS: { label: string; value: string }[] = [
  { label: "Office", value: "Founder & Group CEO" },
  { label: "Reports to", value: "Board of Directors" },
  { label: "Chairs", value: "Group strategy" },
  { label: "Based", value: "Africa · global mandate" },
];

export default function FounderHero() {
  return (
    <section
      aria-labelledby="founder-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[24vw] -right-[18vw] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.18),transparent_62%)] blur-[80px]"
      />

      <div
        className={`${WRAP_CLASS} relative grid grid-cols-[1.1fr_0.9fr] items-end gap-[clamp(30px,5vw,72px)] pt-[clamp(56px,8vw,108px)] pb-[clamp(48px,7vw,92px)] max-[980px]:grid-cols-1`}
      >
        <div>
          <nav
            aria-label="Breadcrumb"
            className="mb-[clamp(20px,2.8vw,30px)] flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase"
          >
            <a
              href="/leadership"
              className="text-muted/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
            >
              Leadership
            </a>
            <span aria-hidden="true" className="text-muted/35">
              /
            </span>
            <span aria-current="page" className="text-accent">
              Founder &amp; Group CEO
            </span>
          </nav>

          <p className="mb-[clamp(18px,2.6vw,26px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
            <span
              aria-hidden="true"
              className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
            />
            {OFFICE.office}
          </p>

          <h1
            id="founder-hero-title"
            className="font-sans text-[clamp(2.4rem,6.6vw,5.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
          >
            The problems
            <br />
            you solve
            <br />
            <span className="text-accent">define the life.</span>
          </h1>

          <p className="mt-[clamp(20px,2.8vw,30px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/85">
            The Office of the Founder &amp; Group CEO sets the direction of
            Waterlight Group and holds every platform to it. This page describes
            the role and the conviction behind it.
          </p>

          <div className="mt-[clamp(24px,3.4vw,36px)] flex flex-wrap items-center gap-3">
            {CTAS.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={
                  cta.variant === "glow"
                    ? `${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`
                    : `${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`
                }
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden border border-accent/20">
              <Image
                src="/placeholders/founder-hero-portrait.png"
                alt="Placeholder artwork standing in for an approved portrait of the Founder and Group CEO"
                fill
                preload
                sizes="(max-width: 980px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-sidebar/70 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
              PLACEHOLDER — approved portrait slot. Name and likeness published
              only with written consent and corporate confirmation.
            </figcaption>
          </figure>

          <dl className="mt-[clamp(16px,2.2vw,24px)] grid grid-cols-2 gap-px bg-accent/20">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="bg-sidebar px-[clamp(12px,1.8vw,20px)] py-[clamp(12px,1.6vw,18px)]"
              >
                <dt className="text-[0.6rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 font-sans text-[clamp(0.82rem,1.2vw,0.98rem)] leading-[1.25] font-bold uppercase [font-stretch:112%]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
