import type {
  OurStoryStoryOrigin,
  OurStoryStoryOriginFields,
} from "@/lib/cms/generated";
import Reveal from "../../../(home)/_components/reveal";

const FALLBACK_HEADING = "We build the infrastructure growth depends on.";

const FALLBACK_DESCRIPTION =
  "Essential infrastructure fails quietly. Water stops, power thins, food chains break, and the cost lands on the people with the fewest options. We started by solving that in our own market, then built the structure to solve it properly.";

const FALLBACK_BODY =
  "Not a fund. Not a single business. An operating group that carries an opportunity from first identification through to generational value.";

const FALLBACK_PILLARS: {
  value: string;
  label: string;
  source: string;
  placeholder?: boolean;
}[] = [
  {
    value: "Africa",
    label: "Where we started",
    source: "Group brief · African-founded",
  },
  {
    value: "8",
    label: "Business platforms",
    source: "Group brief · priority sectors",
  },
  {
    value: "5",
    label: "Operating regions",
    source: "Group brief · Africa, GCC, Europe, N. America, APAC",
  },
  {
    value: "Est.",
    label: "Year founded",
    source: "PLACEHOLDER · awaiting verification",
    placeholder: true,
  },
];

const LEGACY_FIELDS: { sector: string; title: string; href: string }[] = [
  {
    sector: "Water & smart infrastructure",
    title: "The practice that formed the group",
    href: "/businesses/water-smart-infrastructure",
  },
  {
    sector: "Industrial development",
    title: "From projects to operating companies",
    href: "/businesses/industry",
  },
  {
    sector: "Technology & digital infrastructure",
    title: "Data as an operating asset",
    href: "/businesses/technology-ai",
  },
];

type OriginField = {
  image: OurStoryStoryOriginFields["image"];
  image_alt: string;
  sector: string;
  title: string;
  href: string;
};

const FALLBACK_FIELDS: OriginField[] = [
  {
    image: null,
    image_alt:
      "Placeholder artwork standing in for photography of a solar-powered water treatment and storage site",
    sector: "Water & smart infrastructure",
    title: "The practice that formed the group",
    href: "/businesses/water-smart-infrastructure",
  },
  {
    image: null,
    image_alt:
      "Placeholder artwork standing in for photography of an industrial processing and manufacturing plant",
    sector: "Industrial development",
    title: "From projects to operating companies",
    href: "/businesses/industrial-development",
  },
  {
    image: null,
    image_alt:
      "Placeholder artwork standing in for photography of a digital monitoring and control room",
    sector: "Technology & digital infrastructure",
    title: "Data as an operating asset",
    href: "/businesses/technology-digital-infrastructure",
  },
];

function toOriginField(
  field: OurStoryStoryOriginFields,
  index: number
): OriginField {
  const legacy =
    LEGACY_FIELDS.find((item) => item.sector === field.sector) ??
    LEGACY_FIELDS[index];

  return {
    image: field.image,
    image_alt: field.image_alt,
    sector: field.sector || legacy?.sector || "",
    title: field.title || legacy?.title || "",
    href: legacy?.href || "",
  };
}

export default function StoryOrigin({ data }: { data: OurStoryStoryOrigin }) {
  const pillars = data.pillars.length ? data.pillars : FALLBACK_PILLARS;
  const fields = data.fields.length
    ? data.fields.map(toOriginField)
    : FALLBACK_FIELDS;

  return (
    <Reveal>
      <section
        id="story-origin"
        aria-labelledby="story-origin-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[1.15fr_0.85fr] items-end gap-[clamp(32px,6vw,90px)] max-[1080px]:grid-cols-1 max-[1080px]:gap-[34px]">
            <div>
              <p className="mb-5 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                The founding idea
              </p>
              <h2
                id="story-origin-title"
                className="max-w-[20ch] font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                {data.heading || FALLBACK_HEADING}
              </h2>
            </div>
            <div>
              <p className="max-w-[56ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted-foreground">
                {data.description || FALLBACK_DESCRIPTION}
              </p>
              <p className="mt-4 text-muted-foreground">
                {data.body || FALLBACK_BODY}
              </p>
            </div>
          </div>

          <dl className="mt-[clamp(34px,5vw,64px)] grid grid-cols-4 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="flex flex-col bg-muted px-[18px] pt-[22px] pb-[22px]"
              >
                <dt className="order-2 mt-3 text-[0.78rem] font-medium text-muted-foreground">
                  {pillar.label}
                </dt>
                <dd className="order-1 m-0 font-sans text-[clamp(1.6rem,3vw,2.4rem)] leading-none font-extrabold text-primary [font-stretch:116%]">
                  {pillar.value}
                </dd>
                <div className="order-3 mt-2 inline-flex items-center gap-[7px] text-[0.66rem] tracking-[0.03em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:border before:border-chart-4 before:content-['']">
                  {pillar.source}
                </div>
              </div>
            ))}
          </dl>
          <p className="mt-3.5 max-w-[72ch] text-[0.72rem] leading-[1.5] text-muted-foreground">
            Figures marked as placeholders carry no source owner yet. Every
            metric published on this site is released only with a methodology, a
            reporting period and a named owner.
          </p>

          <div className="mt-[clamp(40px,6vw,76px)] grid grid-cols-3 gap-[clamp(14px,2vw,26px)] max-[760px]:grid-cols-1">
            {fields.map((field) => {
              const alt = field.image
                ? field.image.alt || field.image_alt || field.title
                : "";

              return (
                <article key={field.sector} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden border border-[rgba(9,29,42,0.16)]">
                    {field.image ? (
                      <div
                        role={alt ? "img" : undefined}
                        aria-label={alt || undefined}
                        aria-hidden={alt ? undefined : true}
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-(--transition-slower) ease-(--ease-standard) group-hover:scale-[1.04]"
                        style={{ backgroundImage: `url(${field.image.url})` }}
                      />
                    ) : null}
                  </div>
                  <p className="mt-4 text-[0.7rem] font-semibold tracking-[0.1em] text-primary uppercase">
                    {field.sector}
                  </p>
                  <h3 className="mt-2 max-w-[22ch] font-sans text-[1.15rem] leading-[1.14] font-extrabold uppercase [font-stretch:114%]">
                    {field.title}
                  </h3>
                  {field.href ? (
                    <a
                      href={field.href}
                      className="mt-3 inline-flex items-center gap-2 text-[0.74rem] font-semibold tracking-[0.06em] text-foreground uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
                    >
                      Explore the platform
                      <span aria-hidden="true">→</span>
                    </a>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
