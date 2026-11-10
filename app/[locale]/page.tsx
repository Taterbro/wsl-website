import { getHomePage } from "@/lib/cms/generated";

import Hero from "./(home)/_components/hero";
import GroupThesis from "./(home)/_components/group-thesis";
import Businesses from "./(home)/_components/business-platforms/businesses";
import Investments from "./(home)/_components/investments/investments";
import Innovation from "./(home)/_components/innovation/innovation";
import Africa from "./(home)/_components/africa";
import FeaturedProjects from "./(home)/_components/featured-projects/featured-projects";
import Impact from "./(home)/_components/impact/impact";
import Partner from "./(home)/_components/partner/partner";

export default async function Home() {
  const data = await getHomePage();
  console.log("gotten data is: ", data);

  return (
    <>
      <main>
        <Hero data={data.home_hero} />
        <GroupThesis data={data.group_thesis} />
        <Businesses data={data.business_platforms} />
        <Investments data={data.investments} />
        <Innovation data={data.innovation} />
        <Africa data={data.africa} />
        {/* <GlobalMarkets /> */}
        <FeaturedProjects data={data.featured_projects} />
        <Impact data={data.impact} />
        {/* <Insights /> */}
        <Partner />
      </main>
    </>
  );
}
