// File: components/UI/SeminarSection.tsx
"use client"

import { ReactNode } from "react"
import Container from "@/components/shared/container"
import { motion, type Variants } from "framer-motion"

interface SeminarSectionProps {
  children: ReactNode
  className?: string
}

export function SeminarSection({ children, className = "" }: SeminarSectionProps) {
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

  return (
    <section className={`w-full lg:py-20 py-14 bg-white ${className}`}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  )
}

// Export animation variants for reuse
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}