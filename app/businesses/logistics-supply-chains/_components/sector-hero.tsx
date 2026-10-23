import Image from "next/image";
import { getSector } from "@/lib/businesses";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "solid" | "ghost" }[] = [
  { label: "Trace the corridor", href: "#capabilities", variant: "solid" },
  {
    label: "Trade opportunities",
    href: "/investments/opportunities",
    variant: "ghost",
  },
];

// PLACEHOLDER — scope descriptors, not a record of delivered routes.
const MANIFEST: { label: string; value: string }[] = [
  { label: "Network", value: "Corridor + nodes" },
  { label: "Modes", value: "Road · Rail · Port" },
  { label: "Model", value: "Build · Operate · Connect" },
  { label: "Reach", value: "Inland · Border · Last mile" },
];

const HERO_MARKERS: { left: string; top: string; label: string }[] = [
  { left: "22%", top: "62%", label: "Origin" },
  { left: "54%", top: "38%", label: "Inland hub" },
  { left: "82%", top: "54%", label: "Border" },
];

export default function SectorHero() {
  const sector = getSector("logistics-supply-chains");

  return (
    <section aria-labelledby="logistics-hero-title" className="bg-background">
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
              Logistics &amp; Supply Chains
            </span>
          </nav>

          <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            Sector 07 — Trade corridors
          </p>
        </div>

        <div className="mt-[clamp(16px,2.4vw,28px)] grid border border-foreground/15 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-between bg-muted/60 p-[clamp(20px,3.4vw,42px)]">
            <div>
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-primary uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-primary" />
                Dispatch — origin to demand
              </p>

              <h1
                id="logistics-hero-title"
                className="mt-[clamp(14px,2vw,22px)] max-w-[14ch] font-sans text-[clamp(1.7rem,7.5vw,3.2rem)] leading-[0.88] font-extrabold tracking-[-0.015em] break-words uppercase [font-stretch:112%] lg:text-[clamp(3.2rem,4.9vw,5rem)] lg:[font-stretch:118%]"
              >
                Logistics
                <br />
                <span className="text-primary">&amp;</span> Supply
                <br />
                Chains.
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

            <dl className="mt-[clamp(26px,3.4vw,38px)] grid grid-cols-2 gap-x-[clamp(16px,3vw,36px)] gap-y-[clamp(12px,1.8vw,18px)] border-t border-foreground/15 pt-[clamp(16px,2.2vw,24px)]">
              {MANIFEST.map((fact) => (
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

          <div className="relative min-h-[clamp(360px,52vh,660px)] overflow-hidden bg-sidebar">
            <Image
              src={sector.image}
              alt={sector.alt}
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="scale-105 object-cover motion-safe:animate-drift-3"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar/80 via-sidebar/20 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-r from-sidebar/40 to-transparent"
            />

            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <path
                d="M -4 70 C 12 60, 18 54, 26 50 S 44 44, 54 38 S 72 48, 82 54 S 94 60, 104 56"
                fill="none"
                stroke="rgba(100,216,232,0.8)"
                strokeWidth="0.6"
                strokeDasharray="2 1.6"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 10 84 C 28 78, 44 68, 62 66 S 82 70, 102 62"
                fill="none"
                stroke="rgba(233,241,244,0.3)"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {HERO_MARKERS.map((marker) => (
              <span
                key={marker.label}
                className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                style={{ left: marker.left, top: marker.top }}
              >
                <span
                  aria-hidden="true"
                  className="size-2.5 rounded-full border border-accent bg-accent/30 shadow-[0_0_0_5px_rgba(100,216,232,0.12)]"
                />
                <span className="whitespace-nowrap border border-accent/35 bg-sidebar/80 px-2 py-1 text-[0.5rem] font-semibold tracking-[0.12em] text-accent uppercase">
                  {marker.label}
                </span>
              </span>
            ))}

            <p className="absolute top-[clamp(16px,2.4vw,30px)] left-[clamp(16px,2.4vw,30px)] border border-accent/35 bg-sidebar/75 px-2.5 py-1.5 text-[0.56rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Corridor section — 07
            </p>
            <p
              aria-hidden="true"
              className="absolute top-[clamp(16px,2.4vw,30px)] right-[clamp(16px,2.4vw,30px)] hidden text-[0.56rem] font-semibold tracking-[0.26em] text-muted/65 uppercase [writing-mode:vertical-rl] lg:block"
            >
              Move · Store · Clear · Deliver
            </p>
            <p className="absolute right-[clamp(16px,2.4vw,30px)] bottom-[clamp(16px,2.4vw,30px)] max-w-[28ch] text-right text-[0.55rem] leading-[1.5] text-muted/65">
              PLACEHOLDER — corridor overlay is illustrative, not a live route
              map.
            </p>
          </div>
        </div>

        <p className="mt-[clamp(12px,1.6vw,18px)] text-[0.6rem] leading-[1.5] tracking-[0.04em] text-foreground/60">
          PLACEHOLDER — hero imagery, network facts and corridor overlay are
          illustrative until approved sector content and photography are
          supplied.
        </p>
      </div>
    </section>
  );
}
