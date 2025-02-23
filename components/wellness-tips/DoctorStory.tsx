"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import { ArrowRight } from "lucide-react"

const expertise = [
  "Board Certified Chiropractor",
  "Advanced Sports Rehabilitation Specialist",
  "15+ Years of Clinical Experience",
  "Holistic Wellness Expert",
]

export default function DoctorStory() {
  const router = useRouter()

  return (
    <section className="px-4 sm:px-8 pt-32 pb-8 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="rounded-[2.5rem] overflow-hidden max-h-[calc(100vh-8rem)]">
          <div className="relative min-h-screen bg-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://pub-af6f4cefa51449e1bc1879efb21cc1a0.r2.dev/DrMontes-RedChair-SquareFrame.png"
                alt="Dr. Diego Montes"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center min-h-screen">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-8">
                      Maximize
                      <br />
                      your wellness
                      <br />
                      potential
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg group"
                        onClick={() => {
                          router.push("/contact")
                          smoothScrollToTop()
                        }}
                      >
                        Schedule Consultation
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg border-2"
                        onClick={() => {
                          router.push("/about")
                          smoothScrollToTop()
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>

                  {/* Right Column - Vertical Timeline */}
                  <div className="relative">
                    <div className="absolute -top-32 -bottom-32 w-px bg-white/20 left-12" />
                    <div className="space-y-8 relative">
                      {expertise.map((item, index) => (
                        <div key={index} className="pl-24 relative group cursor-pointer">
                          <div
                            className="absolute left-11 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full 
                            group-hover:scale-150 transition-transform"
                          />
                          <h3 className="text-2xl text-white font-light group-hover:text-white/80 transition-colors">
                            {item}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

