// components/testimonial-carousel.tsx
"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

interface Testimonial {
  id: number
  name: string
  image: string
  testimonial: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number
}

export function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 4000
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [activeIndex, autoPlayInterval])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 600)
  }

  const handleAvatarClick = (index: number) => {
    if (isAnimating || index === activeIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex(index)
      setIsAnimating(false)
    }, 600)
  }

  // Get visible testimonials (active one in middle)
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + testimonials.length) % testimonials.length
      visible.push({ ...testimonials[index], originalIndex: index, position: i })
    }
    return visible
  }

  const visibleTestimonials = getVisibleTestimonials()
  const activeTestimonial = testimonials[activeIndex]

  return (
    <div className="min-h-600px flex items-center justify-center relative overflow-hidden">
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl bg-white p-5 flex flex-col md:flex-row gap-8 md:gap-16">

        {/* Avatar List - Vertical on mobile, Left side on desktop */}
        <div className="shrink-0 w-full md:w-64">
          {/* Avatar List with Connecting Lines */}
          <div className="relative h-full">
            {/* Connecting Line - Horizontal on mobile, Vertical on desktop */}
            <div className="absolute md:left-8 left-0 md:top-0 top-8 md:bottom-0 md:w-0.5 w-full md:h-full h-0.5 bg-gray-300"></div>

            {/* Avatars - Horizontal on mobile, Vertical on desktop */}
            <div className="relative flex md:flex-col md:space-y-20 space-x-10 md:space-x-0 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 h-full justify-center">
              {visibleTestimonials.map((testimonial) => {
                const isActive = testimonial.position === 0
                const scale = isActive ? 1.3 : 0.8
                const opacity = isActive ? 1 : 0.4

                return (
                  <div
                    key={testimonial.id}
                    onClick={() => handleAvatarClick(testimonial.originalIndex)}
                    className="relative cursor-pointer transition-all duration-500 shrink-0"
                    style={{
                      transform: `scale(${scale}) ${isActive ? 'md:translateX(10px) translateY(10px)' : ''}`,
                      opacity: opacity,
                      zIndex: isActive ? 10 : 1
                    }}
                  >
                    {/* Horizontal connection line for desktop */}
                    <div className={`${isActive ? 'w-7.5' : 'w-5'} ${opacity} hidden md:block absolute left-0 top-1/2 h-0.5 bg-gray-300 transition-all duration-500 -translate-y-1/2`}
                    ></div>

                    {/* Vertical connection line for mobile */}
                    <div
                      className="md:hidden absolute left-1/2 top-0 w-0.5 bg-gray-300 transition-all duration-500 -translate-x-1/2 mt-5"
                      style={{
                        height: isActive ? '30px' : '20px',
                        opacity: opacity
                      }}
                    ></div>

                    {/* Avatar Container */}
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 md:ml-8 mt-12 md:mt-0">
                      <div
                        className={`rounded-full overflow-hidden border-2 transition-all duration-500 size-20 ${isActive
                            ? 'border-(--text-primary) shadow-lg shadow-blue-500/30 size-20'
                            : 'border-gray-200 size-10'
                          }`}
                      >
                        <Image
                          width={500}
                          height={500}
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className=" object-cover"
                        />
                      </div>

                      {/* Name - Below avatar on mobile, Right side on desktop */}
                      {isActive && (
                        <div className="animate-fadeIn text-center md:text-left">
                          <h3 className="text-sm md:text-lg font-semibold text-gray-800 whitespace-nowrap">
                            {testimonial.name}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Side - Testimonial Text */}
        <div className="flex-1 flex items-center ">
          <div
            className={`bg-white  rounded-3xl p-6 md:p-8 shadow-lg border-l-4 border-(--text-primary) transition-all duration-600 w-full ${isAnimating
                ? 'opacity-0 translate-y-4'
                : 'opacity-100 translate-y-0'
              }`}
          >
            {/* Large Quote Mark */}
            <div className="text-5xl md:text-8xl font-serif text-gray-300 leading-none ">
              "
            </div>

            {/* Testimonial Text */}
            <p className="text-sm md:text-base text-gray-600 italic leading-relaxed font-light">
              {activeTestimonial.testimonial}
            </p>

            {/* Author Name at Bottom */}
            <div className="mt-4 pt-4  border-t border-gray-200">
              <h3 className="text-xs md:text-sm font-semibold text-gray-800">
                {activeTestimonial.name}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        /* Hide scrollbar for mobile horizontal scroll */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}