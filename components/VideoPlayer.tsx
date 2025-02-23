"use client"

import { useRef, useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"

interface VideoPlayerProps {
  url: string
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted, isClient])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  if (!isClient) {
    return null // or a loading placeholder
  }

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={url}
        className="w-full h-full object-cover"
        playsInline
        loop
        autoPlay
        muted={isMuted}
      />
      <div className="absolute bottom-4 right-4">
        <button
          onClick={toggleMute}
          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        >
          {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
        </button>
      </div>
    </div>
  )
}

