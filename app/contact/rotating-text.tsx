"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const rotatingTexts = [
  "Transform Your Health",
  "Experience Expert Care",
  "Achieve Lasting Wellness",
  "Start Healing Today",
  "Live Pain-Free",
]

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[120px] md:h-[160px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light">{rotatingTexts[currentIndex]}</h2>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

