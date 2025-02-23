"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function PhilosophyManifesto() {
  return (
    <section className="bg-black py-32">
      {/* First Panel */}
      <div className="container mx-auto px-4 mb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-[1fr,auto,1fr] gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-[6rem] leading-none font-serif text-white">
              MANI
              <br />
              FESTO
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-sm">
            <p className="text-gray-300 text-sm mb-8">
              TO UNVEIL A NEW PARADIGM IN HEALTHCARE, WE CREATED A PRACTICE THAT TRANSCENDS TRADITIONAL BOUNDARIES.
            </p>
            <div className="text-xs text-gray-500">ALIGNMENT</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="relative w-80 h-48">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5048.jpg-4mG3ly1S6nQmVqGS17uBZdaRzCYJRv.jpeg"
              alt="Person making heart shape with hands at beach"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 rounded-lg" />
          </motion.div>
        </div>
      </div>

      {/* Second Panel */}
      <div className="container mx-auto px-4 mb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-[1fr,auto,1fr] gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-[6rem] leading-none font-serif text-white">
              HEAL
              <br />
              ING
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-sm">
            <p className="text-gray-300 text-sm mb-8">
              THROUGH INNOVATIVE TECHNIQUES AND HOLISTIC APPROACHES, WE REDEFINE THE BOUNDARIES OF SPINAL HEALTH.
            </p>
            <div className="text-xs text-gray-500">RESTORATION</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="relative w-80 h-48">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5045.jpg-hlPtUk4CWOHN0Ijko79qFuDxBzaP2H.jpeg"
              alt="Person with red rose in elegant setting"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 rounded-lg" />
          </motion.div>
        </div>
      </div>

      {/* Third Panel */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-[1fr,auto,1fr] gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-[6rem] leading-none font-serif text-white">
              WELL
              <br />
              NESS
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-sm">
            <p className="text-gray-300 text-sm mb-8">
              EMBRACING THE FUTURE OF WELLNESS WHILE HONORING THE WISDOM OF TRADITIONAL HEALING PRACTICES.
            </p>
            <div className="text-xs text-gray-500">VITALITY</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="relative w-80 h-48">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5049.jpg-BhK3bAXhWgF316CnB4X9c1hf9xYJGB.jpeg"
              alt="Athletic event on sports field"
              fill
              className="object-cover rounded-lg object-[center_25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

