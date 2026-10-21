"use client";

import { useState } from "react";
import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./executive-shared";
import { COMPANY_LEADS } from "../_data/executive";

export default function ExecutiveCompanies() {
  const [active, setActive] = useState(0);
  const current = COMPANY_LEADS[active];

  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="executive-companies-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="max-w-[54ch]">
            <Eyebrow>03 — Company leadership</Eyebrow>
            <h2
              id="executive-companies-title"
              className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Each company,
              <br />
              a defined
              <br />
              mandate.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              Operating companies carry part of the group&apos;s mandate. Each is
              led by a management team working to the same standard and reporting
              into the group executive.
            </p>
          </div>

          <div className="mt-[clamp(28px,4vw,48px)] flex flex-wrap gap-2">
            {COMPANY_LEADS.map((company, i) => {
              const selected = i === active;
              return (
                <button
                  key={company.key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(i)}
                  className={`rounded-[2px] border px-[clamp(14px,2vw,22px)] py-[clamp(10px,1.4vw,14px)] text-left font-sans text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                    selected
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-[rgba(9,29,42,0.2)] bg-transparent hover:bg-card"
                  }`}
                >
                  {company.domain}
                </button>
              );
            })}
          </div>

          <div
            aria-live="polite"
            className="mt-[clamp(20px,2.8vw,32px)] border border-[rgba(9,29,42,0.16)] bg-card p-[clamp(22px,3.2vw,42px)]"
          >
            <span className="text-[0.66rem] font-semibold tracking-[0.14em] text-primary uppercase">
              {current.domain}
            </span>
            <h3 className="mt-3 font-sans text-[clamp(1.4rem,2.8vw,2.3rem)] leading-[1.02] font-extrabold uppercase [font-stretch:114%]">
              {current.name}
            </h3>
            <div className="mt-[clamp(18px,2.4vw,28px)] grid grid-cols-3 gap-px bg-[rgba(9,29,42,0.16)] max-[680px]:grid-cols-1">
              {current.leads.map((lead) => (
                <div
                  key={lead}
                  className="bg-card p-[clamp(14px,1.8vw,22px)]"
                >
                  <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Executive lead
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-[1.5] text-foreground">
                    {lead}
                  </p>
                  <p className="mt-2 text-[0.72rem] text-muted-foreground/75">
                    To be appointed
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-[clamp(16px,2vw,24px)] border-t border-[rgba(9,29,42,0.16)] pt-[clamp(14px,1.8vw,20px)] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
              PLACEHOLDER — company mandates mirror the group structure page;
              executive leads are unnamed until confirmed and approved.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
