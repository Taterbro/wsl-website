import type { ExecutiveLeadershipExecutiveConversion } from "@/lib/cms/generated";

import Reveal from "../../../(home)/_components/reveal";
import { Btn } from "./executive-shared";
import { EXEC_INTRO, EXEC_ROLES } from "../_data/executive";

const FALLBACK_HEADING = "Bring a problem\nto the people who\nbuild.";

const FALLBACK_DESCRIPTION =
  "If you need to reach the team that originates, structures and delivers, start here — the route is organised by who you are.";

export default function ExecutiveConversion({
  data,
}: {
  data: ExecutiveLeadershipExecutiveConversion;
}) {
  const heading = data.label || FALLBACK_HEADING;
  const headingLines = heading.split("\n");

  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="executive-contact"
        aria-labelledby="executive-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[22vw] -left-[16vw] h-[52vw] w-[52vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(20px,3vw,44px)]">
            <div className="max-w-[56ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.76rem] font-semibold tracking-[0.12em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                05 — Work with the team
              </p>
              <h2
                id="executive-conversion-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                {headingLines.length === 3 ? (
                  <>
                    {headingLines[0]}
                    <br />
                    {headingLines[1]}
                    <br />
                    {headingLines[2]}
                  </>
                ) : (
                  heading
                )}
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
                {data.description || FALLBACK_DESCRIPTION}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Btn href="/partner-with-us" variant="glow">
                Build with Waterlight
              </Btn>
            </div>
          </div>

          <p className="mt-6 max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
            {EXEC_INTRO.office}. Names, titles, biographies and appointments are
            published only once confirmed by HR/corporate and formally approved.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
