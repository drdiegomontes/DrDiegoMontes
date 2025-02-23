import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ManageStressPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Person meditating"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Manage Stress</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">MENTAL HEALTH • RELAXATION • BALANCE</p>
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
              <h2 className="text-3xl md:text-4xl font-light mb-6">The Importance of Managing Stress</h2>
              <p className="text-lg text-gray-700 mb-6">
                Stress management is crucial for maintaining overall health and well-being. Chronic stress can have
                negative effects on both your physical and mental health, including increased muscle tension, which can
                lead to back pain and other musculoskeletal issues. Learning to manage stress effectively can help
                improve your quality of life and support your chiropractic care.
              </p>
              <h3 className="text-2xl font-light mb-4">Stress Management Techniques</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Practice mindfulness meditation</li>
                <li>Engage in regular physical exercise</li>
                <li>Maintain a healthy sleep schedule</li>
                <li>Practice deep breathing exercises</li>
                <li>Pursue hobbies and activities you enjoy</li>
                <li>Connect with friends and family</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Remember, everyone experiences and manages stress differently. It's important to find the techniques
                that work best for you. If you're struggling with stress, don't hesitate to seek professional help.
              </p>
              <Button className="mt-4">Learn More About Stress Management</Button>
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
                  Dr. Diego Montes, Expert in Chiropractic Care and Holistic Wellness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

