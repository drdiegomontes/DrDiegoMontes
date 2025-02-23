"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import { useEventListener } from "../hooks/useEventListener"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import Image from "next/image"

// Add geometric shapes configuration
const geometricConfigs = [
  { shape: "circle", size: 20, left: "10%", top: "20%", color: "black", opacity: 0.1 },
  { shape: "square", size: 15, right: "15%", top: "30%", color: "black", opacity: 0.1 },
  { shape: "circle", size: 25, left: "20%", bottom: "25%", color: "black", opacity: 0.1 },
  { shape: "square", size: 18, right: "25%", bottom: "35%", color: "black", opacity: 0.1 },
]

// Add wellness quotes
const wellnessQuotes = [
  { text: "Movement is Medicine", left: "8%", top: "40%", scale: 0.8 },
  { text: "Heal Naturally", right: "12%", top: "60%", scale: 0.7 },
  { text: "Align Your Life", left: "15%", bottom: "30%", scale: 0.9 },
  { text: "Restore Balance", right: "18%", bottom: "45%", scale: 0.75 },
]

// Add achievement badges
const achievementConfigs = [
  {
    icon: "🏆",
    text: "10+ Years Experience",
    left: "5%",
    top: "25%",
    scale: 0.6,
    delay: 0.2,
  },
  {
    icon: "⭐",
    text: "Expert Care",
    right: "8%",
    top: "35%",
    scale: 0.6,
    delay: 0.4,
  },
  {
    icon: "🌟",
    text: "Advanced Techniques",
    left: "10%",
    bottom: "40%",
    scale: 0.6,
    delay: 0.6,
  },
]

// Update banner configurations to replace text-based name
const bannerConfigs = [
  { right: "75%", top: "5%", scale: 0.4, delay: 0.2, opacity: 0.15 },
  { left: "80%", top: "15%", scale: 0.3, delay: 0.5, opacity: 0.2 },
  { right: "5%", top: "85%", scale: 0.35, delay: 0.8, opacity: 0.15 },
  { left: "85%", top: "90%", scale: 0.25, delay: 0.3, opacity: 0.2 },
  { left: "60%", top: "75%", scale: 0.3, delay: 0.6, opacity: 0.15 },
  { right: "65%", top: "10%", scale: 0.35, delay: 0.4, opacity: 0.2 },
]

// Define new image configurations
const newImageConfigs = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20(9)-xI1GKuwCmoGeplIyGYp25hcu3jRpsk.png",
    left: "5%",
    top: "15%",
    scale: 0.7,
    delay: 0.3,
    width: 300,
    height: 200,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20(11)-uh7sLqCOzRVQ8WF544RjN8z8jDgu6m.png",
    right: "5%",
    top: "25%",
    scale: 0.6,
    delay: 0.5,
    width: 200,
    height: 400,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20(3)-tmt8TMdyG6RQfAu8nKzMuvvA1pvN7Q.png",
    left: "10%",
    bottom: "10%",
    scale: 0.5,
    delay: 0.7,
    width: 200,
    height: 300,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20(6)-8xMZUbSVhkQJBh6rFlcnHQLdMDIq9d.png",
    right: "10%",
    bottom: "15%",
    scale: 0.6,
    delay: 0.4,
    width: 250,
    height: 250,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20(7)-CwTmIKh7UUdD8IyL0eQaw91ZNaJ8ii.png",
    left: "15%",
    top: "40%",
    scale: 0.7,
    delay: 0.6,
    width: 200,
    height: 400,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-LRQrfAvWkzAChhawB0ayGyW3aNgEDI.png",
    right: "15%",
    top: "45%",
    scale: 0.5,
    delay: 0.2,
    width: 200,
    height: 400,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20(9)-xI1GKuwCmoGeplIyGYp25hcu3jRpsk.png",
    left: "5%",
    top: "15%",
    scale: 0.7,
    delay: 0.3,
    width: 300,
    height: 200,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20(11)-uh7sLqCOzRVQ8WF544RjN8z8jDgu6m.png",
    right: "5%",
    top: "25%",
    scale: 0.6,
    delay: 0.5,
    width: 200,
    height: 400,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20(5)-KZdk3v6l9wlHvj8AsXdZrhAlutcJ8F.png",
    left: "20%",
    top: "20%",
    scale: 0.6,
    delay: 0.4,
    width: 200,
    height: 250,
    className: "opacity-30", // Add subtle transparency to silhouette
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20copy-mrTm58Gd57Vouxejb2hoEzg7XvFSn3.png",
    right: "20%",
    bottom: "20%",
    scale: 0.5,
    delay: 0.6,
    width: 200,
    height: 300,
    className: "opacity-30", // Add subtle transparency to silhouette
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20(1)%20copy-2pHzrWbrbsDKoG7vD0QqGE9O9MfCzI.png",
    left: "25%",
    bottom: "15%",
    scale: 0.7,
    delay: 0.3,
    width: 300,
    height: 400,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg%20(4)-2F6xyDaqlswHIekl8PnQln4HN4tW99.png",
    right: "25%",
    top: "15%",
    scale: 0.6,
    delay: 0.5,
    width: 400,
    height: 300,
  },
]

// Add professional title configurations
const professionalTitleConfigs = [
  {
    text: "Doctor of Chiropractic",
    left: "70%",
    top: "20%",
    scale: 0.9,
    delay: 0.3,
    rotate: -15,
  },
  {
    text: "Doctor of Chiropractic",
    right: "65%",
    bottom: "25%",
    scale: 0.8,
    delay: 0.6,
    rotate: 15,
  },
  {
    text: "Doctor of Chiropractic",
    left: "60%",
    bottom: "60%",
    scale: 0.7,
    delay: 0.9,
    rotate: -10,
  },
]

export default function LetsWorkTogether() {
  const router = useRouter()
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const bannerRefs = useRef<(HTMLDivElement | null)[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const titleRefs = useRef<(HTMLDivElement | null)[]>([])

  // Mouse move handler for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  useEventListener("scroll", handleScroll)

  useEffect(() => {
    const createFloatingAnimation = (ref: HTMLDivElement, index: number, type: "image" | "banner") => {
      const timeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: {
          duration: 3,
          ease: "power1.inOut",
        },
      })

      // Customize animation parameters based on element type
      const params = {
        image: { yOffset: 20, rotation: 2, scale: 0.05, duration: 3 },
        banner: { yOffset: 25, rotation: 3, scale: 0.08, duration: 4 },
      }[type]

      const { yOffset, rotation, scale, duration } = params

      // Add random variation
      const randomYOffset = yOffset + Math.random() * 10
      const randomRotation = rotation + Math.random() * 2
      const randomDuration = duration + Math.random() * 1
      const randomScale = scale + Math.random() * 0.03

      // Create floating animation
      timeline
        .to(ref, {
          y: -randomYOffset,
          rotation: randomRotation,
          scale: `+=${randomScale}`,
          duration: randomDuration,
          delay: index * 0.2,
        })
        .to(ref, {
          y: randomYOffset,
          rotation: -randomRotation,
          scale: `-=${randomScale}`,
          duration: randomDuration,
        })

      // Add subtle pulsing
      gsap.to(ref, {
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }

    // Apply animations to all elements
    imageRefs.current.forEach((ref, i) => ref && createFloatingAnimation(ref, i, "image"))
    bannerRefs.current.forEach((ref, i) => ref && createFloatingAnimation(ref, i, "banner"))

    return () => {
      gsap.killTweensOf([...imageRefs.current, ...bannerRefs.current])
    }
  }, [])

  return (
    <section className="relative min-h-[60vh] overflow-hidden py-12" onMouseMove={handleMouseMove}>
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
        <div className="grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-black/5" />
          ))}
        </div>
      </div>

      {/* Geometric Shapes */}
      {geometricConfigs.map((config, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute"
          style={{
            left: config.left,
            right: config.right,
            top: config.top,
            bottom: config.bottom,
          }}
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
        >
          <div
            className={`
              ${config.shape === "circle" ? "rounded-full" : ""}
              bg-black/10 backdrop-blur-sm
            `}
            style={{
              width: config.size,
              height: config.size,
              opacity: config.opacity,
            }}
          />
        </motion.div>
      ))}

      {/* Wellness Quotes */}
      {wellnessQuotes.map((quote, index) => (
        <motion.div
          key={`quote-${index}`}
          className="absolute text-black/20 font-light whitespace-nowrap"
          style={{
            left: quote.left,
            right: quote.right,
            top: quote.top,
            bottom: quote.bottom,
            transform: `scale(${quote.scale})`,
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          {quote.text}
        </motion.div>
      ))}

      {/* Professional Titles */}
      {professionalTitleConfigs.map((title, index) => (
        <motion.div
          key={`title-${index}`}
          ref={(el) => (titleRefs.current[index] = el)}
          className="absolute text-black/20 font-light whitespace-nowrap"
          style={{
            left: title.left,
            right: title.right,
            top: title.top,
            bottom: title.bottom,
            transform: `scale(${title.scale}) rotate(${title.rotate}deg)`,
          }}
          animate={{
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        >
          {title.text}
        </motion.div>
      ))}

      {/* Achievement Badges */}
      {achievementConfigs.map((badge, index) => (
        <motion.div
          key={`badge-${index}`}
          className="absolute flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2"
          style={{
            left: badge.left,
            right: badge.right,
            top: badge.top,
            bottom: badge.bottom,
            transform: `scale(${badge.scale})`,
          }}
          animate={{
            scale: [badge.scale, badge.scale * 1.1, badge.scale],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: badge.delay,
          }}
        >
          <span className="text-2xl">{badge.icon}</span>
          <span className="text-black/40 text-sm font-medium">{badge.text}</span>
        </motion.div>
      ))}

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Professional Title Text */}
        {professionalTitleConfigs.map((config, index) => (
          <motion.div
            key={`title-${index}`}
            className="absolute z-0 whitespace-nowrap"
            style={{
              left: config.left,
              right: config.right,
              top: config.top,
              bottom: config.bottom,
              transform: `scale(${config.scale}) rotate(${config.rotate}deg)`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: config.delay,
            }}
          >
            <span className="text-xl md:text-3xl font-bold tracking-tight text-black">Doctor of Chiropractic</span>
          </motion.div>
        ))}

        {/* Banner Images */}
        {bannerConfigs.map((config, index) => (
          <div
            key={`banner-${index}`}
            ref={(el) => (bannerRefs.current[index] = el)}
            className="absolute z-0"
            style={{
              ...config,
              transform: `scale(${config.scale})`,
              opacity: config.opacity,
              width: "300px",
              height: "60px",
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DrDiegoMontesBanner-hz8aM6KKHc5qMcf43kX4s1VtOcqfQP.png"
              alt="Dr. Diego Montes Banner"
              fill
              className="object-contain"
              priority
            />
          </div>
        ))}

        {/* New Images */}
        {newImageConfigs.map((config, index) => (
          <div
            key={`image-${index}`}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`absolute z-0 ${config.className || ""}`}
            style={{
              ...config,
              width: config.width,
              height: config.height,
              transform: `scale(${config.scale})`,
            }}
          >
            <Image
              src={config.src || "/placeholder.svg"}
              alt={`Wellness image ${index + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        ))}
      </div>

      {/* Add subtle particle effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-black/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4 mx-auto max-w-4xl">
        <p className="text-sm mb-4 text-black font-semibold tracking-wider">READY TO TRANSFORM YOUR HEALTH?</p>
        <div className="inline-block border border-black rounded-xl p-6 mb-4 bg-white/80 backdrop-blur-sm">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-center text-black mb-3">
            Start Your
            <br />
            Wellness Journey
          </h2>
          <p className="text-xl md:text-2xl text-center text-black max-w-2xl">
            Embark on a transformative path to optimal health and vitality with Dr. Diego Montes
          </p>
        </div>

        {/* "Explore Our Services" button */}
        <motion.button
          onClick={handleScroll}
          className="flex flex-col items-center text-black hover:text-gray-600 transition-colors group mb-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.p
            className="text-sm mb-2 font-medium"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            EXPLORE OUR SERVICES
          </motion.p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown size={24} className="text-black group-hover:text-gray-600" />
          </motion.div>
        </motion.button>

        {/* Call to Action Button */}
        <Button
          variant="outline"
          size="lg"
          className="mt-4 text-lg font-semibold px-8 py-6 rounded-full border-2 border-black bg-[#e3f677] text-black hover:bg-transparent hover:text-black transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault()
            router.push("/contact")
            smoothScrollToTop()
          }}
        >
          Book a Consultation
        </Button>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-4 h-4 border-l-2 border-t-2 border-gray-600" />
      <div className="absolute top-8 right-8 w-4 h-4 border-r-2 border-t-2 border-gray-600" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l-2 border-b-2 border-gray-600" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r-2 border-b-2 border-gray-600" />

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
    </section>
  )
}

