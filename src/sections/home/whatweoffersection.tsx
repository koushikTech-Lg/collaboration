"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Container from "@/components/shared/container"
import { FaGraduationCap, FaUserGraduate, FaBriefcase, FaChalkboardTeacher, FaMicrophoneAlt, FaHandshake, FaPenFancy, FaLaptopCode, FaUserTie, FaUsers, FaIdCard, FaComments } from "react-icons/fa"
import { IoArrowForward } from "react-icons/io5"

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
      image: "/institutes.png",
      icon: <FaGraduationCap className="w-8 h-8" />,
      subCards: [
        {
          id: "career-seminar",
          title: "Career Seminar",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: <FaChalkboardTeacher className="w-6 h-6" />,
          href: "/institutes/career-seminar",
        },
        {
          id: "guest-lecture",
          title: "Guest Lecture",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: <FaMicrophoneAlt className="w-6 h-6" />,
          href: "/institutes/guest-lecture",
        },
        {
          id: "knowledge-partnership",
          title: "Knowledge Partnerships",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: <FaHandshake className="w-6 h-6" />,
          href: "/institutes/knowledge-partnership",
        },
      ],
    },
    {
      id: "students",
      title: "For Students",
      image: "/students.png",
      icon: <FaUserGraduate className="w-8 h-8" />,
      subCards: [
        {
          id: "blog-contributor",
          title: "Blog Contributor",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: <FaPenFancy className="w-6 h-6" />,
          href: "/students/contribute-blog",
        },
        {
          id: "internship",
          title: "Internship Opportunities",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: <FaLaptopCode className="w-6 h-6" />,
          href: "/students/looking-to-intern",
        },
        {
          id: "hiring",
          title: "Hiring Opportunities",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: <FaUserTie className="w-6 h-6" />,
          href: "/students/want-to-get-hired",
        },
      ],
    },
    {
      id: "professional",
      title: "For Professional",
      image: "/working-professional.png",
      icon: <FaBriefcase className="w-8 h-8" />,
      subCards: [
        {
          id: "want-to-hire",
          title: "Want to Hire",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: <FaUsers className="w-6 h-6" />,
          href: "/working/want-to-hire",
        },
        {
          id: "work-profile",
          title: "Work Profile",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: <FaIdCard className="w-6 h-6" />,
          href: "/working/work-profile",
        },
        {
          id: "consulting",
          title: "Consulting",
          description: "Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra. Lorem ipsum dolor sit amet consectetur. Et nunc massa facilisis vitae pharetra.",
          icon: <FaComments className="w-6 h-6" />,
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#274185] mb-2">
              What We <span className="text-orange-500">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-2"></div>
          </div>
          </motion.div>
          {/* Category Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  activeTab === category.id
                    ? "ring-4 ring-(--bg-primary) scale-105"
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
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-(--bg-primary) rounded-full flex items-center justify-center text-white shadow-lg">
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
                          <div className="w-12 h-12 bg-(--bg-primary) rounded-lg flex items-center justify-center text-white shrink-0">
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
                            <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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