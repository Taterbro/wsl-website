"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CAPABILITIES } from "../_data/industry";

export default function IndustryCapabilities() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = CAPABILITIES[active];

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const last = CAPABILITIES.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    }

    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="industry-capabilities"
      aria-labelledby="industry-capabilities-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
          <div className="max-w-[58ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              02 — What we build
            </p>
            <h2
              id="industry-capabilities-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Four lines of capability.
            </h2>
          </div>
          <p className="max-w-[38ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted-foreground">
            Select a line to see what sits inside it — from design through
            commissioning to the people who run it.
          </p>
        </div>

        <div className="mt-[clamp(28px,4vw,52px)] grid grid-cols-[0.78fr_1.22fr] gap-[clamp(26px,4vw,64px)] max-[980px]:grid-cols-1">
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Industry capability lines"
            className="flex flex-col border-t border-[rgba(9,29,42,0.16)]"
          >
            {CAPABILITIES.map((capability, index) => {
              const selected = index === active;
              return (
                <button
                  key={capability.key}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  id={`industry-tab-${capability.key}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`industry-panel-${capability.key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`group flex items-center gap-[clamp(10px,1.4vw,16px)] border-b border-[rgba(9,29,42,0.16)] px-[clamp(6px,1vw,12px)] py-[clamp(14px,1.8vw,20px)] text-left transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                    selected ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span className="font-sans text-[0.64rem] font-extrabold tracking-[0.16em] [font-stretch:114%]">
                    {capability.no}
                  </span>
                  <span className="font-sans text-[clamp(0.95rem,1.35vw,1.15rem)] leading-[1.25] font-bold uppercase [font-stretch:112%]">
                    {capability.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`ml-auto text-primary transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none ${
                      selected ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id={`industry-panel-${current.key}`}
            role="tabpanel"
            aria-labelledby={`industry-tab-${current.key}`}
            tabIndex={0}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <div className="relative aspect-[16/9] overflow-hidden border border-[rgba(9,29,42,0.16)]">
              <Image
                src={current.image}
                alt={current.alt}
                fill
                sizes="(max-width: 980px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <div className="mt-[clamp(18px,2.4vw,26px)]">
              <p className="font-sans text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.25] font-extrabold uppercase [font-stretch:114%]">
                {current.strap}
              </p>
              <p className="mt-[clamp(12px,1.6vw,16px)] max-w-[62ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted-foreground">
                {current.copy}
              </p>

              <ul className="mt-[clamp(18px,2.4vw,26px)] grid list-none grid-cols-1 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] p-0 sm:grid-cols-2">
                {current.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 bg-background px-[clamp(12px,1.6vw,18px)] py-[clamp(10px,1.4vw,14px)] text-[0.82rem] font-semibold tracking-[0.04em] uppercase"
                  >
                    <span
                      aria-hidden="true"
                      className="h-[6px] w-[6px] shrink-0 bg-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {current.link && (
                <a
                  href={current.link.href}
                  className="group mt-[clamp(18px,2.4vw,24px)] inline-flex items-center gap-2 font-sans text-[0.8rem] font-semibold tracking-[0.08em] text-primary uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {current.link.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
