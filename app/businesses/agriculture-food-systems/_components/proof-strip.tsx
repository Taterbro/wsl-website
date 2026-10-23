"use client";

import { useEffect, useRef, useState } from "react";

// PLACEHOLDER — indicative scope figures for layout only. Replace with
// verified data before publication.
const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 6, suffix: "", label: "Capability areas" },
  { value: 4, suffix: "", label: "Chain stages — farm, processing, cold chain, market" },
  { value: 24, suffix: "/7", label: "Cold-chain monitoring target" },
  { value: 3, suffix: "", label: "End markets — community, commercial, institutional" },
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
      aria-labelledby="agriculture-proof-title"
      className="bg-primary text-primary-foreground"
    >
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(46px,6vw,82px)]"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <div>
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              03 — Indicative scope
            </p>
            <h2
              id="agriculture-proof-title"
              className="mt-3 font-sans text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.04] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
            >
              The chain in numbers.
            </h2>
          </div>
          <p className="max-w-[52ch] text-[0.72rem] leading-[1.6] text-primary-foreground/60">
            PLACEHOLDER — indicative scope figures for layout only. These are
            not a delivery record and must be replaced with verified data before
            publication.
          </p>
        </div>

        <dl className="mt-[clamp(24px,3.4vw,40px)] grid grid-cols-4 gap-px border border-primary-foreground/20 bg-primary-foreground/20 max-[900px]:grid-cols-2">
          {STATS.map((stat) => {
            const value = Math.round(stat.value * progress);
            return (
              <div
                key={stat.label}
                className="bg-primary px-[clamp(16px,2.6vw,30px)] py-[clamp(18px,2.4vw,28px)]"
              >
                <dt className="text-[0.66rem] leading-[1.45] font-semibold tracking-[0.08em] text-primary-foreground/60 uppercase">
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
