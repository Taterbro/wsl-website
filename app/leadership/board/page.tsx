import type { Metadata } from "next";
import BoardHero from "./_components/board-hero";
import BoardRoster from "./_components/board-roster";
import BoardCommittees from "./_components/board-committees";
import BoardConversion from "./_components/board-conversion";

export const metadata: Metadata = {
  title: "Board — Waterlight Group",
  description:
    "The board of Waterlight Group: every member, the seat they hold, the committees they sit on and the mandate the board is accountable for.",
};

export default function BoardPage() {
  return (
    <main>
      <BoardHero />
      <BoardRoster />
      <BoardCommittees />
      <BoardConversion />
    </main>
  );
}
