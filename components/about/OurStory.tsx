"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

export default function OurStory() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section id="our-story" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8">Our Story</h2>
            <p className="text-lg mb-6">
              Dr. Diego Montes founded this practice with a vision to revolutionize chiropractic care. With over 15
              years of experience, he has developed a unique approach that combines traditional chiropractic techniques
              with cutting-edge technology and holistic wellness practices.
            </p>
            <p className="text-lg mb-6">
              Our mission is to empower our patients to take control of their health and live life to the fullest. We
              believe in addressing the root cause of health issues, not just treating symptoms.
            </p>
            <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#our-approach"
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Learn About Our Approach
              </a>
            </motion.div>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=400" alt="Dr. Diego Montes" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

