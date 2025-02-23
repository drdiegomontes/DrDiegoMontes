"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Facebook } from "lucide-react" // Added import

const results = [
  {
    name: "A Doctor Who Cares",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5026.jpg-GaNWcoSZzM2JF0xexkuQWs3kMaRLWg.jpeg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5029.jpg-fuALDvgm735JwWL6uQAQTpIkrnoPgE.jpeg",
    story:
      "Dr. Diego Montes truly listens and takes the time to understand every patient's needs. His care goes beyond adjustments—he makes sure you leave feeling better, inside and out.",
  },
  {
    name: "Healing Hands, Happy Patients",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5027.jpg-WWZfIIELqoNIQk6e3RxCfREagNMSek.jpeg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5028.jpg-vXk1el7i83R4PFYswEXnGxgGkDAQ6y.jpeg",
    story:
      "Every visit with Dr. Diego Montes is a step toward feeling your best. His expertise and kindness make every adjustment a relief and every smile more genuine.",
  },
  {
    name: "Wellness You Can Feel",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5022.jpg-Pc7xbjvtF9PzRJe1mn9azQB8fB8MJ2.jpeg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5023.jpg-oHAKrNohkYxzoM6PWdNbxejjYXWITS.jpeg",
    story:
      "Dr. Diego Montes doesn't just treat pain—he helps you move, live, and feel better. Patients leave not just healthier, but happier, too!",
  },
]

export default function RealResults() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % results.length)
    }, 8000)

    if (typeof window !== "undefined") {
      return () => clearInterval(timer)
    }
  }, [])

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <h2 className="text-[4rem] md:text-[5.5rem] font-light leading-none mb-8 lg:mb-0">
            Real Results, Real Stories
          </h2>
          <p className="text-sm max-w-[400px] tracking-wide">
            DISCOVER THE LIFE-CHANGING IMPACT OF OUR CHIROPRACTIC CARE THROUGH PATIENT TESTIMONIALS.
          </p>
        </div>

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
                    {results[activeIndex].before && (
                      <Image
                        src={results[activeIndex].before || "/placeholder.svg"}
                        alt={`${results[activeIndex].name} before`}
                        fill
                        className="object-cover"
                        priority
                      />
                    )}
                    <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Visits
                    </div>
                  </div>
                </div>

                {/* iPhone Frame for 'After' image */}
                <div className="absolute -bottom-8 right-[-25%] w-2/3">
                  <div className="relative aspect-[3/4] rounded-[3rem] bg-black p-3 shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-8 bg-black rounded-b-3xl z-20" />
                    <div className="relative h-full rounded-[2.5rem] overflow-hidden bg-white">
                      {results[activeIndex].after && (
                        <Image
                          src={results[activeIndex].after || "/placeholder.svg"}
                          alt={`${results[activeIndex].name} after`}
                          fill
                          className="object-cover"
                          priority
                        />
                      )}
                      <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Smiles
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
                <h3 className="text-3xl font-light mb-4">{results[activeIndex].name}'s Story</h3>
                <p className="text-xl text-gray-600 mb-8">{results[activeIndex].story}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex space-x-4 mb-8">
              {results.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-8 mt-8">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                aria-label="Follow us on Instagram"
              >
                <Instagram
                  size={32}
                  className="text-[#E1306C] hover:text-white hover:bg-[#E1306C] rounded-lg transition-colors duration-300"
                />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                aria-label="Follow us on Facebook"
              >
                <Facebook
                  size={32}
                  className="text-[#1877F2] hover:text-white hover:bg-[#1877F2] rounded-lg transition-colors duration-300"
                />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

