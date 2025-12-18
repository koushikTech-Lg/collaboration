"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"
import { MdEmail, MdPhone } from "react-icons/md"
import Container from "../shared/container"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants: Variants = {
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
    <footer className="w-full bg-(--bg-footer)">
      <Container>
        {/* Main Footer Content */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-10 ">
            {/* Logo & Description Section */}
            <motion.div className="flex flex-col gap-4" variants={sectionVariants}>
              <div className=" flex items-center justify-start">
                <img
                  src="/White_logo.png"
                  alt="Logo"
                  className="h-16 w-32  object-contain transition-all duration-300"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                From being an educationist to conducting finance-based training; from guest lecturing at B-schools and
                colleges across the country to heading Leveraged Growth (research and consulting).
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4 ">
                <a
                  href="#"
                  className="w-10 h-10 bg-transparent border border-gray-400  hover:border-orange-500 rounded-lg bg-opacity-20  hover:bg-opacity-30 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-transparent border border-gray-400 hover:border-orange-500 rounded-lg bg-opacity-20 hover:bg-opacity-30 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-transparent border border-gray-400  hover:border-orange-500 rounded-lg bg-opacity-20 hover:bg-opacity-30 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-transparent border border-gray-400  hover:border-orange-500 rounded-lg bg-opacity-20  hover:bg-opacity-30 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-transparent border border-gray-400  hover:border-orange-500 bg-opacity-20 rounded-lg hover:bg-opacity-30 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5 text-gray-400 hover:text-orange-500" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={sectionVariants} >
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-gray-300 via-orange-500/20 to-transparent mb-6"
              />
              <ul className="space-y-3 text-gray-400">
                <li className=" ">
                  <Link href="/" className=" text-opacity-80 hover:text-orange-400 hover:translate-x-1 transition-all duration-300 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#institutes" className=" hover:text-orange-400 text-opacity-80 hover:text-opacity-100 hover:translate-x-1 transition-all duration-300 inline-block">
                    Institutes
                  </Link>
                </li>
                <li>
                  <Link href="/#students" className=" hover:text-orange-400 text-opacity-80 hover:text-opacity-100 hover:translate-x-1 transition-all duration-300 inline-block">
                    Students
                  </Link>
                </li>
                <li>
                  <Link href="/#working" className=" hover:text-orange-400 text-opacity-80 hover:text-opacity-100 hover:translate-x-1 transition-all duration-300 inline-block">
                    Working
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className=" hover:text-orange-400 text-opacity-80 hover:text-opacity-100 hover:translate-x-1 transition-all duration-300 inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* My Verticals */}
            <motion.div variants={sectionVariants}>
              <h3 className="text-white font-semibold text-lg mb-4">My Verticals</h3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-gray-300 via-orange-500/20 to-transparent mb-6"
              />
              <ul className="space-y-3  text-gray-400">
                <li>
                  <a
                    href="https://aswinibajajclasses.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-opacity-80 hover:text-orange-400 hover:text-opacity-100 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    Aswini Bajaj Classes
                  </a>
                </li>
                <li>
                  <a
                    href="https://leveragedgrowth.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-opacity-80 hover:text-orange-500 hover:text-opacity-100 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    Leveraged Growth
                  </a>
                </li>
                <li>
                  <a
                    href="https://investinyourself.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-opacity-80 hover:text-orange-500 hover:text-opacity-100 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    Invest In Yourself
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Let's Talk */}
            <motion.div variants={sectionVariants}>
              <h3 className="text-white font-semibold text-lg mb-4">Let's Talk</h3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-gray-300 via-orange-500/20 to-transparent mb-6"
              />
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start gap-3 group">
                  <MdEmail className="w-5 h-5  mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="mailto:aswinibajaj.edu@gmail.com"
                    className=" text-opacity-80 hover:text-opacity-100 hover:underline transition-all duration-300"
                  >
                    aswinibajaj.edu@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3 group">
                  <MdPhone className="w-5 h-5  mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="tel:+919831079737"
                    className=" text-opacity-80 hover:text-opacity-100 hover:underline transition-all duration-300"
                  >
                    +91 98310 79737
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        {/* <div className="border-t border-white border-opacity-20 "> */}
             <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-tranparent via-gray-100 to-transparent "
              />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6">
            <p className="text-gray-400 text-opacity-70 text-sm">© {currentYear} Collaboration. All rights reserved.</p>
          </div>
      
      </Container>
    </footer>
  )
}