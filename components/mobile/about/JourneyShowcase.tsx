"use client"

import { useState, useEffect } from "react"

export default function JourneyShowcase() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Text Content */}
        <div className="mb-8">
          <h2 className="text-3xl font-light mb-4">A Journey of Dedication</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            From the beginning of his career to his current practice, Dr. Diego Montes has remained committed to
            transforming lives through expert chiropractic care and holistic wellness approaches.
          </p>
          <p className="text-sm tracking-wide">
            DISCOVER OUR SPECIALIZED CHIROPRACTIC TREATMENTS DESIGNED TO ENHANCE YOUR OVERALL WELL-BEING AND QUALITY OF
            LIFE.
          </p>
        </div>

        {/* Phone Frames - Stacked for mobile */}
        <div className="space-y-8">
          {/* First Phone */}
          <div className="relative w-full max-w-[320px] mx-auto">
            <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-20" />
              <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden">
                {isClient && (
                  <video
                    src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-JourneyShowcase-3.mov"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
              </div>
            </div>
          </div>

          {/* Second Phone */}
          <div className="relative w-full max-w-[320px] mx-auto">
            <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-20" />
              <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden">
                {isClient && (
                  <video
                    src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-JourneyShowcase-2.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-full overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search for Wellness"
                    className="w-full py-2 px-4 bg-transparent text-black placeholder-gray-500 text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Third Phone */}
          <div className="relative w-full max-w-[320px] mx-auto">
            <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-20" />
              <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden">
                {isClient && (
                  <video
                    src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-JourneyShowcase.MP4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

