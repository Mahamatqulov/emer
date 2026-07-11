import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Statistics } from "@/components/Statistics";
import { Departments } from "@/components/Departments";
// import { ServicesCarousel } from '@/components/ServicesCarousel'
import { Doctors } from "@/components/Doctors";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import { WhyNovaCareSection } from "@/components/Whynovacaresection";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
        <Departments />
        {/* <ServicesCarousel /> */}
        <Doctors />
        <FAQ />
        <WhyNovaCareSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
