"use client"

import Container from "@/components/shared/container"
import { motion, type Variants } from "framer-motion"

export function OrganizeSeminar() {
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
      title: "Offline",
      items: [
        { text: "Connect with us via", link: "mail", href: "mailto:aswinibajaj.edu@gmail.com" },
        "Organize 1 hour + 15 Minutes Q&A session at your institute",
      ],
    },
    {
      id: 2,
      title: "Online",
      items: [
        "Attend the session",
        { text: "Connect with us via", link: "mail", href: "mailto:aswinibajaj.edu@gmail.com" },
        "Organize a 30-minute Q&A Session",
      ],
    },
    {
      id: 3,
      title: "Personal",
      items: ["Attend the session", "Analyze your career", "Schedule an appointment for doubts"],
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
              Want to Organise a <span className="text-cyan-500">Career Seminar?</span>
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
                      <span>
                        {typeof item === "string" ? (
                          item
                        ) : (
                          <>
                            {item.text}{" "}
                            <a href={item.href} className="text-cyan-500 font-semibold hover:underline">
                              {item.link}
                            </a>
                          </>
                        )}
                      </span>
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
