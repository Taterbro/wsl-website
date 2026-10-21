"use client";

import { useRef, useState } from "react";
import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./board-shared";
import { COMMITTEES } from "../_data/board";

export default function BoardCommittees() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = COMMITTEES[active];

  function focusTab(index: number) {
    const next = (index + COMMITTEES.length) % COMMITTEES.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusTab(index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusTab(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(COMMITTEES.length - 1);
    }
  }

  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="board-committees-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="max-w-[54ch]">
            <Eyebrow>03 — Committee architecture</Eyebrow>
            <h2
              id="board-committees-title"
              className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              The Board works
              <br />
              through three
              <br />
              committees.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              Each committee takes a defined slice of the Board&apos;s work,
              reports back to the full Board and keeps its own record of what it
              reviewed and approved.
            </p>
          </div>

          <div className="mt-[clamp(28px,4vw,48px)] grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-[clamp(20px,3.4vw,48px)] max-[980px]:grid-cols-1">
            <div
              role="tablist"
              aria-label="Board committees"
              aria-orientation="vertical"
              className="flex flex-col border-t border-[rgba(9,29,42,0.16)] max-[980px]:flex-row max-[980px]:overflow-x-auto"
            >
              {COMMITTEES.map((committee, i) => {
                const selected = i === active;
                return (
                  <button
                    key={committee.key}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`board-committee-tab-${committee.key}`}
                    aria-selected={selected}
                    aria-controls="board-committee-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={`flex items-baseline justify-between gap-4 border-b border-[rgba(9,29,42,0.16)] px-[clamp(14px,2vw,22px)] py-[clamp(16px,2.2vw,24px)] text-left transition-colors duration-(--transition-normal) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring max-[980px]:min-w-[240px] max-[980px]:border-b-0 max-[980px]:border-r max-[980px]:last:border-r-0 ${
                      selected
                        ? "bg-sidebar text-muted"
                        : "bg-transparent hover:bg-card"
                    }`}
                  >
                    <span>
                      <span
                        className={`block text-[0.62rem] font-semibold tracking-[0.14em] uppercase ${
                          selected ? "text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")} — {committee.chair}
                      </span>
                      <span
                        className={`mt-2 block font-sans text-[clamp(1rem,1.6vw,1.3rem)] leading-[1.12] font-extrabold uppercase [font-stretch:114%]`}
                      >
                        {committee.name}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`text-[0.9rem] ${selected ? "text-accent" : "text-muted-foreground"}`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id="board-committee-panel"
              aria-labelledby={`board-committee-tab-${current.key}`}
              tabIndex={0}
              className="border border-[rgba(9,29,42,0.16)] bg-card p-[clamp(22px,3.2vw,40px)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
            >
              <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-primary uppercase">
                {current.reports}
              </p>
              <h3 className="mt-3 font-sans text-[clamp(1.4rem,2.8vw,2.3rem)] leading-[1.02] font-extrabold uppercase [font-stretch:114%]">
                {current.name}
              </h3>
              <p className="mt-[clamp(14px,1.8vw,20px)] max-w-[56ch] text-[0.98rem] leading-[1.6] text-muted-foreground">
                {current.copy}
              </p>
              <dl className="mt-[clamp(20px,2.6vw,30px)] grid grid-cols-2 gap-px bg-[rgba(9,29,42,0.16)] max-[680px]:grid-cols-1">
                {current.focus.map((item) => (
                  <div key={item} className="bg-card p-[clamp(14px,1.8vw,20px)]">
                    <dt className="text-[0.85rem] leading-[1.5] text-foreground">
                      {item}
                    </dt>
                  </div>
                ))}
              </dl>
              <p className="mt-[clamp(18px,2.4vw,26px)] border-t border-[rgba(9,29,42,0.16)] pt-[clamp(14px,1.8vw,20px)] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
                PLACEHOLDER — committee formation, chairs and reporting lines are
                published only once formally constituted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
