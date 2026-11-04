import Image from "next/image";
import { getSector } from "@/lib/businesses";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Explore the chain", href: "#capabilities", variant: "glow" },
  {
    label: "Project development",
    href: "/investments/project-development",
    variant: "ghost",
  },
];

// PLACEHOLDER — scope descriptors, not a record of delivered projects.
const FACTS: { label: string; value: string }[] = [
  { label: "Focus", value: "Field-to-market infrastructure" },
  { label: "Chain", value: "Farm · Processing · Cold chain" },
  { label: "Markets", value: "Community, commercial, institutional" },
  { label: "Models", value: "EPC · JV · PPP · O&M" },
];

// PLACEHOLDER — imagery is illustrative until approved sector photography is
// supplied.
const MOSAIC = [
  {
    src: "/placeholders/group-sector-agriculture.png",
    alt: "Agricultural production and field infrastructure (placeholder image)",
    label: "Farm",
    span: "row-span-2",
  },
  {
    src: "/placeholders/story-field-water.png",
    alt: "Irrigated agricultural fields (placeholder image)",
    label: "Water",
    span: "",
  },
  {
    src: "/placeholders/logistics-hub.png",
    alt: "Warehouse and cold-chain logistics infrastructure (placeholder image)",
    label: "Cold chain",
    span: "",
  },
];

export default function SectorHero() {
  const sector = getSector("agriculture-food-systems");

  return (
    <section
      aria-labelledby="agriculture-hero-title"
      className="relative overflow-hidden bg-sidebar text-muted"
    >
      <div className="grid min-h-[clamp(640px,80vh,900px)] lg:grid-cols-[0.94fr_1.06fr]">
        <div className="relative z-10 flex flex-col justify-between px-[clamp(20px,5vw,72px)] pt-[clamp(104px,12vw,150px)] pb-[clamp(32px,4.4vw,58px)]">
          <div>
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
                Agriculture &amp; Food Systems
              </span>
            </nav>

            <p className="mt-[clamp(40px,7vw,92px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              Sector 03 — Field to market
            </p>

            <h1
              id="agriculture-hero-title"
              className="mt-[clamp(16px,2.4vw,26px)] max-w-[11ch] font-sans text-[clamp(2.8rem,6.8vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.01em] uppercase [font-stretch:120%]"
            >
              <span className="block">Agriculture</span>
              <span className="block text-accent">&amp; Food</span>
              <span className="block">Systems.</span>
            </h1>

            <p className="mt-[clamp(20px,3vw,30px)] max-w-[48ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.55] text-muted/85">
              {sector.valueProp}
            </p>

            <div className="mt-[clamp(26px,3.5vw,38px)] flex flex-wrap items-center gap-3">
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

          <dl className="mt-[clamp(34px,5vw,62px)] border-t border-accent/20">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-6 border-b border-accent/12 py-[clamp(9px,1.2vw,13px)]"
              >
                <dt className="text-[0.6rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                  {fact.label}
                </dt>
                <dd className="text-right font-sans text-[0.78rem] leading-[1.3] font-semibold tracking-[0.02em] text-muted/85 uppercase [font-stretch:108%]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[clamp(340px,46vh,620px)] p-[clamp(14px,2vw,22px)] lg:min-h-full">
          <div className="grid h-full grid-cols-2 grid-rows-2 gap-px bg-accent/20">
            {MOSAIC.map((tile, index) => (
              <div
                key={tile.src}
                className={`relative overflow-hidden bg-sidebar ${tile.span}`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  preload={index === 0}
                  sizes="(max-width: 1024px) 50vw, 27vw"
                  className={
                    index === 0
                      ? "scale-105 object-cover motion-safe:animate-drift-3"
                      : "object-cover"
                  }
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-sidebar/70 via-transparent to-sidebar/25"
                />
                <p className="absolute bottom-[clamp(10px,1.4vw,16px)] left-[clamp(10px,1.4vw,16px)] text-[0.6rem] font-semibold tracking-[0.2em] text-accent uppercase">
                  {tile.label}
                </p>
              </div>
            ))}
          </div>

          <p
            aria-hidden="true"
            className="absolute top-[clamp(24px,3vw,40px)] right-[clamp(24px,3vw,40px)] hidden text-[0.6rem] font-semibold tracking-[0.32em] text-accent/80 uppercase [writing-mode:vertical-rl] lg:block"
          >
            Farm · Process · Cold chain · Market
          </p>
        </div>
      </div>

      <p className="border-t border-accent/20 px-[clamp(20px,5vw,72px)] py-[clamp(10px,1.4vw,16px)] text-[0.62rem] leading-[1.5] tracking-[0.04em] text-muted/50">
        PLACEHOLDER — hero imagery and scope descriptors are illustrative until
        approved sector photography and content are supplied.
      </p>
    </section>
  );
}
