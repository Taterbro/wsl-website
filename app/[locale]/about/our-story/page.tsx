import type { Metadata } from "next";

import { getOurStoryPage } from "@/lib/cms/generated";

import StoryHero from "./_components/story-hero";
import StoryOrigin from "./_components/story-origin";
import StoryMilestones from "./_components/story-milestones";
import StoryValueChain from "./_components/story-value-chain";
import StoryEntities from "./_components/story-entities";
import StoryFounder from "./_components/story-founder";
import StoryFootprint from "./_components/story-footprint";
import StoryConversion from "./_components/story-conversion";

export const metadata: Metadata = {
  title: "Our Story — Waterlight Group",
  description:
    "How Waterlight Group grew from an African engineering-led water practice into a global enterprise platform building, investing in and scaling businesses, infrastructure and technologies.",
};

export default async function OurStoryPage() {
  const data = await getOurStoryPage();

  return (
    <main>
      <StoryHero data={data.story_hero} />
      <StoryOrigin data={data.story_origin} />
      <StoryMilestones data={data.story_milestones} />
      <StoryValueChain data={data.story_value_chain} />
      <StoryEntities />
      <StoryFounder data={data.story_founder} />
      <StoryFootprint data={data.story_footprint} />
      <StoryConversion data={data.story_conversion} />
    </main>
  );
}
