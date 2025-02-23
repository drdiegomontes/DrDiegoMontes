"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

const achievements = [
  {
    icon: CheckCircle,
    title: "Education & Training",
    description: "Doctor of Chiropractic with advanced certification in sports medicine and rehabilitation",
  },
  {
    icon: CheckCircle,
    title: "Years of Experience",
    description: "Over a decade of hands-on experience treating diverse patient conditions",
  },
  {
    icon: CheckCircle,
    title: "Clinical Excellence",
    description: "Recognized for outstanding patient care and innovative treatment approaches",
  },
  {
    icon: CheckCircle,
    title: "Patient-Centered Care",
    description: "Dedicated to providing personalized care plans tailored to each patient's unique needs",
  },
]

export default function MeetDrMontes() {
  const router = useRouter()

  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1807-y1KigXf3s5xnXdJsOrgwe4XRWGlix0.jpeg"
              alt="Dr. Diego Montes"
              fill
              className="object-cover"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-white/20" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-white/20" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm tracking-wider text-[#e3f677] mb-4">ABOUT DR. MONTES</h2>
              <h3 className="text-3xl font-light mb-4">Dedicated to Your Wellness Journey</h3>
              <p className="text-gray-200 leading-relaxed">
                With over a decade of experience in chiropractic care, Dr. Diego Montes has helped countless patients
                achieve optimal health through his innovative and personalized approach to treatment. His commitment to
                continuous learning and patient-centered care sets him apart in the field of chiropractic medicine.
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4 bg-white/10 p-4 rounded-xl">
                  <achievement.icon className="w-6 h-6 text-[#e3f677] flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium mb-2">{achievement.title}</h4>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <Button
                className="bg-white text-black hover:bg-[#e3f677] hover:text-black rounded-full group transition-colors duration-300 w-full"
                size="lg"
                onClick={() => {
                  router.push("/contact")
                  smoothScrollToTop()
                }}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

