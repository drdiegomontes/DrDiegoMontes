"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import LetsWorkTogether from "@/components/LetsWorkTogether"
import WellnessHero from "@/components/wellness-tips/WellnessHero"
import WellnessCarousel from "@/components/wellness-tips/WellnessCarousel"
import DoctorStory from "@/components/wellness-tips/DoctorStory"
import { motion } from "framer-motion"
import TeamSection from "@/components/wellness-tips/TeamSection"
import RotatingBanner from "@/components/wellness-tips/RotatingBanner"
import ThreePhoneShowcase from "@/components/wellness-tips/ThreePhoneShowcase"
import dynamic from "next/dynamic"
import DailyWellnessTipGenerator from "@/components/wellness-tips/DailyWellnessTipGenerator"
import FilmRollGallery from "@/components/wellness-tips/FilmRollGallery"
import RealResults from "@/components/wellness-tips/RealResults"
import { ArrowRight } from "lucide-react"
import TransformativeJourneys from "@/components/wellness-tips/TransformativeJourneys"

const InteractiveWellnessQuiz = dynamic(() => import("@/components/wellness-tips/InteractiveWellnessQuiz"), {
  ssr: false,
})
const VideoTestimonialsCarousel = dynamic(() => import("@/components/wellness-tips/VideoTestimonialsCarousel"), {
  ssr: false,
})

const tips = [
  {
    title: "Maintain Good Posture",
    category: "SPINE HEALTH • ERGONOMICS • PREVENTION",
    description: "Learn how to sit, stand, and move with proper alignment to reduce strain on your spine.",
    image:
      "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZCUyMHBvc3R1cmV8ZW58MHx8MHx8fDA%3D",
    slug: "maintain-good-posture",
  },
  {
    title: "Stay Hydrated",
    category: "NUTRITION • WELLNESS • HEALTH",
    description: "Discover the importance of hydration for spinal health and overall well-being.",
    image:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbmtpbmclMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    slug: "stay-hydrated",
  },
  {
    title: "Exercise Regularly",
    category: "FITNESS • STRENGTH • MOBILITY",
    description: "Find out which exercises can help strengthen your core and support your spine.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D",
    slug: "exercise-regularly",
  },
  {
    title: "Manage Stress",
    category: "MENTAL HEALTH • RELAXATION • BALANCE",
    description: "Explore techniques to reduce stress and its impact on your physical health.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    slug: "manage-stress",
  },
]

const patientEducation = [
  {
    title: "Understanding Chiropractic Care",
    description:
      "Learn about the principles and benefits of chiropractic treatments for your overall health. Dr. Montes uses proven techniques to help restore and maintain your body's natural balance.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AF1QipM5j5cFd71ggj20fzKLJn_pd1B5a5YVX0TO_FVq=s451-k-no-mewNFWO490iVnlA6H2bcDs1LShLgrQ.jpeg",
    slug: "understanding-chiropractic-care",
  },
  {
    title: "The Importance of Spinal Health",
    description:
      "Discover why maintaining a healthy spine is crucial for your overall well-being and quality of life. Our expert care focuses on proper alignment and function.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AF1QipNRa2wqgwyohdtCIn28aZptrDQlxcz96JFuONp3=w203-h270-k-no-69P8sH52G3VbB7ndBlB2WDBt0c8LzI.jpeg",
    slug: "importance-of-spinal-health",
  },
  {
    title: "What to Expect During Your First Visit",
    description: "Get familiar with our welcoming consultation process and expert care approach.",
    image: "https://pub-af6f4cefa51449e1bc1879efb21cc1a0.r2.dev/wellnesstips-patient-education.png",
    slug: "your-first-visit",
  },
]

export default function WellnessTipsPage() {
  const router = useRouter()

  const handleConsultationClick = () => {
    router.push("/contact")
    smoothScrollToTop()
  }

  return (
    <main className="min-h-screen bg-main-bg">
      <section className="px-4 pt-16 pb-8 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="rounded-[2.5rem] overflow-hidden max-h-[calc(100vh-8rem)]">
            <WellnessHero />
          </div>
        </div>
      </section>
      <WellnessCarousel />
      <TransformativeJourneys />
      {/* Large Text Section with Film Rolls */}
      <div className="bg-black overflow-hidden px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-stretch">
            {/* Left Film Roll */}
            <div className="w-full h-[200px] mb-8">
              <div className="relative h-full w-full">
                <FilmRollGallery direction="up" />
              </div>
            </div>

            {/* Center Text Content */}
            <div className="w-full space-y-4 text-center relative px-4">
              {/* Text content with adjusted sizing */}
              <motion.h1
                className="text-[12vw] font-black text-white leading-none tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                HOLISTIC
              </motion.h1>
              <motion.div
                className="bg-[#e3f677] px-4 py-2 mx-2 w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-[12vw] font-black text-black leading-none tracking-tighter whitespace-nowrap overflow-visible w-full">
                  WELLNESS
                </h1>
              </motion.div>
              <motion.h1
                className="text-[12vw] font-black text-white leading-none tracking-tighter"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                HEALING
              </motion.h1>
              <motion.h1
                className="text-[12vw] font-black text-white leading-none tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                BALANCE
              </motion.h1>
            </div>

            {/* Right Film Roll */}
            <div className="w-full h-[200px] mt-8">
              <div className="relative h-full w-full z-10">
                <FilmRollGallery direction="down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoTestimonialsCarousel />
      <TeamSection />
      <RotatingBanner />
      <ThreePhoneShowcase />
      <section className="py-24 px-4 bg-white" id="health-tips">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-between items-start mb-16">
            <h2 className="text-4xl font-light leading-none mb-8">Health Tips</h2>
            <p className="text-sm max-w-full tracking-wide">
              DISCOVER PRACTICAL STRATEGIES TO ENHANCE YOUR OVERALL WELL-BEING AND QUALITY OF LIFE.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={tip.image || "/placeholder.svg"}
                    alt={tip.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <p className="text-sm tracking-wide text-gray-600">{tip.category} |</p>
                    <button
                      onClick={() => router.push(`/wellness-tips/${tip.slug}`)}
                      className="text-sm text-black hover:text-gray-600 transition-colors flex items-center"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                  <button onClick={() => router.push(`/wellness-tips/${tip.slug}`)} className="block text-left">
                    <h3 className="text-3xl font-light hover:text-gray-800 transition-colors">{tip.title}</h3>
                    <p className="text-gray-600 mt-2">{tip.description}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DoctorStory />
      <RealResults />
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light leading-none mb-8">
                Daily Dose of
                <br />
                Wellness
              </h2>
              <p className="text-xl text-gray-600 mb-6">Transform Your Health with Expert Guidance</p>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 border-black text-black bg-white hover:bg-black hover:text-white transition-colors"
                onClick={() => {
                  router.push("/contact")
                  smoothScrollToTop()
                }}
              >
                Schedule Your Consultation
              </Button>
            </div>
            <div>
              <DailyWellnessTipGenerator />
            </div>
          </div>
        </div>
      </section>
      <InteractiveWellnessQuiz />
      <section className="py-24 px-4 bg-white" id="patient-education">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-between items-start mb-16">
            <h2 className="text-4xl font-light leading-none mb-8">Patient Education</h2>
            <p className="text-sm max-w-full tracking-wide text-gray-600">
              EMPOWER YOURSELF WITH KNOWLEDGE ABOUT CHIROPRACTIC CARE AND YOUR HEALTH.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {patientEducation.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-light mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                    <Button
                      variant="outline"
                      className="w-full bg-white text-black hover:bg-gray-100 border-black mt-auto group"
                      onClick={() => router.push(`/wellness-tips/${item.slug}`)}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LetsWorkTogether />
    </main>
  )
}

