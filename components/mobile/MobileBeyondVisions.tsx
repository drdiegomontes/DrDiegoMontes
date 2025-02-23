"use client"
import Link from "next/link"
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

const WELLNESS_VIDEO_URL = "https://5ewb4vaux1.ufs.sh/f/r8GWM0suYH8MRZwAm66HPiemZ7Vt1LhayTMukU6BQpS23Ydb"

const scrollingText = [
  "HOLISTIC HEALING",
  "SPINAL HEALTH",
  "WELLNESS JOURNEY",
  "NATURAL BALANCE",
  "OPTIMAL VITALITY",
  "MINDFUL MOVEMENT",
  "BODY HARMONY",
  "HEALING TOUCH",
]

export default function MobileBeyondVisions() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const router = useRouter()

  const handlePlayClick = () => {
    setIsVideoPlaying(true)
  }

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    smoothScrollToTop()
  }

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-12">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="relative">
            <h2 className="text-3xl font-light mb-4 text-black">
              <div>Beyond</div>
              <div>Visions</div>
            </h2>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              {isVideoPlaying ? (
                <div className="absolute inset-0 bg-black">
                  <video
                    src={WELLNESS_VIDEO_URL}
                    className="w-full h-full object-contain"
                    autoPlay
                    controls
                    playsInline
                  />
                </div>
              ) : (
                <div className="relative w-full h-full group cursor-pointer" onClick={handlePlayClick}>
                  <video src={WELLNESS_VIDEO_URL} className="object-cover w-full h-full" muted playsInline loop />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="lg:pl-12">
            <h3 className="text-xl font-light mb-4 text-black">Comprehensive Chiropractic Care</h3>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
              Dr. Diego Montes is dedicated to providing comprehensive chiropractic care that addresses the root cause
              of your discomfort. With a focus on holistic wellness, we combine advanced techniques with personalized
              treatment plans to help you achieve optimal health and vitality.
            </p>
            <Button
              variant="outline"
              className="rounded-full px-6 py-2 border-2 border-black text-white bg-black hover:bg-transparent hover:text-black transition-colors duration-300 group"
              onClick={handleNavClick("/about")}
            >
              <Link href="/about" className="flex items-center">
                <span className="mr-2">About Dr. Montes</span>
                <span className="w-2 h-2 bg-current rounded-full transition-transform group-hover:scale-110" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative bg-[#1e2021] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e2021] to-transparent opacity-10" />
        <div className="flex overflow-hidden py-6">
          <div className="animate-scroll flex whitespace-nowrap">
            {[...scrollingText, ...scrollingText].map((text, i) => (
              <div key={i} className="flex items-center mx-4">
                <span className="text-white text-xl tracking-[0.2em] font-medium">{text}</span>
                <span className="w-1.5 h-1.5 bg-white/30 rounded-full ml-8" />
              </div>
            ))}
          </div>
          <div className="animate-scroll flex whitespace-nowrap" aria-hidden="true">
            {[...scrollingText, ...scrollingText].map((text, i) => (
              <div key={i} className="flex items-center mx-4">
                <span className="text-white text-xl tracking-[0.2em] font-medium">{text}</span>
                <span className="w-1.5 h-1.5 bg-white/30 rounded-full ml-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

