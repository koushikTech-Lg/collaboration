"use client"

import Container from "@/components/shared/container"
import { motion } from "framer-motion"
import Image from "next/image"

const sessions = [
    {
        id: 1,
        title: "Role of Finance in Strategy - IIM Kashipur",
        image: "/guest-lecture-poster-iim-kashipur-finance-strategy.jpg",
        date: "December 11th 2020",
        venue: "Indian Institute of Management Kashipur",
    },
    {
        id: 2,
        title: "Panel Discussion - Indian Stock Market",
        image: "/panel-discussion-poster-finvest-stock-market-econo.jpg",
        date: "January 8, 2022",
        venue: "FINVEST x NTSIHTA",
    },
    {
        id: 3,
        title: "FINZEAL 2.0 - DTU Guest Speaker",
        image: "/finzeal-event-poster-dtu-delhi-guest-speaker.jpg",
        date: "24th March 2023",
        venue: "Delhi School of Management, DTU",
    },
]

export function PastSessionsGallery() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
            <Container>
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-slate-700">Past </span>
                            <span className="text-cyan-500">Sessions</span>
                        </h2>
                    </motion.div>

                    {/* Gallery Grid - 3 images in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sessions.map((session, index) => (
                            <motion.div
                                key={session.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 },
                                }}
                                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] bg-gradient-to-br from-blue-100 to-cyan-100">
                                    <Image src={session.image || "/placeholder.svg"} alt={session.title} fill className="object-cover" />

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="font-bold text-lg mb-2">{session.title}</h3>
                                            <p className="text-sm text-slate-200 mb-1">{session.venue}</p>
                                            <p className="text-xs text-cyan-300">{session.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
