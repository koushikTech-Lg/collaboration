"use client"
import { ReactNode } from "react"
import Container from "@/components/shared/container"
import globeAnimation from "@/components/animations/Globe.json"
import Lottie from "lottie-react"

interface BannerBackgroundProps {
  children: ReactNode
  className?: string
}

export function BannerBackground({ children, className = "" }: BannerBackgroundProps) {
  return (
    <section className={`relative w-full min-h-screen bg-[#2d4a8f] overflow-hidden flex items-center justify-center px-4 ${className}`}>
      <Container>
        {/* Background Grid - Optional, currently commented out */}
        {/* <div className="absolute inset-0 w-full opacity-10 z-10">
          <img
            src="/Gird.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Background Vectors - Decorative elements */}
        <div className="absolute inset-0 w-full">
          <img
            src="/Background_Vectors.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Midjourney Image - Abstract curved lines */}
        <div className="absolute inset-0 w-full">
          <img
            src="/Midjourney_Image.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Globe Animation */}
        <div className="absolute opacity-50 w-36 h-36 overflow-hidden">
          <Lottie
            animationData={globeAnimation}
            loop={true}
            autoplay={true}
            className="absolute"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d4a8f]/50 to-[#2d4a8f]"></div>

        {/* Content Slot */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {children}
        </div>
      </Container>

      {/* Bottom Torn Paper Edge - Optional, currently commented out */}
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