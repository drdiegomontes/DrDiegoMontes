"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Users, Sparkles } from "lucide-react"
import { useState } from "react"

const philosophyItems = [
  {
    icon: Brain,
    title: "Holistic Approach",
    description:
      "We believe in treating the whole person, not just symptoms. Our approach considers physical, mental, and emotional well-being for complete healing.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "Your unique needs and goals are at the heart of our practice. We create personalized treatment plans that evolve with your progress.",
  },
  {
    icon: Users,
    title: "Community Wellness",
    description:
      "Building a healthier community through education, prevention, and sustainable wellness practices that benefit everyone.",
  },
  {
    icon: Sparkles,
    title: "Innovation & Tradition",
    description:
      "Blending time-tested healing methods with cutting-edge techniques to provide the most effective care possible.",
  },
]

export default function OurPhilosophy() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-light mb-6">Our Philosophy</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black/50 to-transparent mx-auto mb-6" />
          <p className="text-gray-600 text-lg">
            Our approach to wellness is built on four fundamental pillars that guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer relative group ${
                activeIndex === index ? "bg-black text-white" : "bg-white hover:bg-black/5"
              }`}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
              </div>

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors ${
                    activeIndex === index ? "bg-white" : "bg-black/5"
                  }`}
                >
                  <item.icon className={`w-6 h-6 ${activeIndex === index ? "text-black" : "text-black/70"}`} />
                </div>

                <h3 className={`text-2xl font-light mb-4 ${activeIndex === index ? "text-white" : "text-black"}`}>
                  {item.title}
                </h3>

                <p className={`leading-relaxed ${activeIndex === index ? "text-white/90" : "text-gray-600"}`}>
                  {item.description}
                </p>

                <motion.div
                  className={`w-8 h-1 mt-6 ${activeIndex === index ? "bg-white" : "bg-black/20"}`}
                  initial={{ width: 0 }}
                  animate={{ width: activeIndex === index ? 32 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

