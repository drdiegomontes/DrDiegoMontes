import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

export default function MovementTherapyPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Movement Therapy"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Movement Therapy</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">Mobility • Strength • Prevention</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/services#our-services"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1807-y1KigXf3s5xnXdJsOrgwe4XRWGlix0.jpeg"
                alt="Dr. Diego Montes"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">What is Movement Therapy?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Movement therapy is a holistic approach to physical wellness that focuses on improving your body's
                mobility, strength, and overall function. It combines elements of physical therapy, exercise science,
                and chiropractic care to help you move better and feel better.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At Dr. Diego Montes Chiropractic, our movement therapy program is designed to complement our
                chiropractic treatments, addressing not just pain and discomfort, but also the underlying movement
                patterns that may be contributing to your issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#F0F1FA]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">Benefits of Movement Therapy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Improves overall mobility and flexibility",
              "Enhances strength and stability",
              "Reduces risk of injury",
              "Alleviates chronic pain",
              "Improves posture and body awareness",
              "Enhances athletic performance",
              "Promotes faster recovery from injuries",
              "Supports long-term physical wellness",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Our Movement Therapy Approach</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light mb-2">1. Comprehensive Movement Assessment</h3>
              <p className="text-lg text-gray-700">
                We begin with a thorough evaluation of your movement patterns, identifying areas of restriction or
                dysfunction.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">2. Personalized Movement Plan</h3>
              <p className="text-lg text-gray-700">
                Based on your assessment, we develop a customized program of exercises and movements tailored to your
                needs and goals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">3. Hands-On Guidance</h3>
              <p className="text-lg text-gray-700">
                Our skilled therapists provide hands-on assistance and coaching to ensure proper form and technique.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">4. Integration with Chiropractic Care</h3>
              <p className="text-lg text-gray-700">
                We seamlessly integrate movement therapy with your chiropractic treatments for comprehensive care.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">5. Progressive Challenge</h3>
              <p className="text-lg text-gray-700">
                We gradually increase the complexity and intensity of your movements to continually improve your
                physical capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Move Better, Feel Better?</h2>
          <p className="text-xl mb-8">Schedule your movement therapy session with Dr. Diego Montes today.</p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
            <Link href="/contact" className="inline-flex items-center">
              Book Your Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

