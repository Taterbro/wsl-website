export interface PrivacySection {
  id: string;
  title: string;
  body: string[];
  items?: string[];
  note?: string;
}

export interface PrivacyMeta {
  label: string;
  value: string;
}

export const PRIVACY_UPDATED = "13 November 2026";
export const PRIVACY_UPDATED_ISO = "2026-11-13";

export const PRIVACY_SUMMARY =
  "This policy explains what personal information Waterlight Group collects, why we collect it, how we share and protect it, and the choices available to you.";

export const PRIVACY_META: PrivacyMeta[] = [
  { label: "Last updated", value: PRIVACY_UPDATED },
  {
    label: "Applies to",
    value: "Waterlight Group websites, enquiries and communications",
  },
  { label: "Version", value: "1.0 — draft for review" },
];

// PLACEHOLDER — illustrative legal copy for layout review only. Replace and
// approve with qualified counsel before publication.
export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "overview",
    title: "Overview",
    body: [
      "Waterlight Group is an African-founded enterprise group with operating companies and offices in multiple jurisdictions. This Privacy Policy explains how we collect, use, share and protect personal information when you visit our websites, submit an enquiry, attend an event, subscribe to updates, apply for a role or otherwise interact with us.",
      "It applies to personal information we process as a controller unless a separate notice is provided for a specific service, entity or jurisdiction. Where local law provides stronger protections, those protections apply.",
    ],
    note: "This policy is illustrative placeholder copy prepared for a site build. It must be reviewed and approved by qualified legal counsel before publication.",
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: [
      "We collect personal information in the following broad categories, depending on how you interact with us:",
    ],
    items: [
      "Identity and contact details \u2014 name, job title, organisation, email address, telephone number and country.",
      "Enquiry and business information \u2014 the content of messages you send us, your areas of interest, investment or partnership preferences, and any documents you choose to share.",
      "Technical and device information \u2014 IP address, browser type, device type, operating system, referring pages and timestamps collected automatically when you use the site.",
      "Usage information \u2014 pages viewed, links clicked, session duration and aggregated interaction data.",
      "Recruitment information \u2014 CVs, employment history, qualifications and references where you apply for a role.",
      "Communications \u2014 records of correspondence with us, including email, enquiry forms and meeting notes.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    body: [
      "We use personal information only for the purposes for which it was collected or as otherwise permitted by applicable law. These purposes include to:",
    ],
    items: [
      "Respond to enquiries and requests for information.",
      "Evaluate investment, partnership, project and market-entry opportunities.",
      "Provide updates, reports and materials you have asked to receive.",
      "Operate, maintain, secure and improve our websites and services.",
      "Comply with legal, regulatory, tax and accounting obligations.",
      "Manage recruitment and evaluate applications.",
      "Establish, exercise or defend legal claims and protect our rights.",
    ],
  },
  {
    id: "legal-bases",
    title: "Legal bases for processing",
    body: [
      "Where applicable law requires a legal basis, we rely on one or more of the following:",
    ],
    items: [
      "Contract \u2014 processing needed to take steps at your request before entering into a contract, or to perform a contract with you.",
      "Legitimate interests \u2014 operating and improving our business, responding to business enquiries and protecting our systems, where those interests are not overridden by your rights.",
      "Legal obligation \u2014 compliance with applicable laws, regulations and lawful requests.",
      "Consent \u2014 where we ask for it, such as for certain marketing communications or optional cookies. You may withdraw consent at any time.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing and disclosure",
    body: ["We do not sell personal information. We may share it with:"],
    items: [
      "Waterlight group companies, affiliates and operating entities for the purposes described in this policy.",
      "Service providers and advisers who support our website, communications, IT, security, analytics and professional advisory functions under appropriate confidentiality terms.",
      "Transaction parties and their advisers in connection with a proposed or completed investment, joint venture, financing, acquisition or restructuring.",
      "Governments, regulators, courts and law-enforcement bodies where required by law or necessary to protect legal rights.",
      "A successor entity in the event of a merger, acquisition, reorganisation or sale of assets.",
    ],
    note: "We require recipients to protect personal information and to use it only for the purposes for which it was shared.",
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    body: [
      "Our website uses cookies and similar technologies to operate the site, remember preferences, understand how pages are used and improve performance. Cookies fall into the following categories:",
    ],
    items: [
      "Strictly necessary \u2014 required for the site to function securely and to deliver core features.",
      "Preference \u2014 remember choices such as language or region.",
      "Analytics \u2014 help us understand how visitors use the site, usually in aggregated form.",
      "Marketing \u2014 where enabled with your consent, used to measure the effectiveness of communications.",
    ],
    note: "You can manage or disable cookies through your browser settings. Blocking strictly necessary cookies may affect how the site works. Where required, we ask for consent before placing non-essential cookies.",
  },
  {
    id: "international-transfers",
    title: "International transfers",
    body: [
      "Waterlight operates across Africa, the GCC, Europe, North America and Asia-Pacific. Personal information may therefore be transferred to, stored in or accessed from countries other than the one in which it was collected.",
      "Where we transfer personal information across borders, we use appropriate safeguards required by applicable law, such as contractual protections, adequacy mechanisms or your consent where permitted. You may contact us for more information about the safeguards we use.",
    ],
  },
  {
    id: "retention",
    title: "Data retention",
    body: [
      "We retain personal information only for as long as necessary to fulfil the purposes described in this policy, including to meet legal, regulatory, accounting or reporting requirements, resolve disputes and enforce agreements.",
      "Retention periods vary according to the type of information and the context in which it was collected. When information is no longer needed, we securely delete it or irreversibly anonymise it.",
    ],
  },
  {
    id: "security",
    title: "Security",
    body: [
      "We use technical and organisational measures designed to protect personal information against unauthorised access, loss, misuse or alteration. These include access controls, encryption where appropriate, secure development practices and staff confidentiality obligations.",
      "No method of transmission or storage is completely secure. While we take protection seriously, we cannot guarantee absolute security. Please contact us promptly if you believe your information has been compromised.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: [
      "Depending on where you live and the law that applies, you may have the right to:",
    ],
    items: [
      "Access the personal information we hold about you and receive a copy.",
      "Request correction of inaccurate or incomplete information.",
      "Request deletion of information we no longer have a lawful reason to keep.",
      "Request restriction of, or object to, certain processing.",
      "Request portability of information you provided to us, where applicable.",
      "Withdraw consent at any time where processing is based on consent.",
      "Lodge a complaint with your local data-protection authority.",
    ],
    note: "To exercise a right, contact us using the details below. We will respond within the time required by applicable law and may ask for information to verify your identity. You will not normally be charged for a request.",
  },
  {
    id: "children",
    title: "Children\u2019s privacy",
    body: [
      "Our website and services are intended for organisations and professional audiences. They are not directed at children, and we do not knowingly collect personal information from anyone under 16. If you believe a child has provided us with personal information, please contact us and we will take appropriate steps to delete it.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    body: [
      "Our website may link to third-party sites, platforms and resources. We are not responsible for their content or privacy practices. We encourage you to read the privacy notices of any third-party service you use.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology or legal requirements. The \u201clast updated\u201d date at the top of this page shows when the current version took effect.",
      "Where changes are material, we will take reasonable steps to bring them to your attention. Continued use of the site after an update means the revised policy applies.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    body: [
      "For questions, requests or complaints about this Privacy Policy or our handling of personal information, contact the Waterlight Group privacy team using the details below.",
    ],
  },
];

// PLACEHOLDER — confirm the privacy mailbox and postal address before launch.
export const PRIVACY_CONTACT = {
  email: "privacy@waterlightgroup.com",
  address:
    "Data Protection Office, Waterlight Group, [Office address], [City], [Country]",
  response:
    "We aim to respond within 30 days, or within the period required by applicable law.",
};

export const PRIVACY_LAST_REVIEWED = "Draft for legal review";
