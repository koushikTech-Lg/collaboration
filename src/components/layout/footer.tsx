"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import Container from "../shared/container"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants: Variants  = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <footer className="w-full" style={{ backgroundColor: "#274185" }}>
        <Container>
      {/* Main Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description Section */}
          <motion.div className="flex flex-col gap-6" variants={sectionVariants}>
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">CB</span>
            </div>
            <p className="text-white text-sm leading-relaxed">
              From being an educationist to conducting finance-based training; from guest lecturing at B-schools and
              colleges across the country to heading Leveraged Growth (research and consulting).
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-all flex items-center justify-center"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.266-.07-1.644-.07-4.85 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.069 4.85-.069zm0-2.163C8.741 0 8.332.012 7.052.07 2.697.272.273 2.69.07 7.052.012 8.333 0 8.741 0 12c0 3.259.012 3.668.07 4.948.202 4.358 2.612 6.78 6.97 6.984 1.281.058 1.69.07 4.948.07 3.259 0 3.668-.012 4.948-.07 4.354-.205 6.782-2.632 6.984-6.99.058-1.28.07-1.689.07-4.948 0-3.259-.012-3.668-.07-4.948-.202-4.354-2.628-6.782-6.984-6.984C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-all flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-all flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.51 9.86 9.86 0 01-2.836.772 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={sectionVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white text-opacity-80 hover:text-opacity-100 transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#institutes" className="text-white text-opacity-80 hover:text-opacity-100 transition-all">
                  Institutes
                </Link>
              </li>
              <li>
                <Link href="/#students" className="text-white text-opacity-80 hover:text-opacity-100 transition-all">
                  Students
                </Link>
              </li>
              <li>
                <Link href="/#working" className="text-white text-opacity-80 hover:text-opacity-100 transition-all">
                  Working
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-opacity-80 hover:text-opacity-100 transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* My Verticals */}
          <motion.div variants={sectionVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">My Verticals</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://aswinibajajclasses.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all"
                >
                  Aswini Bajaj Classes
                </a>
              </li>
              <li>
                <a
                  href="https://leveragedgrowth.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all"
                >
                  Leveraged Growth
                </a>
              </li>
              <li>
                <a
                  href="https://investinyourself.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all"
                >
                  Invest In Yourself
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Let's Talk */}
          <motion.div variants={sectionVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">Let's Talk</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:aswinibajaj.edu@gmail.com"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all"
                >
                  aswinibajaj.edu@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a
                  href="tel:+919831079737"
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all"
                >
                  +91 98310 79737
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-white border-opacity-20 my-12"></div> */}

        {/* Upcoming Event Banner */}
        {/* <motion.div className="bg-white rounded-2xl p-8 flex items-center justify-between" variants={sectionVariants}>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📅</span>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold text-lg">Upcoming Event</h3>
            </div>
          </div>
          <a
            href="#"
            className="text-slate-900 font-semibold hover:text-blue-600 transition-all whitespace-nowrap ml-4"
          >
            To know more about the upcoming event click here
          </a>
        </motion.div> */}
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-white border-opacity-20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-opacity-70 text-sm">© {currentYear} Collaboration. All rights reserved.</p>
        </div>
      </div>
      </Container>
    </footer>
  )
}
