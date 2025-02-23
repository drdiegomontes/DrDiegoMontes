"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ClinicalExcellenceShowcase() {
  return (
    <section className="relative bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Image and Award */}
            <div className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-auto md:h-[600px]">
              <div className="absolute inset-0 bg-[#F0F1FA] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1.jpg-1MU6gCBHfZryXWgFlbJwfBZq28aeOW.jpeg"
                  alt="Dr. Diego Montes"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <h3 className="text-lg font-semibold text-[#8B0000] mb-1">Clinical Excellence Award</h3>
                <p className="text-sm text-gray-600">Recipient: Dr. Diego Montes</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                Clinical Excellence Award Recognition
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are proud to announce that Dr. Diego Montes has been honored with the prestigious Clinical Excellence
                Award. This distinguished recognition celebrates his exceptional achievements in chiropractic care and
                his unwavering dedication to advancing the field of chiropractic medicine.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Outstanding achievement in clinical practice",
                  "Recognition for exceptional patient care",
                  "Distinguished leadership in chiropractic medicine",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#8B0000]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-[#8B0000] hover:bg-[#6d0000] text-white px-8 py-3 rounded-full text-lg transition-colors duration-300">
                Learn About Our Award-Winning Practice
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

