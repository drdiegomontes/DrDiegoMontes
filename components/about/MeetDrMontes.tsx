import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, GraduationCap, Heart, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

const achievements = [
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Doctor of Chiropractic with advanced certification in sports medicine and rehabilitation",
  },
  {
    icon: Clock,
    title: "Years of Experience",
    description: "Over a decade of hands-on experience treating diverse patient conditions",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "Recognized for outstanding patient care and innovative treatment approaches",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Dedicated to providing personalized care plans tailored to each patient's unique needs",
  },
]

export default function MeetDrMontes() {
  const router = useRouter()
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1807-r4U0BcuzJNj5MIZZqcOLWxetIgIyfq.jpeg"
                alt="Dr. Diego Montes"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-white/20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-white/20" />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm tracking-wider text-[#e3f677] mb-4">ABOUT DR. MONTES</h2>
              <h3 className="text-4xl md:text-5xl font-light mb-6">Dedicated to Your Wellness Journey</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                With over a decade of experience in chiropractic care, Dr. Diego Montes has helped countless patients
                achieve optimal health through his innovative and personalized approach to treatment. His commitment to
                continuous learning and patient-centered care sets him apart in the field of chiropractic medicine.
              </p>
            </div>

            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4 bg-white/10 p-4 rounded-xl">
                  <div className="flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-[#e3f677]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{achievement.title}</h4>
                    <p className="text-gray-200">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                className="bg-white text-black hover:bg-[#e3f677] hover:text-black rounded-full group transition-colors duration-300"
                size="lg"
                onClick={() => {
                  router.push("/contact")
                  smoothScrollToTop()
                }}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 border-white text-white bg-transparent hover:bg-[#e3f677] hover:text-black hover:border-[#e3f677] transition-colors duration-300 group"
                onClick={() => {
                  router.push("/contact")
                  smoothScrollToTop()
                }}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

