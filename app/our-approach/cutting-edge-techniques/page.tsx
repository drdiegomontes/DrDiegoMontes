import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CuttingEdgeTechniquesPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Cutting-edge Techniques"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Leveraging the latest advancements in chiropractic care
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

          <h1 className="text-4xl md:text-5xl font-light mb-8">Our Cutting-edge Techniques</h1>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                At Dr. Diego Montes Chiropractic, we're committed to staying at the forefront of chiropractic care. We
                continuously integrate the latest, scientifically-proven techniques and technologies to provide you with
                the most effective and efficient treatments available.
              </p>

              <h3 className="text-2xl font-light mb-4">Advanced Techniques We Offer</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Computer-assisted spinal analysis for precise diagnostics</li>
                <li>Low-level laser therapy for accelerated healing</li>
                <li>Instrument-assisted soft tissue mobilization</li>
                <li>Kinesiology taping for enhanced muscle support and pain relief</li>
                <li>Advanced rehabilitation exercises using state-of-the-art equipment</li>
              </ul>

              <p className="text-lg text-gray-700 mb-6">
                Our cutting-edge techniques allow us to provide more accurate diagnoses, create more effective treatment
                plans, and achieve better outcomes for our patients. By combining these advanced methods with our
                expertise and personalized care approach, we can address a wide range of conditions more efficiently
                than ever before.
              </p>

              <Button asChild className="mt-4">
                <Link href="/contact">Experience Our Cutting-edge Care</Link>
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
                  Dr. Diego Montes, Expert in Advanced Chiropractic Techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

