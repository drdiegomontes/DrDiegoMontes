import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

export default function NutritionalCounselingPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Nutritional Counseling"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Nutritional Counseling</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">Wellness • Lifestyle • Health</p>
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
              <h2 className="text-3xl md:text-4xl font-light mb-6">What is Nutritional Counseling?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Nutritional counseling is a holistic approach to health that focuses on how the food you eat affects
                your overall well-being. It's an essential component of our comprehensive chiropractic care, addressing
                the connection between nutrition, physical health, and spinal wellness.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At Dr. Diego Montes Chiropractic, we provide personalized nutritional guidance to help you make informed
                dietary choices that support your body's natural healing processes and enhance the effectiveness of your
                chiropractic treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#F0F1FA]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">Benefits of Nutritional Counseling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Supports overall health and wellness",
              "Enhances chiropractic treatment outcomes",
              "Improves energy levels and vitality",
              "Aids in weight management",
              "Reduces inflammation in the body",
              "Supports immune system function",
              "Improves digestive health",
              "Promotes better sleep and mood",
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
          <h2 className="text-3xl md:text-4xl font-light mb-8">Our Nutritional Counseling Approach</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light mb-2">1. Comprehensive Nutritional Assessment</h3>
              <p className="text-lg text-gray-700">
                We begin with a thorough evaluation of your current diet, lifestyle, and health concerns.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">2. Personalized Nutrition Plan</h3>
              <p className="text-lg text-gray-700">
                Based on your assessment, we develop a customized nutrition plan tailored to your specific needs and
                goals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">3. Education and Guidance</h3>
              <p className="text-lg text-gray-700">
                We provide you with the knowledge and tools to make informed decisions about your diet and nutrition.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">4. Integration with Chiropractic Care</h3>
              <p className="text-lg text-gray-700">
                We align your nutritional plan with your chiropractic treatment to enhance overall results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">5. Ongoing Support and Monitoring</h3>
              <p className="text-lg text-gray-700">
                We provide continuous support and adjust your plan as needed to ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Transform Your Health Through Nutrition</h2>
          <p className="text-xl mb-8">Schedule your nutritional counseling session with Dr. Diego Montes today.</p>
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

