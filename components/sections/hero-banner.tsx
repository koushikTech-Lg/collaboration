"use client"

export function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Collaboration
            </span>
            {" | "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Creation
            </span>
            {" | "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
        </div>

        {/* Tagline */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed text-balance">
            <span className="font-semibold text-white">If you want to go fast, walk ALONE.</span>
            <br />
            <span className="font-semibold text-white">If you want to go far, walk TOGETHER.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-slate-300/30 text-slate-300 rounded-full font-semibold hover:bg-white/5 hover:border-slate-300/60 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-slate-400">Scroll to explore</span>
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
