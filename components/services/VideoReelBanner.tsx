"use client"

import type React from "react"

import { useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

// Update the VIDEO_URL constant at the top of the file
const VIDEO_URL = "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/Services-SpinalHealthImportance.mp4"

export default function VideoReelBanner() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const handleClick = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  return (
    <section className="relative bg-white py-24 px-8">
      {/* Corner Plus Signs */}
      <div className="absolute inset-0 p-8">
        <div className="relative w-full h-full">
          <span className="absolute top-0 left-0 text-2xl opacity-50">+</span>
          <span className="absolute top-0 right-0 text-2xl opacity-50">+</span>
          <span className="absolute bottom-0 left-0 text-2xl opacity-50">+</span>
          <span className="absolute bottom-0 right-0 text-2xl opacity-50">+</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <h2 className="text-[4rem] md:text-[5.5rem] font-light leading-none mb-8 lg:mb-0 text-black">
            Experience Our Care
          </h2>
          <p className="text-sm max-w-[400px] tracking-wide text-gray-600">
            WATCH HOW WE TRANSFORM LIVES THROUGH EXPERT CHIROPRACTIC TREATMENT
          </p>
        </div>
      </div>

      {/* Video Container with Frame */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-4">
          {/* Golden/Orange glow frame */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-white border-4 border-[#B8860B]/40 shadow-[0_0_30px_rgba(184,134,11,0.3)]" />

          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
            <video
              src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/about-carousel-background.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-[110%] h-full object-cover left-1/2 -translate-x-1/2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Main Video Content */}
            <div className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer" onClick={handleClick}>
              {isVideoPlaying ? (
                <div className="relative w-full h-full bg-black">
                  <video
                    src={VIDEO_URL}
                    className="w-full h-full object-contain"
                    autoPlay
                    controls
                    playsInline
                    muted={isMuted}
                  />
                  <div className="absolute bottom-4 right-4 flex space-x-2 z-30">
                    <button
                      onClick={toggleMute}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-6 h-6 text-white" />
                      ) : (
                        <Volume2 className="w-6 h-6 text-white" />
                      )}
                    </button>
                    <button
                      onClick={handleClick}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Pause className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full group">
                  <video src={VIDEO_URL} className="object-cover w-full h-full" muted playsInline loop autoPlay />
                  <div className="absolute inset-0 bg-black/30" />
                  {/* Play Text and Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="flex items-center gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
                      <span className="relative">WATCH</span>
                      <Play className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform duration-700 group-hover:scale-110" />
                      <span className="relative">VIDEO</span>
                    </div>
                    <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl text-center px-4">
                      Experience the transformative power of professional chiropractic care
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

