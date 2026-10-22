import Reveal from "../../../(home)/_components/reveal";
import { TECHNOLOGIES } from "../_data/energy";

const STACK: { label: string; width: string; color: string }[] = [
  { label: "Solar", width: "100%", color: "bg-accent" },
  { label: "Storage", width: "55%", color: "bg-[#d6a24a]" },
  { label: "Grid", width: "35%", color: "bg-[#2a6f8e]" },
];

export default function EnergyPortfolio() {
  const [feature, ...rest] = TECHNOLOGIES;

  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="energy-portfolio-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(20px,4vw,60px)]">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                04 — Technology portfolio
              </p>
              <h2
                id="energy-portfolio-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.95] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                One load.
                <br />
                The right mix.
              </h2>
            </div>
            <p className="max-w-[42ch] pb-[clamp(2px,1vw,10px)] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.65] text-muted-foreground">
              No single technology is the answer. The mix is sized to the load
              profile, the resource, the grid and the operator — then financed
              and delivered as one asset.
            </p>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid grid-cols-1 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] md:auto-rows-[minmax(150px,auto)] md:grid-cols-6">
            <article className="relative flex flex-col overflow-hidden bg-sidebar p-[clamp(22px,3.4vw,38px)] text-muted md:col-span-3 md:row-span-2">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-[24%] -right-[18%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.22),transparent_64%)] blur-[30px]"
              />
              <div className="relative">
                <span className="border border-accent/30 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.1em] text-accent uppercase">
                  {feature.tag}
                </span>
                <h3 className="mt-[clamp(18px,2.6vw,26px)] max-w-[14ch] font-sans text-[clamp(1.6rem,3.2vw,2.7rem)] leading-[0.98] font-extrabold uppercase [font-stretch:114%]">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-[42ch] text-[0.94rem] leading-[1.65] text-muted/70">
                  {feature.copy}
                </p>
              </div>

              <div className="relative mt-auto border-t border-accent/20 pt-[clamp(16px,2.4vw,24px)]">
                <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                  Illustrative stack
                </p>
                <div aria-hidden="true" className="mt-3 space-y-2">
                  {STACK.map((bar) => (
                    <div key={bar.label} className="flex items-center gap-3">
                      <span className="w-[4.4rem] flex-none text-[0.62rem] tracking-[0.06em] text-muted/55 uppercase">
                        {bar.label}
                      </span>
                      <span className="h-[6px] flex-1 bg-sidebar-accent">
                        <span
                          className={`block h-full ${bar.color}`}
                          style={{ width: bar.width }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {rest.map((technology) => (
              <article
                key={technology.no}
                className="flex flex-col gap-2.5 bg-background p-[clamp(18px,2.4vw,28px)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-sans text-[0.64rem] font-extrabold tracking-[0.16em] text-primary/60 [font-stretch:112%]">
                    {technology.no}
                  </span>
                  <span className="border border-[rgba(9,29,42,0.18)] px-2 py-1 text-[0.58rem] font-semibold tracking-[0.08em] text-primary uppercase">
                    {technology.tag}
                  </span>
                </div>
                <h3 className="font-sans text-[clamp(1.02rem,1.5vw,1.22rem)] leading-[1.15] font-extrabold uppercase [font-stretch:112%]">
                  {technology.title}
                </h3>
                <p className="text-[0.86rem] leading-[1.55] text-muted-foreground">
                  {technology.copy}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-[clamp(22px,3vw,34px)] max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
            PLACEHOLDER — technology scope and mix are indicative. Final
            configuration follows feasibility, resource assessment and offtake
            structure.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
