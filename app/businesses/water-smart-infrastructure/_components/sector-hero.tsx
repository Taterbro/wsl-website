import Image from "next/image";
import { getSector } from "@/lib/businesses";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Explore the system", href: "#capabilities", variant: "glow" },
  { label: "WSWIS platform", href: "/innovation/wswis", variant: "ghost" },
];

// PLACEHOLDER — scope descriptors, not a record of delivered projects.
const FACTS: { label: string; value: string }[] = [
  { label: "Platform", value: "WSWIS" },
  { label: "Power", value: "Solar-powered" },
  { label: "Monitoring", value: "AI-enabled" },
  { label: "Delivery", value: "Municipal & commercial" },
];

const FLOW = ["Solar", "Treatment", "Storage", "Distribution", "Monitoring"];

export default function SectorHero() {
  const sector = getSector("water-smart-infrastructure");

  return (
    <section
      aria-labelledby="water-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div className="grid lg:min-h-[clamp(600px,80vh,880px)] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10 flex flex-col justify-end px-[clamp(20px,5vw,72px)] pt-[clamp(120px,13vw,172px)] pb-[clamp(42px,6vw,72px)]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[clamp(80px,10vw,120px)] right-[clamp(20px,5vw,72px)] font-sans text-[clamp(6rem,16vw,13rem)] leading-none font-extrabold tracking-[-0.04em] text-accent/[0.05] uppercase [font-stretch:120%] select-none"
          >
            01
          </span>

          <nav
            aria-label="Breadcrumb"
            className="relative flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
          >
            <a
              href="/businesses"
              className="text-muted/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
            >
              Our Businesses
            </a>
            <span aria-hidden="true" className="text-muted/35">
              /
            </span>
            <span aria-current="page" className="text-accent">
              Water &amp; Smart Infrastructure
            </span>
          </nav>

          <p className="relative mt-[clamp(26px,3.4vw,44px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
            <span aria-hidden="true" className="h-px w-[clamp(24px,4vw,56px)] bg-accent" />
            Sector 01 — Essential infrastructure
          </p>

          <h1
            id="water-hero-title"
            className="relative mt-[clamp(18px,2.6vw,28px)] max-w-[13ch] font-sans text-[clamp(2.7rem,6.6vw,5.8rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:120%]"
          >
            <span className="block">Water &amp;</span>
            <span className="block text-accent">Smart</span>
            <span className="block">Infrastructure</span>
          </h1>

          <p className="relative mt-[clamp(20px,3vw,30px)] max-w-[52ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.55] text-muted/85">
            {sector.valueProp}
          </p>

          <div className="relative mt-[clamp(26px,3.5vw,38px)] flex flex-wrap items-center gap-3">
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

        <div className="relative min-h-[clamp(320px,46vh,600px)] overflow-hidden lg:min-h-full">
          <Image
            src={sector.image}
            alt={sector.alt}
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="scale-105 object-cover motion-safe:animate-drift-3"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-sidebar via-sidebar/45 to-transparent lg:via-sidebar/20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-sidebar/90 via-transparent to-sidebar/65"
          />

          <p
            aria-hidden="true"
            className="absolute top-[clamp(90px,11vw,140px)] right-[clamp(16px,2.4vw,30px)] hidden text-[0.62rem] font-semibold tracking-[0.34em] text-accent/70 uppercase [writing-mode:vertical-rl] lg:block"
          >
            Solar · Treatment · Storage · Distribution · Monitoring
          </p>

          <div className="absolute inset-x-[clamp(18px,3vw,34px)] bottom-[clamp(18px,3vw,34px)] border border-accent/25 bg-sidebar/72 p-[clamp(14px,2vw,20px)] backdrop-blur-[6px]">
            <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-accent uppercase">
              WSWIS flow
            </p>
            <ol className="mt-3 flex list-none flex-wrap items-center gap-x-2 gap-y-1.5 p-0 text-[0.68rem] font-semibold tracking-[0.04em] text-muted/80 uppercase">
              {FLOW.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-accent/70">
                      →
                    </span>
                  )}
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="relative border-t border-accent/20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-px bg-accent/20 max-[900px]:grid-cols-2">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="bg-sidebar px-[clamp(16px,3vw,40px)] py-[clamp(15px,1.9vw,22px)]"
            >
              <span className="block text-[0.62rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                {fact.label}
              </span>
              <span className="mt-2 block font-sans text-[clamp(0.9rem,1.35vw,1.1rem)] leading-[1.2] font-bold uppercase [font-stretch:112%]">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
