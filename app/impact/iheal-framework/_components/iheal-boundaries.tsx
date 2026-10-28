import Reveal from "../../../(home)/_components/reveal";

// PLACEHOLDER — boundary copy to be approved by the owner.
const IS: string[] = [
  "A development and impact framework.",
  "A shared philosophy of sustainable development.",
  "A set of five lenses that can be read in any order.",
];

const IS_NOT: string[] = [
  "A service line, product or commercial offering.",
  "A description of what any Waterlight company does.",
  "A map of sectors, subsidiaries or named companies.",
];

export default function IhealBoundaries() {
  return (
    <section
      aria-labelledby="iheal-boundaries-title"
      className="border-y border-foreground/10 bg-muted py-[clamp(64px,8vw,112px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="grid gap-[clamp(18px,3vw,36px)] lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-primary uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-primary" />
                Boundaries
              </p>
              <h2
                id="iheal-boundaries-title"
                className="mt-[clamp(12px,1.8vw,20px)] max-w-[14ch] font-sans text-[clamp(1.9rem,4.8vw,2.9rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%] lg:text-[clamp(2.9rem,4.2vw,4.2rem)]"
              >
                A lens, not a
                <br />
                service line.
              </h2>
            </div>
            <p className="max-w-[52ch] text-[clamp(0.92rem,1.2vw,1.04rem)] leading-[1.6] text-foreground/60 lg:justify-self-end">
              The framework informs how Waterlight approaches opportunities. It
              does not prescribe a delivery sequence, and it is never used to
              describe an individual company&apos;s offer.
            </p>
          </div>

          <div className="mt-[clamp(30px,5vw,58px)] grid gap-[clamp(24px,4vw,48px)] md:grid-cols-2">
            <div className="border-t border-foreground/25 pt-[clamp(14px,2vw,20px)]">
              <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-primary uppercase">
                It is
              </p>
              <ul className="mt-[clamp(14px,2vw,22px)] list-none p-0">
                {IS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-foreground/10 py-3 text-[clamp(0.86rem,1.15vw,1rem)] leading-[1.5] text-foreground/75 last:border-b-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.62em] h-px w-4 shrink-0 bg-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-foreground/25 pt-[clamp(14px,2vw,20px)]">
              <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-foreground/50 uppercase">
                It is not
              </p>
              <ul className="mt-[clamp(14px,2vw,22px)] list-none p-0">
                {IS_NOT.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-foreground/10 py-3 text-[clamp(0.86rem,1.15vw,1rem)] leading-[1.5] text-foreground/60 last:border-b-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.62em] h-px w-4 shrink-0 bg-foreground/30"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-[clamp(22px,3vw,34px)] border-t border-foreground/20 pt-4 text-[0.68rem] leading-[1.55] text-foreground/55">
            Pillars are not mapped to sectors, subsidiaries or named companies.
            The framework does not imply that every Waterlight company
            undertakes every activity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
