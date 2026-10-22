import Image from "next/image";
import { HERO_FACTS, URBAN_INTRO } from "../_data/urban";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "solid" | "ghost" }[] = [
  { label: "See the district", href: "#district-plan", variant: "solid" },
  { label: "Our projects", href: "/projects", variant: "ghost" },
];

export default function UrbanHero() {
  return (
    <section
      aria-labelledby="urban-hero-title"
      className="bg-background text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-[clamp(40px,6vw,96px)]">
        <div className="grid grid-cols-[1.24fr_0.76fr] items-end gap-[clamp(26px,4vw,64px)] max-[980px]:grid-cols-1">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-[clamp(18px,2.6vw,26px)] flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase"
            >
              <a
                href="/businesses"
                className="transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
              >
                Our Businesses
              </a>
              <span aria-hidden="true" className="text-muted-foreground/40">
                /
              </span>
              <span aria-current="page" className="text-primary">
                Real Estate &amp; Urban Infrastructure
              </span>
            </nav>

            <p className="mb-[clamp(16px,2.4vw,24px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              {URBAN_INTRO.strap}
            </p>

            <h1
              id="urban-hero-title"
              className="font-sans text-[clamp(2.5rem,7vw,6.2rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              Places that
              <br />
              <span className="text-primary">keep working.</span>
            </h1>

            <p className="mt-[clamp(18px,2.6vw,28px)] max-w-[54ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted-foreground">
              {URBAN_INTRO.summary}
            </p>

            <div className="mt-[clamp(24px,3.4vw,36px)] flex flex-wrap items-center gap-3">
              {CTAS.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "solid"
                      ? `${BTN_BASE_CLASS} bg-primary text-background hover:-translate-y-px hover:bg-[#123f5a] motion-reduce:transform-none`
                      : `${BTN_BASE_CLASS} border-primary/40 text-primary hover:bg-primary hover:text-background`
                  }
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>

          <dl className="m-0 list-none border-t border-[rgba(9,29,42,0.16)] p-0">
            {HERO_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 border-b border-[rgba(9,29,42,0.16)] py-[clamp(10px,1.4vw,14px)]"
              >
                <dt className="text-[0.62rem] font-semibold tracking-[0.16em] text-muted-foreground/70 uppercase">
                  {fact.label}
                </dt>
                <dd className="text-right font-sans text-[clamp(0.85rem,1.2vw,1rem)] leading-[1.3] font-bold uppercase [font-stretch:112%]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <figure className="relative mt-[clamp(28px,4.4vw,64px)] h-[clamp(200px,24vw,400px)] w-full overflow-hidden">
        <Image
          src="/placeholders/district-panorama.png"
          alt="Placeholder artwork standing in for a panoramic view of a mixed-use urban district"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-sidebar/70 via-transparent to-transparent"
        />
        <figcaption className="absolute bottom-[clamp(14px,2vw,22px)] left-[clamp(20px,5vw,72px)] text-[0.68rem] tracking-[0.12em] text-muted/60 uppercase">
          PLACEHOLDER — district panorama, cleared photography required
        </figcaption>
      </figure>
    </section>
  );
}
