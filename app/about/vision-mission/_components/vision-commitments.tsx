import Reveal from "../../../(home)/_components/reveal";

const COMMITMENTS: {
  no: string;
  title: string;
  copy: string;
  href: string;
}[] = [
  {
    no: "01",
    title: "Build before you buy.",
    copy: "We originate and build operating assets, so value is created and managed rather than handed over at completion.",
    href: "/businesses",
  },
  {
    no: "02",
    title: "Evidence over assertion.",
    copy: "Every published figure carries a method, a reporting period and a named owner. Nothing reaches this site without one.",
    href: "/impact/sustainability",
  },
  {
    no: "03",
    title: "Africa is the foundation.",
    copy: "The group is African-founded. Capital, technology and expertise move in both directions — never only one way.",
    href: "/global-markets",
  },
  {
    no: "04",
    title: "Long horizons are permitted.",
    copy: "Infrastructure is designed to outlast the market that financed it, and is held accordingly rather than recycled.",
    href: "/investments/strategy",
  },
  {
    no: "05",
    title: "Impact stays independent.",
    copy: "Community programmes are carried by the Waterlight Save Initiative, a separate nonprofit — never styled as a commercial subsidiary.",
    href: "/impact/waterlight-save-initiative",
  },
];

export default function VisionCommitments() {
  return (
    <Reveal>
      <section
        id="vision-commitments"
        aria-labelledby="vision-commitments-title"
        className="scroll-mt-[92px] bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="max-w-[52ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              04 — What we hold ourselves to
            </p>
            <h2
              id="vision-commitments-title"
              className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Commitments we publish.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted-foreground">
              Five commitments that decide how the group works — and how it is
              judged by partners, regulators and communities.
            </p>
          </div>

          <ol className="mt-[clamp(34px,5vw,58px)] list-none border-t border-[rgba(9,29,42,0.16)] p-0">
            {COMMITMENTS.map((item) => (
              <li
                key={item.no}
                className="border-b border-[rgba(9,29,42,0.16)]"
              >
                <div className="grid grid-cols-[auto_minmax(0,0.95fr)_minmax(0,1.55fr)] items-baseline gap-x-[clamp(14px,2.4vw,36px)] gap-y-[10px] py-[clamp(20px,2.6vw,32px)] max-[900px]:grid-cols-[auto_minmax(0,1fr)]">
                  <span className="font-sans text-[0.82rem] font-extrabold tracking-[0.16em] text-chart-4 [font-stretch:112%]">
                    {item.no}
                  </span>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 font-sans text-[clamp(1.05rem,1.7vw,1.45rem)] leading-[1.15] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [font-stretch:112%]"
                  >
                    {item.title}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                  <p className="col-start-2 text-[0.95rem] leading-[1.55] text-muted-foreground max-[900px]:col-start-2">
                    {item.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-5 max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted-foreground">
            PLACEHOLDER — the commitments above are working copy pending
            approval by the group secretariat, and are published here ahead of
            their final wording.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
