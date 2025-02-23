"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

const wellnessTips = [
  "Take a 10-minute walk during your lunch break to boost energy and mood.",
  "Practice good posture by imagining a string pulling you up from the crown of your head.",
  "Stay hydrated by drinking at least 8 glasses of water throughout the day.",
  "Incorporate stretching into your morning routine to improve flexibility and reduce muscle tension.",
  "Take short breaks every hour to stand up, move around, and reset your posture.",
  "Try a 5-minute meditation session to reduce stress and improve focus.",
  "Eat a balanced diet rich in fruits, vegetables, and lean proteins to support overall health.",
  "Get at least 7-8 hours of quality sleep each night to support your body's natural healing processes.",
  "Practice deep breathing exercises when feeling stressed or overwhelmed.",
  "Maintain regular chiropractic check-ups to ensure proper spinal alignment and overall wellness.",
]

export default function DailyWellnessTipGenerator() {
  const [currentTip, setCurrentTip] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const generateRandomTip = () => {
    setIsLoading(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wellnessTips.length)
      setCurrentTip(wellnessTips[randomIndex])
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    generateRandomTip()
  }, []) //Fixed: Added empty dependency array to useEffect

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-green-500" />
      <AnimatePresence mode="wait">
        <motion.p
          key={currentTip}
          className="text-2xl md:text-3xl font-light mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {currentTip}
        </motion.p>
      </AnimatePresence>
      <Button
        onClick={generateRandomTip}
        className="bg-black text-white hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 px-6 py-3 rounded-full text-lg"
        disabled={isLoading}
      >
        <RefreshCw className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`} />
        {isLoading ? "Generating..." : "Get New Tip"}
      </Button>
    </motion.div>
  )
}

