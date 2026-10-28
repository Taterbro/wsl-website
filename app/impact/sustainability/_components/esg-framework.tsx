"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// PLACEHOLDER — framework structure, copy and evidence labels are illustrative
// until approved sustainability content is supplied.
interface Lens {
  id: string;
  code: string;
  name: string;
  statement: string;
  practices: string[];
  evidence: string;
  links: { label: string; href: string }[];
}

const LENSES: Lens[] = [
  {
    id: "environment",
    code: "E-01",
    name: "Environment",
    statement:
      "Resource use, emissions and climate risk are modelled at the asset level — not asserted at the group level.",
    practices: [
      "Climate and water-stress screening before capital is committed",
      "Energy, water and material intensity modelled at design",
      "Lower-emission generation and efficient process technology",
      "Operational performance tracked against the financing case",
    ],
    evidence: "Design model · metered output · annual review",
    links: [
      { label: "Climate & ESG Solutions", href: "/businesses/climate-esg-solutions" },
      { label: "Renewable Energy", href: "/businesses/renewable-energy" },
    ],
  },
  {
    id: "social",
    code: "S-02",
    name: "Social",
    statement:
      "Assets are judged by who they serve, how they are built and whether the people who operate them are equipped to keep them running.",
    practices: [
      "Labour, safety and community risk assessed at screening",
      "Local employment and skills transfer built into delivery",
      "Service access and affordability considered in design",
      "Grievance and incident reporting maintained through operation",
    ],
    evidence: "Risk register · site audits · incident reporting",
    links: [
      { label: "Development Partnerships", href: "/impact/development-partnerships" },
      { label: "Our Businesses", href: "/businesses" },
    ],
  },
  {
    id: "governance",
    code: "G-03",
    name: "Governance",
    statement:
      "A claim is only as good as the system behind it: a named owner, an auditable method and a stated reporting period.",
    practices: [
      "Investment committee review against agreed ESG criteria",
      "Contractor and partner obligations written into agreements",
      "Evidence retained for every published metric",
      "Corrections published when a figure changes",
    ],
    evidence: "Committee record · approved method · source owner",
    links: [
      { label: "Governance", href: "/about/governance" },
      { label: "Investor Relations", href: "/investments/investor-relations" },
    ],
  },
];

const LEDGER: string[] = [
  "Screened",
  "Designed",
  "Built",
  "Operated",
  "Reported",
];

export default function EsgFramework() {
  const [activeId, setActiveId] = useState(LENSES[0].id);
  const active = LENSES.find((lens) => lens.id === activeId) ?? LENSES[0];

  return (
    <section
      id="framework"
      aria-labelledby="framework-title"
      className="relative scroll-mt-[92px] overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[24vw] -right-[18vw] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.16),transparent_62%)] blur-[70px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-col gap-[clamp(20px,3vw,40px)] lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[52ch]">
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              02 — The framework
            </p>
            <h2
              id="framework-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Three lenses.
              <br />
              One ledger.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.6] text-muted/75">
              Environmental, social and governance criteria run through the same
              investment and asset decisions. Select a lens to see what it
              changes.
            </p>
          </div>

          <a
            href="/businesses/climate-esg-solutions"
            className="inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent lg:self-auto"
          >
            Climate &amp; ESG solutions
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-[clamp(30px,4.5vw,54px)] grid gap-[clamp(16px,2.4vw,28px)] xl:grid-cols-[0.78fr_1.22fr]">
          <div
            role="group"
            aria-label="Sustainability lenses"
            className="flex flex-col gap-px border border-accent/25 bg-accent/25"
          >
            {LENSES.map((lens, index) => {
              const isActive = lens.id === active.id;
              return (
                <button
                  key={lens.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="framework-brief"
                  onClick={() => setActiveId(lens.id)}
                  className={cn(
                    "group flex flex-1 items-start gap-4 px-[clamp(16px,2.4vw,26px)] py-[clamp(18px,2.6vw,28px)] text-left transition-colors duration-(--transition-normal) ease-(--ease-standard) focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar focus-visible:outline-none",
                    isActive
                      ? "bg-accent text-sidebar"
                      : "bg-sidebar text-muted hover:bg-sidebar-accent"
                  )}
                >
                  <span
                    className={cn(
                      "pt-1 font-sans text-[0.7rem] font-extrabold tracking-[0.16em] tabular-nums [font-stretch:112%]",
                      isActive ? "text-sidebar/70" : "text-accent"
                    )}
                  >
                    0{index + 1}
                  </span>
                  <span className="flex-1">
                    <span className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-sans text-[clamp(1.15rem,2vw,1.65rem)] leading-[1.05] font-extrabold uppercase [font-stretch:112%]">
                        {lens.name}
                      </span>
                      <span
                        className={cn(
                          "text-[0.58rem] font-semibold tracking-[0.14em] uppercase",
                          isActive ? "text-sidebar/65" : "text-muted/50"
                        )}
                      >
                        {lens.code}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "mt-2 block max-w-[40ch] text-[0.78rem] leading-[1.5]",
                        isActive ? "text-sidebar/75" : "text-muted/60"
                      )}
                    >
                      {lens.statement}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-1 text-[0.95rem] transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none",
                      isActive
                        ? "translate-x-0 text-sidebar"
                        : "text-muted/40 group-hover:translate-x-1"
                    )}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="framework-brief"
            aria-live="polite"
            className="border border-accent/25 bg-sidebar-accent p-[clamp(20px,3vw,40px)]"
          >
            <div
              key={active.id}
              className="animate-slide-in motion-reduce:animate-none"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-accent/25 pb-4">
                <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  Lens brief — {active.code}
                </p>
                <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-muted/55 uppercase">
                  Evidence standard
                </p>
              </div>

              <h3 className="mt-[clamp(16px,2.2vw,24px)] max-w-[20ch] font-sans text-[clamp(1.6rem,3vw,2.5rem)] leading-[0.98] font-extrabold uppercase [font-stretch:114%]">
                {active.name}
              </h3>
              <p className="mt-4 max-w-[56ch] text-[0.98rem] leading-[1.6] text-muted/75">
                {active.statement}
              </p>

              <ul className="mt-[clamp(20px,2.8vw,30px)] grid list-none gap-px border border-accent/20 bg-accent/20 p-0 sm:grid-cols-2">
                {active.practices.map((practice) => (
                  <li
                    key={practice}
                    className="flex gap-3 bg-sidebar-accent px-[clamp(14px,2vw,20px)] py-[clamp(14px,1.8vw,18px)] text-[0.82rem] leading-[1.5] text-muted/75"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 flex-none rotate-45 bg-accent"
                    />
                    {practice}
                  </li>
                ))}
              </ul>

              <div className="mt-[clamp(20px,2.8vw,30px)] flex flex-col gap-4 border-t border-accent/20 pt-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-muted/50 uppercase">
                    Required evidence
                  </p>
                  <p className="mt-1.5 text-[0.78rem] leading-[1.5] text-muted/80">
                    {active.evidence}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {active.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 border-b border-accent/45 pb-0.5 text-[0.68rem] font-semibold tracking-[0.08em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ol
          aria-label="Asset lifecycle"
          className="mt-[clamp(20px,3vw,34px)] grid list-none grid-cols-2 gap-px border border-accent/20 bg-accent/20 p-0 sm:grid-cols-3 lg:grid-cols-5"
        >
          {LEDGER.map((stage, index) => (
            <li
              key={stage}
              className="flex items-center justify-between gap-3 bg-sidebar px-[clamp(12px,1.8vw,20px)] py-[clamp(11px,1.5vw,16px)]"
            >
              <span className="text-[0.62rem] font-semibold tracking-[0.12em] text-muted/55 uppercase">
                {stage}
              </span>
              <span className="font-sans text-[0.62rem] font-extrabold text-accent tabular-nums [font-stretch:112%]">
                0{index + 1}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-[78ch] text-[0.6rem] leading-[1.55] text-muted/55">
          PLACEHOLDER — the lens structure, practice statements and evidence
          labels are illustrative until approved sustainability content and
          reporting standards are supplied.
        </p>
      </div>
    </section>
  );
}
