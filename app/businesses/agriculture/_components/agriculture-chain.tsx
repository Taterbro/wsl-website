"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CHAIN_STAGES, type ChainKey } from "../_data/agriculture";

export default function AgricultureChain() {
  const [activeKey, setActiveKey] = useState<ChainKey>("produce");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = CHAIN_STAGES.findIndex(
    (stage) => stage.key === activeKey
  );
  const activeStage = CHAIN_STAGES[activeIndex] ?? CHAIN_STAGES[0];
  const progress =
    CHAIN_STAGES.length > 1
      ? (activeIndex / (CHAIN_STAGES.length - 1)) * 100
      : 0;

  const focusTab = (index: number) => {
    const next = (index + CHAIN_STAGES.length) % CHAIN_STAGES.length;
    setActiveKey(CHAIN_STAGES[next].key);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(CHAIN_STAGES.length - 1);
        break;
    }
  };

  return (
    <section
      id="value-chain"
      aria-labelledby="agriculture-chain-title"
      className="relative scroll-mt-[92px] overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[22vw] -left-[18vw] h-[54vw] w-[54vw] rounded-full bg-[radial-gradient(circle,rgba(120,200,120,0.12),transparent_62%)] blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-end gap-[clamp(26px,5vw,72px)] max-[900px]:grid-cols-1">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              03 — The value chain
            </p>
            <h2
              id="agriculture-chain-title"
              className="font-sans text-[clamp(2.1rem,5.2vw,4.5rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Field to market,
              <br />
              <span className="text-accent">connected.</span>
            </h2>
          </div>
          <p className="max-w-[46ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.65] text-muted/80">
            Select a stage to see what it includes. The chain is designed as one
            system, so capacity added at one link does not overwhelm another.
          </p>
        </div>

        <div className="relative mt-[clamp(32px,4.6vw,54px)]">
          <div
            aria-hidden="true"
            className="absolute top-[22px] right-0 left-0 hidden h-px bg-accent/20 md:block"
          >
            <span
              className="block h-px bg-accent transition-[width] duration-(--transition-slow) ease-(--ease-standard) motion-reduce:transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div
            role="tablist"
            aria-label="Agricultural value chain stages"
            className="relative grid grid-cols-5 max-[760px]:grid-cols-1"
          >
            {CHAIN_STAGES.map((stage, index) => {
              const isActive = stage.key === activeKey;
              return (
                <button
                  key={stage.key}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`agriculture-chain-${stage.key}`}
                  aria-selected={isActive}
                  aria-controls="agriculture-chain-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveKey(stage.key)}
                  onFocus={() => setActiveKey(stage.key)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={cn(
                    "group relative flex cursor-pointer flex-col items-start gap-2.5 border-0 bg-none px-1 pr-[clamp(10px,2vw,28px)] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring max-[760px]:flex-row max-[760px]:items-center max-[760px]:gap-4 max-[760px]:border-t max-[760px]:border-accent/15 max-[760px]:py-3.5 max-[760px]:pr-0",
                    isActive
                      ? "text-accent"
                      : "text-muted/70 hover:text-muted"
                  )}
                >
                  <span
                    className={cn(
                      "relative z-10 grid h-11 w-11 flex-none place-items-center rounded-full border font-sans text-[0.62rem] font-extrabold tracking-[0.08em] transition-colors duration-(--transition-normal) ease-(--ease-standard) [font-stretch:112%]",
                      isActive
                        ? "border-accent bg-accent text-sidebar shadow-[0_0_0_6px_rgba(100,216,232,0.14)]"
                        : "border-accent/40 bg-sidebar text-accent/70 group-hover:border-accent"
                    )}
                  >
                    {stage.no}
                  </span>
                  <span className="font-sans text-[clamp(0.94rem,1.4vw,1.12rem)] leading-[1.1] font-extrabold uppercase [font-stretch:112%]">
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="agriculture-chain-panel"
          role="tabpanel"
          aria-labelledby={`agriculture-chain-${activeStage.key}`}
          key={activeStage.key}
          className="mt-[clamp(22px,3vw,34px)] grid animate-slide-in grid-cols-[0.92fr_1.08fr] gap-px border border-accent/20 bg-accent/20 motion-reduce:animate-none max-[820px]:grid-cols-1"
        >
          <div className="bg-sidebar-accent/45 p-[clamp(20px,3vw,34px)]">
            <p className="text-[0.64rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
              Stage {activeStage.no} of 05
            </p>
            <h3 className="mt-2 font-sans text-[clamp(1.3rem,2.6vw,2.1rem)] leading-[1.05] font-extrabold uppercase [font-stretch:114%]">
              {activeStage.label}
            </h3>
            <p className="mt-3 max-w-[52ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.65] text-muted/82">
              {activeStage.summary}
            </p>
          </div>

          <div className="bg-sidebar-accent/45 p-[clamp(20px,3vw,34px)]">
            <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
              What it includes
            </p>
            <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
              {activeStage.components.map((component) => (
                <li
                  key={component}
                  className="border border-accent/25 bg-sidebar/40 px-3 py-1.5 text-[0.72rem] font-medium text-muted/80"
                >
                  {component}
                </li>
              ))}
            </ul>
            <a
              href="/projects/portfolio"
              className="mt-[clamp(20px,2.6vw,28px)] inline-flex items-center gap-2 text-[0.74rem] font-semibold tracking-[0.06em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Explore the project approach
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <p className="mt-[clamp(24px,3.2vw,38px)] max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
          PLACEHOLDER — chain configuration and component lists are indicative.
          Final scope is defined per project through technical and market due
          diligence.
        </p>
      </div>
    </section>
  );
}
