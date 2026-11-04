import Image from "next/image";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "See the structure", href: "#structure-diagram", variant: "glow" },
  { label: "Our businesses", href: "/businesses", variant: "ghost" },
];

// PLACEHOLDER — figures are counted from the content published on this site
// and must be reconciled with the approved group chart.
const FACTS: { value: string; label: string }[] = [
  { value: "01", label: "Master brand" },
  { value: "04", label: "Operating companies" },
  { value: "08", label: "Sectors served" },
  { value: "01", label: "Independent nonprofit" },
];

export default function StructureHero() {
  return (
    <section
      aria-labelledby="group-structure-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[26vw] -right-[20vw] h-[62vw] w-[62vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.18),transparent_62%)] blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-16vw] left-[-14vw] h-[44vw] w-[44vw] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.14),transparent_64%)] blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(48px,7vw,96px)]">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
        >
          <a
            href="/about"
            className="text-muted/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
          >
            About
          </a>
          <span aria-hidden="true" className="text-muted/35">
            /
          </span>
          <span aria-current="page" className="text-accent">
            Group Structure
          </span>
        </nav>

        <div className="mt-[clamp(24px,3.4vw,40px)] grid grid-cols-[1.08fr_0.92fr] items-end gap-[clamp(30px,5vw,72px)] max-[980px]:grid-cols-1">
          <div>
            <p className="mb-[clamp(20px,3vw,30px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              Group architecture
            </p>
            <h1
              id="group-structure-hero-title"
              className="max-w-[13ch] font-sans text-[clamp(2.5rem,7.2vw,6.1rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              One group.
              <br />
              Four platforms.
              <br />
              <span className="text-accent">One mandate.</span>
            </h1>
            <p className="mt-[clamp(20px,3vw,30px)] max-w-[54ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.55] text-muted/85">
              The group is built as four operating companies behind one master
              brand — each with a defined mandate, so capital, technology and
              delivery land in the right place the first time.
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

          <figure className="relative">
            <div className="relative">
              <div className="relative aspect-[16/11] overflow-hidden border border-accent/20">
                <Image
                  src="/placeholders/group-structure-hero.png"
                  alt="Placeholder artwork standing in for photography of a Waterlight group office tower at dusk"
                  fill
                  preload
                  sizes="(max-width: 980px) 100vw, 44vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-x-[clamp(10px,1.6vw,22px)] bottom-[clamp(10px,1.6vw,22px)] border border-accent/25 bg-sidebar/95 px-[clamp(14px,2.2vw,24px)] py-[clamp(14px,2vw,20px)] backdrop-blur-sm">
                <p className="text-[0.64rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                  At a glance
                </p>
                <dl className="mt-3 grid grid-cols-2 gap-x-[clamp(12px,2vw,26px)] gap-y-3">
                  {FACTS.map((fact) => (
                    <div key={fact.label}>
                      <dt className="sr-only">{fact.label}</dt>
                      <dd>
                        <span className="block font-sans text-[clamp(1.05rem,1.8vw,1.5rem)] leading-none font-extrabold text-accent [font-stretch:114%]">
                          {fact.value}
                        </span>
                        <span className="mt-1.5 block text-[0.7rem] leading-[1.35] tracking-[0.06em] text-muted/70 uppercase">
                          {fact.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
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
