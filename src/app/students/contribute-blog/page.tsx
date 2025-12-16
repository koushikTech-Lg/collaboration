"use client"

import { Navbar } from "@/components/layout/navbar"
import { ContributeBlogBanner } from "@/sections/students/contribute-blog/contribute-blog-banner"
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



      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Contribute a Blog</h1>
          <p className="text-xl text-slate-600">Share your knowledge and insights with our community</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Easy Publishing", description: "Simple and intuitive publishing platform" },
            { title: "Reach Audience", description: "Share your content with thousands of users" },
            { title: "Build Portfolio", description: "Showcase your expertise and writing skills" },
            { title: "Earn Recognition", description: "Get featured and recognized for quality content" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
            Start Writing
          </button>
        </div>
      </div>
    </main>
  )
}
