"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1_.jpg-NKmIqDNl0VyQ8EDlGpZSVSNTZT1Y1Y.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2_.jpg-yZsEsczgDSHpuPedv3113VJ3Tdt12F.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4_.jpg-Zeqh7l0Xx9CpEvKNnBBJaYUichiEMY.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img9_.jpg-vwn3MjQKedhLkT8i1pO0hdTqh4ZRc2.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6_.jpg-F5MzGNRZ7UzanVsTSux8EgFLvuq9V8.png",
]

interface FilmRollProps {
  direction?: "up" | "down"
}

export default function FilmRollGallery({ direction = "up" }: FilmRollProps) {
  const [currentImages, setCurrentImages] = useState<string[]>(images)

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "up") {
        setCurrentImages((prev) => {
          const newImages = [...prev]
          const lastImage = newImages.pop()!
          newImages.unshift(lastImage)
          return newImages
        })
      } else {
        setCurrentImages((prev) => {
          const newImages = [...prev]
          const firstImage = newImages.shift()!
          newImages.push(firstImage)
          return newImages
        })
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [direction])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
      <motion.div
        className="flex flex-col gap-4"
        initial={{ y: direction === "up" ? "100%" : "-100%" }}
        animate={{ y: direction === "up" ? "-100%" : "100%" }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...currentImages, ...currentImages].map((src, index) => (
          <div key={`${index}-${src}`} className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src={src || "/placeholder.svg"}
              alt={`Wellness image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

