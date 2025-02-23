"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

export default function RotatingBanner() {
  const router = useRouter()
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current
    if (banner) {
      const scrollBanner = () => {
        banner.scrollLeft += 1
        if (banner.scrollLeft >= banner.scrollWidth / 2) {
          banner.scrollLeft = 0
        }
      }

      const intervalId = setInterval(scrollBanner, 30)

      return () => clearInterval(intervalId)
    }
  }, [])

  const handleContactClick = () => {
    router.push("/contact")
    smoothScrollToTop()
  }

  return (
    <section className="relative bg-black text-white overflow-hidden pb-24 border-t border-white/10">
      <div className="relative overflow-hidden">
        <div ref={bannerRef} className="whitespace-nowrap text-[12vw] font-bold flex items-center overflow-hidden">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span>TRANS</span>
              <div className="relative w-[12vw] h-[12vw] mx-4 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=60&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person feeling energized and transformed"
                  fill
                  className="object-cover"
                  style={{ filter: "brightness(1.2) contrast(0.8)" }}
                />
              </div>
              <span>FORM</span>
              <div className="relative w-[12vw] h-[12vw] mx-4 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=60&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person achieving wellness goals"
                  fill
                  className="object-cover"
                  style={{ filter: "brightness(1.1) contrast(0.9)" }}
                />
              </div>
              <span className="mx-4">TODAY</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 bottom-8 -translate-x-1/2">
        <Button
          onClick={handleContactClick}
          className="rounded-full bg-white text-black hover:bg-gray-200 px-6 py-2 text-lg flex items-center gap-2 group"
        >
          START NOW
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </div>

      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent" />
    </section>
  )
}

