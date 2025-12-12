"use client"

import type React from "react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import Container from "@/components/shared/container"

interface WorkingCard {
    id: string
    title: string
    subtitle: string
    description: string
    icon: React.ReactNode
    href: string
}

export function WorkingSection() {
    const cards: WorkingCard[] = [
        {
            id: "want-to-hire",
            title: "Want to Hire",
            subtitle: "Find Top Talent",
            description:
                "Access a pool of skilled professionals and graduates ready to join your organization and contribute to your growth.",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
            href: "/working/want-to-hire",
        },
        {
            id: "work-profile",
            title: "Work Profile",
            subtitle: "Showcase Your Skills",
            description:
                "Create a professional profile highlighting your expertise, experience, and achievements to attract potential employers and clients.",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            href: "/working/work-profile",
        },
        {
            id: "consulting",
            title: "Consulting",
            subtitle: "Expert Advisory Services",
            description:
                "Offer your consulting expertise to organizations seeking specialized knowledge and strategic guidance for their business challenges.",
            icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            href: "/working/consulting",
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
        <section className="w-full py-16 px-6 bg-white">
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
                        <p className="text-purple-500 font-semibold text-sm mb-2">For Professionals</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Grow Your Impact</h2>
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
                                    <div className="group h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col">
                                        {/* Icon Container */}
                                        <div className="w-16 h-16 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
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
