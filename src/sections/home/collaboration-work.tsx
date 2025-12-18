"use client"

import { motion } from "framer-motion"
import Container from "@/components/shared/container"
import { IoArrowForward } from "react-icons/io5"

interface Step {
  number: string
  title: string
  description: string
}

export function CollaborationWork() {
  const steps: Step[] = [
    {
      number: "1",
      title: "Choose Your Category",
      description: "Select whether you are an Institute, Student or Professional",
    },
    {
      number: "2",
      title: "Select What You Want",
      description: "Choose from Seminar, Webinar, Workshop, training, etc",
    },
    {
      number: "3",
      title: "Submit Collaboration Request",
      description: "Fill Out Simple Form With Requirements",
    },
    {
      number: "4",
      title: "Connect & Execute",
      description: "Our team will reach out to you",
    },
  ]

  return (
    <section className="relative w-full bg-(--bg-primary) overflow-hidden">
      {/* Top Torn Paper Edge */}
      <div className="absolute -top-7 md:-top-11 left-0 w-full h-12 md:h-16 lg:h-20 z-10 pointer-events-none">
        <img
          src="/Torn-Paper-Edge-12.png"
          alt=""
          className="w-full h-full object-fill"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-0 py-20 md:py-24 lg:py-28 px-4">
        <Container>
          <div className=" mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 md:mb-16 lg:mb-20"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                How <span className="text-orange-500">Collaboration</span> Work?
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
            </motion.div>

            {/* Steps Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-6 md:gap-4 items-start justify-items-center">
              {steps.map((step, index) => (
                <>
                  {/* Step Card */}
                  <motion.div
                    key={step.number}
                    className="flex flex-col items-center text-center w-full max-w-xs"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Step Number Circle */}
                    <div className="w-16 h-16 md:w-18 md:h-18 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-2xl md:text-3xl font-bold text-(--bg-primary)">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg  font-bold text-white mb-3 px-2 min-h-[3rem] flex items-center justify-center  ">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm  text-slate-200 leading-relaxed px-2">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Arrow Between Steps */}
                  {index < steps.length - 1 && (
                    <motion.div
                      key={`arrow-${index}`}
                      className="hidden md:flex items-center justify-center h-full pt-8"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <IoArrowForward className="text-orange-500 text-3xl lg:text-4xl" />
                    </motion.div>
                  )}
                </>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Torn Paper Edge */}
      <div className="absolute -bottom-7 md:-bottom-11 left-0 w-full h-12 md:h-16 lg:h-20 z-10 pointer-events-none">
        <img
          src="/Torn-Paper-Edge-12.png"
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
    </section>
  )
}