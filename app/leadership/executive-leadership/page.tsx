import type { Metadata } from "next";
import ExecutiveHero from "./_components/executive-hero";
import ExecutiveFunctions from "./_components/executive-functions";
import ExecutiveOperating from "./_components/executive-operating";
import ExecutiveCompanies from "./_components/executive-companies";
import ExecutiveAccountability from "./_components/executive-accountability";
import ExecutiveConversion from "./_components/executive-conversion";

export const metadata: Metadata = {
  title: "Executive Leadership — Waterlight Group",
  description:
    "The executive leadership of Waterlight Group: the functions that turn the Board's mandate into delivery, how the group is run day to day, and how the executive is held accountable.",
};

export default function ExecutiveLeadershipPage() {
  return (
    <main>
      <ExecutiveHero />
      <ExecutiveFunctions />
      <ExecutiveOperating />
      <ExecutiveCompanies />
      <ExecutiveAccountability />
      <ExecutiveConversion />
    </main>
  );
}
