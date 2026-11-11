import { getSector } from "@/lib/businesses";
import type { CmsImage } from "@/lib/cms/normalize";
import type { IndustrialDevelopmentCapabilityLine } from "@/lib/cms/generated";

// PLACEHOLDER — capability imagery and supporting copy are illustrative until
// approved sector assets and content are supplied. Media has no value fallback;
// images render only from the CMS.
type Capability = {
  code: string;
  label: string;
  copy: string;
  chips: string[];
  image: CmsImage | null;
  alt: string;
};

const FALLBACK_LABELS = getSector("industrial-development").capabilities;

const FALLBACK_DETAILS: {
  code: string;
  copy: string;
  chips: string[];
  alt: string;
}[] = [
  {
    code: "ST-01",
    copy: "Industrial production built around local inputs, standards and demand.",
    chips: ["Production lines", "Assembly", "Quality systems"],
    alt: "Manufacturing line in operation (placeholder image)",
  },
  {
    code: "ST-02",
    copy: "Facilities planned, built and operated as long-term industrial assets.",
    chips: ["Industrial parks", "Plants", "Shared utilities"],
    alt: "Industrial facility and plant infrastructure (placeholder image)",
  },
  {
    code: "ST-03",
    copy: "Processing capacity that adds value before products leave the region.",
    chips: ["Agro-processing", "Materials", "Packaging"],
    alt: "Processing line and materials handling (placeholder image)",
  },
  {
    code: "ST-04",
    copy: "Technology transfer that turns imported systems into local capability.",
    chips: ["Licensing", "Skills", "Supplier development"],
    alt: "Technology localisation and assembly work (placeholder image)",
  },
  {
    code: "ST-05",
    copy: "Equipment manufactured and supported closer to the projects that use it.",
    chips: ["Fabrication", "Assembly", "Service"],
    alt: "Industrial equipment production and partnership (placeholder image)",
  },
  {
    code: "ST-06",
    copy: "Joint ventures and operating partnerships that anchor industry locally.",
    chips: ["Joint ventures", "O&M", "Offtake"],
    alt: "Industrial partnership and operations team (placeholder image)",
  },
];

const FALLBACK_DESCRIPTION =
  "Six stations along one industrial value chain — each able to stand alone, stronger when sequenced.";

const FALLBACK_CAPABILITIES: Capability[] = FALLBACK_LABELS.map(
  (label, index) => {
    const legacy = FALLBACK_DETAILS[index];
    return {
      code: legacy?.code ?? `ST-0${index + 1}`,
      label,
      copy: legacy?.copy ?? "",
      chips: legacy?.chips ?? [],
      image: null,
      alt: legacy?.alt ?? "",
    };
  }
);

function parseChips(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function toCapability(
  capability: IndustrialDevelopmentCapabilityLine["capabilities"][number],
  index: number
): Capability {
  const legacy = FALLBACK_CAPABILITIES[index];
  const chips = parseChips(capability.chips);

  return {
    code: capability.code || legacy?.code || `ST-0${index + 1}`,
    label: capability.label || legacy?.label || "",
    copy: capability.copy || legacy?.copy || "",
    chips: chips.length ? chips : (legacy?.chips ?? []),
    image: capability.image,
    alt:
      capability.image?.alt ||
      capability.image_alt ||
      legacy?.alt ||
      "",
  };
}

export default function CapabilityLine({
  data,
}: {
  data: IndustrialDevelopmentCapabilityLine;
}) {
  const capabilities = data.capabilities.length
    ? data.capabilities.map(toCapability)
    : FALLBACK_CAPABILITIES;
  const headingLines = data.heading ? data.heading.split("\n") : [];

  return (
    <section
      id="capabilities"
      aria-labelledby="industrial-capabilities-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-col gap-[clamp(22px,3vw,40px)] lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              02 — Production line
            </p>
            <h2
              id="industrial-capabilities-title"
              className="mt-4 max-w-[16ch] font-sans text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              {data.heading ? (
                headingLines.length === 2 ? (
                  <>
                    {headingLines[0]}
                    <br />
                    {headingLines[1]}
                  </>
                ) : (
                  data.heading
                )
              ) : (
                <>
                  From blueprint
                  <br />
                  to production.
                </>
              )}
            </h2>
          </div>

          <div className="max-w-[46ch] lg:text-right">
            <p className="text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-foreground/70">
              {data.description || FALLBACK_DESCRIPTION}
            </p>
            <a
              href="/innovation/technology-partnerships"
              className="mt-5 inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent"
            >
              Technology partnerships
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <p
          id="industrial-line-hint"
          className="mt-[clamp(26px,4vw,44px)] flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase"
        >
          <span aria-hidden="true" className="h-px flex-1 bg-foreground/15" />
          Scroll the line
          <span aria-hidden="true">→</span>
        </p>

        <div
          role="region"
          aria-label="Industrial capability stations"
          aria-describedby="industrial-line-hint"
          tabIndex={0}
          className="-mx-[clamp(20px,5vw,72px)] overflow-x-auto px-[clamp(20px,5vw,72px)] pb-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <ol className="mt-4 flex w-max snap-x snap-mandatory gap-[clamp(12px,2vw,20px)]">
            {capabilities.map((capability, index) => {
              const alt = capability.image
                ? capability.alt
                : "";

              return (
                <li
                  key={`${capability.code}-${index}`}
                  className="w-[clamp(260px,31vw,420px)] shrink-0 snap-start"
                >
                  <article className="group flex h-full flex-col border border-foreground/15 bg-card">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {capability.image ? (
                        <div
                          role={alt ? "img" : undefined}
                          aria-label={alt || undefined}
                          aria-hidden={alt ? undefined : true}
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-[1.03] motion-reduce:transform-none"
                          style={{
                            backgroundImage: `url(${capability.image.url})`,
                          }}
                        />
                      ) : null}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-sidebar/75 via-sidebar/10 to-transparent"
                      />
                      <span className="absolute top-3 left-3 border border-accent/35 bg-sidebar/80 px-2 py-1 font-sans text-[0.6rem] font-semibold tracking-[0.14em] text-accent uppercase tabular-nums">
                        {capability.code}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute right-3 bottom-3 font-sans text-[2.6rem] leading-none font-extrabold tracking-[-0.04em] text-muted/25 uppercase tabular-nums [font-stretch:120%]"
                      >
                        {capability.code.slice(-2)}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-[clamp(18px,2.2vw,26px)]">
                      <h3 className="font-sans text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.15] font-extrabold tracking-[-0.005em] uppercase [font-stretch:110%]">
                        {capability.label}
                      </h3>
                      <p className="text-[0.86rem] leading-[1.6] text-foreground/65">
                        {capability.copy}
                      </p>
                      <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
                        {capability.chips.map((chip) => (
                          <li
                            key={chip}
                            className="border border-foreground/15 px-2 py-1 text-[0.58rem] font-semibold tracking-[0.08em] text-foreground/65 uppercase"
                          >
                            {chip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="mt-5 text-[0.62rem] leading-[1.5] text-foreground/60">
          PLACEHOLDER — capability copy and station imagery are illustrative
          until approved sector content and photography are supplied.
        </p>
      </div>
    </section>
  );
}
