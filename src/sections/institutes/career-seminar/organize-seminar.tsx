// "use client"

// import Container from "@/components/shared/container"
// import { motion, type Variants } from "framer-motion"
// import { FiVideo, FiMapPin, FiUser } from "react-icons/fi"

// export function OrganizeSeminar() {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const seminars = [
//     {
//       id: 1,
//       title: "Online",
//       icon: FiVideo,
//       iconBg: "bg-(--bg-primary)",
//       iconColor: "text-white",
//       items: [
//         { text: "Connect with us via", link: "mail", href: "mailto:aswinibajaj.edu@gmail.com" },
//         "Organize 1 hour + 15 Minutes Q&A session at your institute",
//       ],
//     },
//     {
//       id: 2,
//       title: "Offline",
//       icon: FiMapPin,
//       iconBg: "bg-blue-100",
//       iconColor: "text-blue-600",
//       items: [
//         "Attend the session",
//         { text: "Connect with us via", link: "mail", href: "mailto:aswinibajaj.edu@gmail.com" },
//         "Organize a 30-minute Q&A Session",
//       ],
//     },
//     {
//       id: 3,
//       title: "Personal",
//       icon: FiUser,
//       iconBg: "bg-blue-100",
//       iconColor: "text-blue-600",
//       items: ["Analyse your career", "Attend the session", "Schedule an appointment for doubts"],
//     },
//   ]

//   return (
//     <section className="w-full py-20 px-6 bg-white">
//       <Container>
//         <motion.div
//           className="max-w-6xl mx-auto"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {/* Title */}
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-(--bg-primary)">
//               Organise Career <span className="text-orange-500">Seminar</span>
//             </h2>
//             <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
//           </motion.div>

//           {/* Three Columns */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {seminars.map((seminar) => (
//               <motion.div
//                 key={seminar.id}
//                 variants={itemVariants}
//                 className="space-y-6 bg-gray-50 p-8 rounded-lg"
//               >
//                 <div className="flex gap-3">
//                   <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-b from-[#0076B7] to-[#01184F] rounded-full  shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:rounded-full before:blur-sm">
//                     <seminar.icon className="w-5 h-5  text-white relative z-10" />
//                     {/* Water drop shine effect */}
//                     <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-white/30 rounded-full blur-sm"></div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-2xl font-bold text-slate-800">{seminar.title}</h3>
//                 </div>
//                 {/* Items List */}
//                 <ul className="space-y-4">
//                   {seminar.items.map((item, index) => (
//                     <li key={index} className="flex items-start text-slate-600 text-sm">
//                       <span className="text-slate-400 mr-3 mt-1">•</span>
//                       <span>
//                         {typeof item === "string" ? (
//                           item
//                         ) : (
//                           <>
//                             {item.text}{" "}
//                             <a href={item.href} className="text-blue-600 font-medium hover:underline">
//                               {item.link}
//                             </a>
//                           </>
//                         )}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   )
// }


// File: components/organize-seminar.tsx
"use client"

import SectionHeader from "@/components/UI/section-header"
import { SeminarSection, itemVariants } from "@/components/UI/seminar-section"
import { motion } from "framer-motion"
import { FiVideo, FiMapPin, FiUser } from "react-icons/fi"

export function OrganizeSeminar() {
  const seminars = [
    {
      id: 1,
      title: "Online",
      icon: FiVideo,
      items: [
        { text: "Connect with us via", link: "mail", href: "mailto:aswinibajaj.edu@gmail.com" },
        "Organize 1 hour + 15 Minutes Q&A session at your institute",
      ],
    },
    {
      id: 2,
      title: "Offline",
      icon: FiMapPin,
      items: [
        "Attend the session",
        { text: "Connect with us via", link: "mail", href: "mailto:aswinibajaj.edu@gmail.com" },
        "Organize a 30-minute Q&A Session",
      ],
    },
    {
      id: 3,
      title: "Personal",
      icon: FiUser,
      items: ["Analyse your career", "Attend the session", "Schedule an appointment for doubts"],
    },
  ]

  return (
    <SeminarSection>
      {/* Title */}
      <motion.div variants={itemVariants} className="text-center mb-8 lg:mb-16">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-(--bg-primary)">
          Organise Career <span className="text-orange-500">Seminar</span>
        </h2> */}
        <SectionHeader 
        title="Organise Career"
        highlight="Seminar"/>
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
                <li key={index} className="flex items-start text-slate-600 text-sm">
                  <span className="text-slate-400 mr-3 mt-1">•</span>
                  <span>
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <>
                        {item.text}{" "}
                        <a href={item.href} className="text-blue-600 font-medium hover:underline">
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
    </SeminarSection>
  )
}