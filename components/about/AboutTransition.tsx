"use client"

import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import { Button } from "@/components/ui/button"

export default function AboutTransition() {
  const router = useRouter()

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative">
        {/* Decorative corner elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-black/20 rounded-tl-3xl" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-black/20 rounded-br-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light leading-tight">Empowering Your Health Journey</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Diego Montes brings a wealth of experience and a passion for holistic wellness to his chiropractic
              practice. With a focus on personalized care and cutting-edge techniques, he's dedicated to helping you
              achieve optimal health and vitality.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-black">&#8226;</span>
                Personalized treatment plans
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-black">&#8226;</span>
                State-of-the-art chiropractic techniques
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-black">&#8226;</span>
                Focus on long-term wellness and prevention
              </li>
            </ul>
            <Button
              className="mt-4 bg-black text-white hover:bg-gray-800"
              onClick={() => {
                router.push("/contact")
                smoothScrollToTop()
              }}
            >
              Schedule a Consultation
            </Button>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <video
              src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-EmpoweringYourHealthJourney.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  )
}

