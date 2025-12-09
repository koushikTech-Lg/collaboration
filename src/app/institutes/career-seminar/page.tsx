
import Link from "next/link"
import { Navbar } from "../../../../components/layout/navbar"

export default function CareerSeminarPage() {
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
                  d="M12 6.253v13m0-13C6.596 6.253 3 9.849 3 15.253v2.992c0 .827.67 1.5 1.5 1.5h15c.83 0 1.5-.673 1.5-1.5v-2.992c0-5.404-3.596-8.999-9-8.999z"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Career Seminar</h1>
            <p className="text-lg text-slate-600">Career Guidance In Finance and Professional Development</p>
          </div>


          {/* Content */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Program</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Career Seminars are designed to provide students and professionals with valuable insights into career
              opportunities, industry trends, and professional development strategies. Our expert speakers share
              real-world experiences and practical advice to help you navigate your career path.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you're exploring finance careers, seeking mentorship, or looking to advance your current position,
              our seminars provide the knowledge and networking opportunities you need to succeed.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Expert Speakers</h3>
              <p className="text-slate-600 text-sm">
                Learn from industry professionals with years of experience in finance and business.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
              <h3 className="font-bold text-slate-900 mb-2">Networking Opportunities</h3>
              <p className="text-slate-600 text-sm">
                Connect with peers, mentors, and potential employers in a collaborative environment.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Career Guidance</h3>
              <p className="text-slate-600 text-sm">
                Get personalized advice on career planning, resume building, and interview preparation.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
              <h3 className="font-bold text-slate-900 mb-2">Practical Insights</h3>
              <p className="text-slate-600 text-sm">
                Understand real market trends and practical strategies for career success.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
