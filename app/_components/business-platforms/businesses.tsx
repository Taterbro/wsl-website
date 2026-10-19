import BusinessRail, { type Sector } from "./business-rail";

const SECTORS: Sector[] = [
  {
    no: "01",
    title: "Water & Smart Infrastructure",
    description:
      "Smart water systems, solar-powered infrastructure, treatment, storage, distribution and digital monitoring for cities, industry and communities.",
    tag: "WSWIS platform",
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(95, 227, 198, 0.4), transparent 60%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "02",
    title: "Renewable Energy & Utilities",
    description:
      "Solar, storage, distributed energy, hybrid systems and clean-energy infrastructure for productive use.",
    tag: "Generation & storage",
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(218, 156, 67, 0.42), transparent 62%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "03",
    title: "Agriculture & Food Systems",
    description:
      "Agri-infrastructure, processing, agri-tech, cold chain and climate-smart agriculture.",
    tag: "Food security",
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(120, 200, 120, 0.34), transparent 62%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "04",
    title: "Technology, AI & Digital Infrastructure",
    description:
      "AI, digital platforms, data systems, automation and digital transformation.",
    tag: "Data & automation",
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(95, 227, 198, 0.32), transparent 60%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "05",
    title: "Industrial Development & Manufacturing",
    description:
      "Manufacturing, processing, technology localization, industrial facilities and strategic production partnerships.",
    tag: "Local production",
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(160, 160, 175, 0.36), transparent 62%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "06",
    title: "Real Estate, Housing & Urban Infrastructure",
    description:
      "Affordable housing, commercial development, smart-city infrastructure and sustainable buildings.",
    tag: "Urban growth",
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(218, 156, 67, 0.3), transparent 62%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "07",
    title: "Logistics & Supply Chains",
    description:
      "Warehousing, distribution, transport infrastructure, cross-border trade and supply-chain technology.",
    tag: "Trade corridors",
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(95, 180, 220, 0.34), transparent 62%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "08",
    title: "Climate & ESG Solutions",
    description:
      "Climate-resilient infrastructure, circular economy, resource efficiency and sustainable investment.",
    tag: "Resilience",
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(95, 227, 198, 0.28), rgba(218, 156, 67, 0.18) 70%, transparent), linear-gradient(160deg, #0a2a33, #06181f)",
  },
];

export default function Businesses() {
  return (
    <section
      id="businesses"
      aria-labelledby="businesses-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <BusinessRail
        title={
          <h2
            id="businesses-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Business
            <br />
            platforms
          </h2>
        }
        lede="Eight sectors where essential demand meets long-term, buildable opportunity."
        sectors={SECTORS}
      />
    </section>
  );
}
