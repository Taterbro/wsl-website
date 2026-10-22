import Reveal from "../../../(home)/_components/reveal";
import { REALITIES } from "../_data/energy";

export default function EnergyDemand() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="energy-demand-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <p className="mb-[clamp(22px,3vw,34px)] flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
            <span
              aria-hidden="true"
              className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
            />
            02 — The demand
          </p>

          <div className="grid grid-cols-[1.12fr_0.88fr] items-start gap-[clamp(28px,5vw,76px)] border-t border-[rgba(9,29,42,0.16)] pt-[clamp(24px,3.6vw,40px)] max-[900px]:grid-cols-1">
            <h2
              id="energy-demand-title"
              className="max-w-[16ch] font-sans text-[clamp(2.1rem,5.4vw,4.7rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Demand does not
              <br />
              wait for
              <br />
              <span className="text-primary">the grid.</span>
            </h2>
            <div className="max-w-[48ch] pt-[clamp(0px,1vw,10px)]">
              <p className="text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.65] text-muted-foreground">
                Industrial growth, urbanisation, digital infrastructure and
                cooling are adding load faster than networks can be extended.
                The result is predictable: outages, fuel dependence and capital
                that cannot be deployed.
              </p>
              <a
                href="#energy-dispatch"
                className="mt-[clamp(18px,2.4vw,26px)] inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                See how the load is met
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="mt-[clamp(34px,5vw,58px)] grid grid-cols-3 gap-x-[clamp(22px,4vw,58px)] gap-y-[clamp(20px,3vw,30px)] max-[820px]:grid-cols-1">
            {REALITIES.map((reality) => (
              <div
                key={reality.no}
                className="border-t border-[rgba(9,29,42,0.16)] pt-[clamp(14px,2vw,20px)]"
              >
                <span className="font-sans text-[0.66rem] font-extrabold tracking-[0.16em] text-primary/60 [font-stretch:112%]">
                  {reality.no}
                </span>
                <h3 className="mt-2.5 font-sans text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.2] font-extrabold uppercase [font-stretch:112%]">
                  {reality.title}
                </h3>
                <p className="mt-2.5 max-w-[34ch] text-[0.9rem] leading-[1.6] text-muted-foreground">
                  {reality.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
