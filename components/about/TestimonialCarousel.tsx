"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Dr. Montes' personalized care plan completely transformed my chronic back pain. I feel like a new person!",
    author: "Sarah Johnson",
  },
  {
    quote:
      "The preventive focus of Dr. Montes' practice has helped me maintain optimal health and avoid injuries in my athletic pursuits.",
    author: "Michael Chen",
  },
  {
    quote:
      "I appreciate the holistic approach Dr. Montes takes. It's not just about adjustments, but overall wellness.",
    author: "Emily Rodriguez",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Quote className="w-12 h-12 mx-auto mb-8 text-gray-300" />
            <p className="text-2xl italic mb-8 leading-relaxed">{testimonials[currentIndex].quote}</p>
            <p className="text-lg font-medium">{testimonials[currentIndex].author}</p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

