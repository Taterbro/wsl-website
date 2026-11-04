import Reveal from "../../../(home)/_components/reveal";
import { DECISION_RIGHTS } from "../_data/governance";

export default function GovernanceRights() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="governance-rights-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="max-w-[56ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              02 — Decision rights
            </p>
            <h2
              id="governance-rights-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Reserved or
              <br />
              delegated.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
              A group grows faster when most decisions are delegated — and
              slower to regret when the few that matter are not.
            </p>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid grid-cols-3 gap-px bg-accent/20 max-[980px]:grid-cols-1">
            {DECISION_RIGHTS.map((column, index) => (
              <article
                key={column.title}
                className="flex flex-col bg-sidebar-accent/55 px-[clamp(18px,2.6vw,32px)] pt-[clamp(20px,2.6vw,32px)] pb-[clamp(22px,2.8vw,36px)]"
              >
                <span className="font-sans text-[0.78rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:114%]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-sans text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.12] font-extrabold uppercase [font-stretch:114%]">
                  {column.title}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-[1.5] text-muted/65">
                  {column.note}
                </p>
                <ul className="mt-5 flex list-none flex-col gap-2.5 border-t border-accent/20 p-0 pt-5">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.9rem] leading-[1.5] text-muted/85"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1.5 w-1.5 flex-none bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-[clamp(22px,3vw,34px)] max-w-[78ch] text-[0.76rem] leading-[1.6] text-muted/60">
            PLACEHOLDER — delegation of authority must be confirmed against
            formally approved documents and reviewed at least annually.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
