import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

export default function SpinalAdjustmentPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Spinal Adjustment"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Spinal Adjustment</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">Core Treatment • Pain Relief • Mobility</p>
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
              <h2 className="text-3xl md:text-4xl font-light mb-6">What is Spinal Adjustment?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Spinal adjustment, also known as spinal manipulation, is a core chiropractic treatment technique. It
                involves applying controlled force to specific joints of the spine to improve mobility, alleviate pain,
                and promote overall wellness.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At Dr. Diego Montes Chiropractic, we use precise, gentle adjustments to correct misalignments in the
                spine, helping to restore proper function to the nervous system and alleviate a wide range of symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#F0F1FA]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">Benefits of Spinal Adjustment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Reduces back and neck pain",
              "Improves joint mobility and function",
              "Decreases inflammation",
              "Enhances athletic performance",
              "Boosts immune system function",
              "Improves posture",
              "Alleviates headaches",
              "Promotes overall wellness",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-8">What to Expect During Your Visit</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light mb-2">1. Comprehensive Assessment</h3>
              <p className="text-lg text-gray-700">
                We'll start with a thorough examination to understand your condition and health history.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">2. Personalized Treatment Plan</h3>
              <p className="text-lg text-gray-700">
                Based on our findings, we'll create a tailored plan to address your specific needs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">3. Gentle Adjustment</h3>
              <p className="text-lg text-gray-700">
                Using precise techniques, we'll perform the spinal adjustment to correct misalignments.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">4. Post-Adjustment Care</h3>
              <p className="text-lg text-gray-700">
                We'll provide guidance on exercises and lifestyle changes to support your healing process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Experience the Benefits?</h2>
          <p className="text-xl mb-8">Schedule your spinal adjustment session with Dr. Diego Montes today.</p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
            <Link href="/contact" className="inline-flex items-center">
              Book Your Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

