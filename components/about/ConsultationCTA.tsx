"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function ConsultationCTA() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-8xl font-bold mb-12"
          >
            Start now
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-light mb-12 max-w-3xl"
          >
            We are ready to guide you on your journey to optimal health. Schedule your consultation today and take the
            first step towards transformation.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group flex items-center text-xl font-semibold"
          >
            Book Consultation
            <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-2" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

