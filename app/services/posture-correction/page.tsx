import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

export default function PostureCorrectionPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Posture Correction"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Posture Correction</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">Alignment • Prevention • Wellness</p>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1774-3cacLNcvFZXaRXN2ZVJcDAyhn85YaJ.jpeg"
                alt="Dr. Diego Montes"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">What is Posture Correction?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Posture correction is a specialized chiropractic approach aimed at improving the alignment of your body,
                particularly your spine. It addresses the negative effects of poor posture, which can lead to pain,
                reduced mobility, and decreased overall health.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At Dr. Diego Montes Chiropractic, we use a combination of adjustments, exercises, and lifestyle
                recommendations to help you achieve and maintain proper posture, enhancing your overall well-being and
                preventing future health issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#F0F1FA]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">Benefits of Posture Correction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Reduces back and neck pain",
              "Improves breathing and circulation",
              "Enhances core strength",
              "Boosts energy levels",
              "Reduces risk of injury",
              "Improves balance and coordination",
              "Enhances appearance and confidence",
              "Promotes better digestion",
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
          <h2 className="text-3xl md:text-4xl font-light mb-8">Our Posture Correction Approach</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light mb-2">1. Comprehensive Posture Assessment</h3>
              <p className="text-lg text-gray-700">
                We begin with a thorough evaluation of your posture, identifying areas of misalignment and imbalance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">2. Customized Treatment Plan</h3>
              <p className="text-lg text-gray-700">
                Based on our assessment, we develop a personalized plan that may include chiropractic adjustments,
                exercises, and ergonomic recommendations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">3. Chiropractic Adjustments</h3>
              <p className="text-lg text-gray-700">
                We use gentle, precise adjustments to correct spinal misalignments and improve overall posture.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">4. Posture-Strengthening Exercises</h3>
              <p className="text-lg text-gray-700">
                We teach you specific exercises to strengthen the muscles that support good posture.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">5. Lifestyle and Ergonomic Guidance</h3>
              <p className="text-lg text-gray-700">
                We provide advice on how to maintain good posture in your daily activities and work environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Improve Your Posture?</h2>
          <p className="text-xl mb-8">Schedule your posture correction consultation with Dr. Diego Montes today.</p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
            <Link href="/contact" className="inline-flex items-center">
              Book Your Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

