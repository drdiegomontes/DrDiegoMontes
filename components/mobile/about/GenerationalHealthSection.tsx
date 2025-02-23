"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Play, Volume2, VolumeX, Pause } from "lucide-react"
import { motion } from "framer-motion"

export default function GenerationalHealthSection() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          {/* Content Section */}
          <div className="relative p-6 space-y-6">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-black opacity-30" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-black opacity-30" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-black opacity-30" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-black opacity-30" />

            {/* Content */}
            <div className="relative">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full" />
              <h2 className="text-3xl font-light mb-4 text-black">Generational Health & Wellness</h2>
              <div className="w-16 h-px bg-gradient-to-r from-black/50 to-transparent mb-4" />
            </div>

            <motion.p
              className="text-gray-600 leading-relaxed relative"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              My passion is generational health—helping not just my patients, but their children, grandchildren, and
              future generations. Through natural healing and preventive care, we break the cycle of chronic health
              issues and promote lasting wellness for your entire family.
            </motion.p>

            <ul className="space-y-4 text-gray-600">
              {[
                "Early Life & Pediatric Care: Supporting healthy development from day one",
                "Family Wellness: Breaking the cycle of generational health issues",
                "Senior Care: Maintaining mobility and vitality in later years",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-colors relative"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-black">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Video Section */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-DrMontes-Jouyrney-2.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                <span className="text-white text-xl tracking-wider mb-4">PLAY VIDEO</span>
                <Play className="w-12 h-12 text-white" />
              </div>
            )}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={togglePlay}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

