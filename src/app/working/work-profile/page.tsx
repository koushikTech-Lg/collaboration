"use client"

import Link from "next/link"

export default function WorkProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
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
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Work Profile</h1>
          <p className="text-xl text-slate-600">Showcase your professional experience and expertise</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Professional Portfolio", description: "Build a comprehensive work portfolio" },
            { title: "Showcase Projects", description: "Display your best work and achievements" },
            { title: "Get Discovered", description: "Let opportunities come to you" },
            { title: "Industry Recognition", description: "Build credibility in your industry" },
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
            Build Profile
          </button>
        </div>
      </div>
    </main>
  )
}
