"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import Container from "@/components/shared/container"
import SectionHeader from "@/components/UI/section-header"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Gallery items with specific grid positions for structured layout
  const galleryItems = [
    {
      id: 1,
      src: "/slide1.png",
      alt: "Gallery Slide 1",
      className: "md:col-span-2 md:row-span-2",
      initialX: -400,
      initialY: -300,
      rotate: -25
    },
    {
      id: 2,
      src: "/slide7.png",
      alt: "Gallery Slide 2",
      className: "md:col-span-2 md:row-span-1",
      initialX: 300,
      initialY: -400,
      rotate: 20
    },
    {
      id: 3,
      src: "/slide3.png",
      alt: "Gallery Slide 3",
      className: "md:col-span-1 md:row-span-1",
      initialX: 500,
      initialY: -200,
      rotate: 35
    },
    {
      id: 4,
      src: "/slide4.png",
      alt: "Gallery Slide 4",
      className: "md:col-span-3 md:row-span-1",
      initialX: -600,
      initialY: 400,
      rotate: -30
    },
    {
      id: 5,
      src: "/slide5.png",
      alt: "Gallery Slide 5",
      className: "md:col-span-2 md:row-span-1",
      initialX: 400,
      initialY: 500,
      rotate: 40
    },
    {
      id: 6,
      src: "/slide6.png",
      alt: "Gallery Slide 6",
      className: "md:col-span-3 md:row-span-1",
      initialX: -300,
      initialY: 600,
      rotate: -40
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: (custom: { initialX: number; initialY: number; rotate: number }) => ({
      opacity: 0,
      x: custom.initialX,
      y: custom.initialY,
      rotate: custom.rotate,
      scale: 0.3
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  }

  return (
    <section className="lg:py-20 py-14 px-6 bg-gradient-to-b from-blue-50 to-white min-h-screen overflow-hidden">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Gallery</h2>
            <p className="text-lg text-slate-700">Moments from our Career Seminars</p> */}
            <SectionHeader
            title="Passed"
            highlight="Seminar"
            description="Moments from our Career Seminars" />
          </motion.div>

          {/* Structured Masonry Grid with Animated Items */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 auto-rows-[200px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                className={`${item.className} group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer bg-slate-200`}
                variants={itemVariants}
                custom={{ initialX: item.initialX, initialY: item.initialY, rotate: item.rotate }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                onClick={() => setSelectedImage(item.src)}
              >


                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    priority={item.id <= 3}
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <svg className="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://aswinibajajclasses.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-(--bg-primary) text-white rounded-full font-semibold text-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Photos
            </motion.a>

          </motion.div>
        </div>

        {/* Lightbox Modal with Animation */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotate: 10, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Thick black frame in modal too */}
              <div className="absolute inset-0 border-[16px] border-black rounded-2xl pointer-events-none z-10"></div>

              <Image
                src={selectedImage}
                alt="Gallery Preview"
                fill
                sizes="100vw"
                className="object-contain p-4"
                priority
              />

              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 bg-white hover:bg-slate-100 text-(--bg-primary) rounded-full p-3 transition-colors z-20 shadow-2xl"
                aria-label="Close modal"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  )
}