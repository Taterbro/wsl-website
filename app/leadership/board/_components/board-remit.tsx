import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./board-shared";
import { BOARD_DECISIONS } from "../_data/board";

export default function BoardRemit() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="board-remit-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.8fr_1.2fr] gap-[clamp(24px,4.4vw,64px)] max-[980px]:grid-cols-1">
            <div>
              <Eyebrow tone="dark">02 — Reserved to the Board</Eyebrow>
              <h2
                id="board-remit-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Five
                <br />
                decisions
                <br />
                stay here.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[44ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
                These matters are reserved to the Board. They cannot be delegated
                to management or to a committee, and each one is recorded with a
                decision owner and a date.
              </p>
            </div>

            <ol className="flex flex-col">
              {BOARD_DECISIONS.map((item, i) => (
                <li
                  key={item.title}
                  className="flex items-start gap-[clamp(16px,2.6vw,32px)] border-t border-muted/15 py-[clamp(18px,2.4vw,28px)] last:border-b last:border-muted/15"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 font-sans text-[clamp(0.8rem,1.3vw,1rem)] font-extrabold tabular-nums text-accent [font-stretch:114%]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-sans text-[clamp(1.1rem,2vw,1.6rem)] leading-[1.1] font-extrabold uppercase [font-stretch:114%]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[54ch] text-[0.92rem] leading-[1.6] text-muted/75">
                      {item.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
