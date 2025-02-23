import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function OngoingSupportPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Ongoing Support"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Continuous guidance for lasting health and wellness
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

          <h1 className="text-4xl md:text-5xl font-light mb-8">Our Ongoing Support Approach</h1>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                At Dr. Diego Montes Chiropractic, we believe that true wellness is an ongoing journey. Our ongoing
                support approach ensures that you receive continuous care and guidance throughout your health and
                wellness journey, not just during your initial treatment phase.
              </p>

              <h3 className="text-2xl font-light mb-4">Elements of Our Ongoing Support</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Regular check-ins and progress assessments</li>
                <li>Adjustments to your treatment plan as your needs evolve</li>
                <li>Continuous education on maintaining your health at home</li>
                <li>Access to resources and tools for self-care</li>
                <li>Long-term wellness planning and goal setting</li>
              </ul>

              <p className="text-lg text-gray-700 mb-6">
                Our ongoing support approach is designed to empower you with the knowledge and tools you need to
                maintain your health long-term. We're not just here to treat you when you're in pain; we're here to
                support you in achieving and maintaining optimal health for life.
              </p>

              <Button asChild className="mt-4">
                <Link href="/contact">Join Our Wellness Community</Link>
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
                <p className="mt-4 text-center text-gray-600">Dr. Diego Montes, Your Partner in Long-term Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

