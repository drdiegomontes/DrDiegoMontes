"use client"

import type React from "react"

import AboutHero from "@/components/mobile/about/AboutHero"
import MeetDrMontes from "@/components/mobile/about/MeetDrMontes"
import OurApproach from "@/components/about/OurApproach"
import AboutTransition from "@/components/about/AboutTransition"
import AboutVideoSection from "@/components/mobile/about/AboutVideoSection"
import CarouselToShowcaseTransition from "@/components/about/CarouselToShowcaseTransition"
import HealthJourney from "@/components/about/HealthJourney"
import ImageCarousel from "@/components/about/ImageCarousel"
import RotatingBanner from "@/components/about/RotatingBanner"
import CallToAction from "@/components/CallToAction"
import LetsWorkTogether from "@/components/LetsWorkTogether"
import JourneyShowcase from "@/components/mobile/about/JourneyShowcase"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import GenerationalHealthSection from "@/components/mobile/about/GenerationalHealthSection"

export default function AboutPage() {
  const router = useRouter()

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    setTimeout(smoothScrollToTop, 100)
  }

  return (
    <main className="min-h-screen">
      <AboutHero />
      <MeetDrMontes />
      <AboutVideoSection />
      <JourneyShowcase />
      <GenerationalHealthSection />
      <AboutTransition />
      <OurApproach />
      <CarouselToShowcaseTransition />
      <HealthJourney />
      <ImageCarousel title="Patient Testimonials Gallery" />
      <RotatingBanner />
      <CallToAction />
      <LetsWorkTogether />
      <div className="h-px bg-white"></div>
    </main>
  )
}

