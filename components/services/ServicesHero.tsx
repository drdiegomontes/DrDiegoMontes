"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote: "I've been seeing Dr. Montes for chiropractic care...",
    author: "Gretchen Tolentino",
    title: "Professional Athlete",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20(2)-wWmYOaHghWgZc3ZTpJWPWWiU7MghRH.png",
    bgColor: "bg-blue-900",
    link: "https://maps.app.goo.gl/3UJVirLTwf4ZDBN86",
  },
  {
    quote: "Dr. Montes and the entire staff at Oakland Accident Care Chiropractic...",
    author: "Anaa Chaudry",
    title: "Yoga Instructor",
    image:
      "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20copy-168lmkiF2rDeltI7BUmrn2T9xgfQXg.png",
    bgColor: "bg-purple-900",
    link: "https://maps.app.goo.gl/yNBTQX1YHASTXi6YA",
  },
  {
    quote: "Woooow! Dr. Diego Monte's has really impacted...",
    author: "Abe VasquezSanchez",
    title: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?auto=format&fit=crop&q=80&w=2940",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20copy%202-RlesTHmvKvYWLwFj1rTDMLaApRF2hS.png",
    bgColor: "bg-emerald-900",
    link: "https://maps.app.goo.gl/cKmdJjSb7zA4n7Pd7",
  },
  {
    quote: "Dr. Montes expertise was evident from our first consultation...",
    author: "Reza Zolghadr",
    title: "Fitness Coach",
    image:
      "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-2AGdbIJ3QC1DIFtFQ9os6kTPxLvk5D.png",
    bgColor: "bg-indigo-900",
    link: "https://maps.app.goo.gl/juzFseqhpz7J6J4v8",
  },
]

export default function ServicesHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }
    }, 6000)
    return () => clearInterval(timer)
  }, [isAnimating])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className={`absolute inset-0 ${testimonials[currentIndex].bgColor} opacity-90`} />
          <Image
            src={testimonials[currentIndex].image || "/placeholder.svg"}
            alt={testimonials[currentIndex].author}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title */}
            <div>
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Expert Chiropractic Care</h1>
              <p className="text-xl md:text-2xl text-white/90">
                Experience the transformative power of holistic wellness with our comprehensive range of services.
              </p>
            </div>

            {/* Right Column - Testimonials */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white"
                >
                  <p className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xl font-medium">{testimonials[currentIndex].author}</div>
                      <div className="text-white/80">{testimonials[currentIndex].title}</div>
                    </div>
                  </div>
                  <a
                    href={testimonials[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[#e3f677] hover:text-white transition-colors"
                  >
                    View full review
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative transition-all duration-300 ${
              currentIndex === index ? "w-16 h-16 ring-2 ring-white" : "w-12 h-12 opacity-50 hover:opacity-75"
            } rounded-full overflow-hidden`}
          >
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  )
}

