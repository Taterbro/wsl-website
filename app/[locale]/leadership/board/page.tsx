import type { Metadata } from "next";
import { getBoardPage } from "@/lib/cms/generated";
import BoardHero from "./_components/board-hero";
import BoardRoster from "./_components/board-roster";
import BoardConversion from "./_components/board-conversion";

export const metadata: Metadata = {
  title: "Board — Waterlight Group",
  description:
    "The board of Waterlight Group: every member, the seat they hold, the committees they sit on and the mandate the board is accountable for.",
};

export default async function BoardPage() {
  const data = await getBoardPage();

  return (
    <main>
      <BoardHero data={data.board_hero} />
      <BoardRoster data={data.board_roster} />
      <BoardConversion data={data.board_conversion} />
    </main>
  );
}
