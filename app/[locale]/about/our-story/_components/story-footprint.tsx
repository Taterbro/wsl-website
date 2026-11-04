import { cn } from "@/lib/utils";

const BRIDGE: {
  left: string;
  right: string;
  items: string;
  direction: "right" | "left";
}[] = [
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

const REGIONS: { name: string; status: string; copy: string }[] = [
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

export default function StoryFootprint() {
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
            From Africa to the world.
            <br />
            From the world to Africa.
          </h2>
        </div>

        <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(30px,5vw,80px)] max-[1080px]:grid-cols-1 max-[1080px]:gap-[34px]">
          <p className="max-w-[52ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted-foreground">
            The group moves in both directions — bringing capital, technology
            and expertise to African projects, and bringing African
            opportunities, partners and delivery capacity to global markets.
          </p>

          <div className="flex flex-col gap-[clamp(18px,2.5vw,32px)]">
            {BRIDGE.map((row) => (
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
          {REGIONS.map((region) => (
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
