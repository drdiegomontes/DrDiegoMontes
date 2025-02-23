"use client"
import { Button } from "@/components/ui/button"
import { ScrollAnimationWrapper } from "./ScrollAnimation"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

export default function CallToAction() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/contact")
    smoothScrollToTop()
  }

  return (
    <section className="bg-black text-white py-24 px-4 sm:px-8">
      <ScrollAnimationWrapper>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[4rem] md:text-[5.5rem] font-light leading-none mb-8">
            Ready to Transform
            <br />
            Your Health?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Take the first step towards a pain-free life. Schedule your consultation with Dr. Diego Montes today.
          </p>
          <Button
            onClick={handleClick}
            className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-gray-100 transition-colors"
          >
            Schedule Your Consultation
          </Button>
        </div>
      </ScrollAnimationWrapper>
    </section>
  )
}

