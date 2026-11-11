import type { Metadata } from "next";
import { getNewsPage } from "@/lib/cms/generated/pages/news";
import NewsHeader from "./_components/news-header";
import NewsGrid, { type NewsGridItem } from "./_components/news-grid";
import NewsClosing from "./_components/news-closing";
import { NEWS_ITEMS } from "./_components/news-data";

export const metadata: Metadata = {
  title: "News — Insights — Waterlight Group",
  description:
    "Announcements, project milestones and institutional updates from across the Waterlight platform. Illustrative newsroom entries pending approval.",
};

function toGridItem(item: {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  date_label: string;
  image: { url: string; alt: string } | null;
  image_alt: string;
}): NewsGridItem {
  return {
    id: item.slug || String(item.id),
    title: item.title,
    excerpt: item.excerpt,
    category: item.category,
    date: item.date,
    dateLabel: item.date_label,
    image: item.image?.url ?? "",
    imageAlt: item.image?.alt || item.image_alt,
  };
}

export default async function NewsPage() {
  const data = await getNewsPage();
  const newsItems = data.news_grid.news_items.length
    ? data.news_grid.news_items.map(toGridItem)
    : undefined;

  return (
    <main>
      <NewsHeader
        data={data.news_header}
        count={data.news_grid.news_items.length || NEWS_ITEMS.length}
      />
      <NewsGrid data={data.news_grid} items={newsItems} />
      <NewsClosing data={data.news_closing} />
    </main>
  );
}
