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

        {/* Background Vectors - Decorative elements */}
        <div className="absolute inset-0 w-full">
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


    </section>
  )
}