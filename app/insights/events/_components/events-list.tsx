"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Reveal from "../../../(home)/_components/reveal";
import {
  EVENTS,
  EVENT_FILTERS,
  type EventStatus,
} from "./events-data";

type EventFilter = (typeof EVENT_FILTERS)[number];

function countFor(filter: EventFilter): number {
  if (filter === "All") return EVENTS.length;
  return EVENTS.filter((event) => event.status === filter).length;
}

export default function EventsList() {
  const [active, setActive] = useState<EventFilter>("All");

  const filtered =
    active === "All"
      ? EVENTS
      : EVENTS.filter((event) => event.status === (active as EventStatus));

  return (
    <section
      aria-labelledby="events-directory-title"
      className="bg-background py-[clamp(52px,7vw,92px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-sans text-[0.74rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
                Event directory
              </p>
              <h2
                id="events-directory-title"
                className="mt-2 font-sans text-[clamp(1.8rem,3.6vw,3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Upcoming &amp; recent.
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
              of {EVENTS.length} illustrative entries
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter events by status"
            className="mt-7 flex flex-wrap gap-2"
          >
            {EVENT_FILTERS.map((filter) => {
              const isActive = active === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="events-directory"
                  onClick={() => setActive(filter)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-[2px] border px-3 py-2 font-sans text-[0.68rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
                  )}
                >
                  {filter}
                  <span
                    className={cn(
                      "text-[0.58rem] tabular-nums",
                      isActive
                        ? "text-primary-foreground/60"
                        : "text-muted-foreground/60"
                    )}
                  >
                    {countFor(filter).toString().padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <ul
            id="events-directory"
            key={active}
            className="mt-8 animate-fade-in list-none border-t border-border p-0 motion-reduce:animate-none"
          >
            {filtered.map((event) => (
              <li key={event.id} className="border-b border-border">
                <article
                  aria-labelledby={`event-${event.id}-title`}
                  className="grid gap-4 py-[clamp(18px,2.6vw,28px)] md:grid-cols-[92px_1fr_auto] md:items-start md:gap-6"
                >
                  <time
                    dateTime={event.date}
                    className="flex items-baseline gap-2 md:flex-col md:items-start md:gap-0"
                  >
                    <span className="font-sans text-[clamp(1.9rem,3.2vw,2.6rem)] leading-none font-extrabold text-primary tabular-nums">
                      {event.day}
                    </span>
                    <span className="text-[0.62rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      {event.month} {event.year}
                    </span>
                  </time>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "inline-flex border px-2 py-[3px] text-[0.54rem] font-semibold tracking-[0.12em] uppercase",
                          event.status === "Upcoming"
                            ? "border-accent/40 bg-accent/10 text-primary"
                            : "border-border bg-muted text-muted-foreground"
                        )}
                      >
                        {event.status}
                      </span>
                      <span className="text-[0.56rem] font-semibold tracking-[0.12em] text-primary/70 uppercase">
                        {event.type}
                      </span>
                    </div>

                    <h3
                      id={`event-${event.id}-title`}
                      className="mt-2 font-sans text-[clamp(1.15rem,2vw,1.6rem)] leading-[1.15] font-bold tracking-[-0.005em] [font-stretch:106%]"
                    >
                      {event.title}
                    </h3>
                    <p className="mt-2 max-w-[62ch] text-[0.86rem] leading-[1.55] text-muted-foreground">
                      {event.summary}
                    </p>
                  </div>

                  <div className="md:justify-self-end md:text-right">
                    <p className="text-[0.68rem] font-semibold tracking-[0.08em] text-foreground uppercase">
                      {event.location}
                    </p>
                    <p className="mt-1 text-[0.58rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      {event.format}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {filtered.length === 0 ? (
            <div className="mt-8 border border-border bg-card/30 p-10 text-center">
              <p className="font-sans text-[1.1rem] font-bold uppercase [font-stretch:112%]">
                No events in this view
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

          <p className="mt-5 text-[0.62rem] leading-[1.5] text-muted-foreground/80">
            PLACEHOLDER — event titles, dates, locations, formats and summaries
            are illustrative. Event detail pages are not yet built, so rows are
            not linked.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
