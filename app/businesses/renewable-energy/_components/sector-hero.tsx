import Image from "next/image";
import { getSector } from "@/lib/businesses";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Explore capabilities", href: "#capabilities", variant: "glow" },
  {
    label: "Project development",
    href: "/investments/project-development",
    variant: "ghost",
  },
];

// PLACEHOLDER — scope descriptors, not a record of delivered projects.
const FACTS: { label: string; value: string }[] = [
  { label: "Source", value: "Solar" },
  { label: "Architecture", value: "Hybrid + storage" },
  { label: "Delivery", value: "EPC · IPP · JV" },
  { label: "Offtake", value: "Industry & communities" },
];

export default function SectorHero() {
  const sector = getSector("renewable-energy");

  return (
    <section
      aria-labelledby="energy-hero-title"
      className="relative isolate flex min-h-[clamp(620px,80vh,880px)] flex-col overflow-hidden bg-sidebar text-muted"
    >
      <Image
        src={sector.image}
        alt={sector.alt}
        fill
        preload
        sizes="100vw"
        className="object-cover motion-safe:animate-drift-3"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-sidebar via-sidebar/80 to-sidebar/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/25 to-sidebar/55"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-[clamp(20px,5vw,72px)] pt-[clamp(104px,12vw,150px)] pb-[clamp(34px,5vw,64px)]">
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
              Renewable Energy
            </span>
          </nav>

          <p
            aria-hidden="true"
            className="hidden text-[0.62rem] font-semibold tracking-[0.34em] text-accent/70 uppercase [writing-mode:vertical-rl] lg:block"
          >
            Sector 02 · Generation · Storage · Dispatch
          </p>
        </div>

        <div className="mt-auto grid items-end gap-[clamp(28px,4.6vw,58px)] lg:grid-cols-[1.18fr_0.82fr]">
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-[clamp(100px,16vw,210px)] -left-[clamp(6px,1vw,18px)] font-sans text-[clamp(7rem,20vw,17rem)] leading-none font-extrabold tracking-[-0.05em] text-accent/[0.06] uppercase select-none [font-stretch:120%]"
            >
              02
            </span>

            <p className="relative flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              Powering the real economy
            </p>

            <h1
              id="energy-hero-title"
              className="relative mt-[clamp(16px,2.4vw,26px)] max-w-[13ch] font-sans text-[clamp(2.8rem,7.2vw,6.4rem)] leading-[0.9] font-extrabold tracking-[-0.01em] uppercase [font-stretch:120%]"
            >
              <span className="block">Renewable</span>
              <span className="block text-accent">Energy.</span>
            </h1>

            <p className="relative mt-[clamp(20px,3vw,30px)] max-w-[54ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.55] text-muted/85">
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

          <dl className="grid grid-cols-2 gap-px border border-accent/25 bg-accent/25 backdrop-blur-[6px]">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="bg-sidebar/72 px-[clamp(14px,2vw,24px)] py-[clamp(14px,1.8vw,22px)]"
              >
                <dt className="text-[0.6rem] font-semibold tracking-[0.18em] text-muted/45 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-sans text-[clamp(0.86rem,1.25vw,1.05rem)] leading-[1.22] font-bold tracking-[0.01em] uppercase [font-stretch:112%]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <p className="relative z-10 border-t border-accent/20 px-[clamp(20px,5vw,72px)] py-[clamp(10px,1.4vw,16px)] text-[0.62rem] leading-[1.5] tracking-[0.04em] text-muted/50">
        PLACEHOLDER — hero imagery and scope descriptors are illustrative until
        approved sector photography and content are supplied.
      </p>
    </section>
  );
}
