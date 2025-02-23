"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { smoothScrollToTop } from "@/utils/smoothScroll"

const bannerItems = [
  "Book Appointment Now",
  "Schedule Consultation",
  "Transform Your Health",
  "Meet Dr. Montes",
  "Expert Care Available",
  "Start Your Journey",
]

export default function RotatingBanner() {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    router.push("/contact")
    smoothScrollToTop()
  }

  return (
    <section className="py-24 bg-gradient-to-r from-black via-[#131413] to-black overflow-hidden">
      <div className="relative max-w-[100vw]">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Scrolling Banner */}
        <div className="flex overflow-hidden" ref={containerRef}>
          {/* First Set */}
          <motion.div
            className="flex gap-6 px-6 min-w-full"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {bannerItems.map((text, index) => (
              <button
                key={index}
                onClick={handleClick}
                className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-full py-6 px-8 flex items-center gap-4 group whitespace-nowrap shadow-[0_0_30px_rgba(227,246,119,0.2)] hover:shadow-[0_0_40px_rgba(227,246,119,0.3)]"
              >
                <span className="text-2xl md:text-3xl font-light">{text}</span>
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ))}
          </motion.div>

          {/* Duplicated Set for Seamless Loop */}
          <motion.div
            className="flex gap-6 px-6 min-w-full absolute left-full"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {bannerItems.map((text, index) => (
              <button
                key={index}
                onClick={handleClick}
                className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-full py-6 px-8 flex items-center gap-4 group whitespace-nowrap shadow-[0_0_30px_rgba(227,246,119,0.2)] hover:shadow-[0_0_40px_rgba(227,246,119,0.3)]"
              >
                <span className="text-2xl md:text-3xl font-light">{text}</span>
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

