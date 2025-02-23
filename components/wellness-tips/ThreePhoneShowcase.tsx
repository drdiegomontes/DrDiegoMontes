"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Star, Instagram, Facebook } from "lucide-react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

interface Phone {
  title: string
  content: {
    illustration?: string
    heading: string
    text?: string
    primaryButton?: string
    secondaryButton?: string
    subheading?: string
    searchPlaceholder?: string
    categories?: { title: string; image: string }[]
    modules?: { title: string; status: string; image: string }[]
    title?: string
    image?: string
    description?: string
    rating?: number
    reviewer?: string
  }
  rotate: number
  translateX: string
  translateY: string
  zIndex: number
}

const phones: Phone[] = [
  {
    title: "Welcome Screen",
    content: {
      illustration: "https://pub-af6f4cefa51449e1bc1879efb21cc1a0.r2.dev/wellnesstips-transformyourhealth-phone2.png",
      heading: "It's not just learning,\nit's a promise!",
      text: "Expert guidance and support to help you achieve your wellness goals.",
      primaryButton: "Register",
      secondaryButton: "Login",
    },
    rotate: -30,
    translateX: "-95%",
    translateY: "0%",
    zIndex: 1,
  },
  {
    title: "Dashboard",
    content: {
      heading: "Hi, Sarah",
      subheading: "What do you wish to learn today?",
      searchPlaceholder: "Pressure vacuum operator",
      categories: [
        { title: "Construction", image: "/placeholder.svg" },
        { title: "Manufacturing", image: "/placeholder.svg" },
      ],
      modules: [
        { title: "Pressure vacuum inspector", status: "Hot", image: "/placeholder.svg" },
        { title: "Flange fitting", status: "New", image: "/placeholder.svg" },
      ],
    },
    rotate: 0,
    translateX: "0%",
    translateY: "0%",
    zIndex: 3,
  },
  {
    title: "@drdiegomontesdc",
    content: {
      title: "Dr. Diego Montes",
      image: "https://pub-af6f4cefa51449e1bc1879efb21cc1a0.r2.dev/wellnesstips-transformyourhealth-phone3.jpg",
      description:
        "Dr. Montes is truly exceptional! His holistic approach to chiropractic care has transformed my life. I've never felt better!",
      rating: 5,
      reviewer: "Tiffanie R.",
    },
    rotate: 30,
    translateX: "95%",
    translateY: "0%",
    zIndex: 2,
  },
]

export default function ThreePhoneShowcase() {
  const router = useRouter()

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-[600px,1fr] gap-16">
          {/* Text Content - Left Aligned */}
          <div className="pl-8">
            <h2 className="text-[4rem] md:text-[5.5rem] font-light leading-none mb-4">
              Transform
              <br />
              Your
              <br />
              Health
              <br />
              Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Discover comprehensive wellness resources and expert guidance tailored to your needs.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
              onClick={() => {
                router.push("/contact")
                smoothScrollToTop()
              }}
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Phone Showcase */}
          <div className="relative h-[700px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {phones.map((phone, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: `calc(${phone.translateX})`,
                    rotate: phone.rotate,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{ zIndex: phone.zIndex.toString() }}
                >
                  {/* iPhone Frame */}
                  <div className="relative w-[300px] h-[600px]">
                    <div className="absolute inset-0 bg-black rounded-[3rem] shadow-[0_8px_16px_rgba(0,0,0,0.1),0_16px_32px_rgba(0,0,0,0.1)]">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-2xl z-20" />
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-6 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <span>●●●●</span>
                          <span>●●</span>
                        </div>
                      </div>
                      {/* Inner Frame */}
                      <div className="absolute inset-[6px] bg-white rounded-[2.5rem] overflow-hidden">
                        {/* Content */}
                        {renderPhoneContent(index, phone)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Icons - Adjusted position to be fully visible */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] flex justify-center items-center gap-8">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={(e) => e.stopPropagation()}
                aria-label="Follow on Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram
                  size={32}
                  className="text-[#E1306C] transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-[#E1306C] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={(e) => e.stopPropagation()}
                aria-label="Follow on Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook
                  size={32}
                  className="text-[#1877F2] transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-[#1877F2] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderPhoneContent(index: number, phone: Phone) {
  if (index === 0) {
    return (
      <div className="h-full flex flex-col relative">
        <Image
          src="https://pub-af6f4cefa51449e1bc1879efb21cc1a0.r2.dev/wellnesstips-transformyourhealth-phone2.png"
          alt="Welcome illustration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 space-y-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for wellness tips..."
              className="w-full bg-white/20 backdrop-blur-md text-white placeholder-white/70 rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70" />
          </div>
          <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-3">Start Now</Button>
        </div>
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className="relative h-full w-full flex items-center justify-center bg-black">
        <video
          src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/wellnesstips-transformyourhealth.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Optional overlay for better video visibility */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
    )
  }
  if (index === 2) {
    return (
      <div className="h-full flex flex-col">
        <div className="h-1/2 relative">
          <Image
            src={phone.content.image || "/placeholder.svg"}
            alt="Dr. Diego Montes"
            fill
            className="object-cover object-top"
          />
          <button className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <ArrowRight className="w-4 h-4 rotate-180" />
          </button>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-medium mb-2 text-black">@drdiegomontesdc</h3>
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: phone.content.rating }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{phone.content.description}</p>
          <p className="text-sm text-gray-500">Review by {phone.content.reviewer}</p>
        </div>
      </div>
    )
  }
  return null
}

