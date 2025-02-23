"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import FloatingReaction from "../FloatingReactions"
import { ExternalLink } from "lucide-react"

const testimonials = [
  {
    quote:
      "Dr. Diego Montes is amazing! What a positive bright beam of a human, and wonderful hands to be in. 5 weeks of coming to see Dr Diego (in combination with some myofascial release/deep tissue massage) has completely changed my neck!",
    name: "Alex Mart",
    role: "Patient",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-E6fqvkmlCtxm7Wjsq9scVyrgIm5XfS.png",
    link: "https://maps.app.goo.gl/RnKJ4WEDMqqkukGV8",
  },
  {
    quote: "Highly recommend Dr. Diego Montes! He is excellent and has a very holistic approach to chiropractic care.",
    name: "Carla Loury",
    role: "Fitness Instructor",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20(1)-aIJIDJMbN05aZlKxbw6FfsaiIHqdsH.png",
    link: "https://maps.app.goo.gl/fvbdTsGeZBpHcpRs7",
  },
  {
    quote:
      'Wow! Dr C is great! The office is beautiful and you are greeted by an awesome staff with a relaxing waiting area. Dr C is very knowledgeable and talented. This isn\'t a "pop and pray" practice. He walks you through many steps, gives a full exam, and gives you tools to work on at home. I came in feeling terrible after my car accident and now have hope for a quick recovery.',
    name: "Charles Coffee",
    role: "Yoga Teacher",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-COCXbcuIRelSRm5tYhgUQTstC7mmrl.png",
    link: "https://maps.app.goo.gl/H81UcvmBfHYiVFiu5",
  },
  {
    quote: "Awesome service and very thankful for their attention to detail.",
    name: "Zachary Walter",
    role: "Marathon Runner",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20(1)-FmpFLddHr1ipPt9navi9eAiRL16Vcq.png",
    link: "https://maps.app.goo.gl/EL8HEYWhfWRBBz3x9",
  },
  {
    quote:
      "The transformative power of Dr. Diego Montes, DC's expertise is truly inspiring. Despite being in debilitating pain and unable to walk or stand, his adjustment not only alleviated discomfort but also stopped my ongoing migraine.",
    name: "Ebony Singh",
    role: "Marathon Runner",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-sNNyUy7jtluv5PM5JzDc5DG5MdNq5C.png",
    link: "https://maps.app.goo.gl/v48481EN8WHk8JnM9",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const getVisibleTestimonials = () => {
    const visibleTestimonials = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length
      visibleTestimonials.push({ ...testimonials[index], index })
    }
    return visibleTestimonials
  }

  return (
    <section className="relative pt-0 pb-12 bg-black overflow-hidden" ref={containerRef}>
      {/* Decorative Corner Elements */}
      <div className="absolute left-8 top-0 w-24 h-24 border-l-4 border-t-4 border-[#e3f677]/40" />
      <div className="absolute left-8 bottom-0 w-24 h-24 border-l-4 border-b-4 border-[#e3f677]/40" />
      <div className="absolute right-8 top-0 w-24 h-24 border-r-4 border-t-4 border-[#e3f677]/40" />
      <div className="absolute right-8 bottom-0 w-24 h-24 border-r-4 border-b-4 border-[#e3f677]/40" />

      {/* Freely Floating Reactions */}
      <FloatingReaction containerWidth={containerSize.width} containerHeight={containerSize.height} />

      <div className="max-w-7xl mx-auto px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

          <div className="relative overflow-hidden">
            <div className="flex justify-center items-center min-h-[400px]">
              <AnimatePresence initial={false} mode="wait">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.index}-${index}`}
                    initial={{
                      opacity: 0,
                      x: index === 1 ? 100 : index === 0 ? -300 : 300,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: index === 1 ? 1 : 0.8,
                      x: index === 1 ? 0 : index === 0 ? -250 : 250,
                      scale: index === 1 ? 1 : 0.9,
                    }}
                    exit={{
                      opacity: 0,
                      x: index === 1 ? -100 : index === 0 ? -250 : 250,
                      scale: 0.7,
                    }}
                    transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="absolute w-full max-w-xl bg-[#131413] rounded-2xl p-8 transition-all"
                    style={{
                      zIndex: index === 1 ? 2 : 1,
                      filter: index === 1 ? "none" : "blur(1px)",
                    }}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <p className="text-lg md:text-xl text-white font-light leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name || testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg text-white font-medium">{testimonial.name || testimonial.author}</h3>
                          <p className="text-sm text-[#e3f677]">{testimonial.role}</p>
                          {testimonial.link && (
                            <a
                              href={testimonial.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 text-[#e3f677] hover:text-white transition-colors flex items-center"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              <span>View full review</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 mb-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-[#e3f677]" : "bg-white/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-[#e3f677] text-lg tracking-widest uppercase">Real Stories, Real Results</p>
        </div>
      </div>
    </section>
  )
}

