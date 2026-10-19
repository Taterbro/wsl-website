"use client";

import { useRef } from "react";

export interface Sector {
  no: string;
  title: string;
  description: string;
  tag: string;
  background: string;
}

interface BusinessRailProps {
  title: React.ReactNode;
  lede: string;
  sectors: Sector[];
}

function RailArrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d={direction === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export default function BusinessRail({
  title,
  lede,
  sectors,
}: BusinessRailProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "prev" | "next") => {
    const rail = railRef.current;
    if (!rail) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    rail.scrollBy({
      left:
        (direction === "next" ? 1 : -1) * Math.min(rail.clientWidth * 0.8, 360),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <>
      <div className="mx-auto mb-[clamp(28px,4vw,46px)] flex max-w-[1440px] flex-wrap items-end justify-between gap-6 px-[clamp(20px,5vw,72px)]">
        <div>{title}</div>
        <p className="max-w-[44ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal font-normal text-muted/72">
          {lede}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Scroll sectors left"
            onClick={() => scrollBy("prev")}
            className="grid h-[46px] w-[46px] place-items-center rounded-[2px] border border-accent/20 bg-transparent text-muted transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:bg-accent hover:text-sidebar"
          >
            <RailArrow direction="prev" />
          </button>
          <button
            type="button"
            aria-label="Scroll sectors right"
            onClick={() => scrollBy("next")}
            className="grid h-[46px] w-[46px] place-items-center rounded-[2px] border border-accent/20 bg-transparent text-muted transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:bg-accent hover:text-sidebar"
          >
            <RailArrow direction="next" />
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-0">
        <div
          ref={railRef}
          tabIndex={0}
          aria-label="Scrollable list of business platforms"
          className="-mx-[clamp(20px,5vw,72px)] flex snap-x snap-mandatory gap-px overflow-x-auto px-[clamp(20px,5vw,72px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sectors.map((sector) => (
            <article
              key={sector.no}
              tabIndex={0}
              className="group relative flex min-h-[clamp(360px,44vw,470px)] shrink-0 basis-[clamp(250px,26vw,330px)] snap-start flex-col justify-between overflow-hidden border-t-2 border-t-accent/20 bg-sidebar-accent px-6 pt-[26px] pb-6 text-muted transition-colors duration-(--transition-slower) ease-(--ease-standard) hover:bg-primary"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-[1.04] opacity-50 transition-[opacity,transform] duration-(--transition-slower) ease-(--ease-standard) group-hover:scale-100 group-hover:opacity-[0.72]"
                style={{ background: sector.background }}
              />
              <span className="relative font-sans text-[0.9rem] font-extrabold tracking-[0.14em] text-accent [font-stretch:112%]">
                {sector.no}
              </span>
              <div className="relative">
                <h3 className="mb-3 max-w-[14ch] font-sans text-[clamp(1.15rem,1.6vw,1.45rem)] leading-[1.06] font-bold tracking-[0.01em] uppercase [font-stretch:112%]">
                  {sector.title}
                </h3>
                <p className="max-w-[30ch] text-[0.9rem] leading-normal text-muted/78">
                  {sector.description}
                </p>
                <span className="mt-5 inline-flex translate-y-1.5 items-center gap-2 text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-accent opacity-0 transition-[opacity,transform] duration-(--transition-normal) ease-(--ease-standard) group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100">
                  {sector.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
