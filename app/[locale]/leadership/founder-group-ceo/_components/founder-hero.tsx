import Image from "next/image";
import { Btn, Eyebrow, WRAP_CLASS } from "./founder-shared";
import { FACTS, FOUNDER } from "../_data/founder";

export default function FounderHero() {
  return (
    <section
      aria-labelledby="founder-hero-title"
      className="relative overflow-hidden bg-background text-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[28vw] -right-[20vw] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.18),transparent_64%)] blur-[70px]"
      />

      <div
        className={`${WRAP_CLASS} relative grid grid-cols-[1.04fr_0.96fr] items-start gap-[clamp(34px,6vw,86px)] pt-[clamp(40px,6vw,84px)] pb-[clamp(52px,8vw,104px)] max-[980px]:grid-cols-1`}
      >
        <div className="max-[980px]:order-2">
          <nav
            aria-label="Breadcrumb"
            className="mb-[clamp(22px,3vw,34px)] flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold tracking-[0.14em] uppercase"
          >
            <a
              href="/about"
              className="text-muted-foreground transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
            >
              About
            </a>
            <span aria-hidden="true" className="text-muted-foreground/50">
              /
            </span>
            <span className="text-muted-foreground">Leadership</span>
            <span aria-hidden="true" className="text-muted-foreground/50">
              /
            </span>
            <span aria-current="page" className="text-primary">
              Founder &amp; Group CEO
            </span>
          </nav>

          <Eyebrow>{FOUNDER.office}</Eyebrow>

          <h1
            id="founder-hero-title"
            className="mt-[clamp(18px,2.4vw,28px)] font-sans text-[clamp(2.1rem,4.8vw,4.4rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            <span className="block">Dr. Engr.</span>
            <span className="block">Prince Ero</span>
            <span className="block text-primary">Ibhafidon</span>
          </h1>

          <p className="mt-[clamp(16px,2.2vw,24px)] text-[0.78rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            {FOUNDER.role}
          </p>

          <blockquote className="mt-[clamp(26px,3.6vw,40px)] max-w-[46ch] border-l-2 border-accent pl-[clamp(16px,2.4vw,26px)]">
            <p className="font-sans text-[clamp(1.08rem,1.65vw,1.42rem)] leading-[1.42] font-medium text-foreground">
              &ldquo;{FOUNDER.quote}&rdquo;
            </p>
          </blockquote>

          <div className="mt-[clamp(28px,3.8vw,42px)] flex flex-wrap items-center gap-3">
            <Btn href="#founder-bio">Read the biography</Btn>
            <Btn href="#founder-structure" variant="outline">
              Governance structure
            </Btn>
          </div>
        </div>

        <div className="max-[980px]:order-1">
          <figure className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-3 -right-3 bottom-3 left-3 border border-primary/20"
            />
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
              <Image
                src="/placeholders/founder-hero-portrait.png"
                alt="Placeholder artwork standing in for an approved portrait of Dr. Engr. Prince Ero Ibhafidon"
                fill
                preload
                sizes="(max-width: 980px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-sidebar/45 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-3 flex items-start justify-between gap-4 text-[0.68rem] leading-[1.5] text-muted-foreground">
              <span>Approved portrait to be supplied.</span>
              <span className="shrink-0 tracking-[0.12em] uppercase">
                Placeholder
              </span>
            </figcaption>
          </figure>

          <dl className="mt-[clamp(18px,2.6vw,28px)] grid grid-cols-2 gap-px border border-border bg-border">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="bg-background px-[clamp(12px,1.8vw,20px)] py-[clamp(12px,1.6vw,18px)]"
              >
                <dt className="text-[0.58rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 font-sans text-[clamp(0.8rem,1.15vw,0.94rem)] leading-[1.3] font-bold uppercase [font-stretch:112%]">
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
