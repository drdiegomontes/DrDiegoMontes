import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function StayHydratedPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbmtpbmclMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Person drinking water"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Stay Hydrated</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">NUTRITION • WELLNESS • HEALTH</p>
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
              <h2 className="text-3xl md:text-4xl font-light mb-6">The Importance of Staying Hydrated</h2>
              <p className="text-lg text-gray-700 mb-6">
                Proper hydration is essential for overall health and well-being. Water plays a crucial role in nearly
                every bodily function, including regulating body temperature, aiding digestion, and supporting joint
                health. For spinal health specifically, staying hydrated helps maintain the fluid content of spinal
                discs, which act as shock absorbers for the spine.
              </p>
              <h3 className="text-2xl font-light mb-4">Tips for Staying Hydrated</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Drink water throughout the day, not just when you feel thirsty</li>
                <li>Carry a reusable water bottle with you</li>
                <li>Set reminders to drink water regularly</li>
                <li>Eat water-rich foods like fruits and vegetables</li>
                <li>Limit caffeine and alcohol intake, as they can be dehydrating</li>
                <li>Monitor your urine color - pale yellow indicates good hydration</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Remember, the amount of water you need can vary based on factors like activity level, climate, and
                overall health. Listen to your body and consult with healthcare professionals for personalized advice on
                hydration.
              </p>
              <Button className="mt-4">Learn More About Nutrition and Wellness</Button>
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

