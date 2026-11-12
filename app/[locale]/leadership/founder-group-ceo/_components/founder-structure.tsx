import type { FounderGroupCeoFounderStructure } from "@/lib/cms/generated";
import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow, WRAP_CLASS } from "./founder-shared";
import { STRUCTURES } from "../_data/founder";

const FALLBACK_HEADING = (
  <>
    One office.
    <br />
    <span className="text-accent">Formal structures.</span>
  </>
);

const FALLBACK_DESCRIPTION =
  "The Founder & Group CEO works inside a constituted governance structure. Each body holds a distinct decision and a defined line of accountability.";

export default function FounderStructure({
  data,
}: {
  data: FounderGroupCeoFounderStructure;
}) {
  const heading = data.label || FALLBACK_HEADING;
  const headingLines = data.label ? data.label.split("\n") : [];

  return (
    <section
      id="founder-structure"
      aria-labelledby="founder-structure-title"
      className="scroll-mt-[92px] relative overflow-hidden bg-sidebar py-[clamp(64px,9vw,124px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[24vw] -right-[16vw] h-[52vw] w-[52vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[80px]"
      />

      <div className={`${WRAP_CLASS} relative`}>
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="grid grid-cols-[0.9fr_1.1fr] items-end gap-[clamp(22px,4vw,64px)] max-[900px]:grid-cols-1">
            <div>
              <Eyebrow tone="dark">Leadership &amp; governance</Eyebrow>
              <h2
                id="founder-structure-title"
                className="mt-[clamp(16px,2.2vw,24px)] font-sans text-[clamp(1.9rem,4vw,3.5rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                {data.label && headingLines.length === 2 ? (
                  <>
                    {headingLines[0]}
                    <br />
                    <span className="text-accent">{headingLines[1]}</span>
                  </>
                ) : (
                  heading
                )}
              </h2>
            </div>
            <p className="max-w-[54ch] text-[clamp(0.94rem,1.15vw,1.04rem)] leading-[1.6] text-muted/75 max-[900px]:max-w-[62ch]">
              {data.description || FALLBACK_DESCRIPTION}
            </p>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] border-t border-accent/20">
            {STRUCTURES.map((item) => (
              <a
                key={item.no}
                href={item.href}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-[clamp(16px,3vw,36px)] border-b border-accent/20 px-[clamp(0px,1.2vw,16px)] py-[clamp(20px,2.6vw,30px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent/60 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent max-[760px]:grid-cols-[auto_1fr]"
              >
                <span className="font-sans text-[0.82rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:114%]">
                  {item.no}
                </span>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-sans text-[clamp(1.15rem,2vw,1.65rem)] leading-[1.08] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) [font-stretch:114%] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <span className="text-[0.64rem] font-semibold tracking-[0.14em] text-muted/50 uppercase">
                      {item.remit}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[62ch] text-[0.9rem] leading-[1.55] text-muted/70">
                    {item.copy}
                  </p>
                </div>

                <div className="flex items-center gap-[clamp(12px,2vw,22px)] max-[760px]:col-span-2 max-[760px]:justify-between">
                  <span className="border border-accent/30 px-2.5 py-1 text-[0.58rem] font-semibold tracking-[0.14em] text-accent uppercase max-[520px]:hidden">
                    {item.status}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-5 max-w-[78ch] text-[0.72rem] leading-[1.55] text-muted/50">
            Membership and terms of reference are published only once formally
            appointed and approved.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
