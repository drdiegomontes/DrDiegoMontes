import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PersonalizedCarePage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Personalized Care"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">Tailored treatments for your unique needs</p>
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

          <h1 className="text-4xl md:text-5xl font-light mb-8">What Personalized Care Means for You</h1>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                Our personalized care approach ensures that every treatment plan is as unique as you are. We take the
                time to understand your specific needs, health history, and goals to create a customized treatment
                program that works best for you.
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Comprehensive initial assessment to understand your health history and current condition</li>
                <li>Customized treatment plans that evolve with your progress</li>
                <li>Integration of various techniques tailored to your needs</li>
                <li>Regular check-ins and adjustments to your care plan</li>
                <li>Education and empowerment to take an active role in your health</li>
              </ul>

              <p className="text-lg text-gray-700 mb-6">
                Our personalized care approach ensures that you receive the most appropriate treatments, whether it's
                spinal adjustments, rehabilitative exercises, nutritional advice, or a combination of therapies. We're
                committed to helping you achieve optimal health and wellness through care that's as unique as you are.
              </p>

              <Button asChild className="mt-4">
                <Link href="/contact">Schedule Your Consultation</Link>
              </Button>
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
                  Dr. Diego Montes, Expert in Personalized Chiropractic Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

