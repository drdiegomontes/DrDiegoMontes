"use client"

import { motion } from "framer-motion"

export default function MissionManifesto() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-8xl font-serif mb-16">
            MANIFESTO
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-xl leading-relaxed"
              >
                To unveil a new paradigm in healthcare, we created a practice that goes beyond traditional boundaries.
                Our approach combines cutting-edge techniques with time-tested wisdom, creating a symphony of healing
                that resonates with each individual's unique needs.
              </motion.p>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl leading-relaxed"
              >
                We believe in the power of holistic healing, where every treatment is a step toward total wellness. Our
                mission is to empower you with the knowledge and care you need to achieve optimal health and vitality.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

