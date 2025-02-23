import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

export default function MassageTherapyPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Massage Therapy"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Massage Therapy</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">Relaxation • Recovery • Healing</p>
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
              <h2 className="text-3xl md:text-4xl font-light mb-6">What is Massage Therapy?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Massage therapy is a hands-on approach to healing that involves manipulating the body's soft tissues to
                promote relaxation, reduce pain, and improve overall well-being. It's an integral part of our holistic
                approach to chiropractic care.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At Dr. Diego Montes Chiropractic, our massage therapy services are designed to complement our
                chiropractic treatments, enhancing the healing process and providing you with comprehensive care for
                your body and mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#F0F1FA]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">Benefits of Massage Therapy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Reduces muscle tension and pain",
              "Improves circulation",
              "Enhances flexibility and range of motion",
              "Promotes relaxation and stress relief",
              "Accelerates recovery from injuries",
              "Boosts immune system function",
              "Improves sleep quality",
              "Enhances overall sense of well-being",
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
          <h2 className="text-3xl md:text-4xl font-light mb-8">Our Massage Therapy Approach</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light mb-2">1. Personalized Assessment</h3>
              <p className="text-lg text-gray-700">
                We begin with a thorough evaluation to understand your specific needs and health goals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">2. Customized Technique Selection</h3>
              <p className="text-lg text-gray-700">
                Based on your assessment, we choose the most appropriate massage techniques for your condition.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">3. Integration with Chiropractic Care</h3>
              <p className="text-lg text-gray-700">
                We seamlessly integrate massage therapy with your chiropractic treatment plan for optimal results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">4. Targeted Muscle Work</h3>
              <p className="text-lg text-gray-700">
                Our skilled therapists focus on specific areas of tension or pain to provide relief and promote healing.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">5. Relaxation and Stress Relief</h3>
              <p className="text-lg text-gray-700">
                We create a calming environment to help you relax and release stress during your session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Experience the Healing Power of Touch</h2>
          <p className="text-xl mb-8">Schedule your massage therapy session with Dr. Diego Montes today.</p>
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

