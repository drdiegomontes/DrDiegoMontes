"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function AboutVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light mb-8 text-center">Dr. Montes' Journey</h2>

        <div className="space-y-8">
          {/* Video Player */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-DrMontes-Jouyrney-2.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              loop
              muted={isMuted}
            />
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                <span className="text-2xl text-white tracking-wider mb-4">WATCH VIDEO</span>
                <Play className="w-16 h-16 text-white" />
              </div>
            )}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={toggleMute}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
              </button>
              <button
                onClick={togglePlay}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light mb-4">A JOURNEY OF HEALING AND PURPOSE</h3>
            <p className="text-gray-700 leading-relaxed">
              At the age of 22, Dr. Diego Montes experienced a life-changing event that would shape his future. The
              unexpected loss of his mother to a treatable condition became the catalyst for his journey into
              chiropractic care, igniting a passionate commitment to help others achieve optimal health and prevent
              similar tragedies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In this heartfelt video, Dr. Montes shares his personal story and the driving force behind his dedication
              to chiropractic medicine. His journey reflects not just professional growth, but a deeply personal mission
              to transform lives through holistic healing and preventive care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

