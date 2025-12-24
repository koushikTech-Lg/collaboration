// components/stats-counter.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { motion, type Variants } from "framer-motion"

interface Stat {
  value: number
  label: string
  suffix: string
}

interface StatsCounterProps {
  stats: Stat[]
  suffixColor?: string
  decorativeLineGradient?: string
}

function CountUpNumber({ value, suffix, suffixColor }: { value: number; suffix: string; suffixColor?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const newValue = Math.floor(progress * value)
      setDisplayValue(newValue)

      if (progress === 1) {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-(--bg-primary) mb-2">
        {displayValue}
        <span className={suffixColor}>{suffix}</span>
      </div>
    </div>
  )
}

export function StatsCounter({
  stats,
  suffixColor = "text-(--bg-primary)",
  decorativeLineGradient = "from-blue-600 to-tranparent"
}: StatsCounterProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Counters Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
            <CountUpNumber 
              value={stat.value} 
              suffix={stat.suffix} 
              suffixColor={suffixColor}
            />

            {/* Label */}
            <p className="text-slate-600 font-semibold text-base mt-4">{stat.label}</p>

            {/* Decorative line */}
            <div className={`w-12 h-1 bg-gradient-to-r ${decorativeLineGradient} rounded-full mt-6`}></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}