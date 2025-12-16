import Link from "next/link"
import { Navbar } from "../../../components/layout/navbar"
import { KnowledgeBanner } from "@/sections/institutes/knowledge-partnership/knowledge-banner"
import { PartnershipInsights } from "@/sections/institutes/knowledge-partnership/partnership-insights"
import { PartneredInstitutes } from "@/sections/institutes/knowledge-partnership/partnered-institutes"
import { PartnerCommendationsSection } from "@/sections/institutes/knowledge-partnership/partner-commendation"
import { Footer } from "@/components/layout/footer"

export default function KnowledgePartnershipPage() {
  return (
    <main className="w-full">
      <Navbar />
      <KnowledgeBanner />
      <PartnershipInsights />
      <PartneredInstitutes />
      <PartnerCommendationsSection/>
      <Footer />
    </main>
  )
}
