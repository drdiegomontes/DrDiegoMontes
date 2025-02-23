"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useAnimationFrame, useMotionValue } from "framer-motion"

const images = [
  {
    src: "https://pub-af6f4cefa51449e1bc1879efb21cc1a0.r2.dev/drmontessittingbyclientbench.png",
    caption: "expert care",
  },
  {
    src: "https://pub-af6f4cefa51449e1bc1879efb21cc1a0.r2.dev/naturalhealingupperbody.png",
    caption: "natural healing",
  },
  {
    src: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "proper posture",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "active lifestyle",
  },
]

// Duplicate images to create seamless loop
const duplicatedImages = [...images, ...images]

function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue<number>(0)

  useAnimationFrame(() => {
    if (!carouselRef.current) return

    const xValue = x.get()
    const containerWidth = carouselRef.current ? carouselRef.current.scrollWidth / 2 : 0

    if (xValue <= -containerWidth) {
      x.set(0)
    } else {
      x.set(xValue - 0.75)
    }
  })

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={carouselRef}
        style={{ x }}
        className="flex gap-8 w-fit transition-transform duration-300 ease-out"
      >
        {duplicatedImages.map((image, index) => (
          <div key={index} className="relative w-[400px] flex-shrink-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.caption}
                fill
                className="object-cover"
                loading="eager"
                sizes="(max-width: 400px) 100vw, 400px"
              />
            </div>
            <p className="text-lg text-gray-600">{image.caption}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function WellnessCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue<number>(0)

  useAnimationFrame(() => {
    if (!carouselRef.current) return

    const xValue = x.get()
    const containerWidth = carouselRef.current ? carouselRef.current.scrollWidth / 2 : 0

    if (xValue <= -containerWidth) {
      x.set(0)
    } else {
      x.set(xValue - 0.75)
    }
  })

  return (
    <section className="py-6 px-8 bg-white text-black overflow-hidden border-t border-b border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">{/* Removed text section */}</div>
      </div>

      {/* Carousel */}
      <Carousel />
    </section>
  )
}

