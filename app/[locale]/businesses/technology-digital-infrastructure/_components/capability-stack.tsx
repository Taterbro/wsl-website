"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { getSector } from "@/lib/businesses";
import type {
  TechnologyDigitalInfrastructureCapabilityStack,
  TechnologyDigitalInfrastructureCapabilityStackCapabilities,
} from "@/lib/cms/generated";

const SECTOR = getSector("technology-digital-infrastructure");

const FALLBACK_HEADING = "Seven layers.\nOne operating system.";

const FALLBACK_DESCRIPTION =
  "Each layer makes the one above it possible. Open a layer to see what it covers across infrastructure, industry and public systems.";

const FALLBACK_IMAGE_ALT = "Digital infrastructure capability layer";

type Layer = {
  label: string;
  no: string;
  copy: string;
  applications: string[];
  image: string | null;
  alt: string;
};

// PLACEHOLDER — imagery and scope detail are illustrative until approved
// sector photography and capability copy are supplied. Media has no value
// fallback; images render only from the CMS.
const FALLBACK_DETAILS: {
  copy: string;
  applications: string[];
  alt: string;
}[] = [
  {
    copy: "Models that detect anomalies, forecast demand and support operating decisions in real time.",
    applications: ["Monitoring", "Forecasting", "Decision support"],
    alt: "Digital operations and AI infrastructure (placeholder image)",
  },
  {
    copy: "Platforms that connect assets, operators and customers into one operating picture.",
    applications: ["Operations", "Customer portals", "Integration"],
    alt: "WSWIS digital platform interface (placeholder image)",
  },
  {
    copy: "Instrumented physical systems that report condition, usage and performance as live data.",
    applications: ["Sensors", "Telemetry", "Control"],
    alt: "Smart city infrastructure with connected systems (placeholder image)",
  },
  {
    copy: "Governed data foundations that make infrastructure measurable, comparable and auditable.",
    applications: ["Data pipelines", "Dashboards", "Governance"],
    alt: "Field data capture and digital monitoring (placeholder image)",
  },
  {
    copy: "Payment, credit and settlement rails that extend access and reduce friction across markets.",
    applications: ["Payments", "Credit", "Settlement"],
    alt: "Digital financial infrastructure (placeholder image)",
  },
  {
    copy: "Workflow and process automation that removes manual steps from industrial and utility operations.",
    applications: ["Workflows", "Process control", "Robotics"],
    alt: "Automated industrial operations (placeholder image)",
  },
  {
    copy: "Operating-model change supported by technology, data and training — not a software installation.",
    applications: ["Advisory", "Change management", "Training"],
    alt: "Digital transformation across logistics operations (placeholder image)",
  },
];

const FALLBACK_LAYERS: Layer[] = SECTOR.capabilities.map((label, index) => {
  const detail = FALLBACK_DETAILS[index];
  return {
    label,
    no: String(index + 1).padStart(2, "0"),
    copy: detail?.copy ?? "",
    applications: detail?.applications ?? [],
    image: null,
    alt: detail?.alt ?? FALLBACK_IMAGE_ALT,
  };
});

function toLayer(
  capability: TechnologyDigitalInfrastructureCapabilityStackCapabilities,
  index: number
): Layer {
  const fallback = FALLBACK_LAYERS[index];
  const applications = capability.applications
    .split(",")
    .map((application) => application.trim())
    .filter(Boolean);
  const image = capability.image?.url ?? null;

  return {
    label: capability.label || fallback?.label || "",
    no: String(index + 1).padStart(2, "0"),
    copy: capability.copy || fallback?.copy || "",
    applications: applications.length
      ? applications
      : (fallback?.applications ?? []),
    image,
    alt: image
      ? capability.image?.alt || capability.image_alt || FALLBACK_IMAGE_ALT
      : "",
  };
}

export default function CapabilityStack({
  data,
}: {
  data: TechnologyDigitalInfrastructureCapabilityStack;
}) {
  const [active, setActive] = useState(0);
  const layers = data.capabilities.length
    ? data.capabilities.map(toLayer)
    : FALLBACK_LAYERS;
  const current = layers[active];
  const count = String(layers.length).padStart(2, "0");
  const heading = data.heading || FALLBACK_HEADING;
  const headingLines = heading.split("\n");

  return (
    <section
      id="capabilities"
      aria-labelledby="technology-capabilities-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(18px,3vw,40px)]">
          <div className="max-w-[62ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              02 — The stack
            </p>
            <h2
              id="technology-capabilities-title"
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
          <a
            href="/innovation/wswis"
            className="inline-flex items-center gap-2 border-b border-primary/30 pb-1 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            The WSWIS platform
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-[clamp(30px,4.4vw,52px)] grid gap-[clamp(20px,3.4vw,44px)] lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="order-2 border-y border-foreground/15 lg:order-1">
            {layers.map((layer, index) => {
              const isActive = active === index;
              return (
                <div
                  key={layer.label}
                  className="border-b border-foreground/15 last:border-b-0"
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`technology-layer-${index}`}
                    onClick={() => setActive(index)}
                    className="group flex w-full items-center gap-[clamp(12px,2vw,22px)] py-[clamp(14px,2vw,20px)] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    <span
                      className={cn(
                        "w-7 flex-none font-sans text-[0.64rem] font-extrabold tracking-[0.14em] transition-colors duration-(--transition-fast) ease-(--ease-standard) [font-stretch:112%]",
                        isActive ? "text-primary" : "text-primary/45"
                      )}
                    >
                      {layer.no}
                    </span>
                    <span
                      className={cn(
                        "flex-1 font-sans text-[clamp(1rem,1.7vw,1.35rem)] leading-[1.16] font-extrabold tracking-[0.01em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) [font-stretch:112%]",
                        isActive
                          ? "text-foreground"
                          : "text-foreground/60 group-hover:text-foreground"
                      )}
                    >
                      {layer.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "relative h-4 w-4 flex-none transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none",
                        isActive ? "rotate-45" : "rotate-0"
                      )}
                    >
                      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-primary" />
                      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-primary" />
                    </span>
                  </button>

                  <div
                    id={`technology-layer-${index}`}
                    hidden={!isActive}
                    className="motion-safe:animate-slide-in motion-reduce:animate-none"
                  >
                    <div className="pb-[clamp(16px,2.4vw,26px)] pl-[clamp(28px,3.4vw,42px)]">
                      <p className="max-w-[54ch] text-[0.94rem] leading-[1.62] text-muted-foreground">
                        {layer.copy}
                      </p>
                      <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                        {layer.applications.map((application) => (
                          <li
                            key={application}
                            className="rounded-[2px] border border-primary/20 bg-secondary/60 px-[10px] py-[6px] text-[0.66rem] tracking-[0.04em] text-primary"
                          >
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="order-1 lg:sticky lg:top-[clamp(96px,8vw,120px)] lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden border border-accent/20 bg-sidebar lg:aspect-[4/5]">
              {layers.map((layer, index) =>
                layer.image ? (
                  <div
                    key={layer.label}
                    role={active === index && layer.alt ? "img" : undefined}
                    aria-label={
                      active === index && layer.alt ? layer.alt : undefined
                    }
                    aria-hidden={active === index && layer.alt ? undefined : true}
                    className={cn(
                      "absolute inset-0 bg-cover bg-center transition-opacity duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transition-none",
                      active === index ? "opacity-100" : "opacity-0"
                    )}
                    style={{ backgroundImage: `url(${layer.image})` }}
                  />
                ) : null
              )}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/10 to-sidebar/55"
              />

              <div className="relative flex h-full flex-col justify-between p-[clamp(16px,2.4vw,28px)] text-muted">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[0.6rem] font-semibold tracking-[0.2em] text-accent uppercase">
                    Layer {current.no} / {count}
                  </p>
                  <p className="text-[0.6rem] font-semibold tracking-[0.18em] text-muted/55 uppercase">
                    The stack
                  </p>
                </div>

                <div key={active} className="motion-safe:animate-slide-in motion-reduce:animate-none">
                  <p className="text-[0.6rem] font-semibold tracking-[0.2em] text-accent uppercase">
                    Capability
                  </p>
                  <p className="mt-2 max-w-[18ch] font-sans text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.04] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]">
                    {current.label}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-3 text-[0.68rem] leading-[1.55] text-muted-foreground/70">
              Scope capabilities, not a record of delivered platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
