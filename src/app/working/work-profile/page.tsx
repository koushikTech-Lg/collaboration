"use client"

import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { ExperienceInsights } from "@/sections/working/work-profile/experience-insights"
import { ExpertsSection } from "@/sections/working/work-profile/expert-profiles"
import { WorkProfileBanner } from "@/sections/working/work-profile/workprofile-banner"
import Link from "next/link"

export default function WorkProfilePage() {
  return (
    
    <main className="w-full">
      <Navbar />
      <WorkProfileBanner />
      <ExperienceInsights />
      <ExpertsSection />
      <Footer />
    </main>
  )
}
