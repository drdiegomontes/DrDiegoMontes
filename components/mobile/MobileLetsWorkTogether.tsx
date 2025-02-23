"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import type React from "react"

export default function MobileLetsWorkTogether() {
  const router = useRouter()

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    smoothScrollToTop()
  }

  return (
    <section className="relative min-h-[40vh] overflow-hidden bg-gradient-to-b from-gray-800 to-black py-12">
      {/* Black line divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-black z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whiteballs_thumbnail-MZn3yKGItJaGEzUJBr1xe2mZU7sL1k.png"
          alt="Abstract representation of spinal alignment"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] px-4">
        <p className="text-sm mb-4 text-black font-semibold tracking-wider">READY TO TRANSFORM YOUR HEALTH?</p>
        <div className="inline-block border border-white rounded-xl p-6 mb-4">
          <h2 className="text-3xl font-light text-center text-white mb-3">
            Start Your
            <br />
            Wellness Journey
          </h2>
          <p className="text-xl text-center text-black max-w-2xl">
            Embark on a transformative path to optimal health and vitality with Dr. Diego Montes
          </p>
        </div>

        {/* "Explore Our Services" button */}
        <motion.button
          onClick={handleNavClick("/services")}
          className="flex flex-col items-center text-black hover:text-white transition-colors group mb-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.p
            className="text-sm mb-2 font-medium"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            EXPLORE OUR SERVICES
          </motion.p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown size={24} className="text-black group-hover:text-white" />
          </motion.div>
        </motion.button>

        {/* Call to Action Button */}
        <Button
          variant="outline"
          size="lg"
          className="mt-4 text-lg font-semibold px-8 py-6 rounded-full border-2 border-white bg-[#e3f677] text-black hover:bg-transparent hover:text-white transition-colors duration-300"
          onClick={handleNavClick("/contact")}
        >
          Book a Consultation
        </Button>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-4 h-4 border-l-2 border-t-2 border-gray-600" />
      <div className="absolute top-8 right-8 w-4 h-4 border-r-2 border-t-2 border-gray-600" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l-2 border-b-2 border-gray-600" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r-2 border-b-2 border-gray-600" />

      {/* Make the white divider line more prominent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
    </section>
  )
}

