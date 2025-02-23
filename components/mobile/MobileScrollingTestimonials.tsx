"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, ExternalLink } from "lucide-react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

const testimonials = [
  {
    quote:
      "After struggling with fibromyalgia for over 15 years, I now experience little to no symptoms—thanks to Dr. Montes and his chiropractic care. His dedication and trust in the body's ability to heal through the nervous system have changed my life. I'm beyond grateful for his expertise and the care he provides!",
    name: "Dr. Diego Montes Aunty",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patient-smile-1.webp-5NeQ5SJFJnu5RKEzFRUAh7AietrMjk.png",
    link: "https://www.instagram.com/reel/C8GEjlfvLR-/?igsh=a3h3ZjB4N2NuYml0",
  },
  {
    quote:
      "Chiropractic care with Dr. Montes changed everything! I feel like I'm using new muscles, my body is aligned, and my migraines are gone. I've never felt better!",
    name: "Miguel",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patient-smile-2.webp-OvLIy47qsXiGYJCV1NIVe7sUVskvkj.jpeg",
    link: "https://www.instagram.com/reel/DB1NGS6Tk-O/?igsh=MWR2cWUwcDM0aWYxaA==",
  },
  {
    quote:
      "Dr. Montes is incredibly knowledgeable, taking the time to listen to my concerns and explain each part of the treatment process thoroughly. His adjustments have made a world of difference for my pain and mobility, and I always leave feeling so much better.",
    name: "Gretchen Tolentino",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20(2)-5ONIZGmj1dQ3eafOUJuGpq2EM1ooHk.png",
    link: "https://maps.app.goo.gl/3UJVirLTwf4ZDBN86",
  },
  {
    quote:
      "I've been adjusted by so many celebrity chiropractors but none has come even close to being adjusted by Dr. Montes. You literally feel like a brand new person after being adjusted by him. Highly recommend!",
    name: "Hamid Kargaran",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20(3)-pw0fgSzxOof4HnLBF55FNclivvCpbX.png",
    link: "https://maps.app.goo.gl/zhYPGq5C8w3HMoac7",
  },
  {
    quote:
      "Dr. Montes' care has made a huge difference! My neck, shoulder, and lower back pain have decreased, and I feel amazing. Truly grateful for the results!",
    name: "Glen",
    age: "30",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4982.jpg-Cbz2lf3Nn8VDoXB4d8HgIge8xePmrK.jpeg",
    link: "https://www.instagram.com/p/DDKowSRy3Be/?igsh=dDljMnl5c2R1bzk5",
  },
  {
    quote:
      "Dr. Montes and his team truly care! Chiropractic has helped me heal and do more of what I love. Grateful for the care, guidance, and support!",
    name: "Antony",
    age: "25",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img7_.jpg-UVWsfSymolKOBWsnUpZ3PRSnTYNX2Q.png",
    link: "https://www.instagram.com/p/C90GxNmPhpO/?igsh=OWZodnZrbW40dHBm",
  },
]

export default function MobileScrollingTestimonials() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const router = useRouter()

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    smoothScrollToTop()
  }

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="bg-black text-white py-16 overflow-hidden">
      {/* Scrolling Banner */}
      <div className="relative w-full overflow-hidden mb-8">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-3xl font-light mx-4">
              Testimonials <span className="text-[#e3f677]">★</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden">
              {/* Header - Always visible */}
              <div className="flex items-center gap-4 p-4 cursor-pointer" onClick={() => toggleExpand(index)}>
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-white">{testimonial.name}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
                />
              </div>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0">
                  <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                  <button
                    onClick={handleNavClick(testimonial.link)}
                    className="text-[#e3f677] hover:text-white transition-colors flex items-center gap-2 text-sm"
                  >
                    View full review <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

