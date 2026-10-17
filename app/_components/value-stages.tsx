"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type StageKey =
  | "identify"
  | "originate"
  | "structure"
  | "mobilize"
  | "build"
  | "scale";

interface Stage {
  key: StageKey;
  no: string;
  label: string;
  copy: string;
}

const STAGES: Stage[] = [
  {
    key: "identify",
    no: "01",
    label: "Identify",
    copy: "We scan markets for essential-need demand across water, energy, food, housing, mobility and digital access — the fundamentals that grow as populations and economies grow.",
  },
  {
    key: "originate",
    no: "02",
    label: "Originate",
    copy: "We shape raw opportunities into defined projects with clear sponsors, sites, demand and a credible route to delivery.",
  },
  {
    key: "structure",
    no: "03",
    label: "Structure",
    copy: "We design bankable vehicles — equity, debt, joint venture, EPC, PPP and blended finance — matched to the risk and return each asset needs.",
  },
  {
    key: "mobilize",
    no: "04",
    label: "Mobilize",
    copy: "We convene capital, technology, expertise and delivery partners across Africa and global markets, aligning interests from the start.",
  },
  {
    key: "build",
    no: "05",
    label: "Build",
    copy: "We execute infrastructure and industrial assets to institutional standards of quality, governance and safety.",
  },
  {
    key: "scale",
    no: "06",
    label: "Scale",
    copy: "We grow the enterprise, replicate the model across markets and compound generational value for partners and communities.",
  },
];

const STEP_BORDERS =
  "border-r border-r-[rgba(9,29,42,0.16)] last:border-r-0 max-[1080px]:border-b max-[1080px]:border-b-[rgba(9,29,42,0.16)] max-[1080px]:[&:nth-child(3)]:border-r-0 max-[1080px]:[&:nth-child(n+4)]:border-b-0 max-[760px]:[&:nth-child(2n)]:border-r-0 max-[760px]:[&:nth-child(3)]:border-r max-[760px]:[&:nth-child(5)]:border-r max-[760px]:[&:nth-child(n+5)]:border-b-0";

export default function ValueStages() {
  const [active, setActive] = useState<StageKey>("identify");
  const [animCount, setAnimCount] = useState(0);

  const select = (key: StageKey) => {
    setActive(key);
    setAnimCount((count) => count + 1);
  };

  const activeStage = STAGES.find((stage) => stage.key === active) ?? STAGES[0];

  return (
    <>
      <div
        role="tablist"
        aria-label="Value-creation stages"
        className="relative mt-[clamp(34px,5vw,58px)] grid grid-cols-6 border-y border-y-[rgba(9,29,42,0.16)] max-[1080px]:grid-cols-3 max-[760px]:grid-cols-2"
      >
        {STAGES.map((stage) => (
          <button
            key={stage.key}
            type="button"
            role="tab"
            id={`stage-${stage.key}`}
            aria-selected={active === stage.key}
            aria-controls="valueDetail"
            tabIndex={active === stage.key ? 0 : -1}
            onClick={() => select(stage.key)}
            onFocus={() => select(stage.key)}
            className={cn(
              "group relative flex flex-col gap-3.5 border-0 bg-none px-5 pt-[26px] pb-[30px] text-left text-foreground transition-colors duration-(--transition-normal) ease-(--ease-standard) focus-visible:outline-offset-[-3px] aria-selected:bg-background motion-reduce:transition-none",
              STEP_BORDERS
            )}
          >
            <span className="font-sans text-[1.6rem] font-extrabold text-secondary transition-colors duration-(--transition-normal) ease-(--ease-standard) group-aria-selected:text-primary motion-reduce:transition-none [font-stretch:114%]">
              {stage.no}
            </span>
            <span className="font-sans text-[0.98rem] font-bold tracking-[0.03em] uppercase [font-stretch:110%]">
              {stage.label}
            </span>
            <span className="relative h-[3px] overflow-hidden bg-[rgba(9,29,42,0.16)]">
              <i className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-(--transition-slow) ease-(--ease-standard) group-aria-selected:scale-x-100 motion-reduce:transition-none" />
            </span>
          </button>
        ))}
      </div>
      <div
        id="valueDetail"
        role="tabpanel"
        aria-labelledby={`stage-${activeStage.key}`}
        key={animCount}
        className={cn(
          "mt-8 grid min-h-[88px] grid-cols-[auto_1fr] items-start gap-[clamp(20px,4vw,56px)] border-l-2 border-accent pl-[clamp(18px,3vw,32px)]",
          animCount > 0 && "animate-slide-in motion-reduce:animate-none"
        )}
      >
        <span className="font-sans text-[clamp(1.3rem,3vw,2.1rem)] font-extrabold uppercase text-primary [font-stretch:114%]">
          {activeStage.label}
        </span>
        <p className="max-w-[62ch] text-[1.05rem] leading-[1.6]">
          {activeStage.copy}
        </p>
      </div>
    </>
  );
}
