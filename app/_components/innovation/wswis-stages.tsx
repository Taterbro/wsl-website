"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type StageKey =
  | "solar"
  | "source"
  | "storage"
  | "distribution"
  | "monitoring"
  | "maintenance"
  | "access";

interface Stage {
  key: StageKey;
  no: string;
  label: string;
  copy: string;
}

const STAGES: Stage[] = [
  {
    key: "solar",
    no: "Stage 1",
    label: "Solar energy",
    copy: "The system draws on abundant solar generation, removing fuel dependence and running cost from the water supply chain.",
  },
  {
    key: "source",
    no: "Stage 2",
    label: "Source & treatment",
    copy: "Sourcing, filtration and treatment sized to demand and water quality, with capacity to serve whole districts and institutions.",
  },
  {
    key: "storage",
    no: "Stage 3",
    label: "Smart storage",
    copy: "Instrumented storage buffers supply against demand peaks, grid outages and drought.",
  },
  {
    key: "distribution",
    no: "Stage 4",
    label: "Intelligent distribution",
    copy: "Pressure-managed networks and metering deliver water where it is needed with minimal loss.",
  },
  {
    key: "monitoring",
    no: "Stage 5",
    label: "Digital monitoring",
    copy: "Sensors and telemetry turn physical infrastructure into live data for operators and financiers.",
  },
  {
    key: "maintenance",
    no: "Stage 6",
    label: "Predictive maintenance",
    copy: "Analytics anticipate failures before they interrupt service, cutting downtime and lifetime cost.",
  },
  {
    key: "access",
    no: "Stage 7",
    label: "Reliable access",
    copy: "The outcome: dependable water for cities, industry, agriculture, healthcare, education and communities.",
  },
];

export default function WswisStages() {
  const [active, setActive] = useState<StageKey>("solar");
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
        aria-label="WSWIS system stages"
        className="relative mt-[clamp(44px,6vw,74px)] grid grid-cols-7 max-[1080px]:grid-cols-4 max-[1080px]:gap-y-[30px]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[34px] h-px bg-accent/20 max-[1080px]:hidden"
        />
        {STAGES.map((stage) => (
          <button
            key={stage.key}
            type="button"
            role="tab"
            id={`wswis-node-${stage.key}`}
            aria-selected={active === stage.key}
            aria-controls="wswis-panel"
            tabIndex={active === stage.key ? 0 : -1}
            onFocus={() => select(stage.key)}
            className="group relative flex flex-col items-start gap-3.5 border-0 bg-none px-2.5 text-left text-muted focus-visible:outline-offset-[-3px]"
          >
            <span className="relative z-[2] mt-[27px] h-3.5 w-3.5 rounded-full border-[1.5px] border-accent bg-sidebar-accent transition-[background-color,transform,box-shadow] duration-(--transition-normal) ease-(--ease-standard) group-aria-selected:scale-110 group-aria-selected:bg-accent group-aria-selected:shadow-[0_0_0_6px_rgba(100,216,232,0.16)] max-[1080px]:mt-0" />
            <span className="text-[0.66rem] font-semibold tracking-[0.12em] text-accent uppercase">
              {stage.no}
            </span>
            <span className="text-[0.86rem] font-semibold leading-[1.3] tracking-[0.01em]">
              {stage.label}
            </span>
          </button>
        ))}
      </div>
      <div
        id="wswis-panel"
        role="tabpanel"
        aria-labelledby={`wswis-node-${activeStage.key}`}
        key={animCount}
        className={cn(
          "mt-[clamp(36px,5vw,52px)] grid grid-cols-2 gap-px border border-accent/20 bg-accent/20",
          animCount > 0 && "animate-slide-in"
        )}
      >
        <div className="bg-sidebar-accent/55 p-[clamp(20px,3vw,32px)]">
          <h4 className="mb-2.5 font-sans text-[1.05rem] font-bold tracking-[0.03em] text-accent uppercase [font-stretch:112%]">
            {activeStage.label}
          </h4>
          <p className="max-w-[46ch] text-[0.95rem] leading-[1.6] text-muted/82">
            {activeStage.copy}
          </p>
        </div>
        <div className="bg-sidebar-accent/55 p-[clamp(20px,3vw,32px)]">
          <h4 className="mb-2.5 font-sans text-[1.05rem] font-bold tracking-[0.03em] text-accent uppercase [font-stretch:112%]">
            Why it matters
          </h4>
          <p className="max-w-[46ch] text-[0.95rem] leading-[1.6] text-muted/82">
            Water that stays available through drought, grid failure and growth.
            Instrumentation turns physical infrastructure into data that can be
            financed, maintained and expanded with confidence.
          </p>
        </div>
      </div>
    </>
  );
}
