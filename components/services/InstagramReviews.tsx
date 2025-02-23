"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    username: "@family.first",
    caption:
      "Amazing experience with Dr. Montes and the whole family! 🌟 The care and attention we received was outstanding. #ChiropracticCare #FamilyWellness",
    likes: "1,234",
    comments: "89",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img9_.jpg-Z6ywKqKQjDg0RT7sZvbDmbUzDRiJer.jpeg",
    instagramUrl: "https://instagram.com/drdiegomontesdc",
    facebookUrl: "https://fb.watch/xUjQdYZ5Z3/",
  },
  {
    username: "@grateful.patient",
    caption:
      "The best Mother's Day gift - seeing Aunty pain-free and smiling! Thank you Dr. Montes! 🌻 #WellnessJourney #ChiropracticCare",
    likes: "2,567",
    comments: "143",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1_.jpg-NKmIqDNl0VyQ8EDlGpZSVSNTZT1Y1Y.png",
    instagramUrl: "https://instagram.com/drdiegomontesdc",
    facebookUrl: "https://fb.watch/xUjQdYZ5Z3/",
  },
  {
    username: "@wellness.journey",
    caption:
      "Self-love includes taking care of your body! Dr. Montes understands this perfectly 💕 #SelfLove #WellnessJourney #ChiropracticCare",
    likes: "1,890",
    comments: "95",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4_.jpg-Zeqh7l0Xx9CpEvKNnBBJaYUichiEMY.jpeg",
    instagramUrl: "https://instagram.com/drdiegomontesdc",
    facebookUrl: "https://fb.watch/xUjQdYZ5Z3/",
  },
  {
    username: "@active.lifestyle",
    caption: "Back to my active lifestyle thanks to Dr. Montes! 🏃‍♂️ #WellnessGoals #ChiropracticCare",
    likes: "3,421",
    comments: "167",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2_.jpg-yZsEsczgDSHpuPedv3113VJ3Tdt12F.jpeg",
    instagramUrl: "https://instagram.com/drdiegomontesdc",
    facebookUrl: "https://fb.watch/xUjQdYZ5Z3/",
  },
]

function SocialIcons({ instagramUrl, facebookUrl }: { instagramUrl: string; facebookUrl: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-[#E1306C] hover:scale-110 transition-all duration-300 group shadow-lg"
        aria-label="View on Instagram"
      >
        <Instagram className="w-6 h-6 text-[#E1306C] group-hover:text-white transition-colors" />
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 group shadow-lg"
        aria-label="View on Facebook"
      >
        <Facebook className="w-6 h-6 text-[#1877F2] group-hover:text-white transition-colors" />
      </a>
    </div>
  )
}

function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[300px] h-[600px]">
      {/* iPhone Frame */}
      <div className="absolute inset-0 bg-black rounded-[3rem] shadow-xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-20" />
        {/* Inner Frame */}
        <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden">{children}</div>
      </div>
    </div>
  )
}

export default function InstagramReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = containerRef.current
      if (container && !isHovering) {
        const timer = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % reviews.length)
        }, 5000)
        return () => clearInterval(timer)
      }
    }
  }, [isHovering])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const visibleReviews = () => {
    const items = []
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % reviews.length
      items.push(reviews[index])
    }
    return items
  }

  if (typeof window === "undefined") {
    return null
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-4">Instagram Reviews</h2>
              <p className="text-gray-600">See what our patients are saying on Instagram</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div
            ref={containerRef}
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex justify-center gap-4 overflow-hidden">
              <AnimatePresence mode="wait">
                {visibleReviews().map((review, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col"
                  >
                    <a
                      href={review.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transform transition-transform duration-500 hover:scale-[1.02]"
                    >
                      <IPhoneFrame>
                        <div className="h-full flex flex-col">
                          {/* Instagram Header */}
                          <div className="flex items-center p-4 border-b">
                            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative mr-3">
                              <Image
                                src={review.image || "/placeholder.svg"}
                                alt={review.username}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="font-medium">{review.username}</span>
                          </div>

                          {/* Instagram Image */}
                          <div className="relative aspect-square">
                            <Image
                              src={review.image || "/placeholder.svg"}
                              alt="Instagram post"
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Instagram Actions */}
                          <div className="p-4">
                            <div className="flex items-center gap-4 mb-2">
                              <Heart className="w-6 h-6" />
                              <MessageCircle className="w-6 h-6" />
                              <Instagram className="w-6 h-6 ml-auto" />
                            </div>
                            <div className="font-medium mb-1">{review.likes} likes</div>
                            <div>
                              <span className="font-medium mr-2">{review.username}</span>
                              {review.caption}
                            </div>
                            <div className="text-gray-500 text-sm mt-1">View all {review.comments} comments</div>
                          </div>
                        </div>
                      </IPhoneFrame>
                    </a>
                    <SocialIcons instagramUrl={review.instagramUrl} facebookUrl={review.facebookUrl} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-black" : "bg-black/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

