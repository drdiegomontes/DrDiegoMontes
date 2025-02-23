"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import VideoPlayer from "@/components/VideoPlayer"
import { Instagram, Facebook } from "lucide-react"

const transformations = [
  {
    name: "Mike Johnson",
    before: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/wellnesstips-transformative-3a.mov",
    after: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/wellnesstips-transformative-3b.mp4",
    story:
      "As an athlete, Mike's performance reached new heights with regular chiropractic adjustments and lifestyle guidance from Dr. Montes.",
  },
  {
    name: "Young Patient's Journey",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5011.JPG-6AuVtxHN612sr2WpxzTTJuAfIiz4ny.jpeg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5012.JPG-au47LnlqI6wBI2tKYIFvpNiNakHzEP.jpeg",
    story:
      "Children of all ages can benefit from gentle chiropractic care. Through safe, specialized adjustments tailored for young patients, Dr. Montes helps children maintain proper spinal alignment during their crucial developmental years. Regular chiropractic care can support better posture, improved sleep, and overall wellness for kids.",
  },
  {
    name: "John Doe",
    before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5017.jpg-4395axxXNRJN7OTKYWMAksm87YOJwT.jpeg",
    after: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/wellness-tips-transformative-journeys.mov",
    story:
      "After years of chronic back pain, John found relief through Dr. Montes' personalized chiropractic care plan.",
  },
  {
    name: "Jane Smith",
    before: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/wellnesstips-TJ-2.mov",
    after: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/wellnesstips-TJ.mp4",
    story:
      "Jane's posture and overall well-being improved dramatically after following Dr. Montes' holistic wellness approach.",
  },
]

export default function TransformativeJourneys() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % transformations.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <h2 className="text-[4rem] md:text-[5.5rem] font-light leading-none mb-8 lg:mb-0">
            Transformative Journeys: Before & After
          </h2>
          <p className="text-sm max-w-[400px] tracking-wide">
            SEE THE INCREDIBLE TRANSFORMATIONS OUR PATIENTS HAVE EXPERIENCED THROUGH DEDICATED CARE.
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
                <div
                  className="relative aspect-[3/4] rounded-[3rem] bg-black p-3 shadow-2xl"
                  style={{ transform: "translateX(-33.33%)" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-8 bg-black rounded-b-3xl z-20" />
                  <div className="relative h-full rounded-[2.5rem] overflow-hidden bg-white">
                    {transformations[activeIndex].before.includes(".mov") ||
                    transformations[activeIndex].before.includes(".mp4") ? (
                      <VideoPlayer url={transformations[activeIndex].before} />
                    ) : (
                      <Image
                        src={transformations[activeIndex].before || "/placeholder.svg"}
                        alt={`${transformations[activeIndex].name} before`}
                        fill
                        className="object-cover"
                        priority
                      />
                    )}
                    <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Before
                    </div>
                  </div>
                </div>

                {/* iPhone Frame for 'After' image or video */}
                <div className="absolute -bottom-8 right-[-22%] w-[75%]">
                  <div className="relative aspect-[3/4] rounded-[3rem] bg-black p-3 shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-8 bg-black rounded-b-3xl z-20" />
                    <div className="relative h-full rounded-[2.5rem] overflow-hidden bg-white">
                      {transformations[activeIndex].after.includes(".mov") ||
                      transformations[activeIndex].after.includes(".mp4") ? (
                        <VideoPlayer url={transformations[activeIndex].after} />
                      ) : (
                        <Image
                          src={transformations[activeIndex].after || "/placeholder.svg"}
                          alt={`${transformations[activeIndex].name} after`}
                          fill
                          className="object-cover"
                          priority
                        />
                      )}
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

            <div className="flex flex-col gap-8">
              {/* Dots navigation */}
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

              {/* Social Media Icons - Added below the dots */}
              <div className="flex items-center gap-8">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={32} className="text-[#E1306C]" />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={32} className="text-[#1877F2]" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

