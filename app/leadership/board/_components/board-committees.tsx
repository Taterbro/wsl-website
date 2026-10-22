import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./board-shared";
import { BOARD_COMMITTEES, BOARD_STRUCTURE } from "../_data/board";

export default function BoardCommittees() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="board-committees"
        aria-labelledby="board-committees-title"
        className="scroll-mt-[92px] bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.85fr_1.15fr] gap-[clamp(28px,4.6vw,68px)] max-[980px]:grid-cols-1">
            <div>
              <Eyebrow>03 — How the board works</Eyebrow>
              <h2
                id="board-committees-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Standing
                <br />
                committees.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                Three committees carry the detailed work so the Board can spend
                its time on decisions only a Board can take.
              </p>

              <ol className="mt-[clamp(24px,3.4vw,40px)] list-none border border-[rgba(9,29,42,0.16)] bg-background p-0">
                {BOARD_STRUCTURE.map((row, index) => (
                  <li
                    key={row.label}
                    className="flex flex-col gap-1 border-b border-[rgba(9,29,42,0.16)] border-l-2 border-primary/30 px-[clamp(14px,1.8vw,22px)] py-[clamp(14px,1.8vw,20px)] last:border-b-0"
                  >
                    <span className="text-[0.62rem] font-semibold tracking-[0.16em] text-primary uppercase">
                      {String(index + 1).padStart(2, "0")} — {row.label}
                    </span>
                    <span className="text-[0.88rem] leading-[1.55] text-muted-foreground">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-[clamp(20px,2.8vw,32px)] flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="/leadership/advisory-investment-committees"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  Advisory / Investment Committees
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="/about/governance"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  Governance framework
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="border-t border-[rgba(9,29,42,0.16)] max-[980px]:mt-2">
              {BOARD_COMMITTEES.map((committee) => (
                <article
                  key={committee.key}
                  className="border-b border-[rgba(9,29,42,0.16)] py-[clamp(20px,2.8vw,34px)]"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-sans text-[clamp(1.1rem,2vw,1.6rem)] leading-[1.08] font-extrabold uppercase [font-stretch:114%]">
                      {committee.name}
                    </h3>
                    <span className="text-[0.66rem] font-semibold tracking-[0.12em] text-primary uppercase">
                      Chair: {committee.chair}
                    </span>
                  </div>

                  <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-[1.6] text-muted-foreground">
                    {committee.remit}
                  </p>

                  <ul className="mt-4 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
                    {committee.scope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[0.82rem] leading-[1.5] text-muted-foreground/85"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-primary/50"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mt-[clamp(30px,4.4vw,56px)] overflow-hidden border border-[rgba(9,29,42,0.16)]">
            <div className="relative h-[clamp(210px,24vw,320px)] w-full">
              <Image
                src="/placeholders/board-quorum.png"
                alt="Placeholder artwork standing in for photography of the full board in quorum"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-sidebar via-sidebar/90 to-sidebar/35" />
            </div>
            <div className="absolute inset-x-[clamp(16px,4vw,72px)] top-1/2 -translate-y-1/2 max-w-[64ch]">
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-accent uppercase">
                Quorum
              </p>
              <p className="mt-3 font-sans text-[clamp(1.1rem,2.4vw,1.9rem)] leading-[1.12] font-extrabold text-muted uppercase [font-stretch:114%]">
                Decisions are taken by the board as a whole, on the record.
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-[80ch] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
            PLACEHOLDER — committee names, chairs and remits describe the intended
            structure and must be confirmed against the approved terms of
            reference.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
