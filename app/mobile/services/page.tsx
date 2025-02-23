'use client'

import Image from "next/image"
import Link from "next/link"
import ServiceCard from "@/components/services/ServiceCard"
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
  return (
    <main className="min-h-screen bg-main-bg">
      <ServicesHero />
      <section id="instagram-reviews">
        <InstagramReviews />
      </section>
      <WellnessPillars />
      <TestimonialCarousel />
      <SpinalHealthImportance />
      <section id="our-services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-between items-start mb-8">
            <h2 className="text-4xl font-light leading-none mb-4">Our Services</h2>
            <p className="text-sm max-w-full tracking-wide">
              DISCOVER OUR SPECIALIZED CHIROPRACTIC TREATMENTS DESIGNED TO ENHANCE YOUR OVERALL WELL-BEING AND QUALITY
              OF LIFE.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <VideoGallery />
      <WhyChooseUs />
      <GenerationsShowcase />
      <ServicesCTA />
      <LetsWorkTogether />
    </main>
  )
}