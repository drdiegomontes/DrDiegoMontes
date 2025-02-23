import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function HolisticWellnessPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
          alt="Holistic Wellness"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Addressing the root cause, not just the symptoms
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/about#our-approach"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Our Approach
          </Link>

          <h1 className="text-4xl md:text-5xl font-light mb-8">Our Holistic Wellness Approach</h1>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                At Dr. Diego Montes Chiropractic, we believe in treating the whole person, not just isolated symptoms.
                Our holistic wellness approach considers all aspects of your health - physical, mental, and emotional -
                to provide comprehensive care that promotes overall well-being.
              </p>

              <h3 className="text-2xl font-light mb-4">Key Elements of Our Holistic Approach</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Comprehensive health assessments that consider lifestyle factors</li>
                <li>Integration of chiropractic care with nutritional guidance</li>
                <li>Stress management techniques and mindfulness practices</li>
                <li>Customized exercise and movement recommendations</li>
                <li>Education on the interconnectedness of body systems</li>
              </ul>

              <p className="text-lg text-gray-700 mb-6">
                By addressing the root causes of health issues and considering how different aspects of your life
                interact, our holistic wellness approach aims to create lasting improvements in your health. We don't
                just want to alleviate your symptoms; we want to help you achieve and maintain optimal health in all
                areas of your life.
              </p>

              <Button asChild className="mt-4">
                <Link href="/contact">Start Your Holistic Wellness Journey</Link>
              </Button>
            </div>

            <div className="w-full md:w-1/3">
              <div className="sticky top-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1807-y1KigXf3s5xnXdJsOrgwe4XRWGlix0.jpeg"
                  alt="Dr. Diego Montes"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover"
                />
                <p className="mt-4 text-center text-gray-600">Dr. Diego Montes, Advocate for Holistic Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

