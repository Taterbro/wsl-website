import Image from "next/image";
import { HERO_FACTS, LOGISTICS_INTRO } from "../_data/logistics";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "See the corridor", href: "#corridor", variant: "glow" },
  { label: "Our services", href: "#logistics-services", variant: "ghost" },
];

const OVERLAY_NODES = ["Port", "Border", "Hub"];

export default function LogisticsHero() {
  return (
    <section
      aria-labelledby="logistics-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[20vw] left-[-10vw] h-[44vw] w-[44vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.12),transparent_65%)] blur-[90px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-[clamp(40px,6vw,96px)]">
        <div className="grid grid-cols-[1.04fr_0.96fr] items-center gap-[clamp(26px,4vw,64px)] max-[980px]:grid-cols-1">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-[clamp(18px,2.6vw,26px)] flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase"
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
                Logistics
              </span>
            </nav>

            <p className="mb-[clamp(16px,2.4vw,24px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              {LOGISTICS_INTRO.strap}
            </p>

            <h1
              id="logistics-hero-title"
              className="font-sans text-[clamp(2.4rem,6.6vw,5.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              Chains that
              <br />
              <span className="text-accent">hold.</span>
            </h1>

            <p className="mt-[clamp(18px,2.6vw,28px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/85">
              {LOGISTICS_INTRO.summary}
            </p>

            <div className="mt-[clamp(24px,3.4vw,36px)] flex flex-wrap items-center gap-3">
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

          <figure className="relative aspect-[4/5] overflow-hidden border border-accent/20 max-[980px]:aspect-[16/10]">
            <Image
              src="/placeholders/group-sector-logistics.png"
              alt="Placeholder artwork standing in for photography of a logistics terminal with warehouses and handling yards"
              fill
              preload
              sizes="(max-width: 980px) 100vw, 46vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar/80 via-transparent to-transparent"
            />

            <div className="absolute bottom-[clamp(12px,2vw,20px)] left-[clamp(12px,2vw,20px)] right-[clamp(12px,2vw,20px)] border border-accent/30 bg-sidebar/85 p-[clamp(12px,1.6vw,16px)] backdrop-blur-sm">
              <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-accent uppercase">
                Example lane
              </p>
              <ol className="mt-3 flex list-none items-center gap-2 p-0">
                {OVERLAY_NODES.map((node, index) => (
                  <li key={node} className="flex items-center gap-2">
                    <span className="rounded-[2px] border border-accent/30 px-[10px] py-[6px] text-[0.7rem] font-semibold tracking-[0.06em] uppercase">
                      {node}
                    </span>
                    {index < OVERLAY_NODES.length - 1 && (
                      <span aria-hidden="true" className="text-accent/60">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-[0.68rem] leading-[1.5] text-muted/60">
                PLACEHOLDER — illustrative lane, not a published service record.
              </p>
            </div>
          </figure>
        </div>

        <dl className="mt-[clamp(28px,4vw,56px)] grid list-none grid-cols-1 gap-x-[clamp(20px,3vw,44px)] gap-y-[clamp(12px,1.8vw,20px)] border-t border-accent/20 p-0 pt-[clamp(16px,2.2vw,24px)] sm:grid-cols-3">
          {HERO_FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[0.62rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                {fact.label}
              </dt>
              <dd className="mt-2 font-sans text-[clamp(0.9rem,1.3vw,1.05rem)] leading-[1.25] font-bold uppercase [font-stretch:112%]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
