"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

export default function ServicesCTA() {
  const router = useRouter()

  const handleConsultationClick = () => {
    router.push("/contact")
    smoothScrollToTop()
  }

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] bg-black text-white">
          {/* Subtle radial gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)]" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-light mb-6">Experience the Transformation</h2>
              <p className="text-lg md:text-xl text-gray-400 mb-10">
                Join our satisfied patients and start your journey to optimal health and wellness with Dr. Diego Montes.
              </p>
              <Button
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium group"
                onClick={handleConsultationClick}
              >
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-16 h-16 border-l-[1px] border-t-[1px] border-white/10 rounded-tl-3xl" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-r-[1px] border-b-[1px] border-white/10 rounded-br-3xl" />
        </div>
      </div>
    </section>
  )
}

