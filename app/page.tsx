import Image from "next/image";
import Header from "./_components/header";
import Hero from "./_components/hero";
import GroupThesis from "./_components/group-thesis";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GroupThesis />
      </main>
    </>
  );
}
