"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

export default function MobileCallToAction() {
  const router = useRouter()

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    smoothScrollToTop()
  }

  return (
    <section className="py-16 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-light mb-6">Ready to Transform Your Health?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Take the next step towards a healthier, pain-free life with Dr. Diego Montes.
          </p>
          <Button
            className="bg-white text-black hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-semibold"
            onClick={handleNavClick("/contact")}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

