import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function MaintainGoodPosturePage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZCUyMHBvc3R1cmV8ZW58MHx8MHx8fDA%3D"
          alt="Person with good posture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Maintain Good Posture</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">SPINE HEALTH • ERGONOMICS • PREVENTION</p>
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
              <h2 className="text-3xl md:text-4xl font-light mb-6">The Importance of Good Posture</h2>
              <p className="text-lg text-gray-700 mb-6">
                Maintaining good posture is crucial for overall health and well-being. Proper alignment of your body
                while sitting, standing, and moving can prevent strain on your muscles, ligaments, and spine. It also
                contributes to better breathing, improved circulation, and increased energy levels.
              </p>
              <h3 className="text-2xl font-light mb-4">Tips for Maintaining Good Posture</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Keep your shoulders back and relaxed</li>
                <li>Pull in your abdomen</li>
                <li>Keep your feet about hip-distance apart</li>
                <li>Balance your weight evenly on both feet</li>
                <li>Bend your knees slightly</li>
                <li>Keep your head level and in line with your body</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Remember, good posture is a habit that takes time to develop. Be mindful of your posture throughout the
                day and make adjustments as needed. Regular chiropractic care can also help address any misalignments
                and support your journey to better posture.
              </p>
              <Button className="mt-4">Schedule a Consultation</Button>
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
                  Dr. Diego Montes, Expert in Chiropractic Care and Posture Correction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

