import type { Metadata } from "next";
import type { Company } from "@/lib/cms/generated";
import { getExecutiveLeadershipPage } from "@/lib/cms/generated";
import ExecutiveHero from "./_components/executive-hero";
import ExecutiveFunctions from "./_components/executive-functions";
import ExecutiveOperating from "./_components/executive-operating";
import ExecutiveCompanies from "./_components/executive-companies";
import ExecutiveAccountability from "./_components/executive-accountability";
import ExecutiveConversion from "./_components/executive-conversion";
import {
  COMPANY_LEADS,
  type Company as CompanyLead,
} from "./_data/executive";

function toCompanyLead(company: Company): CompanyLead {
  return {
    key: company.slug,
    name: company.title || company.postTitle || company.slug,
    domain: company.domain,
    leads: company.leads
      ? company.leads
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [],
  };
}

export const metadata: Metadata = {
  title: "Executive Leadership — Waterlight Group",
  description:
    "The executive leadership of Waterlight Group: the functions that turn the Board's mandate into delivery, how the group is run day to day, and how the executive is held accountable.",
};

export default async function ExecutiveLeadershipPage() {
  const data = await getExecutiveLeadershipPage();
  const companies = data.executive_companies.companies.length
    ? data.executive_companies.companies.map(toCompanyLead)
    : COMPANY_LEADS;

  return (
    <main>
      <ExecutiveHero data={data.executive_hero} />
      <ExecutiveFunctions data={data.executive_functions} />
      <ExecutiveOperating data={data.executive_operating} />
      <ExecutiveCompanies
        data={data.executive_companies}
        companies={companies}
      />
      <ExecutiveAccountability data={data.executive_accountability} />
      <ExecutiveConversion data={data.executive_conversion} />
    </main>
  );
}
