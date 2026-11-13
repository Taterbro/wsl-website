import type { Metadata } from "next";

import PrivacyHero from "./_components/privacy-hero";
import PrivacyBody from "./_components/privacy-body";
import PrivacyContact from "./_components/privacy-contact";

export const metadata: Metadata = {
  title: "Privacy Policy — Waterlight Group",
  description:
    "How Waterlight Group collects, uses, shares and protects personal information across its websites, enquiries, events and communications.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyBody />
      <PrivacyContact />
    </main>
  );
}
