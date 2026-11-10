import type {
  HomeInvestments,
  HomeInvestmentsStages,
} from "@/lib/cms/generated";

import ValueStages from "./value-stages";

const FALLBACK_DESCRIPTION =
  "One operating method, from raw opportunity to generational value. Select a stage to see what happens.";

const FALLBACK_STAGES: HomeInvestmentsStages[] = [
  {
    number: "01",
    label: "Identify",
    description:
      "We scan markets for essential-need demand across water, energy, food, housing, mobility and digital access — the fundamentals that grow as populations and economies grow.",
  },
  {
    number: "02",
    label: "Originate",
    description:
      "We shape raw opportunities into defined projects with clear sponsors, sites, demand and a credible route to delivery.",
  },
  {
    number: "03",
    label: "Structure",
    description:
      "We design bankable vehicles — equity, debt, joint venture, EPC, PPP and blended finance — matched to the risk and return each asset needs.",
  },
  {
    number: "04",
    label: "Mobilize",
    description:
      "We convene capital, technology, expertise and delivery partners across Africa and global markets, aligning interests from the start.",
  },
  {
    number: "05",
    label: "Build",
    description:
      "We execute infrastructure and industrial assets to institutional standards of quality, governance and safety.",
  },
  {
    number: "06",
    label: "Scale",
    description:
      "We grow the enterprise, replicate the model across markets and compound generational value for partners and communities.",
  },
];

export default function Investments({ data }: { data: HomeInvestments }) {
  const stages = data.stages.length ? data.stages : FALLBACK_STAGES;

  return (
    <section
      id="investments"
      aria-labelledby="value-title"
      className="bg-secondary py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="max-w-[52ch]">
          <h2
            id="value-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            {data.label ? (
              data.label
            ) : (
              <>
                How we create
                <br />
                value
              </>
            )}
          </h2>
          <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal font-normal text-muted-foreground">
            {data.description || FALLBACK_DESCRIPTION}
          </p>
        </div>
        <ValueStages stages={stages} />
      </div>
    </section>
  );
}
