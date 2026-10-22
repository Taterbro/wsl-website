"use client";

import { useRef, useState } from "react";
import {
  DISPATCH_PROFILES,
  type DispatchProfile,
  type ProfileKey,
} from "../_data/energy";

type SourceKey = keyof DispatchProfile["mix"];

const SOURCES: { key: SourceKey; label: string; color: string }[] = [
  { key: "solar", label: "Solar", color: "bg-accent" },
  { key: "storage", label: "Storage", color: "bg-[#d6a24a]" },
  { key: "grid", label: "Grid", color: "bg-[#2a6f8e]" },
  { key: "backup", label: "Backup", color: "bg-[#405660]" },
];

const HOURS = [
  "00:00",
  "02:00",
  "04:00",
  "06:00",
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
];

export default function EnergyDispatch() {
  const [activeKey, setActiveKey] = useState<ProfileKey>("industrial");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = DISPATCH_PROFILES.findIndex(
    (profile) => profile.key === activeKey
  );
  const activeProfile =
    DISPATCH_PROFILES[activeIndex] ?? DISPATCH_PROFILES[0];

  const focusTab = (index: number) => {
    const next =
      (index + DISPATCH_PROFILES.length) % DISPATCH_PROFILES.length;
    setActiveKey(DISPATCH_PROFILES[next].key);
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
        focusTab(DISPATCH_PROFILES.length - 1);
        break;
    }
  };

  return (
    <section
      id="energy-dispatch"
      aria-labelledby="energy-dispatch-title"
      className="relative scroll-mt-[92px] overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[22vw] -right-[18vw] h-[54vw] w-[54vw] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.14),transparent_62%)] blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-end gap-[clamp(26px,5vw,72px)] max-[900px]:grid-cols-1">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              03 — Dispatch
            </p>
            <h2
              id="energy-dispatch-title"
              className="font-sans text-[clamp(2.1rem,5.2vw,4.5rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              A day in the life
              <br />
              <span className="text-accent">of a hybrid asset.</span>
            </h2>
          </div>
          <p className="max-w-[46ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.65] text-muted/80">
            Switch between load profiles to see how solar, storage, grid and
            backup share the work across a day. Illustrative only.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Illustrative load profiles"
          className="mt-[clamp(30px,4.4vw,50px)] grid grid-cols-3 gap-px border border-accent/20 bg-accent/20 max-[620px]:grid-cols-1"
        >
          {DISPATCH_PROFILES.map((profile, index) => {
            const isActive = profile.key === activeKey;
            return (
              <button
                key={profile.key}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`energy-profile-${profile.key}`}
                aria-selected={isActive}
                aria-controls="energy-dispatch-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveKey(profile.key)}
                onFocus={() => setActiveKey(profile.key)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className="flex cursor-pointer flex-col gap-1 border-0 bg-sidebar/55 px-[clamp(14px,2vw,22px)] py-[clamp(13px,1.8vw,18px)] text-left text-muted transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent/55 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-ring aria-selected:bg-accent aria-selected:text-sidebar"
              >
                <span className="font-sans text-[clamp(0.9rem,1.3vw,1.02rem)] font-bold tracking-[0.03em] uppercase [font-stretch:112%]">
                  {profile.label}
                </span>
                <span className="text-[0.72rem] leading-[1.4] opacity-70">
                  {profile.load}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="energy-dispatch-panel"
          role="tabpanel"
          aria-labelledby={`energy-profile-${activeProfile.key}`}
          key={activeProfile.key}
          className="mt-[clamp(24px,3.4vw,38px)] animate-slide-in motion-reduce:animate-none"
        >
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
            <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
              Share of hourly load
            </p>
            <ul className="flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
              {SOURCES.map((source) => (
                <li
                  key={source.key}
                  className="inline-flex items-center gap-1.5 text-[0.7rem] text-muted/70"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 ${source.color}`}
                  />
                  {source.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 grid grid-cols-[auto_1fr] gap-x-[clamp(8px,1.4vw,16px)]">
            <div
              aria-hidden="true"
              className="flex h-[clamp(180px,26vw,280px)] flex-col justify-between pb-0.5 text-[0.56rem] tracking-[0.08em] text-muted/35 uppercase"
            >
              <span>100%</span>
              <span>50%</span>
              <span>0</span>
            </div>

            <div
              role="img"
              aria-label={`Illustrative 24-hour dispatch profile for ${activeProfile.label}. ${activeProfile.summary}`}
            >
              <div className="flex h-[clamp(180px,26vw,280px)] items-end gap-[clamp(2px,0.6vw,6px)] border-b border-accent/25 pb-px">
                {HOURS.map((hour, hourIndex) => (
                  <div
                    key={hour}
                    className="flex h-full flex-1 flex-col justify-end"
                  >
                    {SOURCES.map((source) => {
                      const value = activeProfile.mix[source.key][hourIndex];
                      return (
                        <span
                          key={source.key}
                          aria-hidden="true"
                          title={`${source.label} · ${value}%`}
                          className={`w-full ${source.color}`}
                          style={{ height: `${value}%` }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              <div
                aria-hidden="true"
                className="mt-2 flex justify-between text-[0.56rem] tracking-[0.08em] text-muted/35 uppercase"
              >
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>24:00</span>
              </div>
            </div>
          </div>

          <div className="mt-[clamp(24px,3.4vw,38px)] grid grid-cols-[1.15fr_0.85fr] gap-[clamp(22px,4vw,56px)] border-t border-accent/20 pt-[clamp(18px,2.4vw,26px)] max-[820px]:grid-cols-1">
            <p className="max-w-[58ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.65] text-muted/82">
              {activeProfile.summary}
            </p>
            <div>
              <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-accent uppercase">
                Load priorities
              </p>
              <ul className="mt-2.5 flex list-none flex-wrap gap-2 p-0">
                {activeProfile.priorities.map((priority) => (
                  <li
                    key={priority}
                    className="border border-accent/25 bg-sidebar/40 px-3 py-1.5 text-[0.72rem] font-medium text-muted/80"
                  >
                    {priority}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-[clamp(26px,3.4vw,40px)] max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
          PLACEHOLDER — dispatch curves are illustrative and do not represent
          project performance. Actual generation, storage and grid flows are
          modelled per site.
        </p>
      </div>
    </section>
  );
}
