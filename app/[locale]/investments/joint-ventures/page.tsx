import type { Metadata } from "next";
import JointVenturesHero from "./_components/joint-ventures-hero";
import JvApproach from "./_components/jv-approach";
import JvPartners from "./_components/jv-partners";
import JointVenturesCta from "./_components/joint-ventures-cta";

export const metadata: Metadata = {
  title: "Joint Ventures — Investments — Waterlight Group",
  description:
    "Waterlight forms aligned joint ventures to originate, structure, build and scale bankable infrastructure and industrial projects across Africa and global markets.",
};

export default function JointVenturesPage() {
  return (
    <main>
      <JointVenturesHero />
      <JvApproach />
      <JvPartners />
      <JointVenturesCta />
    </main>
  );
}
