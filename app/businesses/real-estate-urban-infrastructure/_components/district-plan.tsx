"use client";

import { useState } from "react";
import { ZONES } from "../_data/urban";

const ZONE_STYLE = {
  base: "fill-[#dde6e9] stroke-[#b3c4cb] stroke-[1.5]",
  active: "fill-[#d7eef3] stroke-[#0f4c68] stroke-[2.5]",
  muted: "fill-[#e6ecee] stroke-[#cbd7db] stroke-[1.5]",
};

const LABEL = "fill-[#3f5b68] text-[15px] font-semibold uppercase";

export default function DistrictPlan() {
  const [active, setActive] = useState<string | null>(null);
  const current = ZONES.find((zone) => zone.id === active) ?? null;

  const zoneClass = (id: string) => {
    if (active === id) return ZONE_STYLE.active;
    if (active) return ZONE_STYLE.muted;
    return ZONE_STYLE.base;
  };

  return (
    <section
      id="district-plan"
      aria-labelledby="district-plan-title"
      className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
          <div className="max-w-[54ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              02 — The district
            </p>
            <h2
              id="district-plan-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Planned as one place.
            </h2>
          </div>
          <p className="max-w-[40ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted/75">
            Housing, commerce, public space and infrastructure resolve against
            each other. Select a zone to see what it carries.
          </p>
        </div>

        <div className="mt-[clamp(28px,4vw,52px)] grid grid-cols-[1.32fr_0.68fr] items-start gap-[clamp(24px,3.6vw,56px)] max-[980px]:grid-cols-1">
          <div className="border border-accent/20 bg-[#eef3f5] p-[clamp(10px,1.4vw,18px)]">
            <svg
              viewBox="0 0 1200 720"
              role="img"
              aria-label="Schematic masterplan of a mixed-use district showing housing, commercial, civic, green, mobility and utility zones."
              className="h-auto w-full"
            >
              <rect width="1200" height="720" fill="#eef3f5" />

              <g aria-hidden="true">
                {/* mobility */}
                <g className={zoneClass("mobility")} fill="none" stroke="#b3c4cb">
                  <path d="M0 380 H1200" strokeWidth="30" stroke="#f7fafb" />
                  <path d="M430 0 V720" strokeWidth="30" stroke="#f7fafb" />
                  <path d="M820 0 V720" strokeWidth="30" stroke="#f7fafb" />
                </g>
                <g stroke="#9fb3bb" strokeWidth="2" strokeDasharray="12 14" fill="none">
                  <path d="M0 380 H1200" />
                  <path d="M430 0 V720" />
                  <path d="M820 0 V720" />
                </g>

                {/* housing */}
                <g className={zoneClass("housing")}>
                  <rect x="70" y="80" width="150" height="100" />
                  <rect x="240" y="80" width="110" height="100" />
                  <rect x="70" y="220" width="110" height="100" />
                  <rect x="200" y="220" width="150" height="100" />
                </g>

                {/* commercial */}
                <g className={zoneClass("commercial")}>
                  <rect x="890" y="80" width="240" height="110" />
                  <rect x="890" y="220" width="240" height="100" />
                </g>

                {/* civic */}
                <g className={zoneClass("civic")}>
                  <rect x="480" y="80" width="140" height="100" />
                  <rect x="650" y="80" width="130" height="100" />
                </g>

                {/* green */}
                <g className={zoneClass("green")}>
                  <rect x="470" y="430" width="320" height="250" rx="26" />
                  <circle cx="545" cy="510" r="26" />
                  <circle cx="650" cy="565" r="20" />
                  <circle cx="725" cy="500" r="16" />
                </g>

                {/* systems */}
                <g className={zoneClass("systems")}>
                  <rect x="590" y="240" width="80" height="80" />
                  <rect x="250" y="450" width="70" height="70" />
                  <rect x="900" y="470" width="70" height="70" />
                </g>

                <g className={LABEL}>
                  <text x="80" y="60">
                    Housing
                  </text>
                  <text x="900" y="60">
                    Commercial
                  </text>
                  <text x="480" y="60">
                    Civic
                  </text>
                  <text x="470" y="710">
                    Green &amp; public realm
                  </text>
                  <text x="20" y="365">
                    Mobility
                  </text>
                  <text x="590" y="225">
                    Utilities
                  </text>
                </g>
              </g>
            </svg>
          </div>

          <div>
            <ul className="m-0 list-none border-t border-accent/20 p-0">
              {ZONES.map((zone) => {
                const selected = zone.id === active;
                return (
                  <li key={zone.id} className="border-b border-accent/20">
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() =>
                        setActive(selected ? null : zone.id)
                      }
                      className={`group flex w-full items-center gap-[clamp(10px,1.4vw,16px)] py-[clamp(12px,1.6vw,18px)] text-left transition-colors duration-(--transition-fast) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                        selected ? "text-accent" : "text-muted/80 hover:text-accent"
                      }`}
                    >
                      <span className="font-sans text-[0.62rem] font-extrabold tracking-[0.16em] [font-stretch:114%]">
                        {zone.no}
                      </span>
                      <span className="font-sans text-[clamp(0.88rem,1.2vw,1rem)] leading-[1.25] font-bold uppercase [font-stretch:112%]">
                        {zone.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`ml-auto text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none ${
                          selected ? "opacity-100" : "-translate-x-1 opacity-0"
                        }`}
                      >
                        ●
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div
              aria-live="polite"
              className="mt-[clamp(18px,2.4vw,26px)] border border-accent/25 p-[clamp(14px,2vw,20px)]"
            >
              {current ? (
                <>
                  <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
                    {current.title}
                  </p>
                  <p className="mt-3 max-w-[42ch] text-[clamp(0.92rem,1.15vw,1rem)] leading-[1.6] text-muted/85">
                    {current.copy}
                  </p>
                </>
              ) : (
                <p className="text-[0.8rem] leading-[1.6] text-muted/60">
                  Select a zone on the plan to read what it carries.
                </p>
              )}
            </div>

            <p className="mt-3 text-[0.7rem] leading-[1.5] text-muted/50">
              PLACEHOLDER — schematic masterplan. Zone arrangement must match
              the approved plan before publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
