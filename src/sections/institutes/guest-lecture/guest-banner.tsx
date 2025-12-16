"use client"

import Container from "@/components/shared/container"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"

export function GuestLecturer() {
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
        <section className="relative w-full bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen pt-24 pb-16 px-6 overflow-hidden">
            <Container className="flex justify-center items-center pt-10">
                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                        <path d="M 50 10 L 90 90 L 10 90 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="absolute bottom-20 right-10 w-40 h-40 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                        <path d="M 50 10 L 90 90 L 10 90 Z" fill="currentColor" />
                    </svg>
                </div>

                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
                        {/* Left Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Label */}
                            <motion.div variants={itemVariants} className="inline-block">
                                <p className="text-orange-500 font-semibold text-lg">Associate &gt;</p>
                            </motion.div>

                            {/* Heading */}
                            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                               Guest Lecture
                            </motion.h1>

                            {/* Description */}
                            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed max-w-xl">
                               Lecturing across 80+ colleges, including 20+ IITs and IIMs, the topic for the session can range from strategy, personal finance, careers in finance, fintech, entrepreneurship, startups, growth, and productivity.


                            </motion.p>

                            {/* CTA Button */}
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                Schedule a Lecture
                            </motion.button>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div variants={itemVariants} className="relative h-96 w-[45vw] md:h-[65vh] min-h-96 right-0">
                            <Image
                                src="/images/Guest-Lecturer.png"
                                alt="Career Seminar Illustration"
                                fill
                                className="object-contain h-full w-full"
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
