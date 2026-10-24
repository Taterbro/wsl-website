export type FieldType =
  | "text"
  | "email"
  | "select"
  | "textarea"
  | "checkbox";

export interface EnquiryField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  autocomplete?: string;
  helpText?: string;
}

export interface EnquiryRouteConfig {
  slug: string;
  title: string;
  subtitle: string;
  audience: string;
  fields: EnquiryField[];
  successCopy: string;
  privacyHref: string;
  disclaimerHref?: string;
  mapToHubspot?: boolean;
}

import { BUSINESS_SECTORS } from "@/lib/businesses";

const SECTOR_OPTIONS = BUSINESS_SECTORS.map((s) => s.name);

const TICKET_RANGE_OPTIONS = [
  "$250k - $1M",
  "$1M - $5M",
  "$5M - $10M",
  "$10M - $25M",
  "$25M - $50M",
  "$50M+",
  "Undisclosed",
];

const COUNTRY_OPTIONS = [
  "South Africa",
  "Kenya",
  "Nigeria",
  "Ghana",
  "Rwanda",
  "Egypt",
  "Morocco",
  "United Arab Emirates",
  "Saudi Arabia",
  "United Kingdom",
  "United States",
  "Other",
];

export const ENQUIRY_ROUTE_CONFIGS: Record<string, EnquiryRouteConfig> = {
  investors: {
    slug: "investors",
    title: "Investor enquiry",
    subtitle:
      "Tell us about your focus. We review enquiries by hand and route to a named owner.",
    audience: "Investors & family offices",
    successCopy:
      "Thanks. Your enquiry has been received. Our team will review it and be in touch.",
    privacyHref: "/legal/privacy",
    disclaimerHref: "/legal/investment-disclaimer",
    mapToHubspot: true,
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        required: true,
        autocomplete: "name",
      },
      {
        name: "workEmail",
        label: "Work email",
        type: "email",
        required: true,
        autocomplete: "email",
      },
      {
        name: "organisation",
        label: "Organisation / fund",
        type: "text",
        required: true,
        autocomplete: "organization",
      },
      {
        name: "roleTitle",
        label: "Role / title",
        type: "text",
        required: true,
        autocomplete: "organization-title",
      },
      {
        name: "country",
        label: "Country",
        type: "select",
        required: true,
        options: COUNTRY_OPTIONS,
      },
      {
        name: "sectorInterest",
        label: "Sector interest",
        type: "select",
        required: true,
        options: SECTOR_OPTIONS,
      },
      {
        name: "ticketRange",
        label: "Indicative ticket size",
        type: "select",
        required: true,
        options: TICKET_RANGE_OPTIONS,
      },
      {
        name: "message",
        label: "What are you looking to do?",
        type: "textarea",
        required: false,
        placeholder:
          "Geography, stage preference, structure or any specifics you'd like us to know.",
      },
      {
        name: "consent",
        label: "I agree to the Privacy Policy",
        type: "checkbox",
        required: true,
      },
    ],
  },
  governments: {
    slug: "governments",
    title: "Government enquiry",
    subtitle:
      "Positioning only. Tell us about your agency and priority. No implied endorsement.",
    audience: "Governments & public agencies",
    successCopy:
      "Thanks. Your enquiry has been received. Our team will review it and be in touch.",
    privacyHref: "/legal/privacy",
    mapToHubspot: true,
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        required: true,
        autocomplete: "name",
      },
      {
        name: "workEmail",
        label: "Work email",
        type: "email",
        required: true,
        autocomplete: "email",
      },
      {
        name: "organisation",
        label: "Agency / ministry",
        type: "text",
        required: true,
        autocomplete: "organization",
      },
      {
        name: "roleTitle",
        label: "Role / title",
        type: "text",
        required: true,
        autocomplete: "organization-title",
      },
      {
        name: "country",
        label: "Country",
        type: "select",
        required: true,
        options: COUNTRY_OPTIONS,
      },
      {
        name: "projectPriority",
        label: "Project / priority",
        type: "text",
        required: false,
        placeholder: "Sector, programme or initiative",
      },
      {
        name: "pppInterest",
        label: "Interest in PPP / joint delivery?",
        type: "select",
        required: false,
        options: ["Yes", "Maybe", "No"],
      },
      {
        name: "message",
        label: "Additional details",
        type: "textarea",
        required: false,
      },
      {
        name: "consent",
        label: "I agree to the Privacy Policy",
        type: "checkbox",
        required: true,
      },
    ],
  },
  "financial-institutions": {
    slug: "financial-institutions",
    title: "Financial institution enquiry",
    subtitle: "Tell us how you cover projects and what you're looking for.",
    audience: "Banks, DFIs & financiers",
    successCopy:
      "Thanks. Your enquiry has been received. Our team will review it and be in touch.",
    privacyHref: "/legal/privacy",
    mapToHubspot: true,
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        required: true,
        autocomplete: "name",
      },
      {
        name: "workEmail",
        label: "Work email",
        type: "email",
        required: true,
        autocomplete: "email",
      },
      {
        name: "organisation",
        label: "Institution",
        type: "text",
        required: true,
        autocomplete: "organization",
      },
      {
        name: "roleTitle",
        label: "Role / title",
        type: "text",
        required: true,
        autocomplete: "organization-title",
      },
      {
        name: "country",
        label: "Country",
        type: "select",
        required: true,
        options: COUNTRY_OPTIONS,
      },
      {
        name: "financingType",
        label: "Financing type",
        type: "select",
        required: false,
        options: ["Debt", "Mezzanine", "Blended", "Guarantee", "Other"],
      },
      {
        name: "sectorInterest",
        label: "Sectors of interest",
        type: "select",
        required: false,
        options: SECTOR_OPTIONS,
      },
      {
        name: "geography",
        label: "Geography focus",
        type: "text",
        required: false,
        placeholder: "Regions/countries",
      },
      {
        name: "message",
        label: "Project criteria / notes",
        type: "textarea",
        required: false,
      },
      {
        name: "consent",
        label: "I agree to the Privacy Policy",
        type: "checkbox",
        required: true,
      },
    ],
  },
  "technology-partners": {
    slug: "technology-partners",
    title: "Technology partner enquiry",
    subtitle: "Deployment, localisation and industrial partnerships.",
    audience: "Corporates & technology firms",
    successCopy:
      "Thanks. Your enquiry has been received. Our team will review it and be in touch.",
    privacyHref: "/legal/privacy",
    mapToHubspot: true,
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        required: true,
        autocomplete: "name",
      },
      {
        name: "workEmail",
        label: "Work email",
        type: "email",
        required: true,
        autocomplete: "email",
      },
      {
        name: "organisation",
        label: "Company",
        type: "text",
        required: true,
        autocomplete: "organization",
      },
      {
        name: "roleTitle",
        label: "Role / title",
        type: "text",
        required: true,
        autocomplete: "organization-title",
      },
      {
        name: "country",
        label: "Country",
        type: "select",
        required: true,
        options: COUNTRY_OPTIONS,
      },
      {
        name: "technology",
        label: "Technology",
        type: "text",
        required: false,
        placeholder: "What technology/system?",
      },
      {
        name: "deploymentModel",
        label: "Deployment model",
        type: "select",
        required: false,
        options: ["Licence", "JV", "Distribution", "OEM", "Other"],
      },
      {
        name: "targetMarkets",
        label: "Target markets",
        type: "text",
        required: false,
        placeholder: "Africa/GCC/regions",
      },
      {
        name: "message",
        label: "Additional details",
        type: "textarea",
        required: false,
      },
      {
        name: "consent",
        label: "I agree to the Privacy Policy",
        type: "checkbox",
        required: true,
      },
    ],
  },
  "project-owners": {
    slug: "project-owners",
    title: "Project owner enquiry",
    subtitle: "Share an approved summary. Full documents only via secure process.",
    audience: "Project owners & sponsors",
    successCopy:
      "Thanks. Your enquiry has been received. Our team will review it and be in touch.",
    privacyHref: "/legal/privacy",
    disclaimerHref: "/legal/investment-disclaimer",
    mapToHubspot: true,
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        required: true,
        autocomplete: "name",
      },
      {
        name: "workEmail",
        label: "Work email",
        type: "email",
        required: true,
        autocomplete: "email",
      },
      {
        name: "organisation",
        label: "Project company / sponsor",
        type: "text",
        required: true,
        autocomplete: "organization",
      },
      {
        name: "roleTitle",
        label: "Role / title",
        type: "text",
        required: true,
        autocomplete: "organization-title",
      },
      {
        name: "country",
        label: "Project country",
        type: "select",
        required: true,
        options: COUNTRY_OPTIONS,
      },
      {
        name: "sectorInterest",
        label: "Sector",
        type: "select",
        required: true,
        options: SECTOR_OPTIONS,
      },
      {
        name: "stage",
        label: "Stage",
        type: "select",
        required: true,
        options: [
          "Concept",
          "Development",
          "Investment Ready",
          "Financing",
          "Under Construction",
          "Operational",
        ],
      },
      {
        name: "capitalNeed",
        label: "Capital need",
        type: "text",
        required: false,
        placeholder: "$X-YM (banded)",
      },
      {
        name: "approvals",
        label: "Key approvals status",
        type: "text",
        required: false,
        placeholder: "Site, permits, off-take (if known)",
      },
      {
        name: "ownership",
        label: "Ownership / structure",
        type: "text",
        required: false,
      },
      {
        name: "message",
        label: "Project summary",
        type: "textarea",
        required: true,
        placeholder: "High-level summary only. Do not upload full documents.",
      },
      {
        name: "consent",
        label: "I agree to the Privacy Policy",
        type: "checkbox",
        required: true,
      },
    ],
  },
  "joint-ventures": {
    slug: "joint-ventures",
    title: "Joint venture enquiry",
    subtitle: "Structure a shared vehicle around a sector or market.",
    audience: "JV partners",
    successCopy:
      "Thanks. Your enquiry has been received. Our team will review it and be in touch.",
    privacyHref: "/legal/privacy",
    mapToHubspot: true,
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        required: true,
        autocomplete: "name",
      },
      {
        name: "workEmail",
        label: "Work email",
        type: "email",
        required: true,
        autocomplete: "email",
      },
      {
        name: "organisation",
        label: "Company",
        type: "text",
        required: true,
        autocomplete: "organization",
      },
      {
        name: "roleTitle",
        label: "Role / title",
        type: "text",
        required: true,
        autocomplete: "organization-title",
      },
      {
        name: "country",
        label: "Country",
        type: "select",
        required: true,
        options: COUNTRY_OPTIONS,
      },
      {
        name: "sectorInterest",
        label: "Sector",
        type: "select",
        required: true,
        options: SECTOR_OPTIONS,
      },
      {
        name: "contribution",
        label: "Your contribution",
        type: "text",
        required: false,
        placeholder: "Capital, land, tech, contracts, etc.",
      },
      {
        name: "market",
        label: "Market / geography",
        type: "text",
        required: false,
      },
      {
        name: "proposedStructure",
        label: "Proposed structure",
        type: "text",
        required: false,
        placeholder: "SPV/JV vehicle ideas if any",
      },
      {
        name: "message",
        label: "Additional details",
        type: "textarea",
        required: false,
      },
      {
        name: "consent",
        label: "I agree to the Privacy Policy",
        type: "checkbox",
        required: true,
      },
    ],
  },
  "market-entry": {
    slug: "market-entry",
    title: "Market entry enquiry",
    subtitle: "Africa or GCC — tell us direction and what you need.",
    audience: "Market entry",
    successCopy:
      "Thanks. Your enquiry has been received. Our team will review it and be in touch.",
    privacyHref: "/legal/privacy",
    mapToHubspot: true,
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        required: true,
        autocomplete: "name",
      },
      {
        name: "workEmail",
        label: "Work email",
        type: "email",
        required: true,
        autocomplete: "email",
      },
      {
        name: "organisation",
        label: "Company",
        type: "text",
        required: true,
        autocomplete: "organization",
      },
      {
        name: "roleTitle",
        label: "Role / title",
        type: "text",
        required: true,
        autocomplete: "organization-title",
      },
      {
        name: "country",
        label: "Your base country",
        type: "select",
        required: true,
        options: COUNTRY_OPTIONS,
      },
      {
        name: "entryMarket",
        label: "Entry market",
        type: "select",
        required: true,
        options: ["Africa", "GCC"],
      },
      {
        name: "targetCountry",
        label: "Target country / market",
        type: "text",
        required: false,
        placeholder: "Specific country or broader region",
      },
      {
        name: "sectorInterest",
        label: "Sector",
        type: "select",
        required: false,
        options: SECTOR_OPTIONS,
      },
      {
        name: "productService",
        label: "Product / service",
        type: "text",
        required: false,
      },
      {
        name: "desiredSupport",
        label: "Desired support",
        type: "textarea",
        required: false,
        placeholder: "Local partner, permits, landing, projects, etc.",
      },
      {
        name: "message",
        label: "Additional details",
        type: "textarea",
        required: false,
      },
      {
        name: "consent",
        label: "I agree to the Privacy Policy",
        type: "checkbox",
        required: true,
      },
    ],
  },
};

export function getEnquiryConfig(slug: string): EnquiryRouteConfig {
  const config = ENQUIRY_ROUTE_CONFIGS[slug];
  if (!config) {
    throw new Error(`Unknown enquiry route config: ${slug}`);
  }
  return config;
}
