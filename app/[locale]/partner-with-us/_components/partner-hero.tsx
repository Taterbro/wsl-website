import Link from "next/link";
import type { PartnerWithUsPartnerHero } from "@/lib/cms/generated";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border px-[clamp(18px,2.6vw,26px)] py-[clamp(11px,1.2vw,14px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const FALLBACK_DESCRIPTION =
  "Not a general inbox. Tell us who you are, and your enquiry goes directly to the team that owns that kind of partnership.";

const FALLBACK_IMAGE_ALT =
  "Water infrastructure at work (placeholder image)";

export default function PartnerHero({ data }: { data: PartnerWithUsPartnerHero }) {
  const heading = data.label || null;
  const headingLines = data.label ? data.label.split("\n") : [];
  const imageAlt = data.image
    ? data.image.alt || data.image_alt || FALLBACK_IMAGE_ALT
    : "";

  return (
    <section
      aria-labelledby="partner-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[22vw] -left-[16vw] h-[52vw] w-[52vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.18),transparent_64%)] blur-[70px]"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-[1.15fr_0.85fr] items-stretch gap-[clamp(30px,5vw,72px)] px-[clamp(20px,5vw,72px)] py-[clamp(52px,7vw,104px)] max-[960px]:grid-cols-1">
        <div className="flex flex-col justify-center">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
          >
            <Link
              href="/"
              className="text-muted/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
            >
              Home
            </Link>
            <span aria-hidden="true" className="text-muted/35">
              /
            </span>
            <span aria-current="page" className="text-accent">
              Partner With Us
            </span>
          </nav>

          <p className="mt-[clamp(22px,3vw,34px)] flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.12em] text-accent uppercase">
            <span aria-hidden="true" className="h-px w-[clamp(24px,4vw,56px)] bg-accent" />
            Build with Waterlight
          </p>

          <h1
            id="partner-hero-title"
            className="mt-4 max-w-[14ch] font-sans text-[clamp(2.5rem,6.4vw,5.4rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
          >
            {heading && headingLines.length === 2 ? (
              <>
                {headingLines[0]}
                <br />
                {headingLines[1]}
              </>
            ) : (
              heading || (
                <>
                  Build with
                  <br />
                  Waterlight.
                </>
              )
            )}
          </h1>

          <p className="mt-[clamp(18px,2.6vw,28px)] max-w-[56ch] text-[clamp(1.02rem,1.45vw,1.26rem)] leading-[1.6] text-muted/80">
            {data.description || FALLBACK_DESCRIPTION}
          </p>

          <div className="mt-[clamp(24px,3.2vw,36px)] flex flex-wrap items-center gap-3">
            <a
              href="#routes"
              className={`${BTN_BASE_CLASS} border-accent bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`}
            >
              Choose your route
            </a>
            <Link
              href="/investments/strategy"
              className={`${BTN_BASE_CLASS} border-muted/40 text-muted hover:border-accent hover:text-accent`}
            >
              Investment strategy
            </Link>
          </div>
        </div>

        <div className="relative min-h-[clamp(260px,34vw,440px)] overflow-hidden border border-accent/20 max-[960px]:min-h-[clamp(220px,46vw,340px)]">
          {data.image ? (
            <>
              <div
                role={imageAlt ? "img" : undefined}
                aria-label={imageAlt || undefined}
                aria-hidden={imageAlt ? undefined : true}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${data.image.url})` }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/30 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-[clamp(16px,2.2vw,26px)]">
                <p className="font-sans text-[clamp(0.82rem,1.3vw,1rem)] leading-[1.25] font-bold tracking-[0.02em] uppercase [font-stretch:112%]">
                  From Africa to the World.
                  <br />
                  From the World to Africa.
                </p>
                <span className="rounded-[2px] bg-accent px-3 py-1.5 font-sans text-[0.7rem] font-bold tracking-[0.08em] text-sidebar uppercase">
                  7 routes
                </span>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
