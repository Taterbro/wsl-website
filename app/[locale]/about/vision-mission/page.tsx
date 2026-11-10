import type { Metadata } from "next";

import { getVisionMissionPage } from "@/lib/cms/generated";

import VisionHero from "./_components/vision-hero";
import VisionStatement from "./_components/vision-statement";
import VisionMission from "./_components/vision-mission";
import VisionDelivery from "./_components/vision-delivery";
import VisionCommitments from "./_components/vision-commitments";
import VisionConversion from "./_components/vision-conversion";

export const metadata: Metadata = {
  title: "Vision & Mission — Waterlight Group",
  description:
    "The vision and mission of Waterlight Group: an African-founded global enterprise group building sustainable industries, infrastructure and investments across critical sectors.",
};

export default async function VisionMissionPage() {
  const data = await getVisionMissionPage();

  return (
    <main>
      <VisionHero data={data.vision_hero} />
      <VisionStatement data={data.vision_statement} />
      <VisionMission data={data.vision_mission} />
      <VisionDelivery data={data.vision_delivery} />
      <VisionCommitments data={data.vision_commitments} />
      <VisionConversion data={data.vision_conversion} />
    </main>
  );
}
