"use client"
import { ScrollAnimationWrapper, ScrollAnimationGroup, ScrollAnimationItem } from "./ScrollAnimation"

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Comprehensive evaluation of your health history and current concerns.",
    },
    {
      number: "02",
      title: "Custom Treatment Plan",
      description: "Tailored approach based on your specific needs and goals.",
    },
    {
      number: "03",
      title: "Active Treatment",
      description: "Expert care using advanced chiropractic techniques.",
    },
    {
      number: "04",
      title: "Progress Monitoring",
      description: "Regular assessments to ensure optimal results.",
    },
  ]

  return (
    <section className="bg-white py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-[4rem] md:text-[5.5rem] font-light leading-none mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our systematic approach to wellness, designed to provide you with the best possible care and
              results.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollAnimationItem key={index} className="text-center">
              <div className="relative">
                <span className="text-8xl font-light text-black/10">{step.number}</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <h3 className="text-2xl font-light mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationItem>
          ))}
        </ScrollAnimationGroup>
      </div>
    </section>
  )
}

