import Image from "next/image";
import { getSector } from "@/lib/businesses";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "solid" | "ghost" }[] = [
  { label: "Explore the city", href: "#capabilities", variant: "solid" },
  {
    label: "Development pipeline",
    href: "/projects/development-pipeline",
    variant: "ghost",
  },
];

// PLACEHOLDER — scope descriptors, not a record of delivered projects.
const FACTS: { label: string; value: string }[] = [
  { label: "Focus", value: "Housing · Commercial · Civic" },
  { label: "Model", value: "Develop · Partner · Operate" },
  { label: "Scale", value: "District and city" },
  { label: "Delivery", value: "PPP · JV · Build-to-suit" },
];

export default function SectorHero() {
  const sector = getSector("real-estate-urban-infrastructure");

  return (
    <section
      aria-labelledby="urban-hero-title"
      className="bg-background"
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
              Real Estate &amp; Urban Infrastructure
            </span>
          </nav>

          <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            Sector 06 — Urban systems
          </p>
        </div>

        <div className="relative mt-[clamp(16px,2.4vw,28px)]">
          <div className="relative min-h-[clamp(400px,58vh,680px)] overflow-hidden bg-sidebar">
            <Image
              src={sector.image}
              alt={sector.alt}
              fill
              preload
              sizes="100vw"
              className="scale-105 object-cover motion-safe:animate-drift-3"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar/75 via-sidebar/20 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-r from-sidebar/35 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-45"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />

            <p className="absolute top-[clamp(16px,2.4vw,30px)] left-[clamp(16px,2.4vw,30px)] border border-accent/35 bg-sidebar/75 px-2.5 py-1.5 text-[0.56rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Urban section — 06
            </p>
            <p
              aria-hidden="true"
              className="absolute top-[clamp(16px,2.4vw,30px)] right-[clamp(16px,2.4vw,30px)] hidden text-[0.56rem] font-semibold tracking-[0.26em] text-muted/65 uppercase [writing-mode:vertical-rl] lg:block"
            >
              Plan · Build · Operate · Renew
            </p>
          </div>

          <div className="relative z-10 -mt-[clamp(44px,6.5vw,96px)] border border-foreground/15 bg-background p-[clamp(20px,3.4vw,42px)] lg:ml-[5vw] lg:max-w-[min(840px,76%)]">
            <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-primary" />
              Urban systems — end to end
            </p>

            <h1
              id="urban-hero-title"
              className="mt-[clamp(14px,2vw,22px)] max-w-[15ch] font-sans text-[clamp(1.6rem,7.5vw,3.2rem)] leading-[0.88] font-extrabold tracking-[-0.015em] break-words uppercase [font-stretch:112%] lg:text-[clamp(3.4rem,5.2vw,5.4rem)] lg:[font-stretch:120%]"
            >
              Real Estate
              <br />
              <span className="text-primary">&amp;</span> Urban
              <br />
              Infrastructure.
            </h1>

            <div className="mt-[clamp(18px,2.6vw,28px)] grid gap-[clamp(16px,2.6vw,28px)] lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <p className="max-w-[50ch] text-[clamp(0.98rem,1.3vw,1.12rem)] leading-[1.55] text-foreground/70">
                {sector.valueProp}
              </p>
              <div className="flex flex-wrap gap-2.5 lg:justify-end">
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

            <dl className="mt-[clamp(22px,3vw,32px)] grid grid-cols-2 gap-x-[clamp(16px,3vw,36px)] gap-y-[clamp(12px,1.8vw,18px)] border-t border-foreground/15 pt-[clamp(16px,2.2vw,24px)]">
              {FACTS.map((fact) => (
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
        </div>

        <p className="mt-[clamp(12px,1.6vw,18px)] text-[0.6rem] leading-[1.5] tracking-[0.04em] text-foreground/60">
          PLACEHOLDER — hero imagery, key facts and scope descriptors are
          illustrative until approved sector content and photography are
          supplied.
        </p>
      </div>
    </section>
  );
}
