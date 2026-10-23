import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";

// PLACEHOLDER — corridor stack copy and imagery are illustrative until approved
// sector content is supplied.
const LAYERS: { code: string; title: string; copy: string }[] = [
  {
    code: "L-01",
    title: "Corridor",
    copy: "Road, rail and port links set the route between origin and market.",
  },
  {
    code: "L-02",
    title: "Nodes",
    copy: "Warehouses and inland hubs hold, handle and consolidate the flow.",
  },
  {
    code: "L-03",
    title: "Flow",
    copy: "Distribution moves goods from regional depots to last mile.",
  },
  {
    code: "L-04",
    title: "Control",
    copy: "Supply-chain technology makes every hand-off visible and manageable.",
  },
];

export default function CorridorStack() {
  return (
    <section
      aria-labelledby="logistics-stack-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <Image
        src="/placeholders/logistics-corridor.png"
        alt="Freight corridor with road, rail and inland logistics infrastructure (placeholder image)"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-sidebar/95 via-sidebar/80 to-sidebar/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-sidebar/70 via-transparent to-sidebar/30"
      />

      <div className="relative mx-auto flex min-h-[clamp(560px,74vh,780px)] w-full max-w-[1440px] items-center px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,140px)]">
        <Reveal className="w-full max-w-[700px] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="border border-accent/25 bg-sidebar/88 p-[clamp(20px,3.2vw,40px)] backdrop-blur-md">
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              04 — Corridor stack
            </p>
            <h2
              id="logistics-stack-title"
              className="mt-4 max-w-[16ch] font-sans text-[clamp(2rem,4.2vw,3.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              One corridor.
              <br />
              Four layers.
            </h2>
            <p className="mt-4 max-w-[48ch] text-[clamp(0.92rem,1.2vw,1.05rem)] leading-[1.6] text-muted/70">
              Freight only creates value when the route, the nodes, the flow and
              the control layer work as one system. We structure all four
              together.
            </p>

            <ol className="mt-[clamp(20px,3vw,30px)] border-t border-accent/20">
              {LAYERS.map((layer) => (
                <li
                  key={layer.code}
                  className="grid grid-cols-[auto_1fr] gap-x-[clamp(14px,2.4vw,26px)] gap-y-1 border-b border-accent/20 py-[clamp(12px,1.8vw,18px)]"
                >
                  <span className="font-sans text-[0.6rem] font-semibold tracking-[0.14em] text-accent uppercase tabular-nums">
                    {layer.code}
                  </span>
                  <div>
                    <h3 className="font-sans text-[clamp(0.95rem,1.4vw,1.15rem)] leading-[1.1] font-extrabold tracking-[0.01em] uppercase [font-stretch:108%]">
                      {layer.title}
                    </h3>
                    <p className="mt-1 text-[0.8rem] leading-[1.55] text-muted/65">
                      {layer.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-[clamp(18px,2.6vw,26px)] flex flex-wrap items-center justify-between gap-4">
              <a
                href="/businesses/technology-digital-infrastructure"
                className="inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent"
              >
                Supply-chain technology
                <span aria-hidden="true">↗</span>
              </a>
              <p className="max-w-[34ch] text-[0.56rem] leading-[1.5] text-muted/60">
                PLACEHOLDER — corridor imagery and layer copy are illustrative
                until approved sector content and photography are supplied.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="absolute top-[clamp(16px,2.4vw,30px)] right-[clamp(20px,5vw,72px)] border border-accent/35 bg-sidebar/80 px-2.5 py-1.5 text-[0.56rem] font-semibold tracking-[0.14em] text-accent uppercase">
        Corridor stack — 04
      </p>
    </section>
  );
}
