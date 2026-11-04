import Link from "next/link";

interface EventsHeaderProps {
  upcoming: number;
  recent: number;
}

export default function EventsHeader({
  upcoming,
  recent,
}: EventsHeaderProps) {
  return (
    <section
      aria-labelledby="events-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[20vw] -right-[14vw] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(46px,6vw,86px)]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium tracking-[0.06em] text-muted/55 uppercase">
            <li>
              <Link
                href="/"
                className="transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>Insights</li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-muted">
              Events
            </li>
          </ol>
        </nav>

        <div className="mt-[clamp(24px,4vw,42px)] grid gap-[clamp(26px,4vw,56px)] lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Insights · Convenings
            </p>
            <h1
              id="events-title"
              className="mt-3 font-sans text-[clamp(3.4rem,10vw,8rem)] leading-[0.84] font-extrabold tracking-[-0.015em] uppercase [font-stretch:120%]"
            >
              Events.
            </h1>
            <p className="mt-5 max-w-[54ch] text-[clamp(1rem,1.4vw,1.18rem)] leading-[1.6] text-muted/65">
              Institutional convenings, dialogues and appearances from across
              the Waterlight platform.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-[clamp(12px,2vw,26px)] border-t border-muted/20 pt-4">
            <div>
              <dt className="text-[0.56rem] font-semibold tracking-[0.14em] text-muted/45 uppercase">
                Upcoming
              </dt>
              <dd className="mt-1.5 font-sans text-[clamp(2rem,3.6vw,3.2rem)] leading-none font-extrabold text-accent tabular-nums">
                {upcoming.toString().padStart(2, "0")}
              </dd>
            </div>
            <div>
              <dt className="text-[0.56rem] font-semibold tracking-[0.14em] text-muted/45 uppercase">
                Recent
              </dt>
              <dd className="mt-1.5 font-sans text-[clamp(2rem,3.6vw,3.2rem)] leading-none font-extrabold text-muted tabular-nums">
                {recent.toString().padStart(2, "0")}
              </dd>
            </div>
            <div>
              <dt className="text-[0.56rem] font-semibold tracking-[0.14em] text-muted/45 uppercase">
                Total
              </dt>
              <dd className="mt-1.5 font-sans text-[clamp(2rem,3.6vw,3.2rem)] leading-none font-extrabold text-muted/60 tabular-nums">
                {(upcoming + recent).toString().padStart(2, "0")}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-[clamp(22px,3.2vw,34px)] flex flex-wrap items-center gap-x-[clamp(16px,3vw,36px)] gap-y-2 border-t border-muted/15 pt-4 text-[0.66rem] font-semibold tracking-[0.1em] text-muted/50 uppercase">
          <span>Placeholder listings</span>
          <span>Newest first</span>
          <span>All entries illustrative</span>
        </div>
      </div>
    </section>
  );
}
