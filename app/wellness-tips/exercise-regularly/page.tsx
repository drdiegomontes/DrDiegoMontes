import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ExerciseRegularlyPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D"
          alt="People exercising"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Exercise Regularly</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">FITNESS • STRENGTH • MOBILITY</p>
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
              <h2 className="text-3xl md:text-4xl font-light mb-6">The Benefits of Regular Exercise</h2>
              <p className="text-lg text-gray-700 mb-6">
                Regular exercise is crucial for maintaining overall health and well-being. It not only helps in
                strengthening your muscles and improving cardiovascular health but also plays a significant role in
                supporting spinal health and preventing back pain. Exercise can improve flexibility, posture, and core
                strength, all of which contribute to a healthier spine.
              </p>
              <h3 className="text-2xl font-light mb-4">Exercises for Spinal Health</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Core strengthening exercises (e.g., planks, bridges)</li>
                <li>Low-impact cardiovascular activities (e.g., walking, swimming)</li>
                <li>Yoga or Pilates for flexibility and balance</li>
                <li>Stretching exercises for improved mobility</li>
                <li>Back-specific exercises (e.g., cat-cow stretch, bird-dog)</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Remember to start slowly and gradually increase the intensity and duration of your workouts. Always
                consult with a healthcare professional before starting a new exercise regimen, especially if you have
                existing health conditions or injuries.
              </p>
              <Button className="mt-4">Schedule a Fitness Consultation</Button>
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
                  Dr. Diego Montes, Expert in Chiropractic Care and Exercise Rehabilitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

