import Reveal from "../../../(home)/_components/reveal";
import { Btn, Eyebrow, WRAP_CLASS } from "./founder-shared";
import { RELATED } from "../_data/founder";

export default function FounderNext() {
  return (
    <section
      aria-labelledby="founder-next-title"
      className="bg-background py-[clamp(64px,9vw,124px)] text-foreground"
    >
      <div className={WRAP_CLASS}>
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="grid grid-cols-[0.82fr_1.18fr] gap-[clamp(28px,5vw,72px)] max-[900px]:grid-cols-1">
            <div>
              <Eyebrow>Continue</Eyebrow>
              <h2
                id="founder-next-title"
                className="mt-[clamp(16px,2.2vw,24px)] max-w-[14ch] font-sans text-[clamp(1.9rem,3.8vw,3.3rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                The office within
                <br />
                the <span className="text-primary">structure.</span>
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-x-[clamp(18px,3vw,34px)] gap-y-6 max-[760px]:grid-cols-1">
              {RELATED.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group border-t border-primary/15 pt-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="font-sans text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.1] font-extrabold uppercase [font-stretch:112%]">
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-primary/50 transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1 group-hover:text-primary"
                    >
                      →
                    </span>
                  </span>
                  <span className="mt-2 block text-[0.86rem] leading-[1.5] text-muted-foreground">
                    {item.copy}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-[clamp(34px,5vw,58px)] flex flex-wrap items-center justify-between gap-5 border-t border-border pt-[clamp(22px,3vw,32px)]">
            <p className="max-w-[56ch] text-[0.9rem] leading-[1.55] text-muted-foreground">
              For investor, government or partnership enquiries, contact the
              group directly.
            </p>
            <Btn href="/contact">Contact the group</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
