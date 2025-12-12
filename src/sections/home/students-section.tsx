"use client"

import type React from "react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import Container from "@/components/shared/container"

interface StudentCard {
    id: string
    title: string
    subtitle: string
    description: string
    icon: React.ReactNode
    href: string
}

export function StudentsSection() {
    const cards: StudentCard[] = [
        {
            id: "contribute-blog",
            title: "Contribute a Blog",
            subtitle: "Share Your Knowledge",
            description:
                "Write and publish insightful blogs to share your expertise with thousands of students and professionals in your field.",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11 4a2 2 0 011.732 1H19a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6.268A2 2 0 0111 4zm0 0L9.172 2.172a2 2 0 00-2.828 0L4.343 4.343m10.864 10.864l-2.121-2.121m0 0L10.707 13.707m2.121 2.121l2.121-2.121m0 0l2.828 2.828"
                    />
                </svg>
            ),
            href: "/students/contribute-blog",
        },
        {
            id: "looking-to-intern",
            title: "Looking to Intern",
            subtitle: "Build Your Experience",
            description:
                "Find exciting internship opportunities with leading companies and gain real-world experience in your field of interest.",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            href: "/students/looking-to-intern",
        },
        {
            id: "want-to-get-hired",
            title: "Want to Get Hired",
            subtitle: "Land Your Dream Job",
            description:
                "Connect with top recruiters and companies looking for talented graduates to join their teams and grow with them.",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            href: "/students/want-to-get-hired",
        },
    ]

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    return (
        <section className="w-full py-16 px-6 bg-gradient-to-b from-white to-slate-50">
            <Container>
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-cyan-500 font-semibold text-sm mb-2">For Students</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Accelerate Your Career</h2>
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {cards.map((card) => (
                            <motion.div key={card.id} variants={cardVariants}>
                                <Link href={card.href}>
                                    <div className="group h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col">
                                        {/* Icon Container */}
                                        <div className="w-16 h-16 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                                            {card.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>

                                        {/* Subtitle */}
                                        <p className="text-sm text-slate-500 mb-4">{card.subtitle}</p>

                                        {/* Description */}
                                        <p className="text-slate-600 mb-6 flex-grow">{card.description}</p>

                                        {/* Read More Button */}
                                        <button className="px-6 py-2 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold text-sm hover:bg-slate-900 hover:text-white transition-all duration-300 w-fit">
                                            Read More
                                        </button>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
