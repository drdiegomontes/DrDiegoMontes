"use client"

import Image from "next/image"
import type React from "react"

import Link from "next/link"
import LetsWorkTogether from "@/components/LetsWorkTogether"
import ServicesHero from "@/components/services/ServicesHero"
import InstagramReviews from "@/components/services/InstagramReviews"
import VideoGallery from "@/components/services/VideoGallery"
import WellnessPillars from "@/components/services/WellnessPillars"
import ServicesCTA from "@/components/services/ServicesCTA"
import SpinalHealthImportance from "@/components/services/SpinalHealthImportance"
import WhyChooseUs from "@/components/services/WhyChooseUs"
import TestimonialCarousel from "@/components/services/TestimonialCarousel"
import { ArrowRight } from "lucide-react"
import GenerationsShowcase from "@/components/services/GenerationsShowcase"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import { useWindowSize } from "@/hooks/useWindowSize"
import MobileServicesHero from "@/components/mobile/services/ServicesHero"
import MobileServicesSection from "@/components/mobile/services/ServicesSection"
import { ScrollAnimationWrapper, ScrollAnimationGroup, ScrollAnimationItem } from "@/components/ScrollAnimation"

const services = [
  {
    id: "spinal-adjustment",
    title: "Spinal Adjustment",
    category: "CORE TREATMENT • PAIN RELIEF • MOBILITY",
    image:
      "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/spinal-adjustment",
  },
  {
    id: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    category: "INJURY RECOVERY • PERFORMANCE • PREVENTION",
    image:
      "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/sports-rehabilitation",
  },
  {
    id: "posture-correction",
    title: "Posture Correction",
    category: "ALIGNMENT • PREVENTION • WELLNESS",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/posture-correction",
  },
  {
    id: "massage-therapy",
    title: "Massage Therapy",
    category: "RELAXATION • RECOVERY • HEALING",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/massage-therapy",
  },
  {
    id: "nutritional-counseling",
    title: "Nutritional Counseling",
    category: "WELLNESS • LIFESTYLE • HEALTH",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/nutritional-counseling",
  },
  {
    id: "movement-therapy",
    title: "Movement Therapy",
    category: "MOBILITY • STRENGTH • PREVENTION",
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/movement-therapy",
  },
]

export default function ServicesPage() {
  const router = useRouter()
  const { width } = useWindowSize()
  const isMobile = width < 768

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    setTimeout(smoothScrollToTop, 100)
  }

  return (
    <main className="min-h-screen bg-main-bg">
      {isMobile ? (
        <MobileServicesPageContent />
      ) : (
        <>
          <ScrollAnimationWrapper>
            <ServicesHero />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={0.2}>
            <section id="instagram-reviews">
              <InstagramReviews />
            </section>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={0.3}>
            <WellnessPillars />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={0.2}>
            <TestimonialCarousel />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <SpinalHealthImportance />
          </ScrollAnimationWrapper>

          <section id="our-services" className="py-24 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <ScrollAnimationWrapper>
                <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
                  <h2 className="text-[4rem] md:text-[5.5rem] font-light leading-none mb-8 lg:mb-0">Our Services</h2>
                  <p className="text-sm max-w-[400px] tracking-wide">
                    DISCOVER OUR SPECIALIZED CHIROPRACTIC TREATMENTS DESIGNED TO ENHANCE YOUR OVERALL WELL-BEING AND
                    QUALITY OF LIFE.
                  </p>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationGroup>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <ScrollAnimationItem key={service.id}>
                      <div className="group block">
                        <div
                          className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 cursor-pointer"
                          onClick={handleNavClick(service.href)}
                        >
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <p className="text-sm tracking-wide text-gray-600">{service.category}</p>
                            <span className="text-gray-400">|</span>
                            <Link
                              href={service.href}
                              className="text-sm text-black hover:underline flex items-center"
                              onClick={handleNavClick(service.href)}
                            >
                              Learn More <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                          <h3
                            className="text-4xl font-light mb-2 cursor-pointer"
                            onClick={handleNavClick(service.href)}
                          >
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </ScrollAnimationItem>
                  ))}
                </div>
              </ScrollAnimationGroup>
            </div>
          </section>

          <ScrollAnimationWrapper delay={0.2}>
            <VideoGallery />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <WhyChooseUs />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={0.2}>
            <GenerationsShowcase />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={0.3}>
            <ServicesCTA />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <LetsWorkTogether />
          </ScrollAnimationWrapper>

          <div className="h-px bg-white"></div>
        </>
      )}
    </main>
  )
}

function MobileServicesPageContent() {
  return (
    <>
      <ScrollAnimationWrapper>
        <MobileServicesHero />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.2}>
        <InstagramReviews />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.3}>
        <WellnessPillars />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <TestimonialCarousel />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.2}>
        <SpinalHealthImportance />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <MobileServicesSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.2}>
        <VideoGallery />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <WhyChooseUs />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.2}>
        <GenerationsShowcase />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={0.3}>
        <ServicesCTA />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <LetsWorkTogether />
      </ScrollAnimationWrapper>
    </>
  )
}

