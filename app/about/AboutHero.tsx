"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

export default function AboutHero() {
  const controls = useAnimation()
  const rotateY = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const scale = useMotionValue(1)

  const glareX = useTransform(rotateY, [-10, 10], ["-100%", "100%"])
  const glareY = useTransform(rotateX, [-10, 10], ["-100%", "100%"])

  useEffect(() => {
    controls.start({
      rotateY: [0, 5, -5, 0],
      rotateX: [0, 5, -5, 0],
      transition: {
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    })

    const pulseAnimation = async () => {
      while (true) {
        await scale.set(1)
        await scale.set(1.05, { duration: 2, ease: "easeInOut" })
        await scale.set(1, { duration: 2, ease: "easeInOut" })
      }
    }

    pulseAnimation()
  }, [controls, scale])

  return (
    <div className="bg-white pt-32 px-8">
      <section className="relative min-h-[80vh] rounded-[2.5rem] overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="https://5ewb4vaux1.ufs.sh/f/r8GWM0suYH8MEatVQiDx53HzatjD8Id9inYP42sZfhKrLSyc"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                {/* Category Tag */}
                <div className="mb-8">
                  <span className="text-sm tracking-wider text-white/80">ABOUT DR. DIEGO MONTES</span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-8">
                  Pioneering
                  <br />
                  Chiropractic
                  <br />
                  Excellence
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12">
                  Discover the innovative approach and dedicated team behind our chiropractic and wellness center, led
                  by Dr. Diego Montes.
                </p>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full transition-colors"
                >
                  Explore Our Practice
                </Button>
              </div>

              {/* iPhone Frame with Image and Enhanced Animations */}
              <motion.div
                className="relative w-[300px] h-[600px] mx-auto overflow-hidden"
                animate={controls}
                style={{ rotateY, rotateX, scale }}
              >
                {/* iPhone Frame */}
                <div className="absolute inset-0 bg-black rounded-[3rem] shadow-xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-20" />
                  {/* Inner Frame */}
                  <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1.jpg-1MU6gCBHfZryXWgFlbJwfBZq28aeOW.jpeg"
                        alt="Dr. Diego Montes in his practice"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    {/* Glare Effect Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                      animate={{
                        opacity: [0, 0.7, 0],
                        left: ["-100%", "100%", "100%"],
                        top: ["-100%", "100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        repeatDelay: 1,
                      }}
                      style={{
                        width: "200%",
                        height: "200%",
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-white/20" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-white/20" />
      </section>
    </div>
  )
}

