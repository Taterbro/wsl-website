import Link from "next/link";

interface NewsHeaderProps {
  count: number;
}

export default function NewsHeader({ count }: NewsHeaderProps) {
  return (
    <section
      aria-labelledby="news-title"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(46px,6vw,84px)]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium tracking-[0.06em] text-muted-foreground uppercase">
            <li>
              <Link
                href="/"
                className="transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>Insights</li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground">
              News
            </li>
          </ol>
        </nav>

        <div className="mt-[clamp(26px,4vw,44px)]">
          <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
            Insights · Newsroom
          </p>
          <h1
            id="news-title"
            className="mt-3 max-w-[12ch] font-sans text-[clamp(3rem,9vw,7.4rem)] leading-[0.86] font-extrabold tracking-[-0.015em] uppercase [font-stretch:120%]"
          >
            News
            <br />
            &amp; Updates.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[clamp(1rem,1.4vw,1.18rem)] leading-[1.6] text-muted-foreground">
            Announcements, project milestones and institutional notes from
            across the Waterlight platform.
          </p>

          <div className="mt-[clamp(22px,3.2vw,34px)] flex flex-wrap items-center gap-x-[clamp(16px,3vw,36px)] gap-y-2 border-t border-border pt-4 text-[0.66rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
            <span>Placeholder newsroom</span>
            <span>{count.toString().padStart(2, "0")} entries</span>
            <span>Newest first</span>
          </div>
        </div>
      </div>
    </section>
  );
}
