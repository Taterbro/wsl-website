import Image from "next/image";
import { HERO_FACTS } from "../_data/water";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Explore the system", href: "#water-system", variant: "glow" },
  { label: "Discuss a project", href: "/contact", variant: "ghost" },
];

export default function WaterHero() {
  return (
    <section
      aria-labelledby="water-hero-title"
      className="relative isolate overflow-hidden bg-sidebar pt-[clamp(96px,11vw,150px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[28vw] -right-[18vw] h-[62vw] w-[62vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.18),transparent_62%)] blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-18vw] left-[-16vw] h-[46vw] w-[46vw] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.12),transparent_64%)] blur-[80px]"
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
            Water &amp; Smart Infrastructure
          </span>
        </nav>

        <div className="mt-[clamp(26px,4vw,46px)] flex flex-wrap items-end justify-between gap-x-[clamp(30px,6vw,90px)] gap-y-[clamp(22px,3vw,32px)]">
          <div>
            <p className="mb-[clamp(18px,2.6vw,26px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              01 — Our businesses
            </p>
            <h1
              id="water-hero-title"
              className="max-w-[15ch] font-sans text-[clamp(2.7rem,7.8vw,6.6rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              Water,
              <br />
              engineered
              <br />
              <span className="text-accent">for certainty.</span>
            </h1>
          </div>

          <div className="max-w-[38ch] pb-[clamp(4px,1vw,12px)]">
            <p className="text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.55] text-muted/85">
              Solar-powered, instrumented water infrastructure — from source and
              treatment to storage, distribution and predictive maintenance.
            </p>
            <div className="mt-[clamp(22px,3vw,30px)] flex flex-wrap items-center gap-3">
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

        <figure className="relative mt-[clamp(32px,5vw,58px)]">
          <div className="relative aspect-[16/11] overflow-hidden border border-accent/20 md:aspect-[21/8]">
            <Image
              src="/placeholders/group-sector-water.png"
              alt="Placeholder artwork standing in for photography of a solar-powered water treatment and storage facility"
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/25 to-transparent"
            />

            <dl className="absolute inset-x-[clamp(12px,2vw,26px)] bottom-[clamp(12px,2vw,26px)] grid grid-cols-3 gap-px bg-accent/20 max-[620px]:grid-cols-1">
              {HERO_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-sidebar/92 px-[clamp(14px,2vw,26px)] py-[clamp(12px,1.7vw,20px)] backdrop-blur-sm"
                >
                  <dt className="text-[0.62rem] font-semibold tracking-[0.16em] text-muted/50 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 font-sans text-[clamp(0.9rem,1.4vw,1.12rem)] leading-[1.2] font-bold uppercase [font-stretch:112%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
            PLACEHOLDER — approved photography slot. Replace with an image
            cleared for publication.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
