"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

const jobs = {
  chiropractor: {
    title: "Chiropractor",
    description: "Join our team as a skilled chiropractor to provide exceptional care to our patients.",
    requirements: [
      "Doctor of Chiropractic degree",
      "Valid state license",
      "2+ years of experience",
      "Excellent communication skills",
    ],
    responsibilities: [
      "Perform chiropractic adjustments and treatments",
      "Develop personalized treatment plans",
      "Educate patients on proper care and prevention",
      "Collaborate with other healthcare professionals",
    ],
  },
  "massage-therapist": {
    title: "Massage Therapist",
    description: "We're seeking a licensed massage therapist to complement our chiropractic services.",
    requirements: [
      "Massage Therapy certification",
      "1+ year of experience",
      "Knowledge of various massage techniques",
      "Ability to work in a fast-paced environment",
    ],
    responsibilities: [
      "Provide therapeutic massage treatments",
      "Assess clients' needs and develop treatment plans",
      "Maintain a clean and welcoming environment",
      "Collaborate with chiropractors for integrated care",
    ],
  },
  "front-desk-receptionist": {
    title: "Front Desk Receptionist",
    description: "Become the welcoming face of our practice as our front desk receptionist.",
    requirements: [
      "High school diploma or equivalent",
      "Excellent customer service skills",
      "Proficiency in scheduling software",
      "Ability to multitask and manage a busy front desk",
    ],
    responsibilities: [
      "Greet and check-in patients",
      "Schedule appointments and manage the calendar",
      "Handle phone calls and patient inquiries",
      "Process payments and manage billing inquiries",
    ],
  },
}

export default function JobDescriptionPage({ params }: { params: { job: string } }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const job = jobs[params.job as keyof typeof jobs]

  if (!job) {
    return <div>Job not found</div>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-[#F0F1FA]">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1774-3cacLNcvFZXaRXN2ZVJcDAyhn85YaJ.jpeg"
          alt="Dr. Diego Montes Chiropractic Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-4">{job.title}</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">{job.description}</p>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/careers"
            className="inline-flex items-center text-gray-600 mb-8 hover:text-black transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Back to Careers
          </Link>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-8">
            <h2 className="text-3xl font-light mb-6">Job Description</h2>
            <p className="text-gray-600 mb-8">{job.description}</p>

            <h3 className="text-2xl font-light mb-4">Requirements</h3>
            <ul className="list-disc pl-5 mb-8">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  {req}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mb-4">Responsibilities</h3>
            <ul className="list-disc pl-5 mb-8">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  {resp}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mb-4">Apply Now</h3>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Textarea
                  placeholder="Why are you interested in this position?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                  Send Application
                </Button>
              </form>
            ) : (
              <div className="text-center p-4 bg-green-100 rounded-lg">
                <p className="text-green-800 mb-2">Thank you for your application!</p>
                <p className="text-gray-600">We will review your information and get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Have Questions?</h2>
          <p className="text-xl mb-8">
            If you have any questions about this position or the application process, feel free to reach out to us.
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

