"use client";

import { useEffect, useRef, useState } from "react";
import type { TechnologyDigitalInfrastructureProofStrip } from "@/lib/cms/generated";

const FALLBACK_HEADING = "A live layer\non physical assets.";

// PLACEHOLDER — indicative scope figures for layout only. Replace with
// verified data before publication.
const FALLBACK_STATS: { value: number; suffix: string; label: string }[] = [
  { value: 7, suffix: "", label: "Capability layers" },
  {
    value: 4,
    suffix: "",
    label: "Deployment models — advisory, build, integrate, operate",
  },
  { value: 24, suffix: "/7", label: "Monitoring target" },
  { value: 1, suffix: "", label: "Operating platform — WSWIS" },
];

type Stat = { value: number; suffix: string; label: string };

function toStat(
  stat: TechnologyDigitalInfrastructureProofStrip["stats"][number],
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
  data: TechnologyDigitalInfrastructureProofStrip;
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
      aria-labelledby="technology-proof-title"
      className="border-y border-foreground/15 bg-secondary"
    >
      <div
        ref={ref}
        className="mx-auto grid w-full max-w-[1440px] items-center gap-[clamp(26px,4vw,56px)] px-[clamp(20px,5vw,72px)] py-[clamp(44px,5.6vw,76px)] lg:grid-cols-[0.62fr_1.38fr]"
      >
        <div>
          <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
            <span
              aria-hidden="true"
              className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
            />
            03 — Indicative scope
          </p>
          <h2
            id="technology-proof-title"
            className="mt-3 max-w-[16ch] font-sans text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.04] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
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
          <p className="mt-4 max-w-[44ch] text-[0.72rem] leading-[1.6] text-muted-foreground">
            PLACEHOLDER — indicative scope figures for layout only. These are
            not a delivery record and must be replaced with verified data before
            publication.
          </p>
        </div>

        <dl className="grid grid-cols-4 gap-px border border-foreground/15 bg-foreground/15 max-[900px]:grid-cols-2">
          {stats.map((stat) => {
            const value = Math.round(stat.value * progress);
            return (
              <div
                key={stat.label}
                className="bg-secondary px-[clamp(14px,2.2vw,26px)] py-[clamp(18px,2.4vw,28px)]"
              >
                <dt className="text-[0.66rem] leading-[1.45] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-3 flex items-baseline gap-2 font-sans text-[clamp(2rem,4.2vw,3.4rem)] leading-[0.9] font-extrabold tracking-[-0.02em] text-primary tabular-nums [font-stretch:118%]">
                  <span aria-hidden="true">
                    {String(value).padStart(2, "0")}
                    {stat.suffix}
                  </span>
                  <span className="sr-only">
                    {String(stat.value).padStart(2, "0")}
                    {stat.suffix}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mb-[0.4em] h-1.5 w-1.5 flex-none rounded-full bg-accent"
                  />
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
