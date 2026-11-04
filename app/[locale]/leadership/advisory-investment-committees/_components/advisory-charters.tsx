import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./advisory-shared";
import { CHARTERS } from "../_data/advisory";

export default function AdvisoryCharters() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="advisory-charters"
        aria-labelledby="advisory-charters-title"
        className="scroll-mt-[92px] bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[54ch]">
              <Eyebrow>01 — Two mandates</Eyebrow>
              <h2
                id="advisory-charters-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                One advises.
                <br />
                One tests.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                The two committees do different jobs and are measured against
                different things. Neither holds executive authority — each
                strengthens a decision the Board still owns.
              </p>
            </div>
            <span className="rounded-[2px] border border-[rgba(9,29,42,0.16)] px-[14px] py-[9px] text-[0.7rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
              Charters, not names
            </span>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid grid-cols-2 gap-[clamp(20px,3.2vw,44px)] max-[900px]:grid-cols-1">
            {CHARTERS.map((charter) => (
              <article
                key={charter.key}
                className="flex flex-col border border-[rgba(9,29,42,0.16)]"
              >
                <div className="flex items-center justify-between gap-4 border-b border-[rgba(9,29,42,0.16)] bg-muted px-[clamp(18px,2.4vw,30px)] py-[clamp(16px,2vw,22px)]">
                  <h3 className="font-sans text-[clamp(1.2rem,2.2vw,1.7rem)] leading-[1.05] font-extrabold uppercase [font-stretch:114%]">
                    {charter.name}
                  </h3>
                  <span className="whitespace-nowrap rounded-[2px] bg-primary px-[10px] py-[6px] text-[0.62rem] font-semibold tracking-[0.1em] text-primary-foreground uppercase">
                    {charter.verdict}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-[clamp(16px,2.2vw,24px)] p-[clamp(20px,2.8vw,34px)]">
                  <p className="text-[0.98rem] leading-[1.6] text-foreground">
                    {charter.mandate}
                  </p>

                  <div className="border-t border-[rgba(9,29,42,0.16)] pt-[clamp(16px,2vw,22px)]">
                    <p className="text-[0.64rem] font-semibold tracking-[0.14em] text-primary uppercase">
                      How it is judged
                    </p>
                    <p className="mt-2 text-[0.92rem] leading-[1.6] text-muted-foreground">
                      {charter.judge}
                    </p>
                  </div>

                  <div className="border-t border-[rgba(9,29,42,0.16)] pt-[clamp(16px,2vw,22px)]">
                    <p className="text-[0.64rem] font-semibold tracking-[0.14em] text-primary uppercase">
                      Typical input
                    </p>
                    <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 max-[560px]:grid-cols-1">
                      {charter.outputs.map((output) => (
                        <li
                          key={output}
                          className="flex items-start gap-2.5 text-[0.84rem] leading-[1.5] text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-primary/50"
                          />
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-auto border-t border-[rgba(9,29,42,0.16)] pt-[clamp(14px,1.8vw,20px)] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
                    {charter.status}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
