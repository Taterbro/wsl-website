import Reveal from "../../../(home)/_components/reveal";
import type { IndustrialDevelopmentLocalisation } from "@/lib/cms/generated";

// PLACEHOLDER — stage copy and imagery are illustrative until approved sector
// content is supplied. Media has no value fallback; the image renders only from
// the CMS.
const FALLBACK_STAGES: { number: string; title: string; copy: string }[] = [
  {
    number: "01",
    title: "Design",
    copy: "Engineer around local conditions, standards and supply.",
  },
  {
    number: "02",
    title: "Localise",
    copy: "Transfer technology, skills and supplier capability.",
  },
  {
    number: "03",
    title: "Manufacture",
    copy: "Produce components and equipment closer to demand.",
  },
  {
    number: "04",
    title: "Partner",
    copy: "Structure industrial partnerships that sustain operations.",
  },
];

const FALLBACK_DESCRIPTION =
  "Industrial development is a capability transfer, not a one-off construction job. We sequence design, localisation, manufacturing and partnership so value stays in the market.";

const FALLBACK_IMAGE_ALT =
  "Technology localisation and industrial assembly (placeholder image)";

export default function Localisation({
  data,
}: {
  data: IndustrialDevelopmentLocalisation;
}) {
  const stages = data.stages.length ? data.stages : FALLBACK_STAGES;
  const headingLines = data.heading ? data.heading.split("\n") : [];
  const alt = data.image
    ? data.image.alt || data.image_alt || FALLBACK_IMAGE_ALT
    : "";

  return (
    <section
      aria-labelledby="industrial-localisation-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="grid items-center gap-[clamp(30px,5vw,72px)] lg:grid-cols-[0.98fr_1.02fr]">
            <div>
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                04 — Localisation
              </p>
              <h2
                id="industrial-localisation-title"
                className="mt-4 max-w-[15ch] font-sans text-[clamp(2rem,4.4vw,3.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                {data.heading ? (
                  headingLines.length === 3 ? (
                    <>
                      {headingLines[0]}
                      <br />
                      <span className="text-foreground/45">
                        {headingLines[1]}
                        <br />
                        {headingLines[2]}
                      </span>
                    </>
                  ) : (
                    data.heading
                  )
                ) : (
                  <>
                    Build it here.
                    <br />
                    <span className="text-foreground/45">
                      Not just
                      <br />
                      assemble it.
                    </span>
                  </>
                )}
              </h2>
              <p className="mt-6 max-w-[52ch] text-[clamp(0.95rem,1.25vw,1.08rem)] leading-[1.6] text-foreground/70">
                {data.description || FALLBACK_DESCRIPTION}
              </p>

              <ol className="mt-[clamp(24px,3.4vw,38px)] grid gap-px border border-foreground/15 bg-foreground/15 sm:grid-cols-2">
                {stages.map((stage, index) => (
                  <li
                    key={`${stage.number}-${index}`}
                    className="bg-background p-[clamp(16px,2vw,24px)]"
                  >
                    <p className="font-sans text-[0.62rem] font-semibold tracking-[0.14em] text-accent uppercase tabular-nums">
                      {stage.number}
                    </p>
                    <h3 className="mt-2 font-sans text-[0.9rem] font-extrabold tracking-[0.01em] uppercase [font-stretch:108%]">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-[0.8rem] leading-[1.55] text-foreground/60">
                      {stage.copy}
                    </p>
                  </li>
                ))}
              </ol>

              <a
                href="/innovation/technology-partnerships"
                className="mt-[clamp(20px,2.6vw,30px)] inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent"
              >
                Discuss a localisation partnership
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="relative min-h-[clamp(320px,46vw,620px)] overflow-hidden border border-foreground/15">
              {data.image ? (
                <div
                  role={alt ? "img" : undefined}
                  aria-label={alt || undefined}
                  aria-hidden={alt ? undefined : true}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${data.image.url})` }}
                />
              ) : null}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-sidebar/80 via-transparent to-sidebar/20"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-45"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />
              <div className="absolute top-4 left-4 border border-accent/35 bg-sidebar/80 px-2.5 py-1.5 text-[0.58rem] font-semibold tracking-[0.14em] text-accent uppercase">
                Localisation sheet — 04
              </div>
              <div className="absolute right-4 bottom-4 left-4 flex flex-wrap items-end justify-between gap-3">
                {data.image ? (
                  <p className="max-w-[30ch] text-[0.72rem] leading-[1.5] text-muted/75">
                    PLACEHOLDER — localisation photography and stage detail to be
                    supplied.
                  </p>
                ) : (
                  <span aria-hidden="true" />
                )}
                <span className="font-sans text-[0.6rem] font-semibold tracking-[0.18em] text-muted/60 uppercase">
                  Design → Partner
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
