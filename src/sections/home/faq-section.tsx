"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Plus, Minus } from "lucide-react"
import Container from "@/components/shared/container"

interface FAQItem {
  id: number
  question: string
  answer: string
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 bg-gray-50">
      <Container>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 rounded-full text-sm font-semibold">
              FAQ
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-(--bg-primary) mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Find answers to common questions about our services and offerings
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white"
              >
                <div
                  className={`relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                    isOpen ? "shadow-lg ring-2 ring-gray-500/20" : ""
                  }`}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-gray-500/10 to-white-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${isOpen ? "opacity-100" : ""}`} />

                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="relative z-10 w-full flex items-center justify-between p-2 md:p-5 text-left group/button"
                  >
                    <div className="flex items-start gap-4 md:gap-6 flex-1">
                      {/* Animated Number Badge */}
                      <motion.div
                        animate={{
                          scale: isOpen ? 1.1 : 1,
                          rotate: isOpen ? 360 : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                          isOpen
                            ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg"
                            : "bg-slate-100 text-slate-400 group-hover/button:bg-orange-50 group-hover/button:text-orange-500"
                        }`}
                      >
                        {String(faq.id).padStart(2, "0")}
                      </motion.div>

                      {/* Question Text */}
                      <h3
                        className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                          isOpen ? "text-slate-900" : "text-slate-700 group-hover/button:text-slate-900"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Animated Icon Button */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-orange-500 text-white shadow-lg"
                          : "bg-slate-100 text-slate-400 group-hover/button:bg-orange-50 group-hover/button:text-orange-500"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* Answer Content with Smooth Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: {
                            height: {
                              duration: 0.4,
                              ease: [0.04, 0.62, 0.23, 0.98]
                            },
                            opacity: {
                              duration: 0.3,
                              delay: 0.1
                            }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: {
                              duration: 0.3,
                              ease: [0.04, 0.62, 0.23, 0.98]
                            },
                            opacity: {
                              duration: 0.2
                            }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 md:px-8 pb-6 md:pb-8"
                        >
                          {/* Decorative Line */}
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-px bg-gradient-to-r from-orange-500/50 via-orange-500/20 to-transparent mb-6"
                          />

                          {/* Answer Text with Staggered Animation */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="pl-0 md:pl-[4.5rem]"
                          >
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                              {faq.answer}
                            </p>

                            {/* Optional: Add a "Learn More" link */}
                            <motion.a
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 }}
                              href="#"
                              className="inline-flex items-center gap-2 mt-4 text-orange-600 hover:text-orange-700 font-semibold group/link"
                            >
                              Learn more
                              <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="group-hover/link:translate-x-1 transition-transform"
                              >
                                →
                              </motion.span>
                            </motion.a>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      </Container>
    </section>
  )
}