"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

const services = [
  {
    id: "spinal-adjustment",
    title: "Spinal Adjustment",
    category: "CORE TREATMENT • PAIN RELIEF • MOBILITY",
    image:
      "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/spinal-adjustment",
  },
  {
    id: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    category: "INJURY RECOVERY • PERFORMANCE • PREVENTION",
    image:
      "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/sports-rehabilitation",
  },
]

export default function MobileFeaturedServices() {
  const router = useRouter()

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    smoothScrollToTop()
  }

  return (
    <>
      {/* Holistic Approach Section */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full">
              <h2 className="text-3xl font-light leading-none mb-4">
                A Holistic
                <br />
                Approach to
                <br />
                Your Health
              </h2>
              <div className="max-w-xl">
                <p className="text-lg mb-4">
                  At Dr. Diego Montes' practice, we believe in addressing the whole person, not just the symptoms. Our
                  holistic approach combines chiropractic care with lifestyle advice to promote long-term health and
                  wellness.
                </p>
                {/* <p className="text-lg mb-4">
                  Experience the difference of personalized care that goes beyond quick fixes, focusing on sustainable
                  health improvements and empowering you to take control of your well-being.
                </p> */}
              </div>
            </div>
            <div className="w-full relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Tablet frame */}
                <div className="relative w-full aspect-[4/3] bg-black rounded-[40px] p-1 shadow-xl">
                  {/* Inner content area */}
                  <div className="relative h-full w-full rounded-[32px] overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1807-y1KigXf3s5xnXdJsOrgwe4XRWGlix0.jpeg"
                      alt="Dr. Diego Montes in a professional setting"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-[#131413] text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-8">
            <h2 className="text-3xl font-light leading-none mb-4">Featured Services</h2>
            <p className="text-sm max-w-full tracking-wide">
              DISCOVER OUR SPECIALIZED CHIROPRACTIC TREATMENTS DESIGNED TO ENHANCE YOUR OVERALL WELL-BEING AND QUALITY
              OF LIFE.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <div key={service.id} className="group block">
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 cursor-pointer border-4 border-white"
                  onClick={handleNavClick(service.href)}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <p className="text-sm tracking-wide text-white">{service.category}</p>
                    <span className="text-gray-400">|</span>
                    <Link
                      href={service.href}
                      className="text-sm text-[#e3f677] hover:text-white transition-colors flex items-center"
                      onClick={handleNavClick(service.href)}
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <h3 className="text-3xl font-light mb-4 cursor-pointer" onClick={handleNavClick(service.href)}>
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

