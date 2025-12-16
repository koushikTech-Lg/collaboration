"use client"

import Container from "@/components/shared/container"
import { Button } from "@/components/UI/button"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"

export function CareerBanner() {
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Label */}
                            <motion.div variants={itemVariants} className="inline-block">
                                <p className="text-orange-500 font-semibold text-lg">Associate &gt;</p>
                            </motion.div>

                            {/* Heading */}
                            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                                Career Seminar
                            </motion.h1>

                            {/* Description */}
                            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                Discussing CFA, CA, FRM, MBA, CS, etc. career options, and hoping that my first-hand experience in
                                cracking these exams, and lecturing at more than 80+ colleges and corporates will be helpful.
                            </motion.p>

                            {/* CTA Button */}
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                                >
                                    Analyze your career
                                </Button>
                            </motion.div>

                            {/* Right Image */}
                            <motion.div variants={itemVariants} className="relative h-96 md:h-full min-h-96">
                                <Image
                                    src="/images/career-seminar.png"
                                    alt="Career Seminar Illustration"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
