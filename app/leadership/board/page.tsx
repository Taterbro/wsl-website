import type { Metadata } from "next";
import BoardHero from "./_components/board-hero";
import BoardComposition from "./_components/board-composition";
import BoardRemit from "./_components/board-remit";
import BoardCommittees from "./_components/board-committees";
import BoardCadence from "./_components/board-cadence";
import BoardConversion from "./_components/board-conversion";

export const metadata: Metadata = {
  title: "Board — Waterlight Group",
  description:
    "The Board of Waterlight Group: how it is constituted, the matters reserved to it, its committee architecture, and how it is held accountable.",
};

export default function BoardPage() {
  return (
    <main>
      <BoardHero />
      <BoardComposition />
      <BoardRemit />
      <BoardCommittees />
      <BoardCadence />
      <BoardConversion />
    </main>
  );
}
