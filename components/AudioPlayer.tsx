"use client"

import { useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import dynamic from "next/dynamic"
import { useAudioStore } from "@/store/audioStore"

// Dynamically import WaveAnimation with no SSR
const WaveAnimation = dynamic(() => import("./WaveAnimation"), {
  ssr: false,
})

function SafeAudioPlayer() {
  const { initAudio, togglePlay, isPlaying } = useAudioStore()

  // Initialize audio on mount
  useEffect(() => {
    initAudio()
  }, [initAudio])

  return (
    <button
      type="button"
      className="p-2 rounded-full bg-black text-white flex items-center justify-center w-[42px] h-[42px] relative group border border-white"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        togglePlay()
      }}
    >
      {isPlaying ? (
        <>
          <span className="absolute opacity-100 group-hover:opacity-0 transition-opacity">
            <WaveAnimation isPlaying={isPlaying} />
          </span>
          <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity">
            <VolumeX className="w-5 h-5" />
          </span>
        </>
      ) : (
        <Volume2 className="w-5 h-5" />
      )}
    </button>
  )
}

// Export a client-only component
export default dynamic(() => Promise.resolve(SafeAudioPlayer), {
  ssr: false,
})

