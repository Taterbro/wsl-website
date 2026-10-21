import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./board-shared";
import { CADENCE } from "../_data/board";

export default function BoardCadence() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="board-cadence-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[54ch]">
              <Eyebrow>04 — Cadence &amp; evaluation</Eyebrow>
              <h2
                id="board-cadence-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                On the
                <br />
                calendar.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                A fixed rhythm keeps oversight continuous rather than episodic.
                The Board also reviews its own effectiveness and composition at
                least once a year.
              </p>
            </div>
            <span className="rounded-[2px] border border-[rgba(9,29,42,0.16)] px-[14px] py-[9px] text-[0.7rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              Fixed cycle
            </span>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid grid-cols-4 gap-px bg-[rgba(9,29,42,0.16)] max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
            {CADENCE.map((item) => (
              <div
                key={item.no}
                className="flex flex-col gap-[clamp(12px,1.6vw,18px)] bg-background p-[clamp(20px,2.6vw,32px)]"
              >
                <span
                  aria-hidden="true"
                  className="font-sans text-[clamp(1.4rem,2.6vw,2rem)] leading-none font-extrabold text-primary/25 [font-stretch:114%]"
                >
                  {item.no}
                </span>
                <h3 className="font-sans text-[clamp(1.02rem,1.8vw,1.35rem)] leading-[1.14] font-extrabold uppercase [font-stretch:114%]">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.6] text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
