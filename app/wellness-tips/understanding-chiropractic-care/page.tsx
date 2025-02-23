import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function UnderstandingChiropracticCarePage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Chiropractic Care"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Understanding Chiropractic Care</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">PRINCIPLES • BENEFITS • HOLISTIC HEALTH</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/wellness-tips"
            className="inline-flex items-center text-gray-600 mb-8 hover:text-black transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Back to Wellness Tips
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-light mb-6">What is Chiropractic Care?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Chiropractic care is a health care profession that focuses on disorders of the musculoskeletal system
                and the nervous system, and the effects of these disorders on general health. Chiropractors practice a
                drug-free, hands-on approach to health care that includes patient examination, diagnosis and treatment.
              </p>
              <h3 className="text-2xl font-light mb-4">Principles of Chiropractic Care</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>The body has a powerful self-healing ability</li>
                <li>The body's structure (primarily the spine) and its function are closely related</li>
                <li>Chiropractic treatment aims to normalize this relationship between structure and function</li>
              </ul>
              <h3 className="text-2xl font-light mb-4">Benefits of Chiropractic Care</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Pain relief for back, neck, and joint issues</li>
                <li>Improved posture</li>
                <li>Enhanced athletic performance</li>
                <li>Increased flexibility and range of motion</li>
                <li>Better overall health and well-being</li>
              </ul>
              <Button className="mt-4">Schedule a Consultation</Button>
            </div>
            <div className="w-full md:w-1/3">
              <div className="sticky top-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1774-3cacLNcvFZXaRXN2ZVJcDAyhn85YaJ.jpeg"
                  alt="Dr. Diego Montes"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover"
                />
                <p className="mt-4 text-center text-gray-600">
                  Dr. Diego Montes, Expert in Chiropractic Care and Holistic Wellness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

