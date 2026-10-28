import Hero from "./(home)/_components/hero";
import GroupThesis from "./(home)/_components/group-thesis";
import Businesses from "./(home)/_components/business-platforms/businesses";
import Investments from "./(home)/_components/investments/investments";
import Innovation from "./(home)/_components/innovation/innovation";
import Africa from "./(home)/_components/africa";
import FeaturedProjects from "./(home)/_components/featured-projects/featured-projects";
import Impact from "./(home)/_components/impact/impact";
import Insights from "./(home)/_components/insights/insights";
import Partner from "./(home)/_components/partner/partner";

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
        {/* <GlobalMarkets /> */}
        <FeaturedProjects />
        <Impact />
        <Insights />
        <Partner />
      </main>
    </>
  );
}
