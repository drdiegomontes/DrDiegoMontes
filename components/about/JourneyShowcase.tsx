"use client"
import { useState, useEffect } from "react"
import { Search, Instagram, Facebook } from "lucide-react"

export default function JourneyShowcase() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const SocialIcons = ({ rotate }: { rotate: string }) => (
    <div className={`flex gap-4 justify-center mt-6 ${rotate}`} style={{ perspective: "1000px" }}>
      <a
        href="https://www.instagram.com/reel/C8GEjlfvLR-/?igsh=a3h3ZjB4N2NuYml0"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
        style={{ backdropFilter: "blur(4px)" }}
      >
        <span className="sr-only">View on Instagram</span>
        <Instagram
          className="w-5 h-5 text-[#E1306C] group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        />
      </a>
      <a
        href="https://fb.watch/xUjQdYZ5Z3/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
        style={{ backdropFilter: "blur(4px)" }}
      >
        <span className="sr-only">View on Facebook</span>
        <Facebook
          className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        />
      </a>
    </div>
  )

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="w-full lg:w-1/4 pt-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6">A Journey of Dedication</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              From the beginning of his career to his current practice, Dr. Diego Montes has remained committed to
              transforming lives through expert chiropractic care and holistic wellness approaches.
            </p>
            <p className="text-sm tracking-wide">
              DISCOVER OUR SPECIALIZED CHIROPRACTIC TREATMENTS DESIGNED TO ENHANCE YOUR OVERALL WELL-BEING AND QUALITY
              OF LIFE.
            </p>
          </div>

          {/* Phone Frames */}
          <div className="relative w-full lg:w-3/4 h-[800px]">
            {/* First Phone */}
            <div className="absolute left-[-5%] top-12 w-[320px] transform -rotate-6">
              <div className="relative">
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
              <SocialIcons rotate="-rotate-6" />
            </div>

            {/* Second Phone */}
            <div className="absolute left-[25%] top-0 w-[320px] transform rotate-3 z-10">
              <div className="relative">
                <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-20" />
                  <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden">
                    {isClient && (
                      <div className="absolute inset-0 overflow-hidden">
                        <video
                          src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/wellnesstips-transformyourhealth.mp4"
                          className="absolute inset-0 w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-[8px] pointer-events-none">
                    <div className="absolute bottom-6 left-4 right-4 z-30 pointer-events-auto">
                      <div className="relative flex items-center bg-white/90 backdrop-blur-md rounded-full border border-gray-200/50 shadow-lg">
                        <Search className="absolute left-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search for wellness"
                          className="w-full py-2.5 pl-10 pr-4 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SocialIcons rotate="rotate-3" />
            </div>

            {/* Third Phone */}
            <div className="absolute right-0 top-24 w-[320px] transform -rotate-3">
              <div className="relative">
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
              <SocialIcons rotate="-rotate-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

