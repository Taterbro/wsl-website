import type { Metadata } from "next";
import GovernmentsHero from "./_components/governments-hero";
import GovernmentsIntro from "./_components/governments-intro";
import GovernmentsFormSection from "./_components/governments-form-section";

export const metadata: Metadata = {
  title: "Governments — Partner With Us — Waterlight Group",
  description:
    "Public agencies and government partners: positioning for private-sector delivery of water, energy and urban infrastructure across Africa and connected corridors.",
};

export default function GovernmentsPage() {
  return (
    <main>
      <GovernmentsHero />
      <GovernmentsIntro />
      <GovernmentsFormSection />
    </main>
  );
}
