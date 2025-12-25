"use client"

import Container from "@/components/shared/container"
import SectionHeader from "@/components/UI/section-header"
import { SeminarSection } from "@/components/UI/seminar-section"
import { motion, type Variants } from "framer-motion"
import { FiVideo, FiMapPin, FiUser } from "react-icons/fi"

export function ExperienceInsights() {
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

    const seminars = [
        {
            id: 1,
             icon: FiVideo,
            title: "What?",
            items: [
                "Provide insights from your experience to mentor newcomers about your position. Highlighting a few points like: daily routine, skills, advice, etc.",
            ],
        },
        {
            id: 2,
             icon: FiMapPin,
            title: "Why?",
            items: [
                "Your firsthand experience in your profession can provide valuable guidance to newcomers, enabling them to achieve their goals with ease and confidence."
            ],
        },
        {
            id: 3,
            icon: FiUser,
            title: "Whom?",
            items: ["Newly hired colleagues, Individuals interested in your field, Junior professionals seeking mentorship, those looking to learn from your experiences."],
        },
    ]

    return (
          <SeminarSection>
                    {/* Title */}
                    <motion.div variants={itemVariants} className="text-center mb-8 lg:mb-10">
                        <SectionHeader
                            title="Experience"
                            highlight="Insights!" />
                        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-orange-500 to-transparent rounded-l-full -mt-5"></div>
                    </motion.div>
        
                    {/* Three Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8">
                        {seminars.map((seminar) => (
                            <motion.div
                                key={seminar.id}
                                variants={itemVariants}
                                className="space-y-6 bg-gray-50 lg:p-8 p-4 rounded-lg"
                            >
                                <div className="flex gap-3">
                                    <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-b from-[#0076B7] to-[#01184F] rounded-full shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:rounded-full before:blur-sm">
                                        <seminar.icon className="w-5 h-5 text-white relative z-10" />
                                        {/* Water drop shine effect */}
                                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-white/30 rounded-full blur-sm"></div>
                                    </div>
        
                                    {/* Title */}
                                    <h3 className="lg:text-2xl text-lg font-bold text-slate-800">{seminar.title}</h3>
                                </div>
                                {/* Items List */}
                                <ul className="lg:space-y-4 space-y-2">
                                    {seminar.items.map((item, index) => (
                                        <li key={index} className="flex items-start text-slate-600">
                                            <span className="text-cyan-500 mr-3 text-lg font-bold">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </SeminarSection>
    )
}
