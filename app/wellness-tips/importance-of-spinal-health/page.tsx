import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ImportanceOfSpinalHealthPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2941&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Spinal Health"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">The Importance of Spinal Health</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">WELLNESS • FUNCTION • QUALITY OF LIFE</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/wellness-tips"
            className="inline-flex items-center text-gray-600 mb-8 hover:text-black transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Back to Wellness Tips
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Why is Spinal Health Crucial?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Your spine is at the core of your body's function and movement. It protects your spinal cord, which is
                the information highway between your brain and the rest of your body. Maintaining spinal health is
                essential for overall well-being and quality of life.
              </p>
              <h3 className="text-2xl font-light mb-4">Key Aspects of Spinal Health</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Proper alignment for optimal nervous system function</li>
                <li>Flexibility and range of motion</li>
                <li>Core strength to support the spine</li>
                <li>Posture awareness and correction</li>
              </ul>
              <h3 className="text-2xl font-light mb-4">Benefits of a Healthy Spine</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Reduced back and neck pain</li>
                <li>Improved overall mobility</li>
                <li>Better balance and coordination</li>
                <li>Enhanced athletic performance</li>
                <li>Increased energy levels</li>
              </ul>
              <Button className="mt-4">Learn More About Spinal Health</Button>
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
                  Dr. Diego Montes, Expert in Chiropractic Care and Spinal Health
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

