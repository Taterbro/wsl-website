import Image from "next/image";
import { CHAIN_STAGES, HERO_FACTS } from "../_data/agriculture";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Follow the chain", href: "#value-chain", variant: "glow" },
  { label: "Discuss a project", href: "/contact", variant: "ghost" },
];

export default function AgricultureHero() {
  return (
    <section
      aria-labelledby="agriculture-hero-title"
      className="relative isolate overflow-hidden bg-sidebar pt-[clamp(96px,11vw,150px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[26vw] -right-[18vw] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(120,200,120,0.16),transparent_62%)] blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-18vw] left-[-16vw] h-[46vw] w-[46vw] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.14),transparent_64%)] blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pb-[clamp(48px,7vw,92px)]">
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
            Agriculture
          </span>
        </nav>

        <div className="mt-[clamp(26px,4vw,46px)] grid grid-cols-[1.04fr_0.96fr] items-end gap-[clamp(30px,5vw,76px)] max-[980px]:grid-cols-1">
          <div>
            <p className="mb-[clamp(18px,2.6vw,26px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              01 — Our businesses
            </p>
            <h1
              id="agriculture-hero-title"
              className="max-w-[13ch] font-sans text-[clamp(2.7rem,7.8vw,6.6rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              From field
              <br />
              <span className="text-accent">to market.</span>
            </h1>
            <p className="mt-[clamp(20px,3vw,30px)] max-w-[52ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.55] text-muted/85">
              Irrigation, processing, cold chain and market infrastructure —
              built and financed as one connected food system.
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

            <dl className="mt-[clamp(30px,4vw,46px)] grid grid-cols-3 gap-x-[clamp(14px,2.4vw,30px)] border-t border-accent/20 pt-[clamp(14px,2vw,20px)] max-[520px]:grid-cols-1 max-[520px]:gap-y-3">
              {HERO_FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.62rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 font-sans text-[clamp(0.86rem,1.2vw,1.02rem)] leading-[1.2] font-bold uppercase [font-stretch:112%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure>
            <div className="relative aspect-[16/11] overflow-hidden border border-accent/20 md:aspect-[4/3]">
              <Image
                src="/placeholders/group-sector-agriculture.png"
                alt="Placeholder artwork standing in for photography of agricultural production and food processing infrastructure"
                fill
                preload
                sizes="(max-width: 980px) 100vw, 46vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/25 to-transparent"
              />

              <div className="absolute inset-x-[clamp(12px,2vw,24px)] bottom-[clamp(12px,2vw,24px)] border border-accent/25 bg-sidebar/92 px-[clamp(14px,2vw,22px)] py-[clamp(12px,1.7vw,18px)] backdrop-blur-sm">
                <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-muted/50 uppercase">
                  Value chain
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                  {CHAIN_STAGES.map((stage, index) => (
                    <span
                      key={stage.key}
                      className="inline-flex items-center gap-2 text-[0.64rem] font-semibold tracking-[0.06em] text-muted/75 uppercase"
                    >
                      {stage.label}
                      {index < CHAIN_STAGES.length - 1 && (
                        <span aria-hidden="true" className="text-accent">
                          →
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
              PLACEHOLDER — approved photography slot. Replace with an image
              cleared for publication.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
