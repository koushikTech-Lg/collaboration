// "use client"
// import Container from "@/components/shared/container"
// import commendationsData from "@/data/guest-commendations.json"

// export function GuestCommendationsSection() {
//   const { commendations } = commendationsData

//   return (
//     <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
//       <Container>
//         <div className="max-w-6xl mx-auto px-6">
//           {/* Section Title */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Commendation</h2>
           
//           </div>

//           {/* Commendations Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {commendations.map((commendation) => (
//               <div
//                 key={commendation.id}
//                 className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-blue-100"
//               >
//                 {/* Profile Image */}
//                 <div className="flex justify-center mb-6">
//                   <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-200">
//                     <img
//                       src={commendation.image || "/placeholder.svg"}
//                       alt={commendation.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Name */}
//                 <h3 className="text-xl font-bold text-slate-900 text-center mb-4">{commendation.name}</h3>

//                 {/* Testimonial */}
//                 <p className="text-slate-700 leading-relaxed text-center text-sm">{commendation.testimonial}</p>

//                 {/* Quote Mark Accent */}
//                 <div className="flex justify-center mt-6">
//                   <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-8.812 3.114-8.996 6.032-2 23.467 7.559 25.26 10.954 25.26 2 0 4-0.5 4-3v-3c0-1-0.5-3-4-4z" />
//                   </svg>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   )
// }

"use client"
import Container from "@/components/shared/container"
import SectionHeader from "@/components/UI/section-header"
import { TestimonialCarousel } from "@/components/UI/testimonialcarousel"
import commendationsData from "@/data/guest-commendations.json"

export function GuestCommendationsSection() {
  const { commendations } = commendationsData

  return (
    <section className="lg:py-20 py-12 bg-gray-50">
      <Container>
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-(--bg-primary) mb-4">
            Commendation
          </h2>
          <p className="text-lg text-slate-600">What Our Students Say</p>
        </div> */}
        <SectionHeader 
        title="Commendation"
        description="What Our Students Say"
        />
          
      

        <TestimonialCarousel 
          testimonials={commendations} 
          autoPlayInterval={4000} 
        />
      </Container>
    </section>
  )
}
