"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Parker",
    type: "CLIENT REVIEW",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%201.20.01%E2%80%AFPM-JXwNWQm7Gh54ifnH4VZBOuJSTC5j4p.png",
    text: "Dr. Thompson's approach to chiropractic care is truly transformative. The holistic wellness program has completely changed my quality of life and relieved my chronic back pain.",
    stars: 5,
  },
  {
    name: "Michael Turner",
    type: "CLIENT REVIEW",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%201.20.01%E2%80%AFPM-JXwNWQm7Gh54ifnH4VZBOuJSTC5j4p.png",
    text: "Our experience with the wellness center was nothing short of exceptional. The comprehensive treatment plan and attention to detail exceeded all expectations.",
    stars: 5,
  },
]

const services = [
  {
    title: "HOLISTIC TREATMENT",
    description:
      "Comprehensive wellness programs designed to address the root cause of pain and promote natural healing through integrated therapeutic approaches.",
  },
  {
    title: "PERSONALIZED CARE",
    description:
      "Customized treatment plans meticulously crafted to meet your unique needs, ensuring optimal results and long-term wellness success.",
  },
  {
    title: "ADVANCED TECHNIQUES",
    description:
      "State-of-the-art chiropractic methods and innovative therapeutic technologies combined to deliver superior results and faster recovery.",
  },
]

export default function TestimonialsAndServices() {
  return (
    <section className="py-24 px-4 sm:px-8 bg-[#1C1D1F] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#2A2B2D] border-none relative">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="text-lg font-medium mb-1 text-white">{testimonial.name}</h3>
                    <p className="text-sm text-green-300 mb-4">{testimonial.type}</p>
                    <p className="text-white leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
                <div className="absolute right-8 top-8 text-6xl text-gray-700 font-serif">"</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <h2 className="text-3xl lg:text-4xl font-light tracking-wide">{service.title}</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

