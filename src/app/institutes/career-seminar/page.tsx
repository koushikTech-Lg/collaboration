
import Link from "next/link"
import { Navbar } from "../../../components/layout/navbar"
import { CareerBanner } from "@/sections/career-seminar/career-banner"
import { OrganizeSeminar } from "@/sections/career-seminar/organize-seminar"
import { SpeakerProfile } from "@/sections/career-seminar/speaker-profile"
import { AchievementCounter } from "@/sections/career-seminar/achievement-counter"
import { CommendationsSection } from "@/sections/career-seminar/commendations-section"
import { GallerySection } from "@/sections/career-seminar/gallery-section"
import { Footer } from "@/components/layout/footer"

export default function CareerSeminarPage() {
  return (
    <main className="w-full">
      <Navbar />
            {/* Career Banner */}
      <CareerBanner />
      <OrganizeSeminar />
      <SpeakerProfile />
      <AchievementCounter />
      <CommendationsSection />
      <GallerySection />
      <Footer/>
    </main>
  )
}
