import Link from "next/link"
import { Navbar } from "../../../../components/layout/navbar"

export default function KnowledgePartnershipPage() {
  return (
    <main className="w-full">
      <Navbar />

      <div className="pt-24 pb-12 px-6 bg-gradient-to-br from-slate-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="w-16 h-16 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Knowledge Partnership</h1>
            <p className="text-lg text-slate-600">Case Studies, Simulations, and Collaborative Learning</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About Knowledge Partnerships</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Knowledge Partnerships represent collaborative initiatives where organizations work together to advance
              learning, innovation, and professional development. These partnerships leverage case studies, simulations,
              and real-world scenarios to provide practical education.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Through structured partnerships, we create opportunities for students to engage with industry challenges,
              develop critical thinking skills, and prepare for professional success in a collaborative environment.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Case Study Analysis</h3>
              <p className="text-slate-600 text-sm">
                Study real-world business cases and develop problem-solving strategies.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
              <h3 className="font-bold text-slate-900 mb-2">Business Simulations</h3>
              <p className="text-slate-600 text-sm">
                Experience simulated business environments to learn decision-making and strategy.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Collaborative Projects</h3>
              <p className="text-slate-600 text-sm">
                Work on joint projects with partner organizations to build practical experience.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
              <h3 className="font-bold text-slate-900 mb-2">Industry Collaboration</h3>
              <p className="text-slate-600 text-sm">
                Partner with leading organizations to stay current with industry standards.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Join Partnership Program
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
