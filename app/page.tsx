"use client"
import Header from "@/components/Header"
import type React from "react"
import { ScrollAnimationWrapper, ScrollAnimationGroup } from "@/components/ScrollAnimation"
import Hero from "@/components/Hero"
import BeyondVisions from "@/components/BeyondVisions"
import PlayReel from "@/components/PlayReel"
import ScrollingTestimonials from "@/components/ScrollingTestimonials"
import FeaturedServices from "@/components/FeaturedServices"
import ProcessSteps from "@/components/ProcessSteps"
import CallToAction from "@/components/CallToAction"
import LetsWorkTogether from "@/components/LetsWorkTogether"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import dynamic from "next/dynamic"
import { useWindowSize } from "@/hooks/useWindowSize"

const AudioPlayer = dynamic(() => import("@/components/AudioPlayer"), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  const router = useRouter()
  const { width } = useWindowSize()
  const isMobile = width < 768

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    smoothScrollToTop()
  }

  return (
    <div>
      <Header />
      <main>
        {isMobile ? (
          <MobileHomePageContent />
        ) : (
          <>
            <ScrollAnimationWrapper>
              <Hero />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <FeaturedServices />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <BeyondVisions />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <PlayReel />
            </ScrollAnimationWrapper>

            <ScrollAnimationGroup>
              <ScrollingTestimonials />
            </ScrollAnimationGroup>

            <ScrollAnimationWrapper>
              <ProcessSteps />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <CallToAction />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <LetsWorkTogether />
            </ScrollAnimationWrapper>

            <div className="h-px bg-white"></div>
          </>
        )}
      </main>
    </div>
  )
}

function MobileHomePageContent() {
  return (
    <>
      <ScrollAnimationWrapper>
        <MobileHero />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <MobileFeaturedServices />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <MobileBeyondVisions />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <MobilePlayReel />
      </ScrollAnimationWrapper>

      <ScrollAnimationGroup>
        <MobileScrollingTestimonials />
      </ScrollAnimationGroup>

      <ScrollAnimationWrapper>
        <MobileProcessSteps />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <MobileCallToAction />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <MobileLetsWorkTogether />
      </ScrollAnimationWrapper>
    </>
  )
}

import MobileHero from "@/components/mobile/MobileHero"
import MobileFeaturedServices from "@/components/mobile/MobileFeaturedServices"
import MobileBeyondVisions from "@/components/mobile/MobileBeyondVisions"
import MobilePlayReel from "@/components/mobile/MobilePlayReel"
import MobileScrollingTestimonials from "@/components/mobile/MobileScrollingTestimonials"
import MobileProcessSteps from "@/components/mobile/MobileProcessSteps"
import MobileCallToAction from "@/components/mobile/MobileCallToAction"
import MobileLetsWorkTogether from "@/components/mobile/MobileLetsWorkTogether"

