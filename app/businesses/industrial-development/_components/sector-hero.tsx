import Image from "next/image";
import { getSector } from "@/lib/businesses";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Walk the line", href: "#capabilities", variant: "glow" },
  {
    label: "Project development",
    href: "/investments/project-development",
    variant: "ghost",
  },
];

// PLACEHOLDER — scope descriptors, not a record of delivered projects.
const FACTS: { label: string; value: string }[] = [
  { label: "Scope", value: "Industrial systems" },
  { label: "Core", value: "Manufacturing · Processing" },
  { label: "Model", value: "Localise · Build · Partner" },
  { label: "Delivery", value: "EPC · JV · PPP · O&M" },
];

export default function SectorHero() {
  const sector = getSector("industrial-development");

  return (
    <section
      aria-labelledby="industrial-hero-title"
      className="bg-sidebar text-muted"
    >
      <div className="mx-auto w-full max-w-[1640px] px-[clamp(12px,2vw,26px)] pt-[clamp(96px,11vw,142px)] pb-[clamp(18px,2.6vw,32px)]">
        <div className="border border-accent/25">
          <div className="relative flex min-h-[clamp(470px,64vh,760px)] flex-col overflow-hidden">
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
              className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/55 to-sidebar/70"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-r from-sidebar/70 via-sidebar/15 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-55"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(100,216,232,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100,216,232,0.07) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[clamp(80px,10vw,124px)] right-[clamp(16px,3vw,40px)] font-sans text-[clamp(5.5rem,15vw,12rem)] leading-none font-extrabold tracking-[-0.05em] text-accent/[0.07] uppercase [font-stretch:120%] select-none"
            >
              05
            </span>

            <div className="relative z-10 flex flex-1 flex-col justify-between p-[clamp(18px,3.6vw,46px)]">
              <div className="flex items-start justify-between gap-6">
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
                    Industrial Development
                  </span>
                </nav>

                <p
                  aria-hidden="true"
                  className="hidden text-[0.6rem] font-semibold tracking-[0.32em] text-accent/70 uppercase [writing-mode:vertical-rl] lg:block"
                >
                  Design · Localise · Manufacture · Partner
                </p>
              </div>

              <div className="mt-[clamp(40px,7vw,90px)] grid items-end gap-[clamp(24px,4vw,54px)] lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
                    <span
                      aria-hidden="true"
                      className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                    />
                    Sector 05 — Industrial systems
                  </p>
                  <h1
                    id="industrial-hero-title"
                    className="mt-[clamp(16px,2.4vw,26px)] max-w-[13ch] font-sans text-[clamp(2.7rem,7vw,6.2rem)] leading-[0.9] font-extrabold tracking-[-0.01em] uppercase [font-stretch:120%]"
                  >
                    <span className="block">Industrial</span>
                    <span className="block text-accent">Development.</span>
                  </h1>
                </div>

                <div>
                  <p className="max-w-[46ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.55] text-muted/85">
                    {sector.valueProp}
                  </p>
                  <div className="mt-[clamp(20px,3vw,30px)] flex flex-wrap items-center gap-3">
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
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px border-t border-accent/20 bg-accent/20 lg:grid-cols-4">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="bg-sidebar px-[clamp(14px,2.4vw,28px)] py-[clamp(14px,1.8vw,22px)]"
              >
                <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-muted/60 uppercase">
                  {fact.label}
                </p>
                <p className="mt-2 font-sans text-[0.78rem] leading-[1.3] font-semibold tracking-[0.02em] text-muted/85 uppercase [font-stretch:108%]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-[clamp(10px,1.4vw,16px)] text-[0.62rem] leading-[1.5] tracking-[0.04em] text-muted/60">
          PLACEHOLDER — hero imagery and scope descriptors are illustrative
          until approved sector photography and content are supplied.
        </p>
      </div>
    </section>
  );
}
