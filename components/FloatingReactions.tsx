"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThumbsUp, Heart, Smile } from "lucide-react"

interface FloatingReactionProps {
  containerWidth: number
  containerHeight: number
}

const FloatingReaction: React.FC<FloatingReactionProps> = ({ containerWidth, containerHeight }) => {
  const [reactions, setReactions] = useState<
    { id: string; type: "thumbsUp" | "heart" | "smile"; count: number; x: number; y: number }[]
  >([])

  useEffect(() => {
    // Add initial set of reactions
    for (let i = 0; i < 10; i++) {
      const newReaction = {
        id: Math.random().toString(36).substr(2, 9),
        type: ["thumbsUp", "heart", "smile"][Math.floor(Math.random() * 3)] as "thumbsUp" | "heart" | "smile",
        count: Math.floor(Math.random() * 100) + 1,
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
      }
      setReactions((prev) => [...prev, newReaction])
      setTimeout(
        () => {
          setReactions((prev) => prev.filter((r) => r.id !== newReaction.id))
        },
        7000 + Math.random() * 5000,
      )
    }

    const addReaction = () => {
      const newReaction = {
        id: Math.random().toString(36).substr(2, 9),
        type: ["thumbsUp", "heart", "smile"][Math.floor(Math.random() * 3)] as "thumbsUp" | "heart" | "smile",
        count: Math.floor(Math.random() * 100) + 1,
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
      }
      setReactions((prev) => [...prev, newReaction])
      setTimeout(
        () => {
          setReactions((prev) => prev.filter((r) => r.id !== newReaction.id))
        },
        7000 + Math.random() * 5000,
      )
    }

    const interval = setInterval(addReaction, Math.random() * 300 + 200)
    return () => clearInterval(interval)
  }, [containerWidth, containerHeight])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {reactions.map((reaction) => (
          <motion.div
            key={reaction.id}
            initial={{ opacity: 0, scale: 0.5, x: reaction.x, y: reaction.y }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1.2, 1, 1.1, 0.5],
              x: reaction.x + (Math.random() - 0.5) * 100,
              y: reaction.y + (Math.random() - 0.5) * 100,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 5, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: reaction.x,
              top: reaction.y,
            }}
            className="flex items-center bg-white/30 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg"
          >
            {reaction.type === "thumbsUp" ? (
              <ThumbsUp className="text-white w-5 h-5 mr-2" />
            ) : reaction.type === "heart" ? (
              <Heart className="text-white w-5 h-5 mr-2" />
            ) : (
              <Smile className="text-white w-5 h-5 mr-2" />
            )}
            <span className="text-white text-sm font-semibold">{reaction.count}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FloatingReaction

