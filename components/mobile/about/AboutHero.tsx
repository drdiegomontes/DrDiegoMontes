"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

export default function AboutHero() {
  const router = useRouter()

  return (
    <div className="bg-white pt-16 px-4 pb-8">
      <section className="relative min-h-[60vh] rounded-[2.5rem] overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="https://5ewb4vaux1.ufs.sh/f/r8GWM0suYH8MEatVQiDx53HzatjD8Id9inYP42sZfhKrLSyc"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-[60vh]">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-lg">
              {/* Category Tag */}
              <div className="mb-4">
                <span className="text-sm tracking-wider text-white/80">ABOUT DR. DIEGO MONTES</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl text-white font-light leading-[1.1] mb-4">
                Pioneering
                <br />
                Chiropractic
                <br />
                Excellence
              </h1>

              {/* Description */}
              <p className="text-lg text-white/80 mb-6">
                Discover the innovative approach and dedicated team behind our chiropractic and wellness center, led by
                Dr. Diego Montes.
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 text-base px-6 py-3 rounded-full transition-colors"
                onClick={() => {
                  router.push("/contact")
                  smoothScrollToTop()
                }}
              >
                Explore Our Practice
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-white/20" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-white/20" />
      </section>

      {/* Additional padding section with scroll indicator */}
      <div className="bg-white py-6">
        <div className="text-center">
          <p className="text-sm tracking-wide text-black/70 font-semibold mb-2">SCROLL TO EXPLORE</p>
          <div className="flex justify-center gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-black/40 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

