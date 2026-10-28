import Reveal from "../../../(home)/_components/reveal";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Partner with us", href: "/partner-with-us", variant: "glow" },
  {
    label: "Climate & ESG solutions",
    href: "/businesses/climate-esg-solutions",
    variant: "ghost",
  },
];

const LINKS: { label: string; href: string }[] = [
  { label: "Impact overview", href: "/impact" },
  { label: "Development partnerships", href: "/impact/development-partnerships" },
  { label: "iHEAL framework", href: "/impact/iheal-framework" },
];

export default function SustainabilityConversion() {
  return (
    <Reveal>
      <section
        aria-labelledby="sustainability-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[20vw] -bottom-[24vw] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[70px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-[56ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                07 — Build with Waterlight
              </p>
              <h2
                id="sustainability-conversion-title"
                className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Bring the
                <br />
                question early.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted/80">
                If you are financing, building or operating an asset in Africa,
                bring the sustainability question into the first conversation.
                We will tell you what the evidence standard is — and where it is
                still being built.
              </p>
              <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap items-center gap-3">
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

            <nav aria-label="Impact pages" className="border-t border-accent/20">
              <p className="py-3 text-[0.58rem] font-semibold tracking-[0.14em] text-muted/45 uppercase">
                Continue reading
              </p>
              <ul className="list-none p-0">
                {LINKS.map((link, index) => (
                  <li key={link.href} className="border-t border-accent/20">
                    <a
                      href={link.href}
                      className="group flex items-center justify-between gap-4 py-[clamp(12px,1.6vw,18px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-sans text-[0.56rem] font-extrabold tracking-[0.16em] text-accent tabular-nums [font-stretch:112%]">
                          0{index + 1}
                        </span>
                        <span className="font-sans text-[clamp(0.88rem,1.3vw,1.05rem)] leading-[1.2] font-bold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:108%]">
                          {link.label}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="mt-[clamp(26px,3.4vw,40px)] max-w-[78ch] text-[0.66rem] leading-[1.55] text-muted/45">
            PLACEHOLDER — conversion copy and evidence-standard wording require
            owner approval. Confidential investment material is never published
            on this website.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
