import type { VisionMissionVisionStatement } from "@/lib/cms/generated";
import Reveal from "../../../(home)/_components/reveal";

const FALLBACK_HEADING =
  "To become a globally recognized African-founded enterprise group building sustainable industries, infrastructure and investments that improve lives and create generational prosperity.";

const FALLBACK_DESCRIPTION =
  "Recognition is the outcome, not the plan. The vision only holds if the group can originate, finance, build and operate the assets it describes — and if the people who depend on those assets are measurably better off.";

const FALLBACK_IMAGE_ALT =
  "Placeholder artwork standing in for photography of African industrial and infrastructure development at city scale";

export default function VisionStatement({
  data,
}: {
  data: VisionMissionVisionStatement;
}) {
  const imageAlt = data.image
    ? data.image.alt || data.image_alt || FALLBACK_IMAGE_ALT
    : "";

  return (
    <Reveal>
      <section
        id="vision"
        aria-labelledby="vision-statement-title"
        className="scroll-mt-[92px] bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-[clamp(32px,6vw,90px)] max-[980px]:grid-cols-1">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                01 — Our vision
              </p>
              <h2
                id="vision-statement-title"
                className="max-w-[26ch] font-sans text-[clamp(1.5rem,3.2vw,2.7rem)] leading-[1.12] font-extrabold tracking-[-0.01em]"
              >
                {data.heading || FALLBACK_HEADING}
              </h2>
              <p className="mt-[clamp(22px,3vw,32px)] max-w-[54ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                {data.description || FALLBACK_DESCRIPTION}
              </p>
              <a
                href="/about/our-story"
                className="mt-[clamp(22px,3vw,30px)] inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
              >
                How the group got here
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <figure>
              <div className="relative aspect-[4/5] overflow-hidden border border-[rgba(9,29,42,0.16)]">
                {data.image ? (
                  <div
                    role={imageAlt ? "img" : undefined}
                    aria-label={imageAlt || undefined}
                    aria-hidden={imageAlt ? undefined : true}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.image.url})` }}
                  />
                ) : null}
              </div>
              {data.image ? (
                <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted-foreground">
                  PLACEHOLDER — approved photography slot. Replace with an image
                  cleared for publication.
                </figcaption>
              ) : null}
            </figure>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
