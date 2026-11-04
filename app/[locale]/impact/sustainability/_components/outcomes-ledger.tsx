"use client";

import { useEffect, useRef, useState } from "react";
import { IMPACT_METRICS } from "@/lib/impact";

const numberFormat = new Intl.NumberFormat("en-US");

function getReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function OutcomesLedger() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduceMotionRef = useRef(getReducedMotion());

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (reduceMotionRef.current) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section
      aria-labelledby="outcomes-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]"
      >
        <div className="flex flex-col gap-[clamp(18px,2.6vw,34px)] lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[52ch]">
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              03 — Measured outcomes
            </p>
            <h2
              id="outcomes-title"
              className="mt-4 font-sans text-[clamp(2rem,4.8vw,4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Outcomes, only
              <br />
              when evidenced.
            </h2>
          </div>

          <p className="max-w-[42ch] text-[0.76rem] leading-[1.6] text-foreground/60 lg:text-right">
            Each figure must carry a method, a reporting period and a named
            owner. No verified figure has been released for publication yet.
          </p>
        </div>

        <div className="mt-[clamp(28px,4vw,46px)] border-t border-foreground/15">
          {IMPACT_METRICS.map((metric, index) => {
            const displayValue = numberFormat.format(
              Math.round(metric.value * progress)
            );
            return (
              <div
                key={metric.id}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-x-[clamp(14px,2.4vw,32px)] gap-y-3 border-b border-foreground/15 py-[clamp(18px,2.6vw,30px)] md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)_auto]"
              >
                <div className="order-2 md:order-1">
                  <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/50 uppercase tabular-nums">
                    M-0{index + 1}
                  </p>
                  <h3 className="mt-1.5 font-sans text-[clamp(0.95rem,1.5vw,1.2rem)] leading-[1.15] font-extrabold uppercase [font-stretch:108%]">
                    {metric.label}
                  </h3>
                </div>

                <dl className="order-3 grid grid-cols-2 gap-x-[clamp(12px,2vw,26px)] gap-y-2 md:order-2">
                  <div>
                    <dt className="text-[0.52rem] font-semibold tracking-[0.12em] text-foreground/45 uppercase">
                      Period
                    </dt>
                    <dd className="mt-1 text-[0.7rem] leading-[1.4] text-foreground/70">
                      {metric.period}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.52rem] font-semibold tracking-[0.12em] text-foreground/45 uppercase">
                      Method
                    </dt>
                    <dd className="mt-1 text-[0.7rem] leading-[1.4] text-foreground/70">
                      {metric.methodology}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.52rem] font-semibold tracking-[0.12em] text-foreground/45 uppercase">
                      Status
                    </dt>
                    <dd className="mt-1">
                      <span className="border border-primary/30 px-1.5 py-0.5 text-[0.54rem] font-semibold tracking-[0.1em] text-primary uppercase">
                        {metric.kind}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.52rem] font-semibold tracking-[0.12em] text-foreground/45 uppercase">
                      Publication
                    </dt>
                    <dd className="mt-1 text-[0.54rem] font-semibold tracking-[0.1em] text-chart-4 uppercase">
                      Placeholder
                    </dd>
                  </div>
                </dl>

                <div className="order-1 text-right md:order-3 md:min-w-[clamp(140px,16vw,230px)]">
                  <p className="font-sans text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[0.82] font-extrabold tracking-[-0.03em] text-primary tabular-nums [font-stretch:118%]">
                    <span aria-hidden="true">{displayValue}</span>
                    <span className="sr-only">
                      {numberFormat.format(metric.value)}
                    </span>
                  </p>
                  <p className="mt-2 text-[0.56rem] font-semibold tracking-[0.12em] text-foreground/55 uppercase">
                    {metric.unit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-[78ch] text-[0.66rem] leading-[1.55] text-foreground/60">
            PLACEHOLDER — these values are illustrative for layout only. They
            are not a delivery record, an audited result or a forecast. Verified
            data will be published only with an approved method, period and
            source owner.
          </p>
          <a
            href="/impact/development-partnerships"
            className="inline-flex shrink-0 items-center gap-2 border-b border-primary pb-1 text-[0.66rem] font-semibold tracking-[0.08em] text-foreground uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
          >
            How outcomes are reported
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
