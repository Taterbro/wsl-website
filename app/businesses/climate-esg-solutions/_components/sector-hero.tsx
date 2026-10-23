import Image from "next/image";
import { getSector } from "@/lib/businesses";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "solid" | "ghost" }[] = [
  { label: "Enter the loop", href: "#capabilities", variant: "solid" },
  {
    label: "Impact & sustainability",
    href: "/impact/sustainability",
    variant: "ghost",
  },
];

// PLACEHOLDER — scope descriptors, not a record of delivered assets.
const CONDITIONS: { label: string; value: string }[] = [
  { label: "Lens", value: "Resilience · Circularity · Efficiency" },
  { label: "Horizon", value: "Design → Renew" },
  { label: "Model", value: "Advisory · Asset · Capital" },
  { label: "Bridge", value: "Impact & ESG" },
];

const ORBIT_DOTS = [0, 1, 2, 3, 4];

export default function SectorHero() {
  const sector = getSector("climate-esg-solutions");

  return (
    <section
      aria-labelledby="climate-hero-title"
      className="relative isolate overflow-hidden bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-[clamp(96px,11vw,142px)] pb-[clamp(40px,5vw,64px)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase"
          >
            <a
              href="/businesses"
              className="text-foreground/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
            >
              Our Businesses
            </a>
            <span aria-hidden="true" className="text-foreground/35">
              /
            </span>
            <span aria-current="page" className="text-foreground">
              Climate &amp; ESG Solutions
            </span>
          </nav>

          <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            Sector 08 — Climate lens
          </p>
        </div>

        <div className="mt-[clamp(18px,2.8vw,34px)] grid gap-[clamp(24px,4vw,52px)] lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="relative flex flex-col justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-[clamp(10px,4vw,60px)] -right-[clamp(0px,3vw,40px)] hidden size-[clamp(220px,26vw,380px)] rounded-full border border-dashed border-primary/25 lg:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[clamp(40px,8vw,120px)] right-[clamp(30px,7vw,100px)] hidden size-[clamp(140px,17vw,250px)] rounded-full border border-primary/15 lg:block"
            />

            <div className="relative z-10">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-primary uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-primary" />
                01 — Climate &amp; ESG
              </p>

              <h1
                id="climate-hero-title"
                className="mt-[clamp(14px,2vw,22px)] max-w-[13ch] font-sans text-[clamp(2.1rem,8vw,3.6rem)] leading-[0.88] font-extrabold tracking-[-0.015em] break-words uppercase [font-stretch:112%] lg:text-[clamp(3.6rem,5.4vw,5.6rem)] lg:[font-stretch:118%]"
              >
                Climate
                <br />
                <span className="text-primary">&amp;</span> ESG
                <br />
                Solutions.
              </h1>

              <p className="mt-[clamp(16px,2.2vw,26px)] max-w-[46ch] text-[clamp(0.98rem,1.3vw,1.12rem)] leading-[1.55] text-foreground/70">
                {sector.valueProp}
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

            <dl className="relative z-10 mt-[clamp(26px,3.4vw,38px)] grid grid-cols-2 gap-x-[clamp(16px,3vw,36px)] gap-y-[clamp(12px,1.8vw,18px)] border-t border-foreground/15 pt-[clamp(16px,2.2vw,24px)]">
              {CONDITIONS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 font-sans text-[0.74rem] leading-[1.35] font-semibold tracking-[0.02em] text-foreground/85 uppercase [font-stretch:108%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-h-[clamp(340px,52vh,580px)] overflow-hidden bg-sidebar lg:min-h-[520px]">
            <Image
              src={sector.image}
              alt={sector.alt}
              fill
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="scale-105 object-cover motion-safe:animate-drift-3"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar/85 via-sidebar/15 to-sidebar/35"
            />

            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
            >
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="rgba(100,216,232,0.22)"
                strokeWidth="0.4"
                strokeDasharray="1.2 2"
              />
              <circle
                cx="50"
                cy="50"
                r="31"
                fill="none"
                stroke="rgba(100,216,232,0.4)"
                strokeWidth="0.45"
              />
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="rgba(233,241,244,0.22)"
                strokeWidth="0.4"
              />
              {ORBIT_DOTS.map((index) => {
                const angle = ((-90 + index * 72) * Math.PI) / 180;
                return (
                  <circle
                    key={index}
                    cx={50 + 31 * Math.cos(angle)}
                    cy={50 + 31 * Math.sin(angle)}
                    r="0.9"
                    fill="rgba(100,216,232,0.9)"
                  />
                );
              })}
            </svg>

            <p className="absolute top-[clamp(16px,2.4vw,30px)] left-[clamp(16px,2.4vw,30px)] border border-accent/35 bg-sidebar/75 px-2.5 py-1.5 text-[0.56rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Climate lens — 08
            </p>
            <p
              aria-hidden="true"
              className="absolute top-[clamp(16px,2.4vw,30px)] right-[clamp(16px,2.4vw,30px)] hidden text-[0.56rem] font-semibold tracking-[0.26em] text-muted/65 uppercase [writing-mode:vertical-rl] lg:block"
            >
              Resilience · Circularity · Efficiency
            </p>
            <p className="absolute right-[clamp(16px,2.4vw,30px)] bottom-[clamp(16px,2.4vw,30px)] left-[clamp(16px,2.4vw,30px)] text-[0.55rem] leading-[1.5] text-muted/65">
              PLACEHOLDER — orbit overlay is illustrative, not a live
              measurement.
            </p>
          </div>
        </div>

        <p className="mt-[clamp(12px,1.6vw,18px)] text-[0.6rem] leading-[1.5] tracking-[0.04em] text-foreground/60">
          PLACEHOLDER — hero imagery, climate descriptors and orbit overlay are
          illustrative until approved sector content and photography are
          supplied.
        </p>
      </div>
    </section>
  );
}
