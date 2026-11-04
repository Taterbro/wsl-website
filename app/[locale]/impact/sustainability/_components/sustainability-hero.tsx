import Image from "next/image";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "solid" | "ghost" }[] = [
  { label: "See the framework", href: "#framework", variant: "solid" },
  {
    label: "Climate & ESG solutions",
    href: "/businesses/climate-esg-solutions",
    variant: "ghost",
  },
];

// PLACEHOLDER — scope descriptors, not a delivery record.
const FACTS: { label: string; value: string }[] = [
  { label: "Scope", value: "Commercial group" },
  { label: "Standard", value: "Evidence-led" },
  { label: "Review", value: "Annual — to be confirmed" },
];

export default function SustainabilityHero() {
  return (
    <section
      aria-labelledby="sustainability-hero-title"
      className="relative isolate overflow-hidden bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-[clamp(94px,11vw,138px)] pb-[clamp(40px,5vw,64px)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase"
          >
            <a
              href="/impact"
              className="text-foreground/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
            >
              Impact
            </a>
            <span aria-hidden="true" className="text-foreground/35">
              /
            </span>
            <span aria-current="page" className="text-foreground">
              Sustainability
            </span>
          </nav>

          <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            Impact 01 — Operating discipline
          </p>
        </div>

        <div className="mt-[clamp(20px,3vw,38px)] grid gap-[clamp(24px,4vw,52px)] lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
          <div className="relative flex flex-col justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-[clamp(8px,4vw,54px)] -left-[clamp(0px,2vw,28px)] hidden size-[clamp(200px,24vw,340px)] rounded-full border border-dashed border-primary/20 lg:block"
            />

            <div className="relative z-10">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-primary uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-primary" />
                Sustainability &amp; ESG
              </p>

              <h1
                id="sustainability-hero-title"
                className="mt-[clamp(14px,2vw,22px)] max-w-[13ch] font-sans text-[clamp(2.2rem,7.6vw,3.7rem)] leading-[0.9] font-extrabold tracking-[-0.015em] uppercase [font-stretch:112%] lg:text-[clamp(3.7rem,5.4vw,5.5rem)] lg:[font-stretch:118%]"
              >
                Built to last.
                <br />
                <span className="text-primary">Measured</span>
                <br />
                honestly.
              </h1>

              <p className="mt-[clamp(16px,2.2vw,26px)] max-w-[48ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.55] text-foreground/70">
                Sustainability is not a communications layer. It is a set of
                decisions taken at screening, design, construction and
                operation — and reported only when the evidence exists.
              </p>

              <div className="mt-[clamp(20px,2.8vw,30px)] flex flex-wrap gap-2.5">
                {CTAS.map((cta) => (
                  <a
                    key={cta.href}
                    href={cta.href}
                    className={
                      cta.variant === "solid"
                        ? `${BTN_BASE_CLASS} bg-primary text-background hover:-translate-y-px hover:bg-[#185a78] motion-reduce:transform-none`
                        : `${BTN_BASE_CLASS} border-foreground/25 bg-transparent text-foreground hover:bg-sidebar hover:text-muted`
                    }
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>

            <dl className="relative z-10 mt-[clamp(26px,3.4vw,38px)] grid grid-cols-3 gap-x-[clamp(14px,2.4vw,30px)] border-t border-foreground/15 pt-[clamp(16px,2.2vw,24px)]">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 font-sans text-[0.72rem] leading-[1.35] font-semibold tracking-[0.02em] text-foreground/85 uppercase [font-stretch:108%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="relative min-h-[clamp(320px,48vh,520px)] overflow-hidden bg-sidebar">
            <Image
              src="/placeholders/vision-impact.png"
              alt="Placeholder image standing in for photography of African industrial and infrastructure development at city scale"
              fill
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar/90 via-sidebar/20 to-sidebar/35"
            />

            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
            >
              <path
                d="M 0 74 L 100 46"
                fill="none"
                stroke="rgba(100,216,232,0.28)"
                strokeWidth="0.3"
                strokeDasharray="1 2"
              />
              <path
                d="M 0 84 L 100 56"
                fill="none"
                stroke="rgba(100,216,232,0.16)"
                strokeWidth="0.3"
              />
              <circle
                cx="72"
                cy="38"
                r="13"
                fill="none"
                stroke="rgba(100,216,232,0.35)"
                strokeWidth="0.4"
              />
            </svg>

            <p className="absolute top-[clamp(16px,2.4vw,30px)] left-[clamp(16px,2.4vw,30px)] border border-accent/35 bg-sidebar/75 px-2.5 py-1.5 text-[0.56rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Operating discipline
            </p>
            <p className="absolute right-[clamp(16px,2.4vw,30px)] bottom-[clamp(16px,2.4vw,30px)] left-[clamp(16px,2.4vw,30px)] text-[0.55rem] leading-[1.5] text-muted/65">
              PLACEHOLDER — photography slot. Replace with an image cleared for
              publication.
            </p>
          </figure>
        </div>

        <p className="mt-[clamp(12px,1.6vw,18px)] text-[0.6rem] leading-[1.5] tracking-[0.04em] text-foreground/60">
          PLACEHOLDER — hero copy, descriptors and imagery are illustrative
          until approved sustainability content is supplied.
        </p>
      </div>
    </section>
  );
}
