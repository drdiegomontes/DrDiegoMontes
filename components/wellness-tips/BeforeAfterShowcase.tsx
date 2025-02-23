"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const transformations = [
  {
    name: "John Doe",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5011.JPG-g2G82XtjdwxyhmyftM1PBMExw4USla.jpeg", // Updated before image URL
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5012.JPG-taOd6aj7aVXzXCq0PpQf7N8GN32hMH.jpeg",
    story:
      "After years of chronic back pain, John found relief through Dr. Montes' personalized chiropractic care plan.",
  },
  {
    name: "Jane Smith",
    before:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    after:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "Jane's posture and overall well-being improved dramatically after following Dr. Montes' holistic wellness approach.",
  },
  {
    name: "Mike Johnson",
    before:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    after:
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "As an athlete, Mike's performance reached new heights with regular chiropractic adjustments and lifestyle guidance from Dr. Montes.",
  },
  {
    name: "Sarah Thompson",
    quote:
      "Dr. Montes' approach to chiropractic care is truly transformative. The holistic wellness program has completely changed my quality of life and relieved my chronic back pain.",
    likes: "1,234",
    comments: "89",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img9_.jpg-Z6ywKqKQjDg0RT7sZvbDmbUzDRiJer.jpeg",
    instagramUrl: "https://instagram.com/drdiegomontesdc",
  },
]

export default function BeforeAfterShowcase({ title }: { title: string }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % transformations.length)
    }, 8000) // Increased from 7000 to 8000 for a slower transition

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <h2 className="text-[4rem] md:text-[5.5rem] font-light leading-none mb-8 lg:mb-0">{title}</h2>
          <p className="text-sm max-w-[400px] tracking-wide">
            SEE THE INCREDIBLE TRANSFORMATIONS OUR PATIENTS HAVE EXPERIENCED THROUGH DEDICATED CARE.
          </p>
        </div>

        {/* Removed paragraph */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative">
                {/* iPhone Frame for 'Before' image */}
                <div className="relative aspect-[3/4] rounded-[3rem] bg-black p-3 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-8 bg-black rounded-b-3xl z-20" />
                  <div className="relative h-full rounded-[2.5rem] overflow-hidden bg-white">
                    <Image
                      src={transformations[activeIndex].before || "/placeholder.svg"}
                      alt={`${transformations[activeIndex].name} before`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Before
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-[75%] transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    VS
                  </div>
                </div>

                {/* iPhone Frame for 'After' image */}
                <div className="absolute -bottom-8 right-[-25%] w-2/3">
                  <div className="relative aspect-[3/4] rounded-[3rem] bg-black p-3 shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-8 bg-black rounded-b-3xl z-20" />
                    <div className="relative h-full rounded-[2.5rem] overflow-hidden bg-white">
                      <Image
                        src={transformations[activeIndex].after || "/placeholder.svg"}
                        alt={`${transformations[activeIndex].name} after`}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pl-8 lg:pl-16 lg:translate-x-[25%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h3 className="text-3xl font-light mb-4">{transformations[activeIndex].name}'s Transformation</h3>
                <p className="text-xl text-gray-600 mb-8">{transformations[activeIndex].story}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex space-x-4">
              {transformations.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

