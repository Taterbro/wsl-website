import Header from "./_components/header";
import Hero from "./_components/hero";
import GroupThesis from "./_components/group-thesis";
import Businesses from "./_components/businesses";
import Investments from "./_components/investments/investments";
import ValueStages from "./_components/investments/value-stages";
import Innovation from "./_components/innovation/innovation";
import Africa from "./_components/africa";
import GlobalMarkets from "./_components/global-markets/global_markets";
import FeaturedProjects from "./_components/featured-projects/featured-projects";
import Impact from "./_components/impact/impact";
import Insights from "./_components/insights/insights";
import Partner from "./_components/partner/partner";
import Footer from "./_components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
