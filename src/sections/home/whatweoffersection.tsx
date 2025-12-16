"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Container from "@/components/shared/container"

interface SubCard {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

interface Category {
  id: string
  title: string
  image: string
  icon: React.ReactNode
  subCards: SubCard[]
}

export function WhatWeOfferSection() {
  const [activeTab, setActiveTab] = useState<string>("institutes")

  const categories: Category[] = [
    {
      id: "institutes",
      title: "For Institutes",
      image: "/institutes.png", // Replace with your actual image
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
        </svg>
      ),
      subCards: [
        {
          id: "career-seminar",
          title: "Career Seminar",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>
          ),
          href: "/institutes/career-seminar",
        },
        {
          id: "guest-lecture",
          title: "Guest Lecture",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>
          ),
          href: "/institutes/guest-lecture",
        },
        {
          id: "knowledge-partnership",
          title: "Knowledge Partnerships",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>
          ),
          href: "/institutes/knowledge-partnership",
        },
      ],
    },
    {
      id: "students",
      title: "For Students",
      image: "/students.png", // Replace with your actual image
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      subCards: [
        {
          id: "blog-contributor",
          title: "Blog Contributor",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          ),
          href: "/students/contribute-blog",
        },
        {
          id: "internship",
          title: "Internship Opportunities",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          ),
          href: "/students/looking-to-intern",
        },
        {
          id: "hiring",
          title: "Hiring Opportunities",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          ),
          href: "/students/want-to-get-hired",
        },
      ],
    },
    {
      id: "professional",
      title: "For Professional",
      image: "/working-professional.png", // Replace with your actual image
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
        </svg>
      ),
      subCards: [
        {
          id: "want-to-hire",
          title: "Want to Hire",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
          ),
          href: "/working/want-to-hire",
        },
        {
          id: "work-profile",
          title: "Work Profile",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
          ),
          href: "/working/work-profile",
        },
        {
          id: "consulting",
          title: "Consulting",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
          ),
          href: "/working/consulting",
        },
      ],
    },
  ]

  const activeCategory = categories.find((cat) => cat.id === activeTab)

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              What We <span className="text-orange-500">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-2"></div>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  activeTab === category.id
                    ? "ring-4 ring-blue-500 scale-105"
                    : "hover:scale-102"
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Card Image */}
                <div className="relative h-40 bg-gradient-to-br from-slate-200 to-slate-300">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    {category.icon}
                  </div>
                </div>

                {/* Card Title */}
                <div className="bg-white p-4">
                  <h3 className="text-lg font-bold text-blue-900">{category.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sub Cards Section */}
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {activeCategory.subCards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex flex-col h-full">
                        {/* Icon and Title */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                            {card.icon}
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 pt-2">
                            {card.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                          {card.description}
                        </p>

                        {/* Learn More Link */}
                        <Link href={card.href}>
                          <div className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all cursor-pointer group">
                            <span>Learn More</span>
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}