"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

export default function CallToAction() {
  const router = useRouter()

  const handleConsultationClick = () => {
    router.push("/contact")
    smoothScrollToTop()
  }

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-8">Start now</h2>
          <div className="max-w-[700px] text-center">
            <p className="text-lg mb-8">
              We are ready to guide you on your journey to optimal health. Schedule your consultation today and take the
              first step towards transformation.
            </p>
            <div className="h-[1px] bg-white w-full mb-8" />
          </div>
          <Button
            className="bg-transparent text-white hover:bg-white hover:text-black border border-white rounded-none px-8 py-6 text-lg font-semibold flex items-center gap-2 mb-8"
            onClick={handleConsultationClick}
          >
            Book Consultation
            <span className="text-xl">→</span>
          </Button>
          <div className="w-[1px] h-[120px] bg-white" />
        </div>
      </div>
    </section>
  )
}

