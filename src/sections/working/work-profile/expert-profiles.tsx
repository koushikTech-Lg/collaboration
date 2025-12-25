"use client"

import Container from "@/components/shared/container"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"
import { motion, type Variants } from "framer-motion"
import SectionHeader from "@/components/UI/section-header"

const experts = [
    {
        id: 1,
        name: "Aditya Khemka",
        role: "Fund Manager",
        image: "/Aditya-Khemka.png",
        linkedinUrl: "https://linkedin.com/in/aditya-khemka"
    },
    {
        id: 2,
        name: "Biharilal Deora",
        role: "Asset Manager",
        image: "/biharilal.jpg",
        linkedinUrl: "https://linkedin.com/in/biharilal-deora"
    },
    {
        id: 3,
        name: "Adarsh Nahata",
        role: "Finance Head at PhonPe",
        image: "/1516502957003.jpeg",
        linkedinUrl: "https://linkedin.com/in/adarsh-nahata"
    }
]

export function ExpertsSection() {
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
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
            <Container>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Section Title */}
                    {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 lg:mb-20">
            <span className="text-gray-700">Learn from </span>
            <span className="text-cyan-500">the Experts</span>
          </h2> */}
                    <motion.div variants={itemVariants} className="text-center mb-8 lg:mb-10">
                        <SectionHeader
                            title="Experience"
                            highlight="Insights!" />
                        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-orange-500 to-transparent rounded-l-full -mt-5"></div>
                    </motion.div>


                    {/* Experts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {experts.map((expert) => (
                            <div
                                key={expert.id}
                                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                            >
                                {/* Profile Image */}
                                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 sm:mb-8">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                                        <Image
                                            src={expert.image || "/placeholder.svg"}
                                            alt={expert.name}
                                            width={300}
                                            height={300}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-500 mb-2 sm:mb-3">
                                    {expert.name}
                                </h3>

                                {/* Role */}
                                <p className="text-base sm:text-lg text-gray-500 mb-4 sm:mb-6">
                                    {expert.role}
                                </p>

                                {/* LinkedIn Button */}
                                {expert.linkedinUrl && (
                                    <a
                                        href={expert.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 group"
                                        aria-label={`${expert.name}'s LinkedIn profile`}
                                    >
                                        <FaLinkedin className="text-white text-lg sm:text-xl" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
} 