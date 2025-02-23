"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Instagram, Facebook, Volume2, VolumeX, Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dr. Diego Montes",
    type: "PHILOSOPHY",
    videoUrl: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/WellnessTipa-OurPatients.mp4",
    quote:
      "Dr. Diego Montes believes in unlocking the body's potential to heal naturally, embracing chiropractic care as a drug-free, surgery-free path to wellness.",
  },
  {
    id: 2,
    name: "Kishana Stiner",
    type: "PATIENT TESTIMONIAL",
    videoUrl: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/WellnessTipa-OurPatients-1.mp4",
    quote:
      "If you're looking for exceptional chiropractic care, I highly recommend Dr. Diego Montes. His expertise, precision, and genuine compassion for his patients set him apart. From the moment you walk in, you feel cared for, listened to, and confident that you're in the hands of a true professional. Dr. Montes is dedicated to not just relieving pain but improving overall health and well-being. A top-tier chiropractor who truly makes a difference!",
  },
  {
    id: 3,
    name: "Dr. Diego Montes",
    type: "MISSION",
    videoUrl: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/WellnessTipa-OurPatients-2.mp4",
    quote:
      "Dr. Diego Montes is dedicated to promoting generational health through chiropractic care, supporting not just today's patients, but also their children and grandchildren.",
  },
]

export default function VideoTestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const autoRotateTimeoutRef = useRef<NodeJS.Timeout>()
  const playPromiseRef = useRef<Promise<void> | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Auto-rotate videos
  useEffect(() => {
    if (isClient && videoRef.current) {
      // Try to play the video
      const playVideo = async () => {
        try {
          if (videoRef.current) {
            playPromiseRef.current = videoRef.current.play()
            await playPromiseRef.current
          }
        } catch (error) {
          // Ignore abort errors during unmount
          if (error.name !== "AbortError") {
            console.log("Playback prevented:", error)
          }
        }
      }

      playVideo()

      // Clear any existing timeout
      if (autoRotateTimeoutRef.current) {
        clearTimeout(autoRotateTimeoutRef.current)
      }

      // Set up next video rotation
      autoRotateTimeoutRef.current = setTimeout(() => {
        handleNext()
      }, 10000)
    }

    // Cleanup function
    return () => {
      // Cancel any pending play promise
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            if (videoRef.current) {
              videoRef.current.pause()
            }
          })
          .catch(() => {
            // Ignore any errors during cleanup
          })
      }

      // Clear the rotation timeout
      if (autoRotateTimeoutRef.current) {
        clearTimeout(autoRotateTimeoutRef.current)
      }
    }
  }, [isClient])

  // Handle mute state
  useEffect(() => {
    if (isClient && videoRef.current) {
      videoRef.current.muted = isMuted

      const playVideo = async () => {
        try {
          if (videoRef.current) {
            playPromiseRef.current = videoRef.current.play()
            await playPromiseRef.current
          }
        } catch (error) {
          if (error.name !== "AbortError") {
            console.log("Playback prevented:", error)
          }
        }
      }

      playVideo()
    }
  }, [isClient, isMuted])

  const handleNext = () => {
    // Cancel any pending play promise before changing video
    if (playPromiseRef.current) {
      playPromiseRef.current
        .then(() => {
          if (videoRef.current) {
            videoRef.current.pause()
          }
        })
        .catch(() => {
          // Ignore any errors
        })
        .finally(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
          if (videoRef.current) {
            videoRef.current.currentTime = 0
          }
        })
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      if (videoRef.current) {
        videoRef.current.currentTime = 0
      }
    }
  }

  const handlePrev = () => {
    // Cancel any pending play promise before changing video
    if (playPromiseRef.current) {
      playPromiseRef.current
        .then(() => {
          if (videoRef.current) {
            videoRef.current.pause()
          }
        })
        .catch(() => {
          // Ignore any errors
        })
        .finally(() => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
          if (videoRef.current) {
            videoRef.current.currentTime = 0
          }
        })
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      if (videoRef.current) {
        videoRef.current.currentTime = 0
      }
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
    setHasInteracted(true)
  }

  const handleCenterClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
    setHasInteracted(true)
  }

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-[3.5rem] md:text-[4.5rem] font-light leading-none mb-8 text-black">
              Hear from
              <br />
              Our Patients
            </h2>
          </div>
          <div>
            <p className="text-xl text-gray-700 mb-8">
              REAL STORIES FROM REAL PATIENTS. DISCOVER HOW DR. DIEGO MONTES HAS HELPED TRANSFORM LIVES THROUGH EXPERT
              CHIROPRACTIC CARE AND HOLISTIC WELLNESS APPROACHES.
            </p>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group"
            >
              <video
                ref={videoRef}
                src={testimonials[currentIndex].videoUrl}
                className="w-full h-full object-cover"
                playsInline
                muted={isMuted}
                onEnded={handleNext}
                loop={false}
              />

              {/* Show play icon overlay until user interacts - Now clickable */}
              {!hasInteracted && (
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: [0.8, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                  onClick={handleCenterClick}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full hover:bg-white/20 transition-all">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-8 text-white text-lg font-medium tracking-wide">
                    Click to start watching
                  </div>
                </motion.div>
              )}

              {/* Hover Play Indicator - Now clickable */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                initial={false}
                onClick={handleCenterClick}
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <blockquote className="text-xl mb-4">"{testimonials[currentIndex].quote}"</blockquote>
                <p className="font-semibold mb-4">{testimonials[currentIndex].name}</p>

                <motion.div
                  className="flex gap-8 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.a
                    href="#"
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Follow on Instagram"
                  >
                    <Instagram className="w-8 h-8" style={{ color: "#E1306C" }} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Follow on Facebook"
                  >
                    <Facebook className="w-8 h-8" style={{ color: "#1877F2" }} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Volume control in corner */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
              animate={{ scale: index === currentIndex ? 1.2 : 1 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

