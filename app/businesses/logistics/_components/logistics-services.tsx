"use client";

import { useState } from "react";
import { SERVICES } from "../_data/logistics";

const FILTERS = [
  { key: "all", label: "All" },
  ...SERVICES.map((service) => ({ key: service.key, label: service.title })),
];

export default function LogisticsServices() {
  const [active, setActive] = useState("all");
  const visible = SERVICES.filter(
    (service) => active === "all" || service.key === active
  );

  return (
    <section
      id="logistics-services"
      aria-labelledby="logistics-services-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
          <div className="max-w-[50ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              03 — Services
            </p>
            <h2
              id="logistics-services-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Five lines,
              <br />
              one operator.
            </h2>
          </div>
          <p className="max-w-[38ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted/75">
            Most programmes combine more than one. Filter to the line you need.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter logistics services"
          className="mt-[clamp(24px,3.4vw,44px)] flex flex-wrap gap-2"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              aria-pressed={active === filter.key}
              onClick={() => setActive(filter.key)}
              className={`cursor-pointer rounded-[2px] border px-4 py-[9px] text-[0.76rem] font-semibold tracking-[0.05em] uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                active === filter.key
                  ? "border-accent bg-accent text-sidebar"
                  : "border-accent/25 bg-transparent text-muted/75 hover:border-accent hover:text-accent"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="mt-4 text-[0.72rem] tracking-[0.1em] text-muted/50 uppercase">
          Showing {visible.length} of {SERVICES.length} services
        </p>

        <ul className="mt-[clamp(18px,2.6vw,30px)] m-0 grid list-none grid-cols-1 gap-px bg-accent/20 p-0 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((service) => (
            <li key={service.key} className="bg-sidebar p-[clamp(18px,2.4vw,28px)]">
              <h3 className="font-sans text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.2] font-extrabold uppercase [font-stretch:114%]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-[40ch] text-[0.92rem] leading-[1.6] text-muted/70">
                {service.copy}
              </p>
              <ul className="mt-[clamp(14px,1.8vw,20px)] flex list-none flex-col gap-2 p-0">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.82rem] leading-[1.45] text-muted/85"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-[6px] w-[6px] shrink-0 bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-[clamp(14px,1.8vw,20px)] text-[0.7rem] leading-[1.55] text-muted/50">
          PLACEHOLDER — service lines and delivery items are indicative and must
          be confirmed against the approved capability list.
        </p>
      </div>
    </section>
  );
}
