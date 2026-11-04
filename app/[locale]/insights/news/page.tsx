import type { Metadata } from "next";
import NewsHeader from "./_components/news-header";
import NewsGrid from "./_components/news-grid";
import NewsClosing from "./_components/news-closing";
import { NEWS_ITEMS } from "./_components/news-data";

export const metadata: Metadata = {
  title: "News — Insights — Waterlight Group",
  description:
    "Announcements, project milestones and institutional updates from across the Waterlight platform. Illustrative newsroom entries pending approval.",
};

export default function NewsPage() {
  return (
    <main>
      <NewsHeader count={NEWS_ITEMS.length} />
      <NewsGrid />
      <NewsClosing />
    </main>
  );
}
