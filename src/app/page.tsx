import Image from "next/image";

import Modelos from "@/components/Modelos"
import Hero from "@/components/Hero/Hero";
import Cards from "@/components/Cards";
import Experience from "@/components/Experience/Experience";
import Depositions from "@/components/Depositions/Depositions";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

import Wp from '@/components/Wp';

export default function Home() {
  return (
    <main className="">

      <Hero />
      <Cards />
      <div className="flex justify-center pb-12">
        <Wp />
      </div>
      <Depositions />
      <div className="flex justify-center pt-12">
        <Wp />
      </div>
      <Modelos />
      <div className="flex justify-center py-12">
        <Wp />
      </div>
      <Experience />
      <Contact />
      <Footer />

    </main >
  );
}
