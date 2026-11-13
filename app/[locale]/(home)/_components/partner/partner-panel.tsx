"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Role {
  role: string;
  label: string;
  desc: string;
  lead: string;
  href: string;
}

const ROLES: Role[] = [
  {
    role: "Investor",
    label: "Investor",
    desc: "Capital, funds & family offices",
    lead: "Tell us about your interest as an investor — focus, geography, ticket range and sectors.",
    href: "/partner-with-us/investors",
  },
  {
    role: "Government",
    label: "Government",
    desc: "Public agencies & PPP delivery",
    lead: "Tell us about the agency, country and priority, and any interest in PPP or joint delivery.",
    href: "/partner-with-us/governments",
  },
  {
    role: "Financial institution",
    label: "Financial institution",
    desc: "Banks, DFIs & financing",
    lead: "Tell us about the financing type, sectors and geography you cover, and your project criteria.",
    href: "/partner-with-us/financial-institutions",
  },
  {
    role: "Technology partner",
    label: "Technology partner",
    desc: "Deployment & localisation",
    lead: "Tell us about your technology, deployment model, certifications and target markets.",
    href: "/partner-with-us/technology-partners",
  },
  {
    role: "Project owner",
    label: "Project owner",
    desc: "Submit an opportunity",
    lead: "Tell us about the project, country, stage, capital need, approvals and ownership.",
    href: "/partner-with-us/project-owners",
  },
  {
    role: "Joint venture",
    label: "Joint venture",
    desc: "Structure a shared vehicle",
    lead: "Tell us about the sector, your contribution, the market and the structure you have in mind.",
    href: "/partner-with-us/joint-ventures",
  },
  {
    role: "Africa market entry",
    label: "Africa market entry",
    desc: "Enter a country or sector",
    lead: "Tell us your target country and sector, product or service, and the support you need.",
    href: "/partner-with-us/market-entry",
  },
];

interface PartnerPanelProps {
  heading: React.ReactNode;
  lede: React.ReactNode;
}

export default function PartnerPanel({ heading, lede }: PartnerPanelProps) {
  const [role, setRole] = useState<string>(ROLES[0].role);

  const activeRole = ROLES.find((r) => r.role === role) ?? ROLES[0];

  return (
    <>
      <div>
        {heading}
        {lede}
      </div>

      <div
        aria-label="Choose how you want to work with Waterlight"
        className="grid grid-cols-2 gap-px border border-accent/20 bg-accent/20 max-[760px]:grid-cols-1"
      >
        {ROLES.map((item) => (
          <Link
            href={item.href}
            key={item.role}
            role="tab"
            aria-selected={role === item.role}
            tabIndex={role === item.role ? 0 : -1}

            onFocus={() => setRole(item.role)}
            className="group flex flex-col gap-1.5 border-0 bg-transparent px-[18px] py-[18px] text-left text-muted transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-[rgba(95,227,198,0.08)] aria-selected:bg-accent aria-selected:text-sidebar"
          >
            <b className="font-sans text-[0.86rem] font-bold tracking-[0.03em] uppercase [font-stretch:110%]">
              {item.label}
            </b>
            <span className="text-[0.76rem] leading-[1.4] opacity-72 group-aria-selected:opacity-85">
              {item.desc}
            </span>
          </Link>
        ))}
      </div>
      {/* <div>
        <form
          noValidate
          onSubmit={handleSubmit}
          className="mt-[26px] border border-accent/20 bg-sidebar-accent/50 p-[clamp(20px,3vw,32px)]"
        >
          {done && (
            <div
              ref={doneRef}
              role="status"
              className="animate-slide-in mb-4 flex items-start gap-3 border-l-2 border-accent bg-accent/16 p-4 text-[0.9rem] text-muted before:mt-1.5 before:h-[9px] before:w-[9px] before:flex-none before:bg-accent before:content-['']"
            >
              Thank you. Your enquiry has been routed to the relevant team, with
              a named owner and response target.
            </div>
          )}
          <p className="mb-[22px] max-w-[52ch] text-[0.95rem] text-muted/85">
            {activeRole.lead} We route enquiries to a named owner with a
            response target.
          </p>
          <div className="mb-4">
            <label
              htmlFor="pf-name"
              className="mb-[7px] block text-[0.74rem] font-semibold tracking-[0.06em] text-muted/70 uppercase"
            >
              Full name
            </label>
            <input
              id="pf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={FIELD_CLASS}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
            <div className="mb-4">
              <label
                htmlFor="pf-org"
                className="mb-[7px] block text-[0.74rem] font-semibold tracking-[0.06em] text-muted/70 uppercase"
              >
                Organisation
              </label>
              <input
                id="pf-org"
                name="organisation"
                type="text"
                autoComplete="organization"
                required
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                className={FIELD_CLASS}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="pf-email"
                className="mb-[7px] block text-[0.74rem] font-semibold tracking-[0.06em] text-muted/70 uppercase"
              >
                Email
              </label>
              <input
                id="pf-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={FIELD_CLASS}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="pf-role"
              className="mb-[7px] block text-[0.74rem] font-semibold tracking-[0.06em] text-muted/70 uppercase"
            >
              Working with Waterlight as
            </label>
            <select
              id="pf-role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={FIELD_CLASS}
            >
              {ROLES.map((item) => (
                <option key={item.role} value={item.role}>
                  {item.role}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="pf-detail"
              className="mb-[7px] block text-[0.74rem] font-semibold tracking-[0.06em] text-muted/70 uppercase"
            >
              What would you like to build?
            </label>
            <textarea
              id="pf-detail"
              name="detail"
              placeholder="Sector, geography, stage and what you are looking for."
              required
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className={cn(FIELD_CLASS, "min-h-[88px] resize-y")}
            />
          </div>
          <p className="mt-3 text-[0.74rem] leading-[1.5] text-muted/55">
            No confidential documents are shared through this form. Materials
            are released only through an approved, authenticated process.
          </p>
          <button
            type="submit"
            className="mt-5 inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent bg-accent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition-colors transition-transform duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-px hover:bg-[#7defd2]"
          >
            Send enquiry
          </button>
        </form>
      </div> */}
    </>
  );
}
