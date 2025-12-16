"use client"

import Container from "@/components/shared/container"
import Image from "next/image"

const partners = [
  {
    id: 1,
    name: "SVKM - Mithibai College",
    logo: "/mithibai.png",
    alt: "SVKM - Mithibai College of Arts, Chauhan Institute of Science & Amrutben Jivanlal College of Commerce and Economics",
  },
  {
    id: 2,
    name: "Calcutta Boys' School",
    logo: "/Calcutta-boys-school.png",
    alt: "Calcutta Boys' School - Est. 1877, Alipore District Distt Secretariat",
  },
  {
    id: 3,
    name: "IIM Indore",
    logo: "/iimi-logo.png",
    alt: "Indian Institute of Management Indore",
  },
  {
    id: 4,
    name: "SCMHRD",
    logo: "/Symbiosis-Centre-for-Management-and-Human-Resource-Development-SCMHRD.png",
    alt: "SCMHRD",
  },
]

export function PartneredInstitutes() {
  return (
    <section className="py-16 bg-white overflow-hidden">
        <Container>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-slate-700">Partnered </span>
          <span className="text-cyan-500">Institutes</span>
        </h2>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" /> */}

          {/* Scrolling wrapper */}
          <div className="flex ">
            {/* First set of logos */}
            <div className="flex items-center gap-16 px-8 shrink-0">
              {partners.map((partner) => (
                <div key={`first-${partner.id}`} className="flex items-center justify-center h-32  shrink-0">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.alt}
                    width={300}
                    height={120}
                    className="max-h-24 w-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-16 px-8 shrink-0" aria-hidden="true">
              {partners.map((partner) => (
                <div key={`second-${partner.id}`} className="flex items-center justify-center h-32 w-80 shrink-0">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.alt}
                    width={300}
                    height={120}
                    className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Third set for extra smooth loop */}
            <div className="flex items-center gap-16 px-8 shrink-0" aria-hidden="true">
              {partners.map((partner) => (
                <div key={`third-${partner.id}`} className="flex items-center justify-center h-32 w-80 shrink-0">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.alt}
                    width={300}
                    height={120}
                    className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}
