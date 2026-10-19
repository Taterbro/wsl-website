import Hero from "./_components/hero";
import GroupThesis from "./_components/group-thesis";
import Businesses from "./_components/business-platforms/businesses";
import Investments from "./_components/investments/investments";
import Innovation from "./_components/innovation/innovation";
import Africa from "./_components/africa";
import GlobalMarkets from "./_components/global-markets/global_markets";
import FeaturedProjects from "./_components/featured-projects/featured-projects";
import Impact from "./_components/impact/impact";
import Insights from "./_components/insights/insights";
import Partner from "./_components/partner/partner";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <GroupThesis />
        <Businesses />
        <Investments />
        <Innovation />
        <Africa />
        <GlobalMarkets />
        <FeaturedProjects />
        <Impact />
        <Insights />
        <Partner />
      </main>
    </>
  );
}
