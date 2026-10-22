import Reveal from "../../../(home)/_components/reveal";
import { CORRIDOR, LANES } from "../_data/logistics";

const NODE_X = [90, 335, 580, 825, 1070];

export default function LogisticsCorridor() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="corridor"
        aria-labelledby="corridor-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[52ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                02 — The corridor
              </p>
              <h2
                id="corridor-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                One lane,
                <br />
                every handoff.
              </h2>
            </div>
            <p className="max-w-[40ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted-foreground">
              Every corridor is a chain of custody changes. We plan the whole
              chain, then hand over one plan.
            </p>
          </div>

          <div className="mt-[clamp(26px,3.6vw,48px)] border border-[rgba(9,29,42,0.16)] bg-muted p-[clamp(14px,2vw,24px)]">
            <svg
              viewBox="0 0 1200 300"
              role="img"
              aria-label="Schematic corridor diagram showing five handoff points: origin plant, port terminal, border crossing, bonded warehouse and distribution market, across road, sea, customs, rail and road modes."
              className="h-auto w-full"
            >
              <style>{`
                .corridor-flow { stroke-dasharray: 10 12; animation: corridor-dash 3.2s linear infinite; }
                @keyframes corridor-dash { to { stroke-dashoffset: -44; } }
                @media (prefers-reduced-motion: reduce) { .corridor-flow { animation: none; } }
              `}</style>

              <line
                x1="70"
                y1="176"
                x2="1130"
                y2="176"
                stroke="#b3c4cb"
                strokeWidth="3"
              />
              <line
                x1="70"
                y1="176"
                x2="1130"
                y2="176"
                stroke="#0a2436"
                strokeWidth="3"
                className="corridor-flow"
              />

              {CORRIDOR.map((node, index) => (
                <g key={node.no}>
                  <circle
                    cx={NODE_X[index]}
                    cy="176"
                    r="15"
                    fill="#f7fafb"
                    stroke="#0a2436"
                    strokeWidth="3"
                  />
                  <circle
                    cx={NODE_X[index]}
                    cy="176"
                    r="5"
                    fill="#64d8e8"
                  />
                  <text
                    x={NODE_X[index]}
                    y="96"
                    textAnchor="middle"
                    className="fill-[#3f5b68] text-[13px] font-semibold uppercase"
                  >
                    {node.no}
                  </text>
                  <text
                    x={NODE_X[index]}
                    y="124"
                    textAnchor="middle"
                    className="fill-[#0a2436] text-[16px] font-bold uppercase"
                  >
                    {node.label}
                  </text>
                  <text
                    x={NODE_X[index]}
                    y="228"
                    textAnchor="middle"
                    className="fill-[#3f5b68] text-[13px] font-semibold uppercase"
                  >
                    {node.mode}
                  </text>
                  <text
                    x={NODE_X[index]}
                    y="254"
                    textAnchor="middle"
                    className="fill-[#6d8794] text-[12px] font-semibold uppercase"
                  >
                    {node.day}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="mt-[clamp(24px,3.4vw,44px)] overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <caption className="sr-only">
                Illustrative logistics lanes with modes, transit times and status
              </caption>
              <thead>
                <tr className="border-b border-[rgba(9,29,42,0.16)]">
                  {["Lane", "Modes", "Transit", "Status"].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="pb-[12px] pr-[clamp(12px,2vw,24px)] text-[0.62rem] font-semibold tracking-[0.16em] text-muted-foreground/70 uppercase"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LANES.map((lane) => (
                  <tr
                    key={lane.lane}
                    className="border-b border-[rgba(9,29,42,0.16)]"
                  >
                    <th
                      scope="row"
                      className="py-[clamp(10px,1.4vw,14px)] pr-[clamp(12px,2vw,24px)] font-sans text-[0.9rem] font-bold tracking-[0.04em] uppercase [font-stretch:110%]"
                    >
                      {lane.lane}
                    </th>
                    <td className="py-[clamp(10px,1.4vw,14px)] pr-[clamp(12px,2vw,24px)] text-[0.86rem] text-muted-foreground">
                      {lane.modes}
                    </td>
                    <td className="py-[clamp(10px,1.4vw,14px)] pr-[clamp(12px,2vw,24px)] text-[0.86rem] text-muted-foreground">
                      {lane.transit}
                    </td>
                    <td className="py-[clamp(10px,1.4vw,14px)] text-[0.86rem] text-muted-foreground">
                      {lane.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-[clamp(14px,1.8vw,20px)] text-[0.7rem] leading-[1.55] text-muted-foreground/70">
            PLACEHOLDER — lane names, transit times and statuses are
            illustrative and describe no actual service record.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
