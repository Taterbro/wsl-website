"use client";

import { useEffect, useRef, useState } from "react";
import type { RenewableEnergyProofStrip } from "@/lib/cms/generated";

const FALLBACK_HEADING = "A system,\nnot a kit.";

// PLACEHOLDER — indicative scope figures for layout only. Replace with
// verified data before publication.
const FALLBACK_STATS: { value: number; suffix: string; label: string }[] = [
  { value: 6, suffix: "", label: "Capability areas" },
  { value: 4, suffix: "", label: "Delivery models — EPC, IPP, JV, O&M" },
  { value: 24, suffix: "/7", label: "Remote monitoring target" },
  { value: 2, suffix: "", label: "End markets — industry & communities" },
];

type Stat = { value: number; suffix: string; label: string };

function toStat(
  stat: RenewableEnergyProofStrip["stats"][number],
  index: number
): Stat {
  const fallback = FALLBACK_STATS[index];
  const parsed = Number(stat.value);
  const hasValue = stat.value.trim() !== "" && Number.isFinite(parsed);

  return {
    value: hasValue ? parsed : (fallback?.value ?? 0),
    suffix: stat.suffix || fallback?.suffix || "",
    label: stat.label || fallback?.label || "",
  };
}

function getReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ProofStrip({
  data,
}: {
  data: RenewableEnergyProofStrip;
}) {
  const stats = data.stats.length ? data.stats.map(toStat) : FALLBACK_STATS;
  const heading = data.heading || FALLBACK_HEADING;
  const headingLines = heading.split("\n");
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
      aria-labelledby="energy-proof-title"
      className="border-y border-accent/20 bg-sidebar text-muted"
    >
      <div
        ref={ref}
        className="mx-auto grid w-full max-w-[1440px] gap-[clamp(26px,4vw,56px)] px-[clamp(20px,5vw,72px)] py-[clamp(46px,6vw,82px)] lg:grid-cols-[0.72fr_1.28fr] lg:items-end"
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
            id="energy-proof-title"
            className="mt-3 font-sans text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.04] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
          >
            {headingLines.length === 2 ? (
              <>
                {headingLines[0]}
                <br />
                {headingLines[1]}
              </>
            ) : (
              heading
            )}
          </h2>
          <p className="mt-4 max-w-[46ch] text-[0.72rem] leading-[1.6] text-muted/50">
            PLACEHOLDER — indicative scope figures for layout only. These are
            not a delivery record and must be replaced with verified data before
            publication.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-px border border-accent/20 bg-accent/20">
          {stats.map((stat) => {
            const value = Math.round(stat.value * progress);
            return (
              <div
                key={stat.label}
                className="bg-sidebar px-[clamp(16px,2.6vw,30px)] py-[clamp(18px,2.4vw,28px)]"
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
