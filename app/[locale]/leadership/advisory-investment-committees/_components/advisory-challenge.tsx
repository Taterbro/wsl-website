import type { AdvisoryInvestmentCommitteesAdvisoryChallenge } from "@/lib/cms/generated";

import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./advisory-shared";
import { CHALLENGE as FALLBACK_CHALLENGE } from "../_data/advisory";

const FALLBACK_HEADING = "Challenge\nthat cannot\nbe waved away.";

export default function AdvisoryChallenge({
  data,
}: {
  data: AdvisoryInvestmentCommitteesAdvisoryChallenge;
}) {
  const heading = data.heading || FALLBACK_HEADING;
  const headingLines = heading.split("\n");
  const challenge = data.challenge.length ? data.challenge : FALLBACK_CHALLENGE;

  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="advisory-challenge-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.72fr_1.28fr] gap-[clamp(24px,4.4vw,64px)] max-[980px]:grid-cols-1">
            <div>
              <Eyebrow>04 — Independence by design</Eyebrow>
              <h2
                id="advisory-challenge-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
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
            </div>

            <div className="grid grid-cols-2 gap-px bg-[rgba(9,29,42,0.16)] max-[680px]:grid-cols-1">
              {challenge.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-[clamp(10px,1.4vw,16px)] bg-muted p-[clamp(20px,2.6vw,32px)]"
                >
                  <h3 className="font-sans text-[clamp(1.02rem,1.8vw,1.35rem)] leading-[1.14] font-extrabold uppercase [font-stretch:114%]">
                    {item.title}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.6] text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
