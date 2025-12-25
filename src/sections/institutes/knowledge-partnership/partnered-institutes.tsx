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
    <section className="relative w-full bg-(--bg-primary) overflow-hidden">
      {/* Top Torn Paper Edge */}
      <div className="absolute -top-4 sm:-top-6 md:-top-11 left-0 w-full h-8 sm:h-10 md:h-16 lg:h-20 z-10 pointer-events-none">
        <img
          src="/Torn-Paper-Edge-12.png"
          alt=""
          className="w-full h-full object-fill"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-0 py-12 sm:py-16 md:py-20 lg:py-28 px-2 sm:px-4">
        <Container>
          <div className="mx-auto">
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8   px-4">
              <span className="text-white">Partnered </span>
              <span className="text-orange-500">Institute</span>
            </h2>
           <div className="w-16 h-1 mx-auto bg-gradient-to-r from-orange-500 to-transparent rounded-l-full mb-5"></div>

            {/* Logos Container */}
            <div className="relative">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-(--bg-primary) to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-(--bg-primary) to-transparent z-10 pointer-events-none" />

              {/* Logos Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center items-center">
                {partners.map((partner) => (
                  <div 
                    key={partner.id} 
                    className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32 w-full"
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.alt}
                      width={300}
                      height={120}
                      className="max-h-16 sm:max-h-20 md:max-h-24 w-auto object-contain brightness-0 invert transition-all duration-300 hover:brightness-100 hover:invert-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Torn Paper Edge */}
      <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-11 left-0 w-full h-8 sm:h-10 md:h-16 lg:h-20 z-10 pointer-events-none">
        <img
          src="/Torn-Paper-Edge-12.png"
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
    </section>
  )
}