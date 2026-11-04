import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";

const PILLARS: {
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

const FIELDS: {
  image: string;
  alt: string;
  sector: string;
  title: string;
  href: string;
}[] = [
  {
    image: "/placeholders/story-field-water.png",
    alt: "Placeholder artwork standing in for photography of a solar-powered water treatment and storage site",
    sector: "Water & smart infrastructure",
    title: "The practice that formed the group",
    href: "/businesses/water-smart-infrastructure",
  },
  {
    image: "/placeholders/story-field-industry.png",
    alt: "Placeholder artwork standing in for photography of an industrial processing and manufacturing plant",
    sector: "Industrial development",
    title: "From projects to operating companies",
    href: "/businesses/industry",
  },
  {
    image: "/placeholders/story-field-digital.png",
    alt: "Placeholder artwork standing in for photography of a digital monitoring and control room",
    sector: "Technology & digital infrastructure",
    title: "Data as an operating asset",
    href: "/businesses/technology-ai",
  },
];

export default function StoryOrigin() {
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
                We build the infrastructure growth depends on.
              </h2>
            </div>
            <div>
              <p className="max-w-[56ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted-foreground">
                Essential infrastructure fails quietly. Water stops, power
                thins, food chains break, and the cost lands on the people with
                the fewest options. We started by solving that in our own
                market, then built the structure to solve it properly.
              </p>
              <p className="mt-4 text-muted-foreground">
                Not a fund. Not a single business. An operating group that
                carries an opportunity from first identification through to
                generational value.
              </p>
            </div>
          </div>

          <dl className="mt-[clamp(34px,5vw,64px)] grid grid-cols-4 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
            {PILLARS.map((pillar) => (
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
            {FIELDS.map((field) => (
              <article key={field.sector} className="group">
                <div className="relative aspect-[4/3] overflow-hidden border border-[rgba(9,29,42,0.16)]">
                  <Image
                    src={field.image}
                    alt={field.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-4 text-[0.7rem] font-semibold tracking-[0.1em] text-primary uppercase">
                  {field.sector}
                </p>
                <h3 className="mt-2 max-w-[22ch] font-sans text-[1.15rem] leading-[1.14] font-extrabold uppercase [font-stretch:114%]">
                  {field.title}
                </h3>
                <a
                  href={field.href}
                  className="mt-3 inline-flex items-center gap-2 text-[0.74rem] font-semibold tracking-[0.06em] text-foreground uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
                >
                  Explore the platform
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
