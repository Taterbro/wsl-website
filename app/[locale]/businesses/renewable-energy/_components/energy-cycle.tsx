import Reveal from "../../../(home)/_components/reveal";
import type {
  RenewableEnergyEnergyCycle,
  RenewableEnergyEnergyCycleStages,
} from "@/lib/cms/generated";

const FALLBACK_HEADING = "The sun sets.\nThe load does not.";

const FALLBACK_DESCRIPTION =
  "Renewable supply only becomes infrastructure when generation, storage and dispatch are designed together — and operated as one asset.";

const FALLBACK_IMAGE_ALT = "Renewable energy system stage";

type Stage = {
  no: string;
  title: string;
  copy: string;
  image: string | null;
  alt: string;
};

// PLACEHOLDER — imagery and stage descriptions are illustrative until approved
// sector photography and content are supplied. Media has no value fallback;
// images render only from the CMS.
const FALLBACK_STAGES: Stage[] = [
  {
    no: "01",
    title: "Generate",
    copy: "Solar arrays sized to site, irradiance and load — not a generic kit.",
    image: null,
    alt: "Solar array generating power at sunset (placeholder image)",
  },
  {
    no: "02",
    title: "Store",
    copy: "Battery systems that firm output and carry critical load after sunset.",
    image: null,
    alt: "Industrial facility with energy storage infrastructure (placeholder image)",
  },
  {
    no: "03",
    title: "Dispatch",
    copy: "Hybrid distribution into industry, infrastructure and communities.",
    image: null,
    alt: "Sustainable district receiving distributed power (placeholder image)",
  },
];

function toStage(
  stage: RenewableEnergyEnergyCycleStages,
  index: number
): Stage {
  const fallback = FALLBACK_STAGES[index];
  const image = stage.image?.url ?? null;

  return {
    no: stage.no || fallback?.no || String(index + 1).padStart(2, "0"),
    title: stage.title || fallback?.title || "",
    copy: stage.copy || fallback?.copy || "",
    image,
    alt: image
      ? stage.image?.alt || stage.image_alt || FALLBACK_IMAGE_ALT
      : "",
  };
}

export default function EnergyCycle({
  data,
}: {
  data: RenewableEnergyEnergyCycle;
}) {
  const stages = data.stages.length ? data.stages.map(toStage) : FALLBACK_STAGES;
  const heading = data.heading || FALLBACK_HEADING;
  const headingLines = heading.split("\n");

  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="energy-cycle-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid items-end gap-[clamp(20px,3vw,44px)] lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                04 — System role
              </p>
              <h2
                id="energy-cycle-title"
                className="max-w-[16ch] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                {headingLines.length === 2 ? (
                  <>
                    {headingLines[0]}
                    <br />
                    {headingLines[1]}
                  </>
                ) : (
                  heading
                )}
              </h2>
            </div>
            <div>
              <p className="max-w-[48ch] text-[clamp(0.98rem,1.3vw,1.12rem)] leading-[1.6] text-muted/75">
                {data.description || FALLBACK_DESCRIPTION}
              </p>
              <a
                href="/investments/project-development"
                className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.08em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                How projects are structured
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid gap-px border border-accent/20 bg-accent/20 md:grid-cols-3">
            {stages.map((stage) => (
              <article
                key={stage.no}
                className="group relative overflow-hidden bg-sidebar"
              >
                <div className="relative aspect-[4/5] overflow-hidden max-[640px]:aspect-[4/3]">
                  {stage.image ? (
                    <div
                      role={stage.alt ? "img" : undefined}
                      aria-label={stage.alt || undefined}
                      aria-hidden={stage.alt ? undefined : true}
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url(${stage.image})` }}
                    />
                  ) : null}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/20 to-sidebar/55"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-[clamp(18px,2.4vw,28px)]">
                    <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-accent uppercase">
                      {stage.no} — {stage.title}
                    </p>
                    <h3 className="mt-2 font-sans text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]">
                      {stage.title}
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-[0.9rem] leading-[1.55] text-muted/78">
                      {stage.copy}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {data.stages.length === 0 && (
            <p className="mt-[clamp(16px,2.2vw,24px)] max-w-[82ch] text-[0.72rem] leading-[1.6] text-muted/45">
              PLACEHOLDER — imagery and stage descriptions are illustrative.
              Generation, storage and dispatch are scope areas, not claims of
              delivered capacity.
            </p>
          )}
        </div>
      </section>
    </Reveal>
  );
}
