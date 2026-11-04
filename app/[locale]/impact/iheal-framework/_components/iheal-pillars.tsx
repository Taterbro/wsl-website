"use client";

import { useState } from "react";
import { IMPACT_PILLARS } from "@/lib/impact";
import { cn } from "@/lib/utils";
import Reveal from "../../../(home)/_components/reveal";

const OFFSETS = [
  "lg:mt-0",
  "lg:mt-16",
  "lg:mt-6",
  "lg:mt-24",
  "lg:mt-10",
];

export default function IhealPillars() {
  const [active, setActive] = useState(0);
  const activePillar = IMPACT_PILLARS[active];

  return (
    <section
      id="pillars"
      aria-labelledby="iheal-pillars-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="grid gap-[clamp(18px,3vw,36px)] lg:grid-cols-[1fr_0.62fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-primary uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-primary" />
                The centrepiece
              </p>
              <h2
                id="iheal-pillars-title"
                className="mt-[clamp(12px,1.8vw,20px)] max-w-[14ch] font-sans text-[clamp(2rem,5.4vw,3.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%] lg:text-[clamp(3.2rem,4.6vw,4.8rem)]"
              >
                Five letters.
                <br />
                Five lenses.
              </h2>
            </div>
            <p className="max-w-[42ch] text-[clamp(0.92rem,1.2vw,1.04rem)] leading-[1.6] text-foreground/60 lg:justify-self-end">
              The pillars are not stages. They can apply in any order, and no
              pillar is assigned to a business, sector or company.
            </p>
          </div>

          <div
            role="group"
            aria-label="The five iHEAL pillars. Select a letter to read its sub-terms."
            className="mt-[clamp(34px,6vw,74px)] grid grid-cols-5 items-start gap-x-1 sm:gap-x-3"
          >
            {IMPACT_PILLARS.map((pillar, index) => {
              const isActive = active === index;

              return (
                <button
                  key={pillar.letter}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="iheal-pillar-detail"
                  aria-label={`${pillar.letter} — ${pillar.label}`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={cn(
                    "group flex flex-col items-center justify-start px-0 py-2 text-center transition-colors duration-(--transition-fast) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                    OFFSETS[index]
                  )}
                >
                  <span
                    className={cn(
                      "font-sans text-[clamp(3.2rem,13vw,9.5rem)] leading-[0.72] font-extrabold tracking-[-0.05em] transition-colors duration-(--transition-normal) ease-(--ease-standard) [font-stretch:112%]",
                      isActive
                        ? "text-primary"
                        : "text-foreground/20 group-hover:text-primary/70 group-focus-visible:text-primary/70"
                    )}
                  >
                    {pillar.letter}
                  </span>

                  <span
                    className={cn(
                      "mt-3 hidden min-h-[3.4rem] max-w-[18ch] text-[0.58rem] leading-[1.35] font-semibold tracking-[0.08em] uppercase transition-opacity duration-(--transition-normal) ease-(--ease-standard) lg:block",
                      isActive
                        ? "text-foreground/70 opacity-100"
                        : "text-foreground/45 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                    )}
                  >
                    {pillar.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-2 h-0.5 w-8 bg-accent transition-opacity duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div
            id="iheal-pillar-detail"
            aria-live="polite"
            className="mt-[clamp(22px,4vw,44px)] border-y border-foreground/15"
          >
            <div className="grid gap-[clamp(12px,2.4vw,28px)] py-[clamp(18px,3vw,30px)] md:grid-cols-[auto_1fr_auto] md:items-center">
              <span
                aria-hidden="true"
                className="font-sans text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.75] font-extrabold tracking-[-0.04em] text-primary [font-stretch:112%]"
              >
                {activePillar.letter}
              </span>
              <div>
                <p className="text-[0.56rem] font-semibold tracking-[0.16em] text-foreground/50 uppercase">
                  Selected lens
                </p>
                <p className="mt-1.5 font-sans text-[clamp(1rem,2.2vw,1.8rem)] leading-[1.15] font-extrabold tracking-[-0.005em] text-foreground uppercase [font-stretch:108%]">
                  {activePillar.label}
                </p>
              </div>
              <p className="max-w-[26ch] text-[0.68rem] leading-[1.5] text-foreground/50 md:justify-self-end md:text-right">
                One of five lenses. No order, no hierarchy, no delivery
                sequence.
              </p>
            </div>
          </div>

          <div className="mt-[clamp(26px,4vw,44px)]">
            <p className="text-[0.56rem] font-semibold tracking-[0.16em] text-foreground/50 uppercase">
              The five pillars, in full
            </p>
            <dl className="mt-3 grid grid-cols-1 border-t border-foreground/15 sm:grid-cols-2 lg:grid-cols-5">
              {IMPACT_PILLARS.map((pillar) => (
                <div
                  key={pillar.letter}
                  className="border-b border-foreground/10 py-3 sm:border-b-0 lg:border-l lg:border-foreground/10 lg:px-4 lg:first:border-l-0 lg:first:pl-0"
                >
                  <dt className="font-sans text-[0.62rem] font-extrabold tracking-[0.12em] text-primary uppercase [font-stretch:112%]">
                    {pillar.letter}
                  </dt>
                  <dd className="mt-1 max-w-[24ch] text-[0.68rem] leading-[1.45] text-foreground/65">
                    {pillar.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-[clamp(16px,2.2vw,24px)] text-[0.6rem] leading-[1.5] text-foreground/45">
            The five pillars use the canonical iHEAL wording. Select a letter to
            read its sub-terms — by hover, tap or keyboard focus.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
