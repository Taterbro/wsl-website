"use client";

import { useEffect, useRef, useState } from "react";

// PLACEHOLDER — indicative scope figures for layout only. Replace with
// verified data before publication.
const STATS: { value: number; label: string }[] = [
  { value: 6, label: "Capability areas" },
  { value: 4, label: "Delivery models — EPC, JV, PPP, O&M" },
  { value: 3, label: "Localisation stages" },
  { value: 1, label: "Industrial platform" },
];

function getReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ProofStrip() {
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
      { threshold: 0.35 }
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
    const duration = 1100;
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
      aria-labelledby="industrial-proof-title"
      className="border-y border-accent/20 bg-sidebar text-muted"
    >
      <div
        ref={ref}
        className="mx-auto grid w-full max-w-[1440px] gap-[clamp(28px,4vw,56px)] px-[clamp(20px,5vw,72px)] py-[clamp(52px,7vw,92px)] lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
      >
        <div>
          <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
            <span
              aria-hidden="true"
              className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
            />
            03 — Indicative scope
          </p>
          <h2
            id="industrial-proof-title"
            className="mt-4 font-sans text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Built to
            <br />
            be repeated.
          </h2>
          <p className="mt-4 max-w-[40ch] text-[0.74rem] leading-[1.6] text-muted/60">
            PLACEHOLDER — indicative scope figures for layout only. These are
            not a delivery record and must be replaced with verified data before
            publication.
          </p>
        </div>

        <dl className="grid gap-px border border-accent/20 bg-accent/20 sm:grid-cols-2">
          {STATS.map((stat) => {
            const value = String(Math.round(stat.value * progress)).padStart(
              2,
              "0"
            );
            return (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-5 bg-sidebar px-[clamp(16px,2.4vw,28px)] py-[clamp(20px,2.6vw,32px)]"
              >
                <dt className="max-w-[22ch] text-[0.62rem] leading-[1.45] font-semibold tracking-[0.08em] text-muted/65 uppercase">
                  {stat.label}
                </dt>
                <dd className="shrink-0 font-sans text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[0.85] font-extrabold tracking-[-0.03em] text-accent tabular-nums [font-stretch:120%]">
                  <span aria-hidden="true">{value}</span>
                  <span className="sr-only">
                    {String(stat.value).padStart(2, "0")}
                  </span>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
