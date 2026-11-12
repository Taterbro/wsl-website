"use client";

import { useState } from "react";
import type { NewsNewsGrid } from "@/lib/cms/generated/pages/news";
import { cn } from "@/lib/utils";
import Reveal from "../../../(home)/_components/reveal";
import { NEWS_CATEGORIES, NEWS_ITEMS, type NewsCategory } from "./news-data";

export type NewsGridItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateLabel: string;
  image: string;
  imageAlt: string;
};

const FALLBACK_HEADING = "Latest updates.";
const FALLBACK_ITEMS: NewsGridItem[] = NEWS_ITEMS.map((item) => ({
  id: item.id,
  title: item.title,
  excerpt: item.excerpt,
  category: item.category,
  date: item.date,
  dateLabel: item.dateLabel,
  image: item.image,
  imageAlt: item.imageAlt,
}));

type CategoryFilter = (typeof NEWS_CATEGORIES)[number];

interface NewsGridProps {
  data?: NewsNewsGrid;
  items?: NewsGridItem[];
}

export default function NewsGrid({ data, items }: NewsGridProps) {
  const [active, setActive] = useState<CategoryFilter>("All");
  const sourceItems = items && items.length ? items : FALLBACK_ITEMS;
  const heading = data?.heading || FALLBACK_HEADING;

  const countFor = (category: CategoryFilter): number => {
    if (category === "All") return sourceItems.length;
    return sourceItems.filter((item) => item.category === category).length;
  };

  const filtered =
    active === "All"
      ? sourceItems
      : sourceItems.filter(
          (item) => item.category === (active as NewsCategory)
        );

  return (
    <section
      aria-labelledby="news-grid-title"
      className="bg-background py-[clamp(52px,7vw,92px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-sans text-[0.74rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
                Newsroom
              </p>
              <h2
                id="news-grid-title"
                className="mt-2 font-sans text-[clamp(1.8rem,3.6vw,3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                {heading}
              </h2>
            </div>
            <p
              aria-live="polite"
              className="text-[0.82rem] text-muted-foreground"
            >
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filtered.length}
              </span>{" "}
              of {sourceItems.length} illustrative entries
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter news by category"
            className="mt-7 flex flex-wrap gap-2"
          >
            {NEWS_CATEGORIES.map((category) => {
              const isActive = active === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="news-grid"
                  onClick={() => setActive(category)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-[2px] border px-3 py-2 font-sans text-[0.68rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
                  )}
                >
                  {category}
                  <span
                    className={cn(
                      "text-[0.58rem] tabular-nums",
                      isActive
                        ? "text-primary-foreground/60"
                        : "text-muted-foreground/60"
                    )}
                  >
                    {countFor(category).toString().padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="news-grid"
            key={active}
            className="mt-8 grid animate-fade-in gap-4 motion-reduce:animate-none sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((item) => (
              <article
                key={item.id}
                aria-labelledby={`news-${item.id}-title`}
                className="flex h-full flex-col border border-border bg-card/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {item.image ? (
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    />
                  ) : null}
                  {item.category ? (
                    <p className="absolute top-3 left-3 border border-background/30 bg-sidebar/85 px-2.5 py-1 text-[0.54rem] font-semibold tracking-[0.12em] text-accent uppercase">
                      {item.category}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-[clamp(16px,2vw,22px)]">
                  {item.dateLabel ? (
                    <time
                      dateTime={item.date || undefined}
                      className="text-[0.62rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase"
                    >
                      {item.dateLabel}
                    </time>
                  ) : null}
                  <h3
                    id={`news-${item.id}-title`}
                    className="mt-2 font-sans text-[clamp(1.08rem,1.5vw,1.35rem)] leading-[1.18] font-bold tracking-[-0.005em] [font-stretch:106%]"
                  >
                    {item.title}
                  </h3>
                  {item.excerpt ? (
                    <p className="mt-3 text-[0.84rem] leading-[1.55] text-muted-foreground">
                      {item.excerpt}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-8 border border-border bg-card/30 p-10 text-center">
              <p className="font-sans text-[1.1rem] font-bold uppercase [font-stretch:112%]">
                No updates in this category
              </p>
              <button
                type="button"
                onClick={() => setActive("All")}
                className="mt-4 rounded-[2px] border border-primary/40 px-4 py-2 font-sans text-[0.72rem] font-semibold tracking-[0.06em] text-primary uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Show all entries
              </button>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
