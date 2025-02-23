"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const carouselItems = [
  {
    title: "Expert Chiropractic Care",
    description: "Experience personalized treatments tailored to your needs.",
  },
  {
    title: "Holistic Wellness Approach",
    description: "Addressing the root cause, not just the symptoms.",
  },
  {
    title: "Sports Rehabilitation",
    description: "Get back in the game with specialized recovery programs.",
  },
  {
    title: "Pain Management Solutions",
    description: "Find relief and improve your quality of life.",
  },
]

export default function TextCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#131413] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center items-center text-center"
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6">{carouselItems[currentIndex].title}</h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">{carouselItems[currentIndex].description}</p>
                <a
                  href="/services"
                  className="inline-flex items-center text-[#e3f677] hover:text-white transition-colors"
                >
                  <span className="mr-2">Explore Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-8">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                  index === currentIndex ? "bg-[#e3f677] w-12" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

