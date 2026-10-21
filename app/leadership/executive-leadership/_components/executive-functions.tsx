import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./executive-shared";
import { EXEC_FUNCTIONS } from "../_data/executive";

export default function ExecutiveFunctions() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="executive-functions"
        aria-labelledby="executive-functions-title"
        className="scroll-mt-[92px] bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[54ch]">
              <Eyebrow>01 — Executive functions</Eyebrow>
              <h2
                id="executive-functions-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Six functions,
                <br />
                one chain
                <br />
                of delivery.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                The executive is organised by function, not by job title. Each
                function owns a defined part of the chain from origination to
                operations, and reports into the same operating standard.
              </p>
            </div>
            <span className="rounded-[2px] border border-[rgba(9,29,42,0.16)] px-[14px] py-[9px] text-[0.7rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              Functions, not names
            </span>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid grid-cols-3 gap-px bg-[rgba(9,29,42,0.16)] max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
            {EXEC_FUNCTIONS.map((fn) => (
              <article
                key={fn.key}
                className="group flex flex-col gap-[clamp(14px,1.8vw,20px)] bg-background p-[clamp(22px,3vw,36px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-muted"
              >
                <span
                  aria-hidden="true"
                  className="font-sans text-[clamp(1.3rem,2.4vw,1.8rem)] leading-none font-extrabold text-primary/25 [font-stretch:114%]"
                >
                  {fn.no}
                </span>
                <h3 className="font-sans text-[clamp(1.1rem,1.9vw,1.5rem)] leading-[1.1] font-extrabold uppercase [font-stretch:114%]">
                  {fn.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.6] text-muted-foreground">
                  {fn.copy}
                </p>
                <ul className="mt-auto flex flex-col gap-2 border-t border-[rgba(9,29,42,0.16)] pt-[clamp(12px,1.6vw,18px)]">
                  {fn.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.82rem] leading-[1.5] text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[6px] h-[5px] w-[5px] rounded-full bg-primary/50"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-5 max-w-[80ch] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
            PLACEHOLDER — function structure, remits and scope are indicative and
            must be reconciled with the approved organisation chart before
            publication.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
