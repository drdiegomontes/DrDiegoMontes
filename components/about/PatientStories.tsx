"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Yoga Instructor",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "Dr. Montes' approach to chiropractic care is truly life-changing! After years of chronic back pain, I'm finally living pain-free. His expertise and dedication to patient care are unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Professional Athlete",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "As an athlete, finding the right chiropractor is crucial. Dr. Montes understands sports injuries and has helped me maintain peak performance. Grateful for his expertise!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Office Manager",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "The holistic approach at Dr. Montes' practice sets him apart. He doesn't just treat symptoms - he helps you achieve overall wellness. Thank you for transforming my health journey!",
    rating: 5,
  },
]

export default function PatientStories() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F0F1FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Patient Stories</h2>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <p className="text-xl md:text-2xl italic mb-6">&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

