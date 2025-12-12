"use client"

import type React from "react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import Container from "@/components/shared/container"

interface InstituteCard {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  href: string
}

export function InstitutesSection() {
  const cards: InstituteCard[] = [
    {
      id: "career-seminar",
      title: "Career Seminar",
      subtitle: "Career Guidance In Finance",
      description:
        "Explore career opportunities and gain insights from industry experts in finance and professional development.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C6.596 6.253 3 9.849 3 15.253v2.992c0 .827.67 1.5 1.5 1.5h15c.83 0 1.5-.673 1.5-1.5v-2.992c0-5.404-3.596-8.999-9-8.999z"
          />
        </svg>
      ),
      href: "/institutes/career-seminar",
    },
    {
      id: "guest-lecture",
      title: "Guest Lecture",
      subtitle: "Sessions, Workshops, Etc.",
      description:
        "Learn from renowned speakers and industry leaders through interactive sessions and hands-on workshops.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-4-2m4 2l4-2m-12-4l4 2m-4-2l-4 2m4-2v8m12-8l-4 2m4-2l4 2m-4 2v-8m4-10h-3m3 0h.01M9 5h3M9 5h.01"
          />
        </svg>
      ),
      href: "/institutes/guest-lecture",
    },
    {
      id: "knowledge-partnership",
      title: "Knowledge Partnership",
      subtitle: "Case Study, Simulations, Etc.",
      description:
        "Collaborate and partner with us on knowledge-sharing initiatives including case studies and simulations.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
      href: "/institutes/knowledge-partnership",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }


  return (
    <section className="w-full py-16 px-6 bg-white">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-500 font-semibold text-sm mb-2">Institutes</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Schools, Colleges, B-Schools</h2>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cards.map((card) => (
              <motion.div key={card.id} variants={cardVariants}>
                <Link href={card.href}>
                  <div className="group h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col">
                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>

                    {/* Subtitle */}
                    <p className="text-sm text-slate-500 mb-4">{card.subtitle}</p>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 flex-grow">{card.description}</p>

                    {/* Read More Button */}
                    <button className="px-6 py-2 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold text-sm hover:bg-slate-900 hover:text-white transition-all duration-300 w-fit">
                      Read More
                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
