// "use client"

// import { useEffect, useRef, useState } from "react"
// import { useInView } from "framer-motion"
// import { motion, type Variants } from "framer-motion"
// import Container from "@/components/shared/container"

// interface Counter {
//   value: number
//   label: string
//   suffix: string
// }

// const counters: Counter[] = [
//   { value: 80, label: "Sessions Held", suffix: "+" },
//   { value: 12000, label: "Total Attendees", suffix: "+" },
//   { value: 20, label: "Panel Discussion", suffix: "+" },
// ]

// function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
//   const [displayValue, setDisplayValue] = useState(0)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   useEffect(() => {
//     if (!isInView) return

//     const duration = 2000 // 2 seconds
//     const startTime = Date.now()

//     const interval = setInterval(() => {
//       const elapsed = Date.now() - startTime
//       const progress = Math.min(elapsed / duration, 1)

//       const newValue = Math.floor(progress * value)
//       setDisplayValue(newValue)

//       if (progress === 1) {
//         clearInterval(interval)
//       }
//     }, 30)

//     return () => clearInterval(interval)
//   }, [isInView, value])

//   return (
//     <div ref={ref} className="text-center">
//       <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">
//         {displayValue}
//         <span className="text-cyan-500">{suffix}</span>
//       </div>
//     </div>
//   )
// }

// export function GuestAchievementCounter() {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   return (
//     <section className="w-full py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-slate-50">
//       <Container>
//         <motion.div
//           className="max-w-6xl mx-auto"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {/* Header */}
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               <span className="text-cyan-500">Our</span> <span className="text-slate-900">Achievements</span>
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Making a significant impact through quality education and professional development
//             </p>
//           </motion.div>

//           {/* Counters Grid */}
//           <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
//             {counters.map((counter, index) => (
//               <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
//                 <CountUpNumber value={counter.value} suffix={counter.suffix} />

//                 {/* Label */}
//                 <p className="text-slate-600 font-semibold text-lg mt-4">{counter.label}</p>

//                 {/* Decorative line */}
//                 <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-6"></div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Bottom CTA */}
//           <motion.div variants={itemVariants} className="text-center mt-16">
//             <p className="text-slate-600 mb-6 text-lg">Join thousands of students who have transformed their careers</p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200"
//             >
//               Get Started Today
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </Container>
//     </section>
//   )
// }


// app/sections/achievement-counter.tsx (or wherever your content files are)
"use client"

import { motion, type Variants } from "framer-motion"
import Container from "@/components/shared/container"
import { StatsCounter } from "@/components/UI/statscounter"
import SectionHeader from "@/components/UI/section-header"

const counters = [
 { value: 80, label: "Sessions Held", suffix: "+" },
  { value: 12000, label: "Total Attendees", suffix: "+" },
  { value: 20, label: "Panel Discussion", suffix: "+" },
]

export function GuestAchievementCounter() {
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