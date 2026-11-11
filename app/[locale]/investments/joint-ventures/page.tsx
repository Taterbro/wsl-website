import type { Metadata } from "next";
import { getInvestmentsJointVenturesPage } from "@/lib/cms/generated/pages/investments-joint-ventures";
import JointVenturesHero from "./_components/joint-ventures-hero";
import JvApproach from "./_components/jv-approach";
import JvPartners from "./_components/jv-partners";
import JointVenturesCta from "./_components/joint-ventures-cta";

export const metadata: Metadata = {
  title: "Joint Ventures — Investments — Waterlight Group",
  description:
    "Waterlight forms aligned joint ventures to originate, structure, build and scale bankable infrastructure and industrial projects across Africa and global markets.",
};

export default async function JointVenturesPage() {
  const data = await getInvestmentsJointVenturesPage();

  return (
    <main>
      <JointVenturesHero data={data.joint_ventures_hero} />
      <JvApproach data={data.jv_approach} />
      <JvPartners data={data.jv_partners} />
      <JointVenturesCta data={data.joint_ventures_cta} />
    </main>
  );
}
