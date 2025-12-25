"use client"

import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { ContributeBlogBanner } from "@/sections/students/contribute-blog/contribute-blog-banner"
import { ContributeCommendationsSection } from "@/sections/students/contribute-blog/contribute-commendation"
import { ContributeAchievementCounter } from "@/sections/students/contribute-blog/contribute-counter"
import { ContributeInsights } from "@/sections/students/contribute-blog/contribute-insights"
import { KnowledgeBites } from "@/sections/students/contribute-blog/knowledge-bites"
import Link from "next/link"

export default function ContributeBlogPage() {
  return (
    <main className="w-full">
 
      <Navbar />
      <ContributeBlogBanner />
      <ContributeInsights />
      <KnowledgeBites />
      <ContributeAchievementCounter />
      <ContributeCommendationsSection />
      <Footer />

    </main>
  )
}
