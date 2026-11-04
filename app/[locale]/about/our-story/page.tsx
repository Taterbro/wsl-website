import type { Metadata } from "next";
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

export default function OurStoryPage() {
  return (
    <main>
      <StoryHero />
      <StoryOrigin />
      <StoryMilestones />
      <StoryValueChain />
      <StoryEntities />
      <StoryFounder />
      <StoryFootprint />
      <StoryConversion />
    </main>
  );
}
