// File: components/SpeakerProfile.tsx
"use client"

import { SpeakerProfileSection, itemVariants } from "@/components/UI/profile-section"
import SectionHeader from "@/components/UI/section-header"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaGraduationCap, FaChalkboardTeacher, FaUniversity, FaBriefcase, FaBuilding } from "react-icons/fa"
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"

export function SpeakerProfile() {
  const profileCards = [
    {
      icon: FaGraduationCap,
      title: "EDUCATION",
      description: "Com, CA, CS, CFA, FRM, CAIA, CIPM, CFP, RV, CCRA, CIIB, CIRA, AIM",
    },
    {
      icon: FaChalkboardTeacher,
      title: "FINANCE TRAINER",
      description: "Training thousands globally in CFA, FRM, CA & Financial Modelling",
    },
    {
      icon: FaUniversity,
      title: "GUEST LECTURE",
      description: "Stock Exchanges, B-Schools, and Colleges",
    },
    {
      icon: FaBriefcase,
      title: "CORPORATE COACH",
      description: "Finance-based training for companies like Tata, Grasim, Barclays",
    },
    {
      icon: FaBuilding,
      title: "CEO | LEVERAGED GROWTH",
      description: "Advisory | Consulting | Training | L&D",
    },
  ]

  const socialLinks = [
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube", color: "hover:text-red-600" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-600" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-700" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
  ]

  return (
    <SpeakerProfileSection>
      {/* Title Section */}
      <motion.div variants={itemVariants} className="text-center mb-8 lg:mb-12">
        {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-(--bg-primary)">Speaker's</span> <span className="text-orange-500">Profile</span>
        </h2> */}
        <SectionHeader 
        title="Speaker's"
        highlight="Profile"
        />
        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-l-full  mx-auto -mt-5"></div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side - Profile Info */}
        <div className="lg:col-span-4 space-y-6">
          {/* Profile Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 md:p-8 text-center">
            {/* Profile Image */}
            <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-blue-100">
              <Image
                src="/professional-man-profile.jpg"
                alt="Aswini Bajaj"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">Aswini Bajaj</h3>

            {/* Quote Box */}
            <div className="bg-gradient-to-r from-(--bg-primary) to-blue-700 text-white p-4 rounded-lg relative">
              <div className="absolute -top-2 left-4 text-orange-500 text-3xl">❝</div>
              <p className="text-xs md:text-sm italic leading-relaxed pt-2">
                Influencers don't influence me. Expertise, Experience & Ethics does!
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 md:w-10 md:h-10 rounded-lg bg-slate-100 text-slate-700 ${social.color} flex items-center justify-center transition-all duration-200 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Video */}
        <div className="lg:col-span-8">
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/rq7_L2zwA3U?start=3"
                title="How I qualified CA,CS,CFA,FRM,CAIA,CIPM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Profile Cards Grid - Full Width Below */}
      <motion.div variants={itemVariants} className="mt-8 lg:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {profileCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-4 border-l-4 border-orange-500 flex flex-col"
            >
              {/* Icon */}
              <div className="flex mb-3 gap-3 items-center">
                <div className="w-8 h-8 bg-(--bg-primary) rounded-lg flex items-center justify-center p-1">
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                   <h4 className="text-xs font-bold text-blue-900 mb-2 uppercase tracking-wide break-words">
                  {card.title}
                </h4>
              </div>

              {/* Content */}
              <div className="flex-1">
             
                <p className="text-xs text-slate-600 leading-relaxed break-words">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SpeakerProfileSection>
  )
}