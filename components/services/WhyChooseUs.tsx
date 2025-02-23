"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Clock, Award, MessageSquare, TrendingUp, Zap, HandshakeIcon } from "lucide-react"

function RotatingBanner() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: [0, -1000],
      transition: {
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    })
  }, [controls])

  return (
    <div className="bg-[#E3F677] w-full overflow-hidden py-4 -mt-4">
      <div className="max-w-[200%]">
        <motion.div className="whitespace-nowrap" animate={controls}>
          {[
            "Expert Chiropractic Care ★",
            "Holistic Wellness Approach ★",
            "Pain-Free Living ★",
            "Spinal Health Specialists ★",
            "Personalized Treatment Plans ★",
            "Improved Mobility & Function ★",
            "Natural Healing Techniques ★",
            "Preventive Care Experts ★",
          ].map((phrase, i) => (
            <span key={i} className="text-[2rem] md:text-[2.5rem] font-light mx-4 text-black">
              {phrase}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const features = [
  {
    icon: Clock,
    title: "Valuing Your Time",
    description: "Efficient scheduling and minimal wait times",
  },
  {
    icon: Award,
    title: "Expert Care",
    description: "Advanced techniques and proven results",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Transparent treatment plans and progress updates",
  },
  {
    icon: TrendingUp,
    title: "Continuous Progress",
    description: "Tracking and optimizing your wellness journey",
  },
  {
    icon: Zap,
    title: "Modern Techniques",
    description: "State-of-the-art equipment and methods",
  },
  {
    icon: HandshakeIcon,
    title: "Partnership Approach",
    description: "Working together for your optimal health",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white pt-0 pb-24">
      <RotatingBanner />
      <div className="px-8">
        <div className="mx-auto text-center pt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[4rem] md:text-[5.5rem] font-light mb-6"
          >
            There are many clinics,
            <br />
            so why choose us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 mb-16"
          >
            Since day one, aligned with our core principles, we focus on:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="flex flex-col items-center"
              >
                <div className="mb-6">
                  <feature.icon className="w-12 h-12 text-[#e3f677]" />
                </div>
                <h3 className="text-xl font-light mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

