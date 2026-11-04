const ENTITIES: {
  name: string;
  role: string;
  copy: string;
  href: string;
  badge?: string;
}[] = [
  {
    name: "Waterlight Group",
    role: "Master brand",
    copy: "The corporate and global-facing identity of the group.",
    href: "/about/group-structure",
  },
  {
    name: "Waterlight Africa Investments Ltd",
    role: "Investment & project development",
    copy: "The capital platform for origination, project development and strategic partnerships.",
    href: "/companies/waterlight-africa-investments",
  },
  {
    name: "Waterlight Industries Limited",
    role: "Industrial development & manufacturing",
    copy: "Industrial development, processing and production platform.",
    href: "/companies/waterlight-industries",
  },
  {
    name: "Waterlight iHEAL Global Limited",
    role: "Human capital & impact enterprise",
    copy: "Innovation, entrepreneurship, human capital and impact-oriented enterprise platform.",
    href: "/companies/waterlight-iheal-global",
  },
  {
    name: "Waterlight Limited",
    role: "Corporate & strategic ventures",
    copy: "Ventures carried out strictly under its legally approved mandate.",
    href: "/companies/waterlight-limited",
  },
  {
    name: "Waterlight Save Initiative",
    role: "Independent nonprofit",
    copy: "A separate nonprofit development organisation — never presented as a commercial subsidiary.",
    href: "/impact/waterlight-save-initiative",
    badge: "Independent nonprofit",
  },
];

export default function StoryEntities() {
  return (
    <section
      id="story-entities"
      aria-labelledby="story-entities-title"
      className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="mb-[clamp(30px,4vw,48px)] flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[54ch]">
            <p className="mb-5 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              Group architecture
            </p>
            <h2
              id="story-entities-title"
              className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              One group. Five companies.
            </h2>
          </div>
          <a
            href="/about/group-structure"
            className="inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-current bg-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-foreground hover:text-muted"
          >
            Group structure
          </a>
        </div>

        <div className="grid grid-cols-3 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          {ENTITIES.map((entity) => (
            <article
              key={entity.name}
              className="flex flex-col gap-[14px] bg-background p-[clamp(22px,3vw,38px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-secondary"
            >
              {entity.badge && (
                <span className="inline-flex w-fit items-center gap-2 rounded-[2px] border border-chart-4/16 px-3 py-[7px] text-[0.7rem] font-semibold tracking-[0.09em] text-[#855c18] uppercase">
                  {entity.badge}
                </span>
              )}
              <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-primary uppercase">
                {entity.role}
              </span>
              <h3 className="font-sans text-[1.15rem] leading-[1.14] font-extrabold uppercase [font-stretch:114%]">
                {entity.name}
              </h3>
              <p className="flex-1 text-[0.92rem] leading-[1.55] text-muted-foreground">
                {entity.copy}
              </p>
              <div className="border-t border-[rgba(9,29,42,0.16)] pt-3">
                <a
                  href={entity.href}
                  className="text-[0.78rem] font-semibold text-foreground transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
                >
                  Read more
                  <span aria-hidden="true" className="ml-1.5">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
