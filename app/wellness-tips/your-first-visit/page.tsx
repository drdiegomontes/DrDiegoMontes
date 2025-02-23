import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function YourFirstVisitPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2791&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First Chiropractic Visit"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Your First Visit</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">CONSULTATION • EXAMINATION • TREATMENT PLAN</p>
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
              <h2 className="text-3xl md:text-4xl font-light mb-6">What to Expect on Your First Visit</h2>
              <p className="text-lg text-gray-700 mb-6">
                Your first visit to our chiropractic clinic is an important step towards better health. We want you to
                feel comfortable and informed throughout the process. Here&apos;s what you can expect during your
                initial consultation and examination.
              </p>
              <h3 className="text-2xl font-light mb-4">Steps of Your First Visit</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Completion of patient history and symptoms</li>
                <li>Consultation with Dr. Montes</li>
                <li>Physical examination</li>
                <li>Diagnostic studies (if necessary)</li>
                <li>Treatment plan discussion</li>
                <li>Initial treatment (if appropriate)</li>
              </ol>
              <h3 className="text-2xl font-light mb-4">Preparing for Your Visit</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Wear comfortable clothing</li>
                <li>Bring any recent X-rays or lab results</li>
                <li>Make a list of current medications and supplements</li>
                <li>Prepare questions you have about chiropractic care</li>
              </ul>
              <Button className="mt-4">Schedule Your First Visit</Button>
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
                  Dr. Diego Montes, Your Trusted Chiropractic Care Provider
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

