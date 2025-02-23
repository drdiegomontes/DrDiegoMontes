"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { SpadeIcon as Spine, Utensils, Activity, Moon, Brain } from "lucide-react"

const pillars = [
  // Top row
  { title: "Chiropractic Care", description: "Align your spine, align your life", icon: Spine },
  { title: "Nutrition", description: "Fuel your body with the right nutrients", icon: Utensils },
  { title: "Exercise", description: "Move your body, energize your mind", icon: Activity },
  // Bottom row (centered)
  { title: "Sleep", description: "Rest well, recover fully", icon: Moon },
  { title: "Stress Management", description: "Balance your mind for overall wellness", icon: Brain },
]

const PillarCard = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string
  description: string
  icon: any
  index: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
      }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
    >
      <div className="w-16 h-16 bg-[#3498db] rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

export default function PillarsOfWellness() {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-[#34495e] via-[#2c3e50] to-[#34495e] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2980b9] via-[#3498db] to-[#34495e] opacity-50" />
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-light mb-8 text-center"
        >
          The Pillars of Wellness
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto"
        >
          At Dr. Diego Montes Chiropractic, we believe in a holistic approach to wellness. These five pillars form the
          foundation of our philosophy for achieving optimal health and vitality.
        </motion.p>

        <div className="space-y-12">
          {/* Top row - first 3 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.slice(0, 3).map((pillar, index) => (
              <PillarCard key={index} {...pillar} index={index} />
            ))}
          </div>

          {/* Bottom row - last 2 pillars centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {pillars.slice(3).map((pillar, index) => (
              <PillarCard key={index + 3} {...pillar} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

