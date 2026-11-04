"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Stage {
  no: string;
  name: string;
  copy: string;
  href: string;
  link: string;
}

const STAGES: Stage[] = [
  {
    no: "01",
    name: "Opportunity",
    copy: "Essential-need demand identified in market, with a sponsor, a site, a demand base and a credible route to delivery.",
    href: "/projects/development-pipeline",
    link: "Development pipeline",
  },
  {
    no: "02",
    name: "Investment",
    copy: "Capital structured to the asset it funds — equity, debt, joint venture, EPC, PPP or blended finance, matched to risk and return.",
    href: "/investments",
    link: "Investment strategy",
  },
  {
    no: "03",
    name: "Innovation",
    copy: "Technology engineered for the context it must survive: climate, grid, skills base, procurement and cost per unit served.",
    href: "/innovation",
    link: "Innovation and WSWIS",
  },
  {
    no: "04",
    name: "Infrastructure",
    copy: "Assets built to institutional standards of quality, governance, safety and maintainability, with operating costs modelled before construction.",
    href: "/businesses/water-smart-infrastructure",
    link: "Water & smart infrastructure",
  },
  {
    no: "05",
    name: "Enterprise",
    copy: "Operating companies with capable local management — not stalled capital projects, and not handover documents.",
    href: "/businesses",
    link: "Our businesses",
  },
  {
    no: "06",
    name: "Impact",
    copy: "Outcomes measured with a stated method, reporting period and named owner. Nothing is published as an achievement until it can be evidenced.",
    href: "/impact/sustainability",
    link: "Sustainability",
  },
  {
    no: "07",
    name: "Generational value",
    copy: "Long-horizon value that compounds for partners, communities and the next generation of African industrial and technical leadership.",
    href: "/about/our-story",
    link: "Our story",
  },
];

export default function VisionDelivery() {
  const [open, setOpen] = useState<string | null>(STAGES[0].no);

  return (
    <section
      id="vision-delivery"
      aria-labelledby="vision-delivery-title"
      className="relative scroll-mt-[92px] overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[26vw] -right-[22vw] h-[62vw] w-[62vw] rounded-full bg-[radial-gradient(circle,rgba(95,227,198,0.18),transparent_62%)] blur-[70px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="max-w-[52ch]">
          <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
            <span
              aria-hidden="true"
              className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
            />
            03 — How the vision is delivered
          </p>
          <h2
            id="vision-delivery-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            One logic.
            <br />
            Seven stages.
          </h2>
          <p className="mt-[clamp(20px,2.6vw,28px)] max-w-[56ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted/80">
            The same value-creation logic runs behind every platform, in every
            region. Open a stage to see what it covers.
          </p>
        </div>

        <div className="relative mt-[clamp(34px,5vw,62px)]">
          <span
            aria-hidden="true"
            className="absolute inset-y-[26px] left-[13px] w-px bg-linear-to-b from-accent/45 via-accent/15 to-transparent"
          />
          <ol className="list-none p-0">
            {STAGES.map((stage) => {
              const isOpen = open === stage.no;
              return (
                <li
                  key={stage.no}
                  className="border-t border-accent/20 last:border-b"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`vision-stage-${stage.no}`}
                      onClick={() => setOpen(isOpen ? null : stage.no)}
                      className="group grid w-full cursor-pointer grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-[clamp(14px,2.4vw,32px)] py-[clamp(15px,2vw,26px)] text-left"
                    >
                      <span className="relative z-10 grid h-[26px] w-[26px] flex-none place-items-center rounded-full border border-accent/50 bg-sidebar font-sans text-[0.62rem] font-extrabold text-accent transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:border-accent group-hover:bg-accent group-hover:text-sidebar">
                        {stage.no}
                      </span>
                      <span className="font-sans text-[clamp(1.1rem,2.2vw,1.85rem)] leading-[1.1] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:112%]">
                        {stage.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "text-[1.15rem] leading-none text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none",
                          isOpen && "rotate-45"
                        )}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`vision-stage-${stage.no}`}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-(--transition-slow) ease-(--ease-standard) motion-reduce:transition-none",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div
                        inert={isOpen ? undefined : true}
                        className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-[clamp(14px,2.4vw,32px)] pb-[clamp(18px,2.4vw,30px)]"
                      >
                        <span aria-hidden="true" className="w-[26px]" />
                        <p className="max-w-[62ch] text-[1rem] leading-[1.6] text-muted/80">
                          {stage.copy}
                        </p>
                        <a
                          href={stage.href}
                          className="text-[0.76rem] font-semibold tracking-[0.06em] whitespace-nowrap text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted"
                        >
                          {stage.link}
                          <span aria-hidden="true" className="ml-1.5">
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="mt-[clamp(26px,3.4vw,40px)] max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
          PLACEHOLDER — stage-level outcome metrics are not yet published. Each
          will be released with a stated method, a reporting period and a named
          owner; none are shown here in advance.
        </p>
      </div>
    </section>
  );
}
