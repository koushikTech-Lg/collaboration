
import Link from "next/link"
import { Navbar } from "../../../../components/layout/navbar"

export default function GuestLecturePage() {
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
            <div className="w-16 h-16 rounded-lg bg-blue-500 text-white flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-4-2m4 2l4-2m-12-4l4 2m-4-2l-4 2m4-2v8m12-8l-4 2m4-2l4 2m-4 2v-8m4-10h-3m3 0h.01M9 5h3M9 5h.01"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Guest Lecture</h1>
            <p className="text-lg text-slate-600">Interactive Sessions, Workshops, and Knowledge Sharing</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About Guest Lectures</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Guest Lectures bring external expertise and diverse perspectives into our learning community. These
              sessions feature accomplished professionals, researchers, and thought leaders who share their knowledge,
              experiences, and insights with our students and faculty.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From technical workshops to soft skills training, our guest lectures are designed to complement classroom
              learning and prepare students for real-world challenges and opportunities.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Expert Sessions</h3>
              <p className="text-slate-600 text-sm">
                Learn from renowned experts in their respective fields and industries.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
              <h3 className="font-bold text-slate-900 mb-2">Interactive Workshops</h3>
              <p className="text-slate-600 text-sm">
                Participate in hands-on workshops that build practical skills and competencies.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Industry Insights</h3>
              <p className="text-slate-600 text-sm">
                Gain current understanding of industry trends, challenges, and opportunities.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
              <h3 className="font-bold text-slate-900 mb-2">Q&A Interactions</h3>
              <p className="text-slate-600 text-sm">
                Directly engage with speakers and ask questions to deepen your understanding.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Register for Upcoming Session
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
