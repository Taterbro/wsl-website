import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./board-shared";
import { COMPOSITION } from "../_data/board";

export default function BoardComposition() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="board-composition"
        aria-labelledby="board-composition-title"
        className="scroll-mt-[92px] bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[54ch]">
              <Eyebrow>01 — Composition</Eyebrow>
              <h2
                id="board-composition-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Built to a
                <br />
                specification.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                Composition is set by rules written down in advance — the size of
                the Board, how many seats stay independent, which skills must be
                present, and how long a director can serve.
              </p>
            </div>
            <span className="rounded-[2px] border border-[rgba(9,29,42,0.16)] px-[14px] py-[9px] text-[0.7rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              Rules, not names
            </span>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid grid-cols-[1.15fr_0.85fr] gap-[clamp(24px,4vw,56px)] max-[980px]:grid-cols-1">
            <div className="border border-[rgba(9,29,42,0.16)]">
              <div className="grid grid-cols-[0.42fr_0.58fr] items-baseline gap-[clamp(12px,2vw,26px)] border-b border-[rgba(9,29,42,0.16)] bg-muted px-[clamp(16px,2.4vw,30px)] py-[clamp(14px,1.8vw,20px)]">
                <span className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Rule
                </span>
                <span className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Backed by a skills matrix
                </span>
              </div>
              {COMPOSITION.map((item) => (
                <div
                  key={item.key}
                  className="grid grid-cols-[0.42fr_0.58fr] items-start gap-[clamp(12px,2vw,26px)] border-b border-[rgba(9,29,42,0.16)] px-[clamp(16px,2.4vw,30px)] py-[clamp(16px,2.2vw,26px)] last:border-b-0 max-[680px]:grid-cols-1 max-[680px]:gap-y-2"
                >
                  <div>
                    <span className="text-[0.68rem] font-semibold tracking-[0.12em] text-primary uppercase">
                      {item.label}
                    </span>
                    <span className="mt-2 block font-sans text-[clamp(1.05rem,1.8vw,1.4rem)] leading-[1.1] font-extrabold uppercase [font-stretch:114%]">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-[0.92rem] leading-[1.6] text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[clamp(18px,2.6vw,28px)]">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden border border-[rgba(9,29,42,0.16)]">
                  <Image
                    src="/placeholders/board-quorum.png"
                    alt="Placeholder artwork standing in for photography of a governance session in progress"
                    fill
                    sizes="(max-width: 980px) 100vw, 36vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted-foreground">
                  PLACEHOLDER — approved photography slot.
                </figcaption>
              </figure>

              <div className="border border-[rgba(9,29,42,0.16)] bg-card p-[clamp(18px,2.6vw,30px)]">
                <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-primary uppercase">
                  Independence, protected
                </p>
                <p className="mt-3 text-[0.94rem] leading-[1.6] text-muted-foreground">
                  A minimum number of independent seats is ring-fenced, so
                  challenge on the Board does not depend on the goodwill of
                  management. Independent directors hold no executive role and no
                  material related-party interest.
                </p>
                <p className="mt-4 border-t border-[rgba(9,29,42,0.16)] pt-4 text-[0.76rem] leading-[1.55] text-muted-foreground/80">
                  PLACEHOLDER — the independence test and minimum seat count must
                  be confirmed against the approved board charter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
