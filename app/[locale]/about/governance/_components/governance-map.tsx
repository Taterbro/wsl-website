"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { GovernanceGovernanceMap } from "@/lib/cms/generated";
import { GOVERNANCE_BODIES, type GovernanceBody } from "../_data/governance";

const FALLBACK_HEADING = "Who decides\nwhat.";

const FALLBACK_DESCRIPTION =
  "Select any body to see its remit. Membership, titles and affiliations are published only once the body is formally constituted, approved and current.";

const TIERS = ["board", "committee", "executive", "assurance"] as const;

function toTier(value: string): GovernanceBody["tier"] {
  return (TIERS as readonly string[]).includes(value)
    ? (value as GovernanceBody["tier"])
    : "committee";
}

function toKey(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "body"
  );
}

function toBodies(rows: GovernanceGovernanceMap["bodies"]): GovernanceBody[] {
  return rows.map((row) => ({
    key: toKey(row.name),
    name: row.name,
    tier: toTier(row.tier),
    remit: row.remit,
    status: row.status,
    scope: row.scope
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  }));
}

function BodyCard({
  body,
  active,
  onSelect,
  dashed,
}: {
  body: GovernanceBody;
  active: boolean;
  onSelect: (key: string) => void;
  dashed?: boolean;
}) {
  return (
    <button
      type="button"
      aria-expanded={active}
      aria-controls="governance-body-detail"
      onClick={() => onSelect(body.key)}
      className={cn(
        "group flex w-full cursor-pointer flex-col gap-2 border bg-background px-[clamp(13px,1.5vw,20px)] py-[clamp(13px,1.6vw,20px)] text-left transition-colors duration-(--transition-normal) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-[rgba(9,29,42,0.16)] text-foreground hover:border-primary/45",
        dashed && "border-dashed"
      )}
    >
      <span className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "text-[0.62rem] font-semibold tracking-[0.14em] uppercase",
            active ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {body.name}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "h-1.5 w-1.5 flex-none rounded-full",
            active ? "bg-accent" : "bg-primary/25"
          )}
        />
      </span>
      <span
        className={cn(
          "font-sans text-[clamp(0.95rem,1.3vw,1.12rem)] leading-[1.15] font-extrabold uppercase [font-stretch:114%]",
          active && "text-primary-foreground"
        )}
      >
        {body.tier === "committee"
          ? "Committee"
          : body.tier === "board"
            ? "Board"
            : body.tier === "executive"
              ? "Management"
              : "Assurance"}
      </span>
    </button>
  );
}

export default function GovernanceMap({
  data,
}: {
  data: GovernanceGovernanceMap;
}) {
  const bodies = data.bodies.length ? toBodies(data.bodies) : GOVERNANCE_BODIES;
  const board = bodies.find((body) => body.tier === "board");
  const committees = bodies.filter((body) => body.tier === "committee");
  const executive = bodies.find((body) => body.tier === "executive");
  const assurance = bodies.find((body) => body.tier === "assurance");

  const [active, setActive] = useState<string>(bodies[0]?.key ?? "board");

  const body = bodies.find((item) => item.key === active) ?? bodies[0];

  const heading = data.label || FALLBACK_HEADING;
  const headingLines = heading.split("\n");

  if (!body || !board || !executive || !assurance) {
    return null;
  }

  return (
    <section
      id="governance-map"
      aria-labelledby="governance-map-title"
      className="scroll-mt-[92px] bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
          <div className="max-w-[56ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              01 — Governance map
            </p>
            <h2
              id="governance-map-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              {headingLines.length === 2 ? (
                <>
                  {headingLines[0]}
                  <br />
                  {headingLines[1]}
                </>
              ) : (
                heading
              )}
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              {data.description || FALLBACK_DESCRIPTION}
            </p>
          </div>
          <span className="rounded-[2px] border border-[rgba(9,29,42,0.16)] px-[14px] py-[9px] text-[0.7rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
            Indicative framework
          </span>
        </div>

        <div className="mt-[clamp(30px,4.4vw,52px)] border border-[rgba(9,29,42,0.16)] bg-muted p-[clamp(18px,2.8vw,36px)]">
          <div className="flex justify-center">
            <div className="w-full max-w-[380px]">
              <BodyCard
                body={board}
                active={active === board.key}
                onSelect={setActive}
              />
            </div>
          </div>

          <div
            aria-hidden="true"
            className="mx-auto h-[clamp(20px,2.6vw,30px)] w-px bg-[rgba(9,29,42,0.24)]"
          />

          <div className="relative grid grid-cols-3 gap-[clamp(10px,1.4vw,20px)] max-[820px]:grid-cols-1">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[rgba(9,29,42,0.24)] max-[820px]:hidden"
            />
            {committees.map((committee) => (
              <div
                key={committee.key}
                className="relative pt-[clamp(16px,2.2vw,24px)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-1/2 h-[clamp(16px,2.2vw,24px)] w-px -translate-x-1/2 bg-[rgba(9,29,42,0.24)]"
                />
                <BodyCard
                  body={committee}
                  active={active === committee.key}
                  onSelect={setActive}
                />
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="mx-auto h-[clamp(20px,2.6vw,30px)] w-px bg-[rgba(9,29,42,0.24)]"
          />

          <div className="flex justify-center">
            <div className="w-full max-w-[380px]">
              <BodyCard
                body={executive}
                active={active === executive.key}
                onSelect={setActive}
              />
            </div>
          </div>

          <div
            aria-hidden="true"
            className="mx-auto h-[clamp(20px,2.6vw,30px)] w-px bg-chart-4/50"
          />

          <div className="flex justify-center">
            <div className="w-full max-w-[380px]">
              <BodyCard
                body={assurance}
                active={active === assurance.key}
                onSelect={setActive}
                dashed
              />
            </div>
          </div>

          <p className="mt-4 text-center text-[0.72rem] leading-[1.5] text-muted-foreground/85">
            Independent assurance sits outside the management line and reports
            into the Audit &amp; Risk Committee.
          </p>
        </div>

        <div
          id="governance-body-detail"
          aria-live="polite"
          className="mt-[clamp(16px,2.4vw,24px)] grid grid-cols-[1.1fr_0.9fr] gap-[clamp(20px,3.4vw,56px)] border-l-2 border-accent bg-card px-[clamp(18px,2.6vw,32px)] py-[clamp(20px,2.8vw,32px)] max-[820px]:grid-cols-1"
        >
          <div>
            <span className="text-[0.64rem] font-semibold tracking-[0.16em] text-primary uppercase">
              {body.tier === "committee" ? "Committee" : body.tier}
            </span>
            <h3 className="mt-2.5 font-sans text-[clamp(1.3rem,2.6vw,2.1rem)] leading-[1.05] font-extrabold uppercase [font-stretch:114%]">
              {body.name}
            </h3>
            <p className="mt-4 max-w-[54ch] text-[0.98rem] leading-[1.6] text-muted-foreground">
              {body.remit}
            </p>
          </div>
          <div>
            <p className="text-[0.64rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              What it covers
            </p>
            <ul className="mt-3 flex list-none flex-col gap-2 p-0">
              {body.scope.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.9rem] leading-[1.5] text-foreground/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[8px] h-1.5 w-1.5 flex-none bg-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-[rgba(9,29,42,0.16)] pt-4 text-[0.76rem] leading-[1.55] text-muted-foreground">
              <span className="font-semibold text-foreground">
                Publication status:{" "}
              </span>
              {body.status}
            </p>
          </div>
        </div>

        {/* <p className="mt-[clamp(18px,2.6vw,28px)] max-w-[78ch] text-[0.76rem] leading-[1.6] text-muted-foreground/80">
          PLACEHOLDER — this map describes the intended governance framework.
          Committee mandates, membership, titles and affiliations must be
          validated and formally approved before publication.
        </p> */}
      </div>
    </section>
  );
}
