"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Instagram, Facebook } from "lucide-react"
import type React from "react"

const videos = [
  {
    id: 1,
    title: "Spinal Adjustment Technique",
    duration: "3:21",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1_.jpg-NKmIqDNl0VyQ8EDlGpZSVSNTZT1Y1Y.png",
    url: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/Services-SpinalHealthImportance.mp4",
  },
  {
    id: 2,
    title: "Sports Rehabilitation",
    duration: "2:45",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2_.jpg-yZsEsczgDSHpuPedv3113VJ3Tdt12F.jpeg",
    url: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-VideoPlayer.mp4",
  },
  {
    id: 3,
    title: "Holistic Wellness Approach",
    duration: "4:12",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4_.jpg-Zeqh7l0Xx9CpEvKNnBBJaYUichiEMY.jpeg",
    url: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-VideoPlayer-2.mp4",
  },
  {
    id: 4,
    title: "Pain Management Solutions",
    duration: "3:45",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img9_.jpg-vwn3MjQKedhLkT8i1pO0hdTqh4ZRc2.jpeg",
    url: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-VideoPlayer-3.mp4",
  },
]

export default function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState(videos[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleVideoSelect = (video: (typeof videos)[0]) => {
    setCurrentVideo(video)
    setIsPlaying(false)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  return (
    <section className="pt-12 pb-24 px-8 bg-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Title Section - moved to the right */}
        <div className="mb-8 max-w-xl ml-[calc(8rem+1rem)]">
          <h2 className="text-4xl md:text-5xl font-light mb-3 text-black">Expert Care</h2>
          <p className="text-black text-lg tracking-widest uppercase w-fit mb-1">Transform Your Health With Us</p>
          <p className="text-sm tracking-widest uppercase text-black">Scroll to Explore</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr,1fr] gap-8 pl-8">
          {/* Main Video Player - Now on the left */}
          <div className="relative h-[calc(70vh-80px)]">
            <div className="relative h-full p-4">
              {/* Golden/Orange glow frame */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-black border-4 border-[#e3f677]/40 shadow-[0_0_30px_rgba(227,246,119,0.3)]" />

              <div className="h-full rounded-2xl overflow-hidden shadow-2xl relative">
                <video
                  src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/about-carousel-background.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-[110%] h-full object-cover left-1/2 -translate-x-1/2"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />

                {/* Main Video Content */}
                <div className="relative h-full rounded-2xl overflow-hidden cursor-pointer" onClick={togglePlay}>
                  {isPlaying ? (
                    <div className="relative w-full h-full bg-black">
                      <video
                        src={currentVideo.url}
                        className="w-full h-full object-contain"
                        autoPlay
                        controls
                        playsInline
                        muted={isMuted}
                      />
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-30">
                        <button
                          onClick={toggleMute}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          {isMuted ? (
                            <VolumeX className="w-6 h-6 text-white" />
                          ) : (
                            <Volume2 className="w-6 h-6 text-white" />
                          )}
                        </button>
                        <button
                          onClick={togglePlay}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6 text-white" />
                          ) : (
                            <Play className="w-6 h-6 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full group">
                      <video
                        src={currentVideo.url}
                        className="object-cover w-full h-full"
                        muted
                        playsInline
                        loop
                        autoPlay
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      {/* Play Text and Button */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="flex items-center gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
                          <span className="relative">WATCH</span>
                          <Play className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform duration-700 group-hover:scale-110" />
                          <span className="relative">VIDEO</span>
                        </div>
                        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl text-center px-4">
                          {currentVideo.title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Video List - Now on the right */}
          <div className="h-[calc(70vh-80px)] max-w-[400px]">
            <div
              ref={scrollContainerRef}
              className="h-full overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-[#e3f677] scrollbar-track-transparent"
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative p-2" // Added padding for the frame
                >
                  {/* Frame */}
                  <div className="absolute inset-0 rounded-xl bg-black border-2 border-[#e3f677]/40 shadow-[0_0_15px_rgba(227,246,119,0.3)]" />

                  <div
                    className={`group relative h-[calc((70vh-80px)/3.2)] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${
                      currentVideo.id === video.id ? "ring-1 ring-[#e3f677]" : ""
                    }`}
                    onClick={() => handleVideoSelect(video)}
                  >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                    <video src={video.url} className="w-full h-full object-cover" muted playsInline loop autoPlay />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-medium">{video.title}</p>
                      <p className="text-white/70 text-sm">{video.duration}</p>

                      {/* Social Media Icons */}
                      <div className="flex items-center gap-2 mt-2">
                        <a
                          href="https://www.instagram.com/reel/C8GEjlfvLR-/?igsh=a3h3ZjB4N2NuYml0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#E1306C] transition-all duration-300 group"
                          aria-label="Visit our Instagram"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Instagram className="w-4 h-4 text-[#E1306C] group-hover:text-white transition-colors" />
                        </a>
                        <a
                          href="https://fb.watch/xUjQdYZ5Z3/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#1877F2] transition-all duration-300 group"
                          aria-label="Visit our Facebook"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                        </a>
                      </div>
                    </div>
                    {currentVideo.id === video.id && (
                      <div className="absolute top-2 right-2 bg-[#e3f677] text-white text-xs px-2 py-1 rounded-full">
                        Now Playing
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

