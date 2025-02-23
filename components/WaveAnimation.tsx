"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"

interface WaveAnimationProps {
  isPlaying: boolean
}

export default function WaveAnimation({ isPlaying }: WaveAnimationProps) {
  const bars = useMemo(() => [0, 1, 2, 3], [])

  return (
    <div className="flex items-center gap-[2px] h-4">
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="w-[2px] bg-white"
          animate={{
            height: isPlaying ? ["4px", "16px", "4px"] : "4px",
          }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: bar * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

