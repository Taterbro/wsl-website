import type { Metadata } from "next";
import JointVenturesHero from "./_components/joint-ventures-hero";
import JointVenturesIntro from "./_components/joint-ventures-intro";
import JointVenturesFormSection from "./_components/joint-ventures-form-section";

export const metadata: Metadata = {
  title: "Joint Ventures — Partner With Us — Waterlight Group",
  description:
    "Establish a JV around a sector or market to build and scale infrastructure, industry and enabling technologies.",
};

export default function JointVenturesPage() {
  return (
    <main>
      <JointVenturesHero />
      <JointVenturesIntro />
      <JointVenturesFormSection />
    </main>
  );
}
