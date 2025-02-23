"use client"

import { motion } from "framer-motion"

const specialties = [
  {
    title: "CONSULTATION",
    description: "Comprehensive evaluation and personalized care planning for your unique needs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drmontes-clientbench%20(1).png-DnfY5LKoABUclAYuSUK7SDXgzwy4hu.jpeg",
    position: "center",
  },
  {
    title: "TREATMENT",
    description: "Advanced therapeutic techniques for optimal results.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AF1QipO4W0wnZ-CGREB63idKb8Q8V-DlocenTc0_1iyA=s387-k-no-EBZ6iw9rEB3wGa1rX4zzMhaQYKHUFY.jpeg",
    position: "left center",
  },
  {
    title: "REHABILITATION",
    description: "Progressive recovery programs to restore function and mobility.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AF1QipNRa2wqgwyohdtCIn28aZptrDQlxcz96JFuONp3=w203-h270-k-no-CRYeaKPWmYG9wHc25vUuHPXpNAq2QG.jpeg",
    position: "center",
  },
  {
    title: "WELLNESS",
    description: "Holistic approaches to maintain and enhance your health.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5009.jpg-MyHo1UMHabrriXtwjbnrJu1SY0a1Ii.jpeg",
    position: "center",
  },
]

export default function SpecialtiesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-7xl font-bold mb-16"
        >
          SERVICES
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={specialty.image || "/placeholder.svg"}
                  alt={specialty.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: specialty.position }}
                />
                {/* Add a gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-right">
                <h3 className="text-4xl font-bold whitespace-nowrap bg-white/80 px-4 py-2 rounded">
                  {specialty.title}
                </h3>
              </div>
              <div className="mt-6 p-4">
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

