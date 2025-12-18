"use client"
import Container from "@/components/shared/container"
import { motion } from "framer-motion"
import waveLoopAnimation from "@/components/animations/wave-loop.json"
import Lottie from "lottie-react"

export function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen bg-[#2d4a8f] overflow-hidden flex items-center justify-center  px-4">
      <Container>
        {/* Background Grid */}
        {/* <div className="absolute inset-0 w-full opacity-10 z-10">
          <img
            src="/Gird.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Background Vectors - Decorative elements */}
        <div className="absolute inset-0 w-full ">
          <img
            src="/Background_Vectors.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Midjourney Image - Abstract curved lines */}
        <div className="absolute inset-0 w-full ">
          <img
            src="/Midjourney_Image.png"
            alt=""
            className="w-full h-full object-cover"
          />

        </div>
        <div className="absolute left-0 w-full h-full  overflow-hidden ">
          <Lottie
            animationData={waveLoopAnimation}
            loop={true}
            autoplay={true}
            className="absolute "
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d4a8f]/50 to-[#2d4a8f]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-0 md:mb-8 leading-tight px-4 md:pt-10 pt-0 w-full">
              A Single Platform for Institutes, Students &
              <br />

              Professionals to{" "}

              <span className="text-orange-400">Collaborate</span>


            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Subheading */}
            <p className="text-base sm:text-base md:text-lg text-slate-200 mb-8 md:mb-12 leading-relaxed max-w-6xl mx-auto px-4">
              Host seminars & guest lectures, publish student blogs, hire or get hired, and build academic–industry
              <br className="hidden md:block" />
              partnerships - all in one place.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

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
      {/* Bottom Torn Paper Edge */}
      {/* <div className="absolute -bottom-7 md:-bottom-11 left-0 w-full h-12 md:h-16 lg:h-20 z-10 pointer-events-none">
        <img
          src="/Torn-Paper-Edge-12.png"
          alt=""
          className="w-full h-full object-fill"
        />
      </div> */}
    </section>
  )
}