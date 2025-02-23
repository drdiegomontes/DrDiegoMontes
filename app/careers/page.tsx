import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

const jobs = [
  {
    title: "Chiropractor",
    description: "Join our team as a skilled chiropractor to provide exceptional care to our patients.",
    requirements: [
      "Doctor of Chiropractic degree",
      "Valid state license",
      "2+ years of experience",
      "Excellent communication skills",
    ],
    slug: "chiropractor",
  },
  {
    title: "Massage Therapist",
    description: "We're seeking a licensed massage therapist to complement our chiropractic services.",
    requirements: [
      "Massage Therapy certification",
      "1+ year of experience",
      "Knowledge of various massage techniques",
      "Ability to work in a fast-paced environment",
    ],
    slug: "massage-therapist",
  },
  {
    title: "Front Desk Receptionist",
    description: "Become the welcoming face of our practice as our front desk receptionist.",
    requirements: [
      "High school diploma or equivalent",
      "Excellent customer service skills",
      "Proficiency in scheduling software",
      "Ability to multitask and manage a busy front desk",
    ],
    slug: "front-desk-receptionist",
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1774-3cacLNcvFZXaRXN2ZVJcDAyhn85YaJ.jpeg"
          alt="Dr. Diego Montes Chiropractic Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Be part of a passionate team dedicated to improving lives through chiropractic care.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg p-6">
                <h3 className="text-2xl font-light mb-4">{job.title}</h3>
                <p className="text-gray-600 mb-6">{job.description}</p>
                <h4 className="font-medium mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 mb-6">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="text-gray-600">
                      {req}
                    </li>
                  ))}
                </ul>
                <Link href={`/careers/${job.slug}`} passHref>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">Learn More & Apply</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Interested in Joining Our Team?</h2>
          <p className="text-xl mb-8">
            We're always looking for talented individuals to join our practice. If you don't see a position that fits
            your skills, feel free to reach out to us.
          </p>
          <div className="inline-flex items-center justify-center bg-white text-black rounded-full px-6 py-3">
            <Mail className="w-5 h-5 mr-2" />
            <span className="text-lg">careers@drdiegomontes.com</span>
          </div>
        </div>
      </section>
    </main>
  )
}

