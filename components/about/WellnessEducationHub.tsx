"use client"

import { motion } from "framer-motion"
import { BookOpen, Video, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const resources = [
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Access our library of wellness guides, articles, and research papers.",
    link: "#",
  },
  {
    icon: Video,
    title: "Video Library",
    description: "Watch expert demonstrations of exercises and wellness techniques.",
    link: "#",
  },
  {
    icon: FileText,
    title: "Wellness Blog",
    description: "Stay updated with the latest in health and wellness practices.",
    link: "#",
  },
  {
    icon: Calendar,
    title: "Workshops & Events",
    description: "Join our community wellness events and educational workshops.",
    link: "#",
  },
]

export default function WellnessEducationHub() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-light mb-6">Wellness Education Hub</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black/50 to-transparent mx-auto mb-6" />
          <p className="text-gray-600 text-lg">
            Empowering our community with knowledge and resources for sustainable wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-black group-hover:text-white transition-colors duration-300"
                >
                  Learn More
                </Button>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/10 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-black text-white hover:bg-black/90 transition-colors duration-300">
            Explore All Resources
          </Button>
        </div>
      </div>
    </section>
  )
}

