import Brandmark from "../brand-mark";
import NewsletterForm from "./newsletter-form";

const LINK_CLASS =
  "text-[0.86rem] leading-[1.45] text-muted/66 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent motion-reduce:transition-none";

const GROUP_LINKS: { label: string; href: string }[] = [
  { label: "Our story", href: "#group" },
  { label: "Vision & mission", href: "#group" },
  { label: "Business platforms", href: "#businesses" },
  { label: "Innovation & WSWIS", href: "#innovation" },
  { label: "Impact & sustainability", href: "#impact" },
];

const WORK_LINKS: { label: string; href: string }[] = [
  { label: "Investment opportunities", href: "#investments" },
  { label: "Project portfolio", href: "#projects" },
  { label: "Partner with us", href: "#partner" },
  { label: "Global markets", href: "#markets" },
  { label: "Insights & newsroom", href: "#insights" },
];

const ENTITIES: { heading: string; copy: string }[] = [
  {
    heading: "Corporate entities",
    copy: "Waterlight Group · Waterlight Africa Investments Ltd · Waterlight Industries Limited · Waterlight iHEAL Global Limited · Waterlight Limited. Legal descriptions subject to verification.",
  },
  {
    heading: "Global offices",
    copy: "Africa · GCC · Europe · North America · Asia-Pacific. Addresses shown only where a verified presence exists.",
  },
  {
    heading: "Governance",
    copy: "Leadership, board and committee details are published only once formally approved and current.",
  },
];

const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Investment disclaimer", href: "#" },
  { label: "Accessibility", href: "#" },
];

export default function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="bg-sidebar pt-[clamp(56px,7vw,96px)] text-muted/72"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-[clamp(24px,3vw,48px)] pb-[clamp(40px,5vw,64px)] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          <div>
            <a
              href="#top"
              aria-label="Waterlight Group home"
              className="flex flex-none items-center gap-3"
            >
              <Brandmark className="h-[30px] w-[30px] flex-none text-muted" />
              <span className="font-sans text-[1.15rem] leading-none font-extrabold tracking-[0.06em] text-muted uppercase [font-stretch:120%]">
                Waterlight
                <span className="mt-1 block text-[0.56em] font-medium tracking-[0.42em] text-chart-4">
                  Group
                </span>
              </span>
            </a>
            <p className="mt-[18px] font-sans text-[1.05rem] leading-[1.2] font-bold text-accent uppercase [font-stretch:112%]">
              Building a sustainable future.
            </p>
            <p className="mt-[22px] max-w-[34ch] text-[0.92rem] italic leading-[1.6] text-muted/60">
              &ldquo;The value of life is determined by the problems you solve
              for others.&rdquo;
              <b className="mt-2.5 block text-[0.78rem] font-medium tracking-[0.06em] text-muted/50 not-italic uppercase">
                Founder &amp; Group CEO
              </b>
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-sans text-[0.76rem] font-bold tracking-[0.06em] text-muted uppercase [font-stretch:110%]">
              Group
            </h4>
            <ul className="flex flex-col gap-[9px] p-0">
              {GROUP_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={LINK_CLASS}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-sans text-[0.76rem] font-bold tracking-[0.06em] text-muted uppercase [font-stretch:110%]">
              Work with us
            </h4>
            <ul className="flex flex-col gap-[9px] p-0">
              {WORK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={LINK_CLASS}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-sans text-[0.76rem] font-bold tracking-[0.06em] text-muted uppercase [font-stretch:110%]">
              Stay informed
            </h4>
            <p className="text-[0.86rem] text-muted/66">
              Research, project news and insights for decision-makers.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 border-t border-accent/20 py-7 max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          {ENTITIES.map((entity) => (
            <div key={entity.heading}>
              <h5 className="mb-2 font-sans text-[0.7rem] font-bold tracking-[0.08em] text-accent uppercase [font-stretch:110%]">
                {entity.heading}
              </h5>
              <p className="text-[0.8rem] leading-[1.5] text-muted/60">
                {entity.copy}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-[18px] border-t border-accent/20 pt-[22px] pb-[34px] text-[0.76rem] text-muted/50">
          <span>© 2026 Waterlight Group. All rights reserved.</span>
          <nav aria-label="Legal" className="flex flex-wrap gap-[18px]">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent motion-reduce:transition-none"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="max-w-[100ch] border-t border-accent/20 py-5 text-[0.72rem] leading-[1.6] text-muted/42">
          This website is for information only and does not constitute an offer,
          solicitation or investment advice. Nothing here should be relied upon
          as a statement of present operations, partnerships or financial
          position. All entities, relationships, metrics and market positions
          are subject to legal and governance verification before publication.
        </p>
      </div>
    </footer>
  );
}
