"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { HomeInnovationStages } from "@/lib/cms/generated";

interface Stage {
  key: string;
  no: string;
  label: string;
  copy: string;
}

export default function WswisStages({
  stages,
}: {
  stages: HomeInnovationStages[];
}) {
  const items: Stage[] = stages.map((stage, index) => ({
    key: String(index),
    no: stage.number,
    label: stage.label,
    copy: stage.copy,
  }));

  const [active, setActive] = useState(() => items[0]?.key ?? "");
  const [animCount, setAnimCount] = useState(0);

  const select = (key: string) => {
    setActive(key);
    setAnimCount((count) => count + 1);
  };

  const activeStage = items.find((stage) => stage.key === active) ?? items[0];

  if (!activeStage) return null;

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
        {items.map((stage) => (
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
        {/* TODO: GET rid of this "why it matters" part */}
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
