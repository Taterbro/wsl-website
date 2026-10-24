import Link from "next/link";

interface FlagshipHeaderProps {
  count: number;
}

export default function FlagshipHeader({ count }: FlagshipHeaderProps) {
  return (
    <section
      aria-labelledby="flagship-title"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(48px,7vw,92px)]">
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
            <li>Projects</li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground">
              Flagship Projects
            </li>
          </ol>
        </nav>

        <div className="mt-[clamp(28px,4vw,48px)] grid gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1.5fr_0.6fr] lg:items-end">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
              Projects · Selected for scale and relevance
            </p>
            <h1
              id="flagship-title"
              className="mt-4 font-sans text-[clamp(2.8rem,8vw,6.8rem)] leading-[0.86] font-extrabold tracking-[-0.015em] uppercase [font-stretch:120%]"
            >
              Flagship
              <br />
              Projects
            </h1>
            <p className="mt-6 max-w-[60ch] text-[clamp(1rem,1.5vw,1.22rem)] leading-[1.65] text-muted-foreground">
              The projects that best express the platform in practice: defined
              infrastructure, a clear development path and a partner need.
              Published only after internal approval.
            </p>
          </div>

          <div className="border-t-2 border-primary pt-4">
            <p className="text-[0.68rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Published flagships
            </p>
            <p className="mt-2 font-sans text-[clamp(3.4rem,6vw,5.4rem)] leading-none font-extrabold text-primary">
              {count.toString().padStart(2, "0")}
            </p>
            <p className="mt-3 text-[0.76rem] leading-[1.5] text-muted-foreground">
              Illustrative records · placeholder data pending approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
