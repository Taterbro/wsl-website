import Reveal from "../../../(home)/_components/reveal";
import { STACK } from "../_data/technology";

export default function TechStack() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="tech-stack"
        aria-labelledby="tech-stack-title"
        className="scroll-mt-[92px] bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[54ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                02 — The stack
              </p>
              <h2
                id="tech-stack-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Four layers.
                <br />
                One architecture.
              </h2>
            </div>
            <p className="max-w-[46ch] text-[clamp(0.98rem,1.25vw,1.08rem)] leading-[1.6] text-muted-foreground">
              The same four layers are deployed across every sector, so a
              capability built once is available everywhere the group operates.
            </p>
          </div>

          <ol className="mt-[clamp(30px,4.4vw,54px)] list-none p-0">
            {STACK.map((layer) => (
              <li
                key={layer.no}
                className="grid grid-cols-[auto_1fr] gap-x-[clamp(16px,2.4vw,32px)] gap-y-[clamp(14px,2vw,24px)] border-t border-[rgba(9,29,42,0.16)] py-[clamp(20px,2.6vw,34px)] last:border-b lg:grid-cols-[auto_0.95fr_1.05fr]"
              >
                <span
                  aria-hidden="true"
                  className="flex h-[clamp(38px,3.6vw,50px)] w-[clamp(38px,3.6vw,50px)] items-center justify-center rounded-[2px] border border-primary/30 font-sans text-[0.8rem] font-extrabold text-primary [font-stretch:114%]"
                >
                  {layer.no}
                </span>

                <div>
                  <span className="text-[0.66rem] font-semibold tracking-[0.16em] text-primary uppercase">
                    {layer.name}
                  </span>
                  <h3 className="mt-2 font-sans text-[clamp(1.1rem,2.1vw,1.7rem)] leading-[1.1] font-extrabold uppercase [font-stretch:114%]">
                    {layer.title}
                  </h3>
                  <p className="mt-3 max-w-[54ch] text-[0.92rem] leading-[1.6] text-muted-foreground">
                    {layer.copy}
                  </p>
                </div>

                <ul className="grid list-none grid-cols-2 gap-x-[clamp(14px,2vw,26px)] gap-y-2 p-0 lg:self-center">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.84rem] leading-[1.5] text-foreground/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <p className="mt-6 max-w-[80ch] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
            PLACEHOLDER — the layer model describes the intended build order and
            must match the approved technology architecture.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
