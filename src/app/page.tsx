import { StudentsSection } from "@/sections/home/students-section";
import { Navbar } from "../components/layout/navbar";
import { HeroBanner } from "../sections/home/hero-banner";
import { InstitutesSection } from "../sections/home/institutes-section"
import { WorkingSection } from "@/sections/home/working-section";
import { Footer } from "@/components/layout/footer";
import { WhatWeOfferSection } from "@/sections/home/whatweoffersection";


export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroBanner />
        {/* <InstitutesSection />
         <StudentsSection />
         <WorkingSection /> */}
         <WhatWeOfferSection/>  
         <Footer />
    </main>
  )
}