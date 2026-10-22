import Reveal from "../../../(home)/_components/reveal";
import { CAPABILITIES } from "../_data/water";

export default function WaterCapabilities() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="water-capabilities-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.76fr_1.24fr] items-start gap-[clamp(28px,5vw,80px)] max-[980px]:grid-cols-1">
            <div className="lg:sticky lg:top-[110px]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                04 — Capabilities
              </p>
              <h2
                id="water-capabilities-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.95] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Designed,
                <br />
                built and
                <br />
                operated.
              </h2>
              <p className="mt-[clamp(20px,2.6vw,28px)] max-w-[36ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.65] text-muted-foreground">
                Waterlight can carry a water asset across the full lifecycle —
                capital, engineering, construction and long-term operation —
                rather than handing over a system no one is equipped to run.
              </p>
              <a
                href="/projects/portfolio"
                className="mt-[clamp(20px,2.6vw,28px)] inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                See the portfolio
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <ol className="list-none p-0">
              {CAPABILITIES.map((capability) => (
                <li
                  key={capability.no}
                  className="group border-t border-[rgba(9,29,42,0.18)] last:border-b"
                >
                  <div className="grid grid-cols-[auto_1fr_auto] items-start gap-[clamp(14px,2.4vw,30px)] py-[clamp(20px,2.8vw,32px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:bg-background/55">
                    <span className="pt-[3px] font-sans text-[0.68rem] font-extrabold tracking-[0.14em] text-primary/60 [font-stretch:112%]">
                      {capability.no}
                    </span>

                    <div>
                      <h3 className="font-sans text-[clamp(1.12rem,1.9vw,1.6rem)] leading-[1.1] font-extrabold uppercase [font-stretch:112%]">
                        {capability.title}
                      </h3>
                      <p className="mt-2.5 max-w-[54ch] text-[0.92rem] leading-[1.6] text-muted-foreground">
                        {capability.copy}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 pt-[2px] text-right">
                      <span className="border border-[rgba(9,29,42,0.18)] px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.08em] text-primary uppercase">
                        {capability.tag}
                      </span>
                      <span className="text-[0.64rem] tracking-[0.04em] text-muted-foreground/75 uppercase">
                        {capability.delivery}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-[clamp(24px,3.2vw,38px)] max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
            PLACEHOLDER — delivery structures shown are indicative. Mandate,
            procurement route and contractual terms are confirmed per project.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
