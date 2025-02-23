"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react" // Assuming ArrowRight is imported from lucide-react
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

export default function WellnessHero() {
  const router = useRouter()
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="https://5ewb4vaux1.ufs.sh/f/r8GWM0suYH8MpbkH1XLyRGDzHBiEYN42Qk9PUwax0smtF76A"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-white/80 text-sm tracking-wider mb-6">WELLNESS TIPS & ADVICE</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-8">
                Your Guide
                <br />
                to Optimal
                <br />
                Health
              </h1>
              <p className="text-xl text-white/80 max-w-xl">
                Discover expert insights and practical advice for maintaining your well-being and achieving lasting
                health through natural healing methods.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 mt-8 rounded-full px-8 py-6 text-lg group"
              >
                <Link
                  href="/contact"
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/contact")
                    smoothScrollToTop()
                  }}
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Featured Tips Preview */}
            <div className="relative">
              <div className="absolute -top-32 -bottom-32 w-px bg-white/20 left-12" />
              <div className="space-y-8 relative">
                {["Maintaining Proper Posture", "Exercise & Movement", "Stress Management", "Nutrition & Wellness"].map(
                  (tip, index) => (
                    <div key={index} className="pl-24 relative group cursor-pointer">
                      <div
                        className="absolute left-11 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full 
                      group-hover:scale-150 transition-transform"
                      />
                      <h3 className="text-2xl text-white font-light group-hover:text-white/80 transition-colors">
                        {tip}
                      </h3>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-white/20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-white/20" />
    </section>
  )
}

