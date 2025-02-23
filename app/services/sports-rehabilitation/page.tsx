import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

export default function SportsRehabilitationPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sports Rehabilitation"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Sports Rehabilitation</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">Injury Recovery • Performance • Prevention</p>
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
            <div className="w-full md:w-2/3 flex flex-col justify-center pt-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6">What is Sports Rehabilitation?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Sports rehabilitation is a specialized approach to treating and preventing sports-related injuries. It
                combines chiropractic care, physical therapy, and targeted exercises to help athletes recover from
                injuries, improve performance, and prevent future problems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At Dr. Diego Montes Chiropractic, we offer comprehensive sports rehabilitation services tailored to each
                athlete's unique needs, helping them return to their sport stronger and more resilient than before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#F0F1FA]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">Benefits of Sports Rehabilitation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Accelerates injury recovery",
              "Improves athletic performance",
              "Enhances flexibility and range of motion",
              "Strengthens muscles and joints",
              "Reduces risk of future injuries",
              "Improves body awareness and balance",
              "Alleviates pain from chronic conditions",
              "Customized treatment plans for specific sports",
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
          <h2 className="text-3xl md:text-4xl font-light mb-8">Our Sports Rehabilitation Approach</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light mb-2">1. Comprehensive Assessment</h3>
              <p className="text-lg text-gray-700">
                We begin with a thorough evaluation of your injury, movement patterns, and overall physical condition.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">2. Customized Treatment Plan</h3>
              <p className="text-lg text-gray-700">
                Based on our assessment, we develop a personalized rehabilitation program tailored to your specific
                needs and sport.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">3. Multi-Modal Therapy</h3>
              <p className="text-lg text-gray-700">
                We combine chiropractic adjustments, soft tissue therapy, and targeted exercises to address all aspects
                of your recovery.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">4. Performance Enhancement</h3>
              <p className="text-lg text-gray-700">
                As you recover, we focus on improving your strength, flexibility, and biomechanics to enhance your
                athletic performance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-2">5. Injury Prevention Strategies</h3>
              <p className="text-lg text-gray-700">
                We educate you on proper techniques and provide strategies to prevent future injuries and maintain
                long-term health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Elevate Your Performance?</h2>
          <p className="text-xl mb-8">Schedule your sports rehabilitation consultation with Dr. Diego Montes today.</p>
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

