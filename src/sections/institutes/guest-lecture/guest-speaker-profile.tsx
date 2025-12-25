"use client"

import Container from "@/components/shared/container"
import { SpeakerProfileSection } from "@/components/UI/profile-section"
import SectionHeader from "@/components/UI/section-header"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import { FaGraduationCap, FaChalkboardTeacher, FaUniversity, FaBriefcase, FaBuilding } from "react-icons/fa"
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"

export function GuestSpeakerProfile() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const profileCards = [
    {
        icon: FaGraduationCap,
      label: "Education",
      content: "Com, CA, CS, CFA, FRM, CAIA, CIPM, CFP, RV, CCRA, CIIB, CIRA, AIM",
    },
    {
       icon: FaChalkboardTeacher,
      label: "Guest Lecturer",
      content: "Stock Exchanges, B-Schools, and Colleges",
    },
    {
       icon: FaUniversity,
      label: "CEO | Leveraged Growth",
      content: "Advisory | Consulting | Training | L&D",
    },
    {
         icon: FaBriefcase,
      label: "Corporate Coach",
      content: "Finance-based training for companies like Tata, Grasim, Barclays",
    },
    {
      icon: FaBuilding,
      label: "Finance Trainer",
      content: " Training thousands of professionals globally for CFA, FRM, CA, and Financial Modelling ",
    },
  ]

const socialLinks = [
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube", color: "hover:text-red-600" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-600" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-700" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
  ]

  // const SocialIcon = ({ icon }: { icon: string }) => {
  //   switch (icon) {
  //     case "youtube":
  //       return (
  //         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //           <path d="M19.615 3.175c-3.674-1.075-11.238-1.075-14.912 0C2.747 4.25 2.4 8.974 2.4 12s.347 7.75 2.303 8.825c3.674 1.075 11.238 1.075 14.912 0 1.956-1.075 2.303-5.799 2.303-8.825s-.347-7.75-2.303-8.825zM9.6 15.6V8.4l6 3.6-6 3.6z" />
  //         </svg>
  //       )
  //     case "instagram":
  //       return (
  //         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
  //         </svg>
  //       )
  //     case "linkedin":
  //       return (
  //         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.562s.048-8.811 0-9.728h3.562v1.381c-.009.015-.021.029-.031.042h.031v-.042c.425-.654 1.185-1.586 2.882-1.586 2.105 0 3.684 1.375 3.684 4.331v5.602zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.954-1.71 1.185 0 1.915.755 1.915 1.71 0 .951-.73 1.71-1.954 1.71zm1.581 11.597H3.715V9.724h3.203v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  //         </svg>
  //       )
  //     case "facebook":
  //       return (
  //         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  //         </svg>
  //       )
  //     case "twitter":
  //       return (
  //         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //           <path d="M23.953 4.57a10 10 0 002.856-3.51 10.02 10.02 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  //         </svg>
  //       )
  //     default:
  //       return null
  //   }
  // }

  return (
    // <section className="w-full py-20 px-6 bg-gradient-to-br from-slate-50 to-white">
    //   <Container>
    //      <motion.div
    //           className="max-w-6xl mx-auto"
    //           variants={containerVariants}
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: true, margin: "-100px" }}
    //         >
    //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    //             {/* Left Side - Content */}
    //             <motion.div variants={itemVariants} className="space-y-8">
    //               {/* Title */}
    //               <div>
    //                 <h2 className="text-4xl md:text-5xl font-bold mb-2">
    //                   <span className="text-cyan-500">Speaker's</span> <span className="text-slate-900">Profile</span>
    //                 </h2>
    //               </div>
    
    //               {/* Professional Details */}
    //               <div className="space-y-6">
    //                 {profileDetails.map((detail, index) => (
    //                   <motion.div key={index} variants={itemVariants} className="space-y-2">
    //                     <p className="text-slate-900 font-bold">{detail.label}:</p>
    //                     <p className="text-slate-600 leading-relaxed">{detail.content}</p>
    //                   </motion.div>
    //                 ))}
    //               </div>
    
    //               {/* Profile Section */}
    //               <motion.div variants={itemVariants} className="pt-8 border-t border-slate-200">
    //                 <div className="flex items-start gap-4">
    //                   {/* Profile Image */}
    //                   <div className="flex-shrink-0">
    //                     <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-2xl overflow-hidden">
    //                       <Image
    //                         src="/professional-man-profile.jpg"
    //                         alt="Speaker profile"
    //                         width={80}
    //                         height={80}
    //                         className="w-full h-full object-cover"
    //                       />
    //                     </div>
    //                   </div>
    
    //                   {/* Quote */}
    //                   <div className="flex-1">
    //                     <p className="text-cyan-500 font-bold italic text-lg leading-relaxed">
    //                       "Set Deadlines for your Work & Learning, Not Outcomes."
    //                     </p>
    //                     <p className="text-slate-600 font-semibold mt-3">- Aswini Bajaj</p>
    //                   </div>
    //                 </div>
    //               </motion.div>
    
    //               {/* Social Media Links */}
    //               <motion.div variants={itemVariants} className="flex gap-4 pt-4">
    //                 {socialLinks.map((social, index) => (
    //                   <a
    //                     key={index}
    //                     href={social.href}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="w-10 h-10 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-all duration-200 hover:scale-110"
    //                     aria-label={social.label}
    //                   >
    //                     <SocialIcon icon={social.icon} />
    //                   </a>
    //                 ))}
    //               </motion.div>
    //             </motion.div>
    
    //             {/* Right Side - Video Section */}
    //             <motion.div variants={itemVariants} className="relative">
    //               <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
    //                 <iframe
    //                   className="w-full h-full"
    //                   src="https://www.youtube.com/watch?v=uLfBHnhI5O8&t=2s"
    //                   title="How I qualified CA,CS,CFA,FRM,CAIA,CIPM"
    //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //                   allowFullScreen
    //                 ></iframe>
    //               </div>
    //             </motion.div>
    //           </div>
    //         </motion.div>
    //   </Container>
    // </section>

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
                    src="/ab_profile.jpg  "
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
                    src="https://www.youtube.com/watch?v=uLfBHnhI5O8&t=2s"
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
                      {card.label}
                    </h4>
                  </div>
    
                  {/* Content */}
                  <div className="flex-1">
                 
                    <p className="text-xs text-slate-600 leading-relaxed break-words">
                      {card.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SpeakerProfileSection>
  )
}
