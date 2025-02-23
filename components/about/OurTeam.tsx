"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

const teamMembers = [
  {
    name: "Dr. Diego Montes",
    role: "Lead Chiropractor",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Wellness Specialist",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chen",
    role: "Physical Therapist",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emily Rodriguez",
    role: "Nutritionist",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function OurTeam() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-light mb-2">{member.name}</h3>
                <p className="text-emerald-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

