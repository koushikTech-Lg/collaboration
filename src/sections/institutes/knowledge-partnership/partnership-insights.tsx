"use client"

import Container from "@/components/shared/container"
import { motion, type Variants } from "framer-motion"

export function PartnershipInsights() {
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
            title: "Research Insights",
            items: [
                "Delving deeper into the latest financial news to provide valuable insights into personal finance and global economics.",
            ],
        },
        {
            id: 2,
            title: "Training Modules",
            items: [
                "Niche areas of Finance, providing training of Equity, Derivatives, Finance for Non- Finance, and much more."
            ],
        },
        {
            id: 3,
            title: "Competitions",
            items: ["We provide support to various colleges and organizations for curating rounds and judging for various events."],
        },
    ]

    return (
        <section className="w-full py-20 px-6 bg-white">
            <Container>
                <motion.div
                    className="max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Title */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-700">
                            Partnership <span className="text-cyan-500">Insights!</span>
                        </h2>
                    </motion.div>

                    {/* Three Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {seminars.map((seminar) => (
                            <motion.div key={seminar.id} variants={itemVariants} className="space-y-6">
                                {/* Top Border */}
                                <div className="h-1 w-16 bg-gradient-to-r from-slate-400 to-slate-300"></div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-slate-800">{seminar.title}</h3>

                                {/* Items List */}
                                <ul className="space-y-4">
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
                </motion.div>
            </Container>
        </section>
    )
}
