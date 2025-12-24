// app/sections/achievement-counter.tsx (or wherever your content files are)
"use client"


import { motion, type Variants } from "framer-motion"
import Container from "@/components/shared/container"
import { StatsCounter } from "@/components/UI/statscounter"
import SectionHeader from "@/components/UI/section-header"

const counters = [
  { value: 80, label: "Seminars Held", suffix: "+" },
  { value: 5000, label: "Students Addressed", suffix: "+" },
  { value: 40, label: "Cities Covered", suffix: "+" },
]

export function AchievementCounter() {
  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const handleGetStarted = () => {
    // Add your navigation or action logic here
    console.log("Get Started clicked")
  }

  return (
    <section className="w-full lg:py-24 py-14 px-6 bg-gradient-to-br from-white via-blue-50 to-slate-50">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-(--bg-primary)">Our</span>{" "}
              <span className="text-orange-500">Achievements</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Making a significant impact through quality education and professional development
            </p> */}
            <SectionHeader
            title="Our"
            highlight="Achievements"
            description=" Making a significant impact through quality education and professional development" 
            />
          </motion.div>

          {/* Stats Counter Component */}
          <StatsCounter
            stats={counters}
            suffixColor="text-(--bg-primary)"
            decorativeLineGradient="from-(--bg-primary) to-transparent"
          />
        </motion.div>
      </Container>
    </section>
  )
}