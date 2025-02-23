"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const successStories = [
  {
    name: "Sarah Johnson",
    age: 34,
    condition: "Chronic Back Pain",
    quote:
      "After years of struggling with chronic back pain, I finally found relief. The holistic approach didn't just treat my symptoms - it transformed my life.",
    image: "/placeholder.svg?height=400&width=300",
    improvement: "85% pain reduction",
  },
  {
    name: "Michael Chen",
    age: 45,
    condition: "Sports Injury",
    quote:
      "As an athlete, injuries can be devastating. The personalized recovery plan got me back to peak performance faster than I thought possible.",
    image: "/placeholder.svg?height=400&width=300",
    improvement: "Full recovery in 3 months",
  },
  {
    name: "Emma Rodriguez",
    age: 28,
    condition: "Posture Issues",
    quote:
      "Working from home was wreaking havoc on my posture. The comprehensive treatment plan and education helped me develop better habits.",
    image: "/placeholder.svg?height=400&width=300",
    improvement: "Significant posture improvement",
  },
]

export default function PatientSuccessStories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-light mb-6">Patient Success Stories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black/50 to-transparent mx-auto mb-6" />
          <p className="text-gray-600 text-lg">
            Real stories from real patients who have experienced transformative results through our care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-[400px] mb-6 overflow-hidden rounded-lg">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="relative">
                <Quote className="absolute -left-4 -top-4 w-8 h-8 text-black/10" />
                <blockquote className="text-gray-600 italic mb-4">{story.quote}</blockquote>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-black">{story.name}</h3>
                  <p className="text-gray-500">Age: {story.age}</p>
                  <p className="text-gray-500">Condition: {story.condition}</p>
                  <div className="pt-4">
                    <span className="inline-block px-4 py-2 bg-black/5 rounded-full text-sm">{story.improvement}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

