"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const steps = [
  {
    title: "INITIAL CONSULTATION",
    description:
      "Begin your wellness journey with a comprehensive evaluation. We'll discuss your health history, current concerns, and goals to create a personalized treatment plan.",
  },
  {
    title: "CUSTOMIZED CARE",
    description:
      "Receive tailored chiropractic treatments using advanced techniques. Your care plan is designed to address your specific needs and promote optimal healing.",
  },
  {
    title: "WELLNESS EDUCATION",
    description:
      "Learn essential techniques and lifestyle modifications to support your recovery. We empower you with knowledge for long-term health maintenance.",
  },
  {
    title: "ONGOING SUPPORT",
    description:
      "Benefit from continuous care and monitoring of your progress. We're here to support your wellness journey with regular check-ups and adjustments.",
  },
]

export default function MobileProcessSteps() {
  return (
    <section className="py-16 px-4 bg-[#F1F2ED]">
      <div className="max-w-7xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {steps.map((step, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-medium tracking-wide text-left">
                {index + 1}. {step.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">{step.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

