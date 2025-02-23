"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const expertiseAreas = [
  {
    title: "Advanced Diagnostics",
    description: "Using state-of-the-art technology to identify the root cause of your discomfort.",
  },
  {
    title: "Personalized Treatment",
    description: "Tailored therapeutic approaches based on your unique needs and goals.",
  },
  {
    title: "Holistic Wellness",
    description: "Comprehensive care that addresses both physical and overall well-being.",
  },
  {
    title: "Preventive Care",
    description: "Proactive strategies to maintain optimal health and prevent future issues.",
  },
]

export default function ExpertiseShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 bg-black text-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Areas of Expertise</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover our comprehensive range of specialized services designed to help you achieve optimal health and
              wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 cursor-pointer overflow-hidden"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-light mb-4 group-hover:text-white transition-colors">{area.title}</h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{area.description}</p>
                  <div className="flex items-center text-gray-400 group-hover:text-white transition-colors">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

