import Header from "./_components/header";
import Hero from "./_components/hero";
import GroupThesis from "./_components/group-thesis";
import Businesses from "./_components/businesses";
import Investments from "./_components/investments";
import ValueStages from "./_components/value-stages";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GroupThesis />
        <Businesses />
        <Investments />
        <ValueStages />
      </main>
    </>
  );
}
