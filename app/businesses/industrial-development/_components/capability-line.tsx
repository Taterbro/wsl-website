import Image from "next/image";
import { getSector } from "@/lib/businesses";

// PLACEHOLDER — capability imagery and supporting copy are illustrative until
// approved sector assets and content are supplied.
type CapabilityDetail = {
  code: string;
  copy: string;
  chips: string[];
  image: string;
  alt: string;
};

const DETAILS: Record<string, CapabilityDetail> = {
  Manufacturing: {
    code: "ST-01",
    copy: "Industrial production built around local inputs, standards and demand.",
    chips: ["Production lines", "Assembly", "Quality systems"],
    image: "/placeholders/industry-manufacturing.png",
    alt: "Manufacturing line in operation (placeholder image)",
  },
  "Industrial facilities": {
    code: "ST-02",
    copy: "Facilities planned, built and operated as long-term industrial assets.",
    chips: ["Industrial parks", "Plants", "Shared utilities"],
    image: "/placeholders/industry-facilities.png",
    alt: "Industrial facility and plant infrastructure (placeholder image)",
  },
  Processing: {
    code: "ST-03",
    copy: "Processing capacity that adds value before products leave the region.",
    chips: ["Agro-processing", "Materials", "Packaging"],
    image: "/placeholders/industry-processing.png",
    alt: "Processing line and materials handling (placeholder image)",
  },
  "Technology localization": {
    code: "ST-04",
    copy: "Technology transfer that turns imported systems into local capability.",
    chips: ["Licensing", "Skills", "Supplier development"],
    image: "/placeholders/industry-localisation.png",
    alt: "Technology localisation and assembly work (placeholder image)",
  },
  "Equipment production": {
    code: "ST-05",
    copy: "Equipment manufactured and supported closer to the projects that use it.",
    chips: ["Fabrication", "Assembly", "Service"],
    image: "/placeholders/industry-partners.png",
    alt: "Industrial equipment production and partnership (placeholder image)",
  },
  "Industrial partnerships": {
    code: "ST-06",
    copy: "Joint ventures and operating partnerships that anchor industry locally.",
    chips: ["Joint ventures", "O&M", "Offtake"],
    image: "/placeholders/industry-partnership.png",
    alt: "Industrial partnership and operations team (placeholder image)",
  },
};

export default function CapabilityLine() {
  const sector = getSector("industrial-development");
  const capabilities = sector.capabilities.map((label) => ({
    label,
    ...DETAILS[label],
  }));

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
              From blueprint
              <br />
              to production.
            </h2>
          </div>

          <div className="max-w-[46ch] lg:text-right">
            <p className="text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-foreground/70">
              Six stations along one industrial value chain — each able to
              stand alone, stronger when sequenced.
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
            {capabilities.map((capability) => (
              <li
                key={capability.label}
                className="w-[clamp(260px,31vw,420px)] shrink-0 snap-start"
              >
                <article className="group flex h-full flex-col border border-foreground/15 bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={capability.image}
                      alt={capability.alt}
                      fill
                      sizes="(min-width: 1024px) 31vw, 80vw"
                      className="object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-[1.03] motion-reduce:transform-none"
                    />
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
            ))}
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
