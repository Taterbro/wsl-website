import type { OurStoryStoryFootprint } from "@/lib/cms/generated";
import { cn } from "@/lib/utils";

type Bridge = OurStoryStoryFootprint["bridges"][number] & {
  direction: "right" | "left";
};

const FALLBACK_HEADING = "From Africa to the world.\nFrom the world to Africa.";

const FALLBACK_DESCRIPTION =
  "The group moves in both directions — bringing capital, technology and expertise to African projects, and bringing African opportunities, partners and delivery capacity to global markets.";

const FALLBACK_BRIDGE: Bridge[] = [
  {
    left: "Africa",
    right: "Global markets",
    items: "Capital · Technology · Expertise · Markets",
    direction: "right",
  },
  {
    left: "Africa",
    right: "Global markets",
    items: "Opportunity · Partnership · Delivery · Impact",
    direction: "left",
  },
];

const FALLBACK_REGIONS: OurStoryStoryFootprint["regions"] = [
  {
    name: "Africa",
    status: "Established operations",
    copy: "Home market. Water, energy, agriculture, industry and urban infrastructure.",
  },
  {
    name: "GCC",
    status: "Active partnerships",
    copy: "A capital and partnership corridor into African infrastructure delivery.",
  },
  {
    name: "Europe",
    status: "Active partnerships",
    copy: "Finance, technology and development institutions working with the group.",
  },
  {
    name: "North America",
    status: "Strategic target market",
    copy: "Technology and capital partners; no operating presence is implied.",
  },
  {
    name: "Asia-Pacific",
    status: "Strategic target market",
    copy: "A long-horizon opportunity in water, energy and industrial development.",
  },
];

const STATUS_CLASS: Record<string, string> = {
  "Established operations": "border-primary/35 text-primary",
  "Active partnerships": "border-chart-4/40 text-[#855c18]",
  "Strategic target market": "border-[rgba(9,29,42,0.16)] text-muted-foreground",
};

function toBridge(
  row: OurStoryStoryFootprint["bridges"][number],
  index: number
): Bridge {
  return {
    ...row,
    direction: index % 2 === 0 ? "right" : "left",
  };
}

export default function StoryFootprint({
  data,
}: {
  data: OurStoryStoryFootprint;
}) {
  const heading = data.label || FALLBACK_HEADING;
  const headingLines = heading.split("\n");
  const bridges = data.bridges.length
    ? data.bridges.map(toBridge)
    : FALLBACK_BRIDGE;
  const regions = data.regions.length ? data.regions : FALLBACK_REGIONS;

  return (
    <section
      id="story-footprint"
      aria-labelledby="story-footprint-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="mb-[clamp(30px,4vw,48px)] max-w-[56ch]">
          <p className="mb-5 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
            The global bridge
          </p>
          <h2
            id="story-footprint-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
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

        <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(30px,5vw,80px)] max-[1080px]:grid-cols-1 max-[1080px]:gap-[34px]">
          <p className="max-w-[52ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted-foreground">
            {data.description || FALLBACK_DESCRIPTION}
          </p>

          <div className="flex flex-col gap-[clamp(18px,2.5vw,32px)]">
            {bridges.map((row) => (
              <div
                key={row.items}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-[clamp(12px,2vw,26px)]"
              >
                <span className="font-sans text-[0.95rem] leading-[1.2] font-bold whitespace-nowrap uppercase [font-stretch:112%]">
                  {row.left}
                </span>
                <div className="relative py-7">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-1/2 h-px bg-primary/30"
                  />
                  <span className="absolute inset-x-0 top-0 text-center text-[0.74rem] tracking-[0.03em] text-muted-foreground">
                    {row.items}
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 12"
                    className={cn(
                      "absolute top-1/2 h-[11px] w-[22px] -translate-y-1/2 text-primary",
                      row.direction === "right"
                        ? "right-0"
                        : "left-0 -scale-x-100"
                    )}
                  >
                    <path
                      d="M1 6h20M16 1.5L21.5 6 16 10.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-sans text-[0.95rem] leading-[1.2] font-bold whitespace-nowrap uppercase [font-stretch:112%]">
                  {row.right}
                </span>
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-[clamp(38px,5vw,64px)] grid list-none grid-cols-5 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] p-0 max-[1080px]:grid-cols-3 max-[760px]:grid-cols-1">
          {regions.map((region) => (
            <li key={region.name} className="bg-background px-[18px] pt-[22px] pb-[22px]">
              <h3 className="font-sans text-[1.15rem] font-extrabold uppercase [font-stretch:114%]">
                {region.name}
              </h3>
              <span
                className={cn(
                  "mt-3 inline-flex items-center rounded-[2px] border px-2.5 py-[6px] text-[0.66rem] font-semibold tracking-[0.08em] uppercase",
                  STATUS_CLASS[region.status]
                )}
              >
                {region.status}
              </span>
              <p className="mt-3 text-[0.86rem] leading-[1.5] text-muted-foreground">
                {region.copy}
              </p>
            </li>
          ))}
        </ul>

        <a
          href="/global-markets"
          className="mt-[clamp(28px,4vw,40px)] inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-current bg-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-foreground hover:text-muted"
        >
          Explore global markets
        </a>
      </div>
    </section>
  );
}
