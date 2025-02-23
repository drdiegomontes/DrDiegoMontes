"use client"

import type React from "react"
import { Play, Volume2, VolumeX, Pause } from "lucide-react"
import { useState, useRef } from "react"
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative p-8">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-black opacity-30" />
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-black opacity-30" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-black opacity-30" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-black opacity-30" />

            {/* Content with decorative elements */}
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full" />
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-black">
                Generational Health & Wellness
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black/50 to-transparent mb-6" />
            </div>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed relative"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="absolute -left-2 top-0 text-4xl text-black opacity-10">"</span>
              My passion is generational health—helping not just my patients, but their children, grandchildren, and
              future generations. Through natural healing and preventive care, we break the cycle of chronic health
              issues and promote lasting wellness for your entire family.
              <span className="absolute -right-2 bottom-0 text-4xl text-black opacity-10">"</span>
            </motion.p>

            <div className="relative">
              <div className="absolute -left-4 h-full w-px bg-gradient-to-b from-transparent via-black/30 to-transparent" />
              <ul className="space-y-4 text-gray-600">
                {[
                  "Early Life & Pediatric Care: Supporting healthy development from day one",
                  "Family Wellness: Breaking the cycle of generational health issues",
                  "Senior Care: Maintaining mobility and vitality in later years",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-black/5 transition-colors relative group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-black text-2xl absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    <span className="text-black ml-2">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-pointer" onClick={togglePlay}>
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
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center transition-opacity duration-300">
                <span className="text-white text-2xl md:text-3xl tracking-wider mb-4">PLAY VIDEO</span>
                <Play className="w-16 h-16 text-white" />
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

