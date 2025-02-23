"use client"

export default function MobileHero() {
  return (
    <section className="relative bg-[#F9FAF7] pt-24">
      <div className="px-4">
        {/* Main Content */}
        <div className="max-w-[1800px] mx-auto">
          <div className="space-y-6">
            <h1 className="font-serif text-[2.5rem] leading-[1.1]">
              Experience
              <br />
              <span className="block">Expert Care & Wellness</span>
            </h1>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                With years of experience, we create transformative healing experiences that elevate your health and
                well-being. Join us in redefining holistic wellness.
              </p>
            </div>
          </div>

          {/* 3D Images Container */}
          <div className="relative w-full max-w-[98%] mx-auto aspect-[4/3] mt-8 mb-2">
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
        </div>
      </div>
      {/* Additional padding section */}
      <div className="bg-[#F1F2ED] py-8">
        {/* Scroll indicator */}
        <div className="text-center">
          <p className="text-sm tracking-wide text-black/70 font-semibold mb-2">SCROLL TO EXPLORE</p>
          <div className="flex justify-center gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-black/40 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

