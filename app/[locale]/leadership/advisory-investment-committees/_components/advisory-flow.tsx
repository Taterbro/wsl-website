import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./advisory-shared";
import { FLOW } from "../_data/advisory";

export default function AdvisoryFlow() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="advisory-flow-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[54ch]">
              <Eyebrow>03 — From advice to decision</Eyebrow>
              <h2
                id="advisory-flow-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Advice that
                <br />
                reaches the
                <br />
                decision.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                Committee input is only useful if it arrives intact and
                attributable. Five steps keep the reasoning attached to the
                outcome — and keep the decision where it belongs.
              </p>
            </div>
          </div>

          <ol className="mt-[clamp(30px,4.4vw,52px)] grid grid-cols-5 gap-px bg-[rgba(9,29,42,0.16)] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
            {FLOW.map((step, i) => (
              <li
                key={step.no}
                className="relative flex flex-col gap-[clamp(12px,1.6vw,18px)] bg-background p-[clamp(20px,2.6vw,32px)]"
              >
                <span
                  aria-hidden="true"
                  className="font-sans text-[clamp(1.3rem,2.4vw,1.8rem)] leading-none font-extrabold text-primary/25 [font-stretch:114%]"
                >
                  {step.no}
                </span>
                <h3 className="font-sans text-[clamp(1rem,1.7vw,1.3rem)] leading-[1.12] font-extrabold uppercase [font-stretch:114%]">
                  {step.stage}
                </h3>
                <p className="text-[0.88rem] leading-[1.6] text-muted-foreground">
                  {step.copy}
                </p>
                {i < FLOW.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-[-0.55em] top-[clamp(20px,2.6vw,32px)] z-10 text-[1rem] text-primary/40 max-[900px]:hidden"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>

          <p className="mt-5 max-w-[80ch] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
            PLACEHOLDER — the route from advice to decision is structural and must
            be confirmed against the approved governance framework.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
