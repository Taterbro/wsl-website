import type { Metadata } from "next";
import EventsHeader from "./_components/events-header";
import EventsList from "./_components/events-list";
import EventsClosing from "./_components/events-closing";
import { EVENTS } from "./_components/events-data";

export const metadata: Metadata = {
  title: "Events — Insights — Waterlight Group",
  description:
    "Institutional convenings, dialogues and appearances from across the Waterlight platform. Illustrative event listings pending approval.",
};

export default function EventsPage() {
  const upcoming = EVENTS.filter((event) => event.status === "Upcoming").length;
  const recent = EVENTS.filter((event) => event.status === "Recent").length;

  return (
    <main>
      <EventsHeader upcoming={upcoming} recent={recent} />
      <EventsList />
      <EventsClosing />
    </main>
  );
}
