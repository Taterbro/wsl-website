import Reveal from "../../../(home)/_components/reveal";

const SCOPE: string[] = [
  "Municipal networks",
  "Industrial process water",
  "Solar pumping",
  "Treatment & reuse",
  "Smart metering",
  "Predictive maintenance",
];

export default function WaterThesis() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="water-thesis-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.26fr_0.74fr] gap-[clamp(24px,5vw,72px)] border-t border-[rgba(9,29,42,0.16)] pt-[clamp(26px,4vw,44px)] max-[900px]:grid-cols-1">
            <p className="flex items-start gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="mt-[7px] h-px w-[clamp(18px,2.5vw,34px)] bg-primary/45"
              />
              02 — Why water
            </p>

            <div>
              <h2
                id="water-thesis-title"
                className="max-w-[24ch] font-sans text-[clamp(1.85rem,4.4vw,3.7rem)] leading-[1.05] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                The first infrastructure
                <br />
                a city notices
                <br />
                <span className="text-primary">is the one that fails.</span>
              </h2>

              <div className="mt-[clamp(30px,4.5vw,54px)] grid grid-cols-[1.05fr_0.95fr] gap-[clamp(28px,5vw,72px)] max-[760px]:grid-cols-1">
                <p className="max-w-[54ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.65] text-muted-foreground">
                  Water is not a single asset. It is a chain — source, treatment,
                  storage, distribution and maintenance — and it fails at its
                  weakest link. Waterlight builds and invests across the whole
                  chain, with solar energy and live data designed in from the
                  start.
                </p>

                <div>
                  <p className="text-[0.66rem] font-semibold tracking-[0.16em] text-muted-foreground/70 uppercase">
                    Scope
                  </p>
                  <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                    {SCOPE.map((item) => (
                      <li
                        key={item}
                        className="border border-[rgba(9,29,42,0.16)] px-3 py-1.5 text-[0.72rem] font-semibold tracking-[0.04em] text-foreground/80 uppercase"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/innovation/wswis"
                    className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    The WSWIS platform
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
