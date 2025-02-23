"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion"
import { Quote, ExternalLink } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "I can't recommend this place enough! The entire process from scheduling, to meeting and being treated by Dr Diego, was a breeze. I felt so taken care of! I was blown away by how thorough and informative (and efficient) their exams are. I learned a lot and left feeling like I knew how to make long lasting changes for spine health. Wish they had a location where I live.",
    author: "Jennifer S.",
    role: "Patient",
    avatar:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%234CAF50'/%3E%3Ctext x='50%25' y='50%25' font-size='80' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3EJ%3C/text%3E%3C/svg%3E",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTIwMTA3NzE5NzgxMzI2?story_media_id=3207751264295670553&igsh=c3N3cWVoNjFxd2Q=",
  },
  {
    quote:
      "El doctor Diego es el mejor muy buena persona respetuoso amable excelente trabajador lo recomiendo al 100 mucho éxito doctor",
    author: "Marta Alicia Rodriguez",
    role: "Patient",
    avatar: "https://i.pravatar.cc/150?img=5",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTIwMTA3NzE5NzgxMzI2?story_media_id=3295626066055185259&igsh=c3N3cWVoNjFxd2Q=",
  },
  {
    quote:
      "Dr Diego is a wonderful and compassionate human being as well as a skilled practitioner. He cares deeply about this patients and does his best to bring them forward to good health.",
    author: "Cynthia Riggs",
    role: "Yoga Instructor",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-HUX6mQrCSIocPmniThoAe5h1VSqYPb.png",
    link: "https://maps.app.goo.gl/LrB1oYg4X61zdodg7",
  },
  {
    quote:
      "AMAZING Doctor! I have never been treated with such care. Dr. Montes has changed my life. My back pain is completely gone and I have never slept better since starting chiropractic care with Dr. Montes. Truly life changing.",
    author: "Francesca Hermosillo",
    role: "Marathon Runner",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20(1)-shc6XhQb8m7gszcZMURE7MfGtyq9iF.png",
    link: "https://maps.app.goo.gl/78xBo8eW2oa7nZuP6",
  },
  {
    quote:
      "Dr. Diego has a touch that heals bodies and inspires people to become their best. I am grateful for his help and highly recommend him.",
    author: "Rosie Wendell",
    role: "Office Manager",
    avatar:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%238E44AD'/%3E%3Ctext x='50%25' y='50%25' font-size='80' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3ER%3C/text%3E%3C/svg%3E",
    link: "https://maps.app.goo.gl/AE3nAJon59TmRY3W8",
  },
  {
    quote:
      "Dr. Montes is an outstanding chiropractor! His expertise, personalized care, and genuine dedication made a huge difference in my recovery. From the welcoming clinic to the effective treatment plan, every visit brought me closer to a pain-free life. Grateful for his care and highly recommend him to anyone seeking real healing!",
    author: "Kishana Stiner",
    role: "Full-Stack Software Developer",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-PEbLSnUaftFZ6iJC0vZHnCcXFAgEFD.png",
    link: "https://maps.app.goo.gl/ayBLtcm82uBrEo3B7",
  },
]

export default function CarouselToShowcaseTransition() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const rotateY = useRef<number>(0)
  const rotateX = useRef<number>(0)

  useEffect(() => {
    let mounted = true

    const timer = setInterval(() => {
      if (mounted) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }
    }, 5000)

    return () => {
      mounted = false
      clearInterval(timer)
    }
  }, [])

  useAnimationFrame((t) => {
    if (!rotateY.current || !rotateX.current) return
    rotateY.current = Math.sin(t / 1000) * 5
    rotateX.current = Math.cos(t / 1000) * 5
  }, [])

  return (
    <section className="relative bg-black py-24 px-8">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-px bg-white/20 mb-16"></div>
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-white">Transformative Care</h2>

          <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-12 items-center">
            {/* iPhone Frame */}
            <motion.div
              className="relative w-[280px] h-[560px] mx-auto lg:mx-0"
              style={{
                rotateY: rotateY.current,
                rotateX: rotateX.current,
              }}
            >
              <div className="absolute inset-0 bg-[#e3f677] rounded-[2.5rem] shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-20" />
                <div className="absolute inset-[8px] bg-white rounded-[2rem] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1.jpg-1MU6gCBHfZryXWgFlbJwfBZq28aeOW.jpeg"
                      alt="Dr. Diego Montes"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                    animate={{
                      opacity: [0, 0.5, 0],
                      left: ["-100%", "100%", "100%"],
                      top: ["-100%", "100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      repeatDelay: 1,
                    }}
                    style={{
                      width: "200%",
                      height: "200%",
                      transform: "rotate(-45deg)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-0 right-0 text-center text-white">
                    <h3 className="text-xl font-light mb-1">Dr. Diego Montes</h3>
                    <p className="text-sm opacity-90">Chiropractic & Wellness Expert</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#131413] rounded-2xl p-12 relative overflow-hidden"
                >
                  {/* Large Quote Mark */}
                  <div className="absolute top-8 left-8">
                    <Quote className="w-24 h-24 text-[#e3f677]" strokeWidth={1} />
                  </div>

                  <div className="max-w-3xl mx-auto">
                    {/* Quote Text */}
                    <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-12 mt-24">
                      "{testimonials[currentIndex].quote}"
                    </p>

                    {/* Author Info */}
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
                        <h3 className="text-xl text-white font-medium">{testimonials[currentIndex].author}</h3>
                        <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                        <button
                          onClick={() => window.open(testimonials[currentIndex].link, "_blank")}
                          className="mt-2 text-[#e3f677] hover:text-white transition-colors flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          <span>View full review</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-[#e3f677]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

