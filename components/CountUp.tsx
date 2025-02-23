"use client"

import { useState, useEffect } from "react"

interface CountUpProps {
  end: number
  duration?: number
  onComplete?: () => void
}

export default function CountUp({ end, duration = 2000, onComplete }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      setCount(Math.floor(percentage * end))

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        if (onComplete) onComplete()
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration, onComplete])

  return <span>{count}</span>
}

