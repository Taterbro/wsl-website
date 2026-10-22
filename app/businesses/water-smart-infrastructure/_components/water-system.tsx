"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { SYSTEM_STAGES, type StageKey } from "../_data/water";

export default function WaterSystem() {
  const [activeKey, setActiveKey] = useState<StageKey>("capture");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = SYSTEM_STAGES.findIndex(
    (stage) => stage.key === activeKey
  );
  const activeStage = SYSTEM_STAGES[activeIndex] ?? SYSTEM_STAGES[0];

  const focusTab = (index: number) => {
    const next =
      (index + SYSTEM_STAGES.length) % SYSTEM_STAGES.length;
    setActiveKey(SYSTEM_STAGES[next].key);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(SYSTEM_STAGES.length - 1);
        break;
    }
  };

  return (
    <section
      id="water-system"
      aria-labelledby="water-system-title"
      className="relative scroll-mt-[92px] overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[24vw] -right-[20vw] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.16),transparent_62%)] blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-end gap-[clamp(26px,5vw,72px)] max-[980px]:grid-cols-1">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              03 — The WSWIS system
            </p>
            <h2
              id="water-system-title"
              className="font-sans text-[clamp(2.1rem,5.4vw,4.5rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Source to service.
              <br />
              <span className="text-accent">One chain.</span>
            </h2>
          </div>

          <div className="max-w-[46ch]">
            <p className="text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.6] text-muted/80">
              Every Waterlight water asset is designed as a single instrumented
              system. Select a stage to see what it includes.
            </p>
            <a
              href="/innovation/wswis"
              className="mt-[clamp(16px,2vw,22px)] inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Inside WSWIS
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-[clamp(34px,5vw,58px)] grid grid-cols-[0.82fr_1.18fr] gap-px border border-accent/20 bg-accent/20 max-[980px]:grid-cols-1">
          <div className="bg-sidebar p-[clamp(18px,2.4vw,30px)]">
            <p className="text-[0.64rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
              System stages
            </p>

            <div
              role="tablist"
              aria-label="Water system stages"
              aria-orientation="vertical"
              className="mt-4 flex flex-col"
            >
              {SYSTEM_STAGES.map((stage, index) => {
                const isActive = stage.key === activeKey;
                return (
                  <button
                    key={stage.key}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    type="button"
                    role="tab"
                    id={`water-tab-${stage.key}`}
                    aria-selected={isActive}
                    aria-controls="water-system-panel"
                    tabIndex={isActive ? 0 : -1}
                    onFocus={() => setActiveKey(stage.key)}
                    onClick={() => setActiveKey(stage.key)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    className={cn(
                      "group grid w-full grid-cols-[auto_1fr_auto] items-center gap-[clamp(10px,1.8vw,20px)] border-t border-accent/20 border-l-2 border-l-transparent py-[clamp(13px,1.8vw,20px)] pl-[clamp(10px,1.4vw,16px)] text-left transition-colors duration-(--transition-fast) ease-(--ease-standard) last:border-b focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                      isActive
                        ? "border-l-accent bg-sidebar-accent/45 text-accent"
                        : "text-muted/75 hover:text-muted"
                    )}
                  >
                    <span
                      className={cn(
                        "font-sans text-[0.66rem] font-extrabold tracking-[0.12em] [font-stretch:112%]",
                        isActive ? "text-accent" : "text-muted/45"
                      )}
                    >
                      {stage.no}
                    </span>
                    <span className="font-sans text-[clamp(0.95rem,1.5vw,1.18rem)] leading-[1.2] font-bold uppercase [font-stretch:112%]">
                      {stage.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "text-[0.9rem] transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none",
                        isActive
                          ? "translate-x-0 text-accent"
                          : "-translate-x-1 text-muted/30 group-hover:translate-x-0"
                      )}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-sidebar-accent/40 p-[clamp(20px,3vw,36px)]">
            <div aria-hidden="true" className="relative grid grid-cols-5">
              <span className="absolute top-[13px] right-[10%] left-[10%] h-px bg-accent/25" />
              {SYSTEM_STAGES.map((stage) => {
                const isActive = stage.key === activeKey;
                return (
                  <div
                    key={stage.key}
                    className="relative z-10 flex flex-col items-center gap-2"
                  >
                    <span
                      className={cn(
                        "grid h-[26px] w-[26px] place-items-center rounded-full border text-[0.56rem] font-bold transition-colors duration-(--transition-normal) ease-(--ease-standard)",
                        isActive
                          ? "border-accent bg-accent text-sidebar shadow-[0_0_0_6px_rgba(100,216,232,0.14)]"
                          : "border-accent/40 bg-sidebar text-accent/60"
                      )}
                    >
                      {stage.no}
                    </span>
                    <span
                      className={cn(
                        "text-center text-[0.56rem] leading-[1.25] font-semibold tracking-[0.08em] uppercase",
                        isActive ? "text-accent" : "text-muted/45"
                      )}
                    >
                      {stage.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div
              id="water-system-panel"
              role="tabpanel"
              aria-labelledby={`water-tab-${activeStage.key}`}
              key={activeStage.key}
              className="mt-[clamp(22px,3vw,34px)] animate-slide-in motion-reduce:animate-none"
            >
              <p className="text-[0.64rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                Stage {activeStage.no} of 05
              </p>
              <h3 className="mt-2 font-sans text-[clamp(1.3rem,2.6vw,2.1rem)] leading-[1.05] font-extrabold uppercase [font-stretch:114%]">
                {activeStage.label}
              </h3>
              <p className="mt-3 max-w-[52ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.65] text-muted/82">
                {activeStage.summary}
              </p>

              <p className="mt-[clamp(20px,2.6vw,28px)] text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
                Typical components
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
            </div>
          </div>
        </div>

        <p className="mt-[clamp(20px,3vw,30px)] max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
          PLACEHOLDER — system configuration and component lists are indicative.
          Final scope is defined per project through technical due diligence.
        </p>
      </div>
    </section>
  );
}
