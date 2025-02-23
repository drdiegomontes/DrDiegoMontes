"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import type React from "react" // Added import for React

const INTRO_VIDEO_URL = "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/PlayReelLargeHomepageVideo.mp4"

export default function MobilePlayReel() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
        if (isMuted) {
          videoRef.current.muted = false
          setIsMuted(false)
        }
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }, [isMuted])

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault()
        handlePlay()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [handlePlay])

  return (
    <section className="relative px-2 sm:px-4 md:px-6 lg:px-8 pt-8 pb-4 sm:pt-12 sm:pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-10 overflow-hidden bg-white">
      {/* Corner Plus Signs */}
      <div className="absolute inset-0 p-8">
        <div className="relative w-full h-full">
          <span className="absolute top-0 left-0 text-2xl opacity-50">+</span>
          <span className="absolute top-0 right-0 text-2xl opacity-50">+</span>
          <span className="absolute bottom-0 left-0 text-2xl opacity-50">+</span>
          <span className="absolute bottom-0 right-0 text-2xl opacity-50">+</span>
        </div>
      </div>

      <div className="max-w-[95vw] mx-auto">
        {/* Video Container */}
        <div
          className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/9] lg:aspect-[21/9] rounded-2xl overflow-hidden cursor-pointer mb-4 sm:mb-6 md:mb-8 lg:mb-10"
          onClick={handlePlay}
        >
          <video
            ref={videoRef}
            src={INTRO_VIDEO_URL}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            loop
            onError={(e) => console.error("Video loading error:", e)}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] font-light">
                  WATCH
                </span>
                <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] font-light">
                  VIDEO
                </span>
              </div>
            </div>
          )}
          {isPlaying && (
            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
              <button onClick={toggleMute} className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors">
                {isMuted ? <VolumeX className="w-8 h-8 text-white" /> : <Volume2 className="w-8 h-8 text-white" />}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePlay()
                }}
                className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <Pause className="w-8 h-8 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

