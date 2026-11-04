"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  GROUP_FUNCTIONS,
  entityByKey,
  type EntityKey,
  type GroupEntity,
} from "../_data/structure";

const ORDER: EntityKey[] = [
  "group",
  "africa-investments",
  "industries",
  "iheal-global",
  "limited",
  "save-initiative",
];

const CHILDREN: EntityKey[] = [
  "africa-investments",
  "industries",
  "iheal-global",
  "limited",
];

const CHILD_NO: Record<string, string> = {
  "africa-investments": "01",
  industries: "02",
  "iheal-global": "03",
  limited: "04",
};

type NodeTone = "parent" | "child" | "independent";

function NodeButton({
  entity,
  active,
  onSelect,
  tone,
  buttonRef,
}: {
  entity: GroupEntity;
  active: boolean;
  onSelect: (key: EntityKey) => void;
  tone: NodeTone;
  buttonRef: (node: HTMLButtonElement | null) => void;
}) {
  const id = `group-node-${entity.key}`;

  return (
    <button
      type="button"
      role="tab"
      id={id}
      ref={buttonRef}
      aria-selected={active}
      aria-controls="group-structure-panel"
      tabIndex={active ? 0 : -1}
      onClick={() => onSelect(entity.key)}
      onFocus={() => onSelect(entity.key)}
      className={cn(
        "group flex w-full cursor-pointer flex-col gap-2 border bg-background px-[clamp(12px,1.6vw,20px)] py-[clamp(12px,1.6vw,18px)] text-left transition-colors duration-(--transition-normal) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-[rgba(9,29,42,0.16)] text-foreground hover:border-primary/45",
        tone === "independent" && "border-dashed"
      )}
    >
      <span className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "text-[0.62rem] font-semibold tracking-[0.14em] uppercase",
            active ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {tone === "parent"
            ? entity.role
            : tone === "independent"
              ? "Independent nonprofit"
              : `${CHILD_NO[entity.key]} · ${entity.role}`}
        </span>
        {tone === "parent" && (
          <span
            aria-hidden="true"
            className={cn(
              "h-2 w-2 flex-none rounded-full",
              active ? "bg-accent" : "bg-primary/30"
            )}
          />
        )}
      </span>
      <span
        className={cn(
          "font-sans leading-[1.12] font-extrabold uppercase [font-stretch:114%]",
          tone === "child" ? "text-[0.98rem]" : "text-[clamp(1.05rem,1.6vw,1.3rem)]"
        )}
      >
        {entity.shortName}
      </span>
      {tone === "parent" && (
        <span
          className={cn(
            "text-[0.78rem] leading-[1.5]",
            active ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          Master brand for every platform
        </span>
      )}
    </button>
  );
}

export default function StructureDiagram() {
  const [active, setActive] = useState<EntityKey>("group");
  const [animCount, setAnimCount] = useState(0);
  const tabRefs = useRef(new Map<EntityKey, HTMLButtonElement | null>());

  const select = (key: EntityKey) => {
    setActive(key);
    setAnimCount((count) => count + 1);
  };

  const move = (delta: number) => {
    const index = ORDER.indexOf(active);
    const next = ORDER[(index + delta + ORDER.length) % ORDER.length];
    select(next);
    tabRefs.current.get(next)?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        move(1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        move(-1);
        break;
      case "Home": {
        event.preventDefault();
        select(ORDER[0]);
        tabRefs.current.get(ORDER[0])?.focus();
        break;
      }
      case "End": {
        event.preventDefault();
        const last = ORDER[ORDER.length - 1];
        select(last);
        tabRefs.current.get(last)?.focus();
        break;
      }
      default:
        break;
    }
  };

  const entity = entityByKey(active);
  const parent = entityByKey("group");

  return (
    <section
      id="structure-diagram"
      aria-labelledby="group-diagram-title"
      className="scroll-mt-[92px] bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="max-w-[56ch]">
          <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
            <span
              aria-hidden="true"
              className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
            />
            02 — Structure diagram
          </p>
          <h2
            id="group-diagram-title"
            className="font-sans text-[clamp(1.8rem,4.6vw,3.6rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Select any node to see its mandate.
          </h2>
          <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
            The diagram shows roles and mandates, not shareholdings. Legal
            structure is confirmed against the approved group chart and released
            on request.
          </p>
        </div>

        <div className="mt-[clamp(34px,5vw,58px)] grid grid-cols-[1.32fr_0.68fr] items-start gap-[clamp(26px,4vw,54px)] max-[1080px]:grid-cols-1">
          <div className="border border-[rgba(9,29,42,0.16)] bg-muted p-[clamp(16px,2.6vw,32px)]">
            <div
              role="tablist"
              aria-label="Waterlight Group structure"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="flex flex-col"
            >
              <div className="flex justify-center">
                <div className="w-full max-w-[340px]">
                  <NodeButton
                    entity={parent}
                    active={active === parent.key}
                    onSelect={select}
                    tone="parent"
                    buttonRef={(node) => {
                      tabRefs.current.set(parent.key, node);
                    }}
                  />
                </div>
              </div>

              <div
                aria-hidden="true"
                className="mx-auto h-[clamp(20px,2.6vw,30px)] w-px bg-[rgba(9,29,42,0.24)]"
              />

              <div className="relative grid grid-cols-4 gap-[clamp(8px,1.2vw,16px)] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-[rgba(9,29,42,0.24)] max-[900px]:hidden"
                />
                {CHILDREN.map((key) => {
                  const child = entityByKey(key);
                  return (
                    <div
                      key={key}
                      className="relative pt-[clamp(16px,2.2vw,24px)]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute top-0 left-1/2 h-[clamp(16px,2.2vw,24px)] w-px -translate-x-1/2 bg-[rgba(9,29,42,0.24)]"
                      />
                      <NodeButton
                        entity={child}
                        active={active === key}
                        onSelect={select}
                        tone="child"
                        buttonRef={(node) => {
                          tabRefs.current.set(key, node);
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="mt-[clamp(14px,2vw,20px)] border-t border-dashed border-chart-4/45 pt-[clamp(12px,1.8vw,18px)]">
                <p className="mb-3 text-[0.64rem] font-semibold tracking-[0.14em] text-[#855c18] uppercase">
                  Presented separately — not a group subsidiary
                </p>
                <NodeButton
                  entity={entityByKey("save-initiative")}
                  active={active === "save-initiative"}
                  onSelect={select}
                  tone="independent"
                  buttonRef={(node) => {
                    tabRefs.current.set("save-initiative", node);
                  }}
                />
              </div>
            </div>

            <div className="mt-[clamp(18px,2.4vw,26px)] border-t border-dashed border-[rgba(9,29,42,0.2)] pt-[clamp(12px,1.8vw,18px)]">
              <p className="text-[0.64rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Shared group functions
              </p>
              <ul className="mt-2.5 flex list-none flex-wrap gap-x-[clamp(14px,2vw,26px)] gap-y-1.5 p-0">
                {GROUP_FUNCTIONS.map((fn) => (
                  <li
                    key={fn}
                    className="text-[0.84rem] text-foreground/75 before:mr-2 before:text-accent before:content-['—']"
                  >
                    {fn}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            id="group-structure-panel"
            role="tabpanel"
            aria-labelledby={`group-node-${active}`}
            key={animCount}
            className={cn(
              "border border-[rgba(9,29,42,0.16)] bg-background p-[clamp(20px,2.8vw,34px)]",
              animCount > 0 && "animate-slide-in motion-reduce:animate-none"
            )}
          >
            <span className="text-[0.66rem] font-semibold tracking-[0.14em] text-primary uppercase">
              {entity.independent ? "Independent nonprofit" : entity.role}
            </span>
            <h3 className="mt-3 font-sans text-[clamp(1.25rem,2.4vw,1.9rem)] leading-[1.05] font-extrabold uppercase [font-stretch:114%]">
              {entity.name}
            </h3>
            <p className="mt-4 text-[0.95rem] leading-[1.6] text-muted-foreground">
              {entity.mandate}
            </p>

            <div className="mt-6 border-t border-[rgba(9,29,42,0.16)] pt-5">
              <p className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Responsibilities
              </p>
              <ul className="mt-3 flex list-none flex-col gap-2 p-0">
                {entity.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.9rem] leading-[1.5] text-foreground/85"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1.5 w-1.5 flex-none bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {entity.href && (
              <a
                href={entity.href}
                className="mt-6 inline-flex items-center gap-2 border border-[rgba(9,29,42,0.16)] px-[18px] py-[12px] font-sans text-[0.75rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {entity.independent
                  ? "Visit the initiative"
                  : "Visit the company"}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>

        <p className="mt-[clamp(24px,3.4vw,36px)] max-w-[76ch] text-[0.76rem] leading-[1.6] text-muted-foreground/80">
          PLACEHOLDER — the diagram describes digital roles and mandates only.
          Registered entity names, ownership and control relationships must be
          confirmed against the approved group chart before publication.
        </p>
      </div>
    </section>
  );
}
