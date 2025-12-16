"use client"
import Container from "@/components/shared/container"
import { PointerHighlight } from "@/components/UI/pointer-highlight"
import { motion } from "framer-motion"

export function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen bg-[#2d4a8f] overflow-hidden flex items-center justify-center pt-32 pb-16 px-4">
      <Container>
      {/* Background Grid */}
      <div className="absolute inset-0 w-full opacity-10 z-10">
        <img 
          src="/Gird.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background Vectors - Decorative elements */}
      <div className="absolute inset-0 w-full ">
        <img 
          src="/Background_Vectors.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Midjourney Image - Abstract curved lines */}
      <div className="absolute inset-0 w-full opacity-80">
        <img 
          src="/Midjourney_Image.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d4a8f]/50 to-[#2d4a8f]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight px-4 w-full">
            A Single Platform for Institutes, Students &
            <br />
            <span className="flex justify-center gap-3">
            Professionals to
            <PointerHighlight>
            <span className="text-orange-400">Collaborate</span>
            </PointerHighlight>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-12 leading-relaxed max-w-6xl mx-auto px-4">
            Host seminars & guest lectures, publish student blogs, hire or get hired, and build academic–industry
            <br className="hidden md:block" />
            partnerships - all in one place.
          </p>

          {/* CTA Button */}
          <motion.button
            className="px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold text-sm md:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Opportunities
          </motion.button>
        </motion.div>
      </div>
      </Container>
    </section>
  )
}