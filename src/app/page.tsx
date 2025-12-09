import { Navbar } from "../components/layout/navbar";
import { HeroBanner } from "../sections/home/hero-banner";
import { InstitutesSection } from "../sections/home/institutes-section"


export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroBanner />
        <InstitutesSection />

      {/* Additional sections can be added below */}
      <section className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">More content coming soon...</h2>
          <p className="text-lg text-slate-600">This is where you can add more sections to your website</p>
        </div>
      </section>
    </main>
  )
}