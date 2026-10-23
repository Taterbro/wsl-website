"use client";

import { useEffect, useRef, useState } from "react";

// PLACEHOLDER — indicative scope figures for layout only. Replace with
// verified data before publication.
const STATS: { value: number; label: string }[] = [
  { value: 5, label: "Capability nodes" },
  { value: 4, label: "Corridor layers — transport, storage, flow, control" },
  { value: 3, label: "Node types — core, interface, digital" },
  { value: 1, label: "Digital control layer" },
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
      aria-labelledby="logistics-proof-title"
      className="border-y border-foreground/10 bg-muted"
    >
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(48px,6.5vw,86px)]"
      >
        <div className="flex flex-col gap-[clamp(18px,2.6vw,32px)] lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary"
              />
              03 — Network index
            </p>
            <h2
              id="logistics-proof-title"
              className="mt-4 max-w-[15ch] font-sans text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
            >
              A corridor is
              <br />
              a system.
            </h2>
          </div>

          <p className="max-w-[44ch] text-[0.74rem] leading-[1.6] text-foreground/60 lg:text-right">
            PLACEHOLDER — indicative scope figures for layout only. These are
            not a delivery record and must be replaced with verified data before
            publication.
          </p>
        </div>

        <dl className="mt-[clamp(26px,4vw,44px)] grid grid-cols-2 gap-px border border-foreground/15 bg-foreground/15 sm:grid-cols-4">
          {STATS.map((stat) => {
            const displayValue = String(
              Math.round(stat.value * progress)
            ).padStart(2, "0");
            return (
              <div
                key={stat.label}
                className="flex flex-col bg-muted px-[clamp(14px,2vw,24px)] py-[clamp(18px,2.4vw,28px)]"
              >
                <dt className="min-h-[3.2em] max-w-[22ch] text-[0.6rem] leading-[1.45] font-semibold tracking-[0.08em] text-foreground/60 uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-auto pt-3 font-sans text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[0.85] font-extrabold tracking-[-0.03em] text-primary tabular-nums [font-stretch:120%]">
                  <span aria-hidden="true">{displayValue}</span>
                  <span className="sr-only">
                    {String(stat.value).padStart(2, "0")}
                  </span>
                </dd>
                <div
                  aria-hidden="true"
                  className="mt-4 h-1 w-full bg-foreground/10"
                >
                  <div
                    className="h-full bg-primary transition-[width] duration-(--transition-slow) ease-(--ease-standard)"
                    style={{ width: `${(stat.value / 5) * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
