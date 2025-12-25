"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/UI/card"

interface KnowledgeBite {
  id: number
  title: string
  description: string
  image: string
  link: string
}

const knowledgeBites: KnowledgeBite[] = [
  {
    id: 1,
    title: "Lemon Tree Hotels Limited",
    description: "The in-house brand, Keys Lite, has agreed to a license arrangement for a 47-room hotel",
    image: "/Lemon-Tree.png",
    link: "#",
  },
  {
    id: 2,
    title: "Excel's 5 Useful Functions",
    description: "NPV & IRR are two of the most used functions when making investment decisions,",
    image: "/Excels-5.png",
    link: "#",
  },
  {
    id: 3,
    title: "Aditya Khemka",
    description: "In conversation with Aditya Khemka, Fund Manager at DSP Investment Managers",
    image: "/Aditya-Khemka.png",
    link: "#",
  },
]

export function KnowledgeBites() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Knowledge <span className="text-blue-600">Bites</span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {knowledgeBites.map((bite, index) => (
            <motion.div
              key={bite.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 border-0">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <Image
                    src={bite.image || "/placeholder.svg"}
                    alt={bite.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {bite.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed line-clamp-2">{bite.description}</p>

                  {/* Learn More Button */}
                  <button className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                    Learn more
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
