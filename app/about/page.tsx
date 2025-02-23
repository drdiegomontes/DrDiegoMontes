import AboutHero from "@/components/about/AboutHero"
import AboutVideoSection from "@/components/about/AboutVideoSection"
import AboutTransition from "@/components/about/AboutTransition"
import GenerationalHealthSection from "@/components/about/GenerationalHealthSection"
import JourneyShowcase from "@/components/about/JourneyShowcase"
import TestimonialShowcase from "@/components/about/TestimonialShowcase"
import PhilosophyManifesto from "@/components/about/PhilosophyManifesto"
import EducationalShowcase from "@/components/about/EducationalShowcase"
import SpecialtiesGrid from "@/components/about/SpecialtiesGrid"
import ConsultationCTA from "@/components/about/ConsultationCTA"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutVideoSection />
      <AboutTransition />
      <JourneyShowcase />
      <GenerationalHealthSection />
      <TestimonialShowcase />
      <PhilosophyManifesto />
      <EducationalShowcase />
      <SpecialtiesGrid />
      <ConsultationCTA />
    </main>
  )
}

