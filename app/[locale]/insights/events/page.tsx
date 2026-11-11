import type { Metadata } from "next";
import type { Event } from "@/lib/cms/generated";
import { getEventsPage } from "@/lib/cms/generated";

import EventsHeader from "./_components/events-header";
import EventsList from "./_components/events-list";
import EventsClosing from "./_components/events-closing";
import {
  EVENTS,
  type EventFormat,
  type EventItem,
  type EventStatus,
  type EventType,
} from "./_components/events-data";

export const metadata: Metadata = {
  title: "Events — Insights — Waterlight Group",
  description:
    "Institutional convenings, dialogues and appearances from across the Waterlight platform. Illustrative event listings pending approval.",
};

function toEventItem(event: Event): EventItem {
  return {
    id: String(event.id),
    title: event.title || event.postTitle,
    summary: event.summary,
    status: event.status as EventStatus,
    type: event.type as EventType,
    date: event.date,
    dateLabel: event.date_label,
    day: event.day,
    month: event.month,
    year: event.year,
    location: event.location,
    format: event.format as EventFormat,
  };
}

export default async function EventsPage() {
  const data = await getEventsPage();

  const events = data.events_list.events.length
    ? data.events_list.events.map(toEventItem)
    : EVENTS;

  const upcoming = events.filter((event) => event.status === "Upcoming").length;
  const recent = events.filter((event) => event.status === "Recent").length;

  return (
    <main>
      <EventsHeader
        data={data.events_header}
        upcoming={upcoming}
        recent={recent}
      />
      <EventsList data={data.events_list} events={events} />
      <EventsClosing data={data.events_closing} />
    </main>
  );
}
