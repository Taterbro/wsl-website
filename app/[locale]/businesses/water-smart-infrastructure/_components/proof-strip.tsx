"use client";

import { useEffect, useRef, useState } from "react";

// PLACEHOLDER — indicative scope figures for layout only. Replace with
// verified data before publication.
const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 7, suffix: "", label: "Integrated capabilities" },
  { value: 4, suffix: "", label: "Delivery models — municipal, commercial, industrial, community" },
  { value: 24, suffix: "/7", label: "Remote monitoring target" },
  { value: 1, suffix: "", label: "Platform — WSWIS" },
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
      aria-labelledby="proof-title"
      className="border-y border-accent/20 bg-sidebar text-muted"
    >
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(38px,5vw,62px)]"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
              03 — Indicative scope
            </p>
            <h2
              id="proof-title"
              className="mt-2 font-sans text-[clamp(1.05rem,1.6vw,1.35rem)] font-bold tracking-[0.02em] uppercase [font-stretch:112%]"
            >
              The system in numbers.
            </h2>
          </div>
          <p className="max-w-[52ch] text-[0.7rem] leading-[1.55] text-muted/50">
            PLACEHOLDER — indicative scope figures for layout only. These are
            not a delivery record and must be replaced with verified data before
            publication.
          </p>
        </div>

        <dl className="mt-[clamp(24px,3.4vw,40px)] grid grid-cols-4 gap-px bg-accent/20 max-[900px]:grid-cols-2">
          {STATS.map((stat) => {
            const value = Math.round(stat.value * progress);
            return (
              <div
                key={stat.label}
                className="bg-sidebar px-[clamp(16px,3vw,36px)] py-[clamp(18px,2.6vw,30px)]"
              >
                <dt className="text-[0.66rem] leading-[1.45] font-semibold tracking-[0.08em] text-muted/55 uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-3 font-sans text-[clamp(2rem,4.2vw,3.4rem)] leading-[0.9] font-extrabold tracking-[-0.02em] text-accent tabular-nums [font-stretch:118%]">
                  <span aria-hidden="true">
                    {String(value).padStart(2, "0")}
                    {stat.suffix}
                  </span>
                  <span className="sr-only">
                    {String(stat.value).padStart(2, "0")}
                    {stat.suffix}
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
