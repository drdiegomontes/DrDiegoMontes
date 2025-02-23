"use client"
import { ScrollAnimationWrapper, ScrollAnimationGroup, ScrollAnimationItem } from "./ScrollAnimation"

export default function Hero() {
  return (
    <section className="relative bg-[#F9FAF7]">
      <div className="pt-48 md:pt-40 lg:pt-32 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="max-w-[1800px] mx-auto">
          <ScrollAnimationGroup>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12 mb-12">
              <ScrollAnimationItem>
                <h1 className="font-serif text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1]">
                  Experience
                  <br />
                  <span className="block">Expert Care & Wellness</span>
                </h1>
              </ScrollAnimationItem>
              <ScrollAnimationItem>
                <div className="lg:pt-12">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    With years of experience, we create transformative healing experiences that elevate your health and
                    well-being. Join us in redefining holistic wellness.
                  </p>
                </div>
              </ScrollAnimationItem>
            </div>
          </ScrollAnimationGroup>

          {/* 3D Images Container */}
          <ScrollAnimationWrapper delay={0.4}>
            <div className="relative w-full max-w-[98%] sm:max-w-[95%] mx-auto aspect-[4/2.5] md:aspect-[5/2.5] lg:aspect-[21/10] mt-8 mb-2">
              {/* Main Close-up Video */}
              <div className="absolute inset-0 z-20">
                <video
                  src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/home-hero.mp4"
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ objectPosition: "50% 15%" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Background Wide Shot */}
              <div className="absolute inset-0 z-10 opacity-50 scale-110 blur-sm">
                <video
                  src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/home-hero.mp4"
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ objectPosition: "50% 15%" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
      {/* Additional padding section */}
      <div className="bg-[#F1F2ED] py-16">
        {/* Scroll indicator */}
        <ScrollAnimationWrapper delay={0.6}>
          <div className="text-center">
            <p className="text-sm tracking-wide text-black/70 font-semibold mb-2">SCROLL TO EXPLORE</p>
            <div className="flex justify-center gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-black/40 rounded-full"></div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}

