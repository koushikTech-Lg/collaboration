// app/sections/commendations-section.tsx (or wherever your content files are)
"use client"
import Container from "@/components/shared/container"
import SectionHeader from "@/components/UI/section-header"
import { TestimonialCarousel } from "@/components/UI/testimonialcarousel"
import commendationsData from "@/data/commendations.json"

export function CommendationsSection() {
  const { commendations } = commendationsData

  return (
    <section className="lg:py-20 py-12 bg-gray-50">
      <Container>
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-(--bg-primary) mb-4">
            Commendation
          </h2>
          <p className="text-lg text-slate-600">What Our Students Say</p>
        </div> */}
        <SectionHeader 
        title="Commendation"
        description="What Our Students Say"
        />
          
      

        <TestimonialCarousel 
          testimonials={commendations} 
          autoPlayInterval={4000} 
        />
      </Container>
    </section>
  )
}