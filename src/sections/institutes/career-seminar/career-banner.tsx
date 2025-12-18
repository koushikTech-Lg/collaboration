"use client"

import { BannerBackground } from "@/components/UI/BannerBackground"
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
        <BannerBackground>
            <motion.div
                className="w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Label */}
                        {/* <motion.div variants={itemVariants} className="inline-block">
                            <p className="text-orange-500 font-semibold text-lg">Associate &gt;</p>
                        </motion.div> */}

                        {/* Heading */}
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Career <span className="text-orange-500">Seminar</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={itemVariants} className="text-lg text-slate-200 leading-relaxed max-w-xl">
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
                    </motion.div>

                    {/* Right Image */}
                    <motion.div variants={itemVariants} className="relative h-96 md:h-full min-h-96 
             [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]
             [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                        <Image
                            src="/career-seminar.png"
                            alt="Career Seminar Illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </div>
            </motion.div>
        </BannerBackground>
    )
}