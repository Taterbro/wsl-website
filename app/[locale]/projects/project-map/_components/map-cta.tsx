import Link from "next/link";

export default function MapCta() {
  return (
    <section
      aria-labelledby="map-cta-title"
      className="bg-accent text-sidebar"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(56px,8vw,104px)]">
        <div className="grid gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1.2fr_auto] lg:items-end">
          <div className="max-w-[60ch]">
            <p className="font-sans text-[0.74rem] font-semibold tracking-[0.14em] text-sidebar/65 uppercase">
              Market enquiry
            </p>
            <h2
              id="map-cta-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              A market
              <br />
              in mind?
            </h2>
            <p className="mt-5 max-w-[52ch] text-[clamp(0.98rem,1.4vw,1.16rem)] leading-[1.6] text-sidebar/75">
              Tell us which country or corridor you are evaluating. We will route
              the enquiry to the project team and share approved detail where it
              exists.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/partner-with-us/investors?source=project-map"
              className="inline-flex items-center gap-2 rounded-[2px] border border-sidebar bg-sidebar px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-muted uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(6,21,34,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar"
            >
              Request access
            </Link>
            <Link
              href="/projects/portfolio"
              className="inline-flex items-center gap-2 rounded-[2px] border border-sidebar/35 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-sidebar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sidebar"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
