"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { DEPLOYMENT } from "../_data/technology";

export default function TechSectorRail() {
  const railRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncPosition = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setAtStart(rail.scrollLeft <= 4);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    syncPosition();
    rail.addEventListener("scroll", syncPosition, { passive: true });
    window.addEventListener("resize", syncPosition);
    return () => {
      rail.removeEventListener("scroll", syncPosition);
      window.removeEventListener("resize", syncPosition);
    };
  }, [syncPosition]);

  const scrollRail = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const panel = rail.querySelector("li");
    const step = panel
      ? panel.getBoundingClientRect().width + 20
      : rail.clientWidth * 0.8;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    rail.scrollBy({
      left: direction * step,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="tech-deployment"
      aria-labelledby="tech-deployment-title"
      className="scroll-mt-[92px] bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
          <div className="max-w-[54ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              03 — Where it deploys
            </p>
            <h2
              id="tech-deployment-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              One stack.
              <br />
              Every sector.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
              The platform travels with the group&rsquo;s businesses. Each sector
              brings its own assets, demand and operating rhythm — and the same
              digital layer underneath.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollRail(-1)}
              disabled={atStart}
              aria-label="Previous deployment sectors"
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[2px] border border-accent/30 text-accent transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-35"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollRail(1)}
              disabled={atEnd}
              aria-label="Next deployment sectors"
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[2px] border border-accent/30 text-accent transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-35"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <ul
          ref={railRef}
          aria-label="Deployment sectors"
          tabIndex={0}
          className="mt-[clamp(28px,4vw,48px)] flex snap-x snap-mandatory list-none gap-5 overflow-x-auto p-0 pb-2 [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
        >
          {DEPLOYMENT.map((panel) => (
            <li
              key={panel.key}
              className="w-[min(80vw,380px)] shrink-0 snap-start border border-accent/20 bg-sidebar-accent/40"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={panel.image}
                    alt={panel.alt}
                    fill
                    sizes="(max-width: 720px) 80vw, 380px"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-sidebar/85 via-transparent to-transparent"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-[clamp(18px,2.2vw,26px)]">
                  <h3 className="font-sans text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.15] font-extrabold uppercase [font-stretch:114%]">
                    {panel.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.55] text-muted/70">
                    {panel.copy}
                  </p>
                  <a
                    href={panel.href}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-1 text-[0.7rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    View sector
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transform-none hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-5 max-w-[80ch] text-[0.74rem] leading-[1.55] text-muted/55">
          PLACEHOLDER — deployment sectors and their value propositions are
          indicative and must be confirmed against approved platform coverage.
        </p>
      </div>
    </section>
  );
}
