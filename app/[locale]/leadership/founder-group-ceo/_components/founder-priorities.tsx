import Reveal from "../../../(home)/_components/reveal";
import { PRIORITIES } from "../_data/founder";

export default function FounderPriorities() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="founder-priorities"
        aria-labelledby="founder-priorities-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.62fr_1.38fr] gap-[clamp(28px,5vw,80px)] max-[980px]:grid-cols-1">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.76rem] font-semibold tracking-[0.12em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                02 — Priorities
              </p>
              <h2
                id="founder-priorities-title"
                className="max-w-[15ch] font-sans text-[clamp(1.8rem,4.4vw,3.4rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Five things
                <br />
                that do not
                <br />
                move.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[40ch] text-[1rem] leading-[1.6] text-muted/80">
                The group grows, changes sector and enters new markets. These
                five positions stay fixed underneath all of it.
              </p>
            </div>

            <ol className="list-none p-0">
              {PRIORITIES.map((item) => (
                <li key={item.no} className="border-t border-accent/20">
                  <div className="group grid grid-cols-[auto_1fr] items-baseline gap-[clamp(14px,2.4vw,36px)] py-[clamp(18px,2.6vw,30px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent/45">
                    <span className="font-sans text-[0.8rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:114%]">
                      {item.no}
                    </span>
                    <div>
                      <h3 className="font-sans text-[clamp(1.15rem,2.4vw,1.7rem)] leading-[1.1] font-extrabold uppercase [font-stretch:114%]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 max-w-[62ch] text-[0.94rem] leading-[1.6] text-muted/75">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
              <li className="border-t border-accent/20" />
            </ol>
          </div>

          <p className="mt-[clamp(22px,3vw,34px)] max-w-[78ch] text-[0.76rem] leading-[1.6] text-muted/60">
            PLACEHOLDER — priorities reflect the group’s published strategy
            themes and await the Founder’s own approved wording.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
