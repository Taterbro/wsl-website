import Reveal from "@/app/(home)/_components/reveal";

const ITEMS = [
  {
    title: "Approved summaries",
    body: "Public pages show high-level summaries only. No confidential investment material is published.",
  },
  {
    title: "Enquiry-led access",
    body: "Interested investors engage via a review process. There is no public investor login or data room on this site.",
  },
  {
    title: "Focus areas",
    body: "Priority sectors include Water & Smart Infrastructure, Energy, Agriculture & Food Systems, Technology & AI, Industry, Real Estate & Urban Infrastructure, Logistics, and Climate & ESG.",
  },
  {
    title: "Compliance",
    body: "This site contains no offer or solicitation. All enquiries are subject to applicable laws and Waterlight's review process.",
  },
];

export default function IrInformation() {
  return (
    <section
      aria-labelledby="ir-info-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="max-w-[64ch]">
          <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-accent uppercase">
            Information
          </p>
          <h2
            id="ir-info-title"
            className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Process &amp; scope
          </h2>
          <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted/80">
            Clear boundaries to keep the process disciplined and compliant.
          </p>
        </Reveal>
        <div className="mt-[clamp(30px,5vw,56px)] grid gap-4 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <Reveal
              key={item.title}
              className="relative flex h-full flex-col rounded-[2px] border border-white/10 bg-white/5 p-[clamp(22px,3.6vw,32px)] backdrop-blur-sm transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent/60"
            >
              <h3 className="font-sans text-[1.12rem] font-bold tracking-[0.03em] uppercase [font-stretch:112%]">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-[1.7] text-muted/76">
                {item.body}
              </p>
              <span className="mt-6 h-px w-10 bg-accent/80" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
