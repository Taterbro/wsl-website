import Reveal from "../../../(home)/_components/reveal";
import { getApprovedStatusClaims } from "@/lib/impact";

const RECORDS: { label: string; value: string }[] = [
  {
    label: "Legal form",
    value: "Independent nonprofit organisation",
  },
  {
    label: "Relationship to Waterlight Group",
    value:
      "Separate organisation. No ownership, shared governance or financial flows.",
  },
  {
    label: "Governance",
    value:
      "The organisation's own governance. Detail to be published by the organisation.",
  },
  {
    label: "Reporting",
    value:
      "Through the organisation's own channels. External link to be confirmed.",
  },
  {
    label: "Status claims",
    value: "Not yet published. Approved wording and supporting documentation required.",
  },
  {
    label: "External site",
    value: "PLACEHOLDER URL — confirm with the owner before launch.",
  },
];

export default function AccountabilityLedger() {
  const approvedClaims = getApprovedStatusClaims();

  return (
    <section
      aria-labelledby="accountability-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="max-w-[56ch]">
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-[#7a5414] uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-chart-4"
              />
              04 — Status &amp; accountability
            </p>
            <h2
              id="accountability-title"
              className="mt-4 font-sans text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              A claim needs
              <br />
              a document.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(0.98rem,1.3vw,1.14rem)] leading-[1.6] text-foreground/65">
              Registration, nonprofit status and any external recognition are
              published only when the wording matches current supporting
              documentation. Until then, the record stays open.
            </p>
          </div>

          <dl className="mt-[clamp(28px,4vw,46px)] grid grid-cols-1 gap-px border border-foreground/15 bg-foreground/15 md:grid-cols-2">
            {RECORDS.map((record) => (
              <div
                key={record.label}
                className="bg-background p-[clamp(16px,2.3vw,26px)]"
              >
                <dt className="text-[0.54rem] font-semibold tracking-[0.14em] text-foreground/45 uppercase">
                  {record.label}
                </dt>
                <dd className="mt-2 text-[0.84rem] leading-[1.55] text-foreground/70">
                  {record.value}
                </dd>
              </div>
            ))}
          </dl>

          {approvedClaims.length > 0 ? (
            <div className="mt-[clamp(20px,2.8vw,32px)] border border-chart-4/35 bg-[color-mix(in_srgb,var(--chart-4)_7%,var(--background))] p-[clamp(16px,2.3vw,26px)]">
              <p className="text-[0.54rem] font-semibold tracking-[0.14em] text-[#7a5414] uppercase">
                Approved status claims
              </p>
              <ul className="mt-3 list-none p-0">
                {approvedClaims.map((claim) => (
                  <li
                    key={claim.id}
                    className="border-t border-foreground/10 py-3 text-[0.82rem] leading-[1.5] text-foreground/70 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <span className="block">{claim.value}</span>
                    <span className="mt-1 block text-[0.58rem] text-foreground/45">
                      Source: {claim.source}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mt-[clamp(20px,2.8vw,32px)] border border-chart-4/30 bg-[color-mix(in_srgb,var(--chart-4)_6%,var(--background))] p-[clamp(16px,2.3vw,26px)]">
              <p className="text-[0.58rem] font-semibold tracking-[0.12em] text-[#7a5414] uppercase">
                No status claim is published yet
              </p>
              <p className="mt-2 max-w-[72ch] text-[0.8rem] leading-[1.55] text-foreground/60">
                Registration, nonprofit status and external recognition wording
                will appear here only after approval against current
                documentation. No third-party logo or emblem is used.
              </p>
            </div>
          )}

          <p className="mt-5 max-w-[78ch] text-[0.6rem] leading-[1.55] text-foreground/50">
            PLACEHOLDER — status wording, registration detail and external link
            require owner and compliance review before launch. Nothing on this
            page implies a partner relationship or a financial flow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
