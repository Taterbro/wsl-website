import Image from "next/image";
import { getSector } from "@/lib/businesses";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Explore the stack", href: "#capabilities", variant: "glow" },
  { label: "WSWIS platform", href: "/innovation/wswis", variant: "ghost" },
];

// PLACEHOLDER — scope descriptors, not a record of delivered projects.
const FACTS: { label: string; value: string }[] = [
  { label: "Discipline", value: "Digital infrastructure" },
  { label: "Core", value: "AI · Data · Platforms" },
  { label: "Deployment", value: "Enterprise & public systems" },
  { label: "Model", value: "Build · Integrate · Operate" },
];

export default function SectorHero() {
  const sector = getSector("technology-digital-infrastructure");

  return (
    <section
      aria-labelledby="technology-hero-title"
      className="relative overflow-hidden bg-sidebar text-muted"
    >
      <div className="grid lg:min-h-[clamp(660px,82vh,920px)] lg:grid-cols-[1.32fr_0.68fr]">
        <div className="relative flex min-h-[clamp(430px,60vh,720px)] flex-col overflow-hidden">
          <Image
            src={sector.image}
            alt={sector.alt}
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="scale-105 object-cover motion-safe:animate-drift-3"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/45 to-sidebar/65"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-sidebar/70 via-sidebar/10 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(100,216,232,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100,216,232,0.07) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[clamp(88px,11vw,132px)] right-[clamp(16px,3vw,40px)] font-sans text-[clamp(6rem,17vw,14rem)] leading-none font-extrabold tracking-[-0.05em] text-accent/[0.07] uppercase [font-stretch:120%] select-none"
          >
            04
          </span>

          <div className="relative z-10 flex flex-1 flex-col justify-between p-[clamp(20px,5vw,72px)] pt-[clamp(104px,12vw,150px)] pb-[clamp(30px,4.4vw,58px)]">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
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
                Technology &amp; Digital Infrastructure
              </span>
            </nav>

            <div>
              <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                Sector 04 — The systems layer
              </p>

              <h1
                id="technology-hero-title"
                className="mt-[clamp(16px,2.4vw,26px)] max-w-[14ch] font-sans text-[clamp(2.6rem,6.6vw,5.8rem)] leading-[0.9] font-extrabold tracking-[-0.01em] uppercase [font-stretch:120%]"
              >
                <span className="block">Technology</span>
                <span className="block text-accent">&amp; Digital</span>
                <span className="block">Infrastructure.</span>
              </h1>
            </div>

            <p
              aria-hidden="true"
              className="hidden text-[0.62rem] font-semibold tracking-[0.34em] text-accent/70 uppercase [writing-mode:vertical-rl] lg:block"
              style={{ position: "absolute", right: "clamp(20px,3vw,40px)", top: "50%" }}
            >
              AI · Data · Platforms · Automation
            </p>
          </div>
        </div>

        <aside className="relative flex flex-col justify-between border-t border-accent/20 bg-sidebar p-[clamp(20px,4vw,56px)] pt-[clamp(30px,4vw,56px)] lg:border-t-0 lg:border-l lg:pt-[clamp(118px,13vw,158px)]">
          <div>
            <p className="font-sans text-[0.66rem] font-semibold tracking-[0.22em] text-accent uppercase">
              04 / 08 — Our Businesses
            </p>
            <p className="mt-[clamp(20px,3vw,32px)] max-w-[42ch] text-[clamp(1.1rem,1.6vw,1.35rem)] leading-[1.5] text-muted/90">
              {sector.valueProp}
            </p>
          </div>

          <div className="mt-[clamp(28px,4vw,48px)]">
            <div className="flex flex-wrap items-center gap-3">
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

            <dl className="mt-[clamp(26px,3.6vw,42px)] border-t border-accent/20">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-5 border-b border-accent/12 py-[clamp(9px,1.2vw,13px)]"
                >
                  <dt className="text-[0.58rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="text-right font-sans text-[0.74rem] leading-[1.3] font-semibold tracking-[0.02em] text-muted/85 uppercase [font-stretch:108%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-[clamp(18px,2.4vw,26px)] text-[0.62rem] leading-[1.5] text-muted/45">
            PLACEHOLDER — scope descriptors are illustrative until approved
            sector content is supplied.
          </p>
        </aside>
      </div>
    </section>
  );
}
