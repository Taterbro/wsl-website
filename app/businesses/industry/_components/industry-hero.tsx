import Image from "next/image";
import { HERO_FACTS, INDUSTRY_INTRO, PROCESS_LINE } from "../_data/industry";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "What we build", href: "#industry-capabilities", variant: "glow" },
  { label: "Partnership models", href: "#industry-partnerships", variant: "ghost" },
];

export default function IndustryHero() {
  return (
    <section
      aria-labelledby="industry-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[18vw] right-[-10vw] h-[42vw] w-[42vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.12),transparent_65%)] blur-[90px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-[clamp(36px,5vw,72px)]">
        <div className="grid grid-cols-[0.86fr_1.14fr] items-center gap-[clamp(26px,4vw,64px)] max-[980px]:grid-cols-1">
          <figure className="relative aspect-[4/5] overflow-hidden border border-accent/20 max-[980px]:aspect-[16/10]">
            <Image
              src="/placeholders/industry-partners.png"
              alt="Placeholder artwork standing in for photography of an industrial production complex with connected process lines"
              fill
              preload
              sizes="(max-width: 980px) 100vw, 42vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar/75 via-transparent to-transparent"
            />
            <figcaption className="absolute bottom-4 left-4 text-[0.68rem] tracking-[0.1em] text-muted/55 uppercase">
              PLACEHOLDER — photography slot
            </figcaption>
          </figure>

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
                Industry
              </span>
            </nav>

            <p className="mb-[clamp(16px,2.4vw,24px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              {INDUSTRY_INTRO.strap}
            </p>

            <h1
              id="industry-hero-title"
              className="font-sans text-[clamp(2.4rem,6.4vw,5.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              Industry that
              <br />
              <span className="text-accent">produces.</span>
            </h1>

            <p className="mt-[clamp(18px,2.6vw,28px)] max-w-[54ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/85">
              {INDUSTRY_INTRO.summary}
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

            <dl className="mt-[clamp(26px,3.6vw,40px)] grid list-none grid-cols-1 gap-px border-y border-accent/20 p-0 sm:grid-cols-3">
              {HERO_FACTS.map((fact) => (
                <div key={fact.label} className="py-[clamp(12px,1.6vw,18px)] sm:pr-[clamp(12px,2vw,20px)]">
                  <dt className="text-[0.62rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-sans text-[clamp(0.88rem,1.3vw,1.05rem)] leading-[1.25] font-bold uppercase [font-stretch:112%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-[clamp(30px,4.4vw,56px)] border-t border-accent/20 pt-[clamp(14px,1.8vw,20px)]">
          <p className="text-[0.64rem] font-semibold tracking-[0.16em] text-accent uppercase">
            The production line
          </p>
          <ol className="mt-3 flex list-none flex-wrap items-center gap-x-2 gap-y-2 p-0">
            {PROCESS_LINE.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2.5 rounded-[2px] border border-accent/25 px-[12px] py-[8px] text-[0.76rem] font-semibold tracking-[0.04em] uppercase">
                  <span className="font-sans text-[0.62rem] font-extrabold text-accent [font-stretch:114%]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </span>
                {index < PROCESS_LINE.length - 1 && (
                  <span aria-hidden="true" className="text-accent/50">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
