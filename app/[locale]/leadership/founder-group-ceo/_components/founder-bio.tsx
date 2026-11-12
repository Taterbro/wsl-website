import type { FounderGroupCeoFounderBio } from "@/lib/cms/generated";
import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow, WRAP_CLASS } from "./founder-shared";
import { BIO, REMIT } from "../_data/founder";

const FALLBACK_HEADING = (
  <>
    From conviction
    <br />
    to <span className="text-primary">institution.</span>
  </>
);

export default function FounderBio({ data }: { data: FounderGroupCeoFounderBio }) {
  const heading = data.heading || FALLBACK_HEADING;
  const headingLines = data.heading ? data.heading.split("\n") : [];
  const paragraphs = data.bio
    ? data.bio
        .split(/\n+/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
    : BIO;
  const remit = data.remit.length ? data.remit : REMIT;

  return (
    <section
      id="founder-bio"
      aria-labelledby="founder-bio-title"
      className="scroll-mt-[92px] bg-card py-[clamp(64px,9vw,124px)] text-foreground"
    >
      <div className={WRAP_CLASS}>
        <div className="grid grid-cols-[0.84fr_1.16fr] gap-[clamp(28px,5vw,76px)] max-[980px]:grid-cols-1">
          <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
            <Eyebrow>Biography</Eyebrow>
            <h2
              id="founder-bio-title"
              className="mt-[clamp(16px,2.2vw,24px)] max-w-[15ch] font-sans text-[clamp(1.9rem,3.8vw,3.3rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
            >
              {data.heading && headingLines.length === 2 ? (
                <>
                  {headingLines[0]}
                  <br />
                  {headingLines[1]}
                </>
              ) : (
                heading
              )}
            </h2>
          </Reveal>

          <Reveal
            className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none"
            style={{ transitionDelay: "90ms" }}
          >
            <div className="max-w-[62ch] space-y-[clamp(16px,2vw,22px)]">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-[clamp(0.98rem,1.2vw,1.1rem)] leading-[1.65] text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-[clamp(28px,4vw,44px)] grid grid-cols-2 gap-x-[clamp(20px,3vw,40px)] gap-y-[clamp(20px,2.6vw,30px)] max-[620px]:grid-cols-1">
              {remit.map((item) => (
                <div key={item.no} className="border-t border-primary/15 pt-3">
                  <span className="font-sans text-[0.7rem] font-extrabold tracking-[0.16em] text-chart-4 [font-stretch:114%]">
                    {item.no}
                  </span>
                  <h3 className="mt-1 font-sans text-[0.94rem] leading-[1.15] font-extrabold uppercase [font-stretch:112%]">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-[0.86rem] leading-[1.5] text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
