import Reveal from "../../../(home)/_components/reveal";
import { MEDIA_MENTIONS } from "./media-data";

export default function MediaCoverage() {
  return (
    <section
      id="coverage"
      aria-labelledby="media-coverage-title"
      className="scroll-mt-24 border-b border-border bg-muted py-[clamp(56px,7vw,100px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="font-sans text-[0.74rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
                Coverage
              </p>
              <h2
                id="media-coverage-title"
                className="mt-2 max-w-[12ch] font-sans text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                In the media.
              </h2>
              <p className="mt-4 max-w-[38ch] text-[0.9rem] leading-[1.6] text-muted-foreground">
                A select record of external mentions. Outlet names, headlines
                and dates are placeholders; no coverage link is published
                without approval.
              </p>
            </div>

            <ul className="list-none border-t border-foreground/15 p-0">
              {MEDIA_MENTIONS.map((mention) => (
                <li
                  key={mention.id}
                  className="grid gap-2 border-b border-foreground/10 py-[clamp(14px,2vw,22px)] md:grid-cols-[92px_1fr] md:gap-6"
                >
                  <time
                    dateTime={mention.date}
                    className="text-[0.62rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase md:pt-[0.2em]"
                  >
                    {mention.dateLabel}
                  </time>
                  <div>
                    <p className="text-[0.58rem] font-semibold tracking-[0.12em] text-primary/70 uppercase">
                      {mention.publication}
                    </p>
                    <h3 className="mt-1.5 max-w-[60ch] font-sans text-[clamp(1rem,1.7vw,1.35rem)] leading-[1.2] font-bold tracking-[-0.005em] [font-stretch:106%]">
                      {mention.headline}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-[0.62rem] leading-[1.5] text-muted-foreground/80">
            PLACEHOLDER — illustrative coverage only. No outlet endorsement,
            partnership or external link is implied.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
