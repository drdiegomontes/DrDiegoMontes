"use client"

import Image from "next/image"

export default function MobileServicesHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5009.jpg-mZYTEkFgmYLQU2Xjv0DxYEYnrEEjzk.jpeg"
        alt="Chiropractor performing spinal adjustment"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-light mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
            Discover insights, tips, and the latest in chiropractic care to support your journey to optimal health and
            wellness.
          </p>
        </div>
      </div>
    </section>
  )
}

