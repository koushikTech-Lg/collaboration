
import Link from "next/link"
import { Navbar } from "../../../components/layout/navbar"
import { GuestLecturer } from "@/sections/institutes/guest-lecture/guest-banner"
import { LectureInsights } from "@/sections/institutes/guest-lecture/lecture-insights"
import { GuestSpeakerProfile } from "@/sections/institutes/guest-lecture/guest-speaker-profile"
import { GuestAchievementCounter } from "@/sections/institutes/guest-lecture/guest-achievement-counter"
import { GuestCommendationsSection } from "@/sections/institutes/guest-lecture/guest-commendation-section"
import { PastSessionsGallery } from "@/sections/institutes/guest-lecture/past-sessions-gallery"
import { Footer } from "@/components/layout/footer"

export default function GuestLecturePage() {
  return (
    <main className="w-full">
      <Navbar />
    <GuestLecturer />
    <LectureInsights />
  <GuestSpeakerProfile />
  <GuestAchievementCounter />
  <GuestCommendationsSection />
  <PastSessionsGallery />
  <Footer />

    </main>
  )
}
