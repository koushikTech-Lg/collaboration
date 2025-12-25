"use client"

import { BannerBackground } from "@/components/UI/BannerBackground"
import { Button } from "@/components/UI/button"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"

export function WorkProfileBanner() {
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
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8 items-center text-left  sm:mt-[100px] lg:mt-0">
                    {/* Left Content */}
                    <motion.div variants={itemVariants} className="space-y-6 ">
                        {/* Label */} 
                        {/* <motion.div variants={itemVariants} className="inline-block">
                            <p className="text-orange-500 font-semibold text-lg">Associate &gt;</p>
                        </motion.div> */}

                        {/* Heading */}
                        <motion.h1 variants={itemVariants} className=" text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                              Work  <span className="text-orange-500">Profile</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={itemVariants} className="lg:text-lg text-sm text-slate-200 leading-relaxed max-w-xl">
                            Sharing the profiles describing their work, skills needed, etc for a variety of Finance roles.
                             This first-hand experience helps the freshers to take informed decisions.
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
                               Share your Experience 
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div variants={itemVariants} className="relative h-32 sm:h-56 lg:h-96 
             [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]
             [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                        <Image
                            src="/work-profile.png"
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
