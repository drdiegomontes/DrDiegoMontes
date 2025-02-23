"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"
import LetsWorkTogether from "@/components/LetsWorkTogether"
import RotatingText from "./rotating-text"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import { ScrollAnimationWrapper, ScrollAnimationGroup, ScrollAnimationItem } from "@/components/ScrollAnimation"

// ... rest of the imports stay the same

export default function ContactPage() {
  const router = useRouter()
  const [appointmentSuccess, setAppointmentSuccess] = useState(false)
  const [inquirySuccess, setInquirySuccess] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, formType: "appointment" | "inquiry") => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://9957c751-steep-cherry-d865.adm-drdiegomontes.workers.dev/", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        if (formType === "appointment") {
          setAppointmentSuccess(true)
        } else {
          setInquirySuccess(true)
        }
        form.reset()
        setTimeout(() => {
          setAppointmentSuccess(false)
          setInquirySuccess(false)
        }, 5000)
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    setTimeout(smoothScrollToTop, 100)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ScrollAnimationWrapper>
        <section className="relative overflow-hidden pt-32 pb-16 px-4 sm:px-8">
          <div className="w-full max-w-[1800px] mx-auto">
            <div className="relative h-[70vh] min-h-[500px] rounded-[2.5rem] overflow-hidden">
              <Image
                src="https://pub-af6f4cefa51449e1bc1879efb21cc1a0.r2.dev/contact-hero-blackwhite.png"
                alt="Happy couple exercising outdoors"
                fill
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 sm:px-16 md:px-24">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-center max-w-5xl">
                  Connect with Dr. Diego Montes
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center max-w-2xl">
                  Take the first step towards a healthier, pain-free life. Reach out to us today and experience the
                  power of personalized chiropractic care.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Rotating Text Section */}
      <ScrollAnimationWrapper>
        <section className="pt-12 pb-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1774-3cacLNcvFZXaRXN2ZVJcDAyhn85YaJ.jpeg"
                  alt="Dr. Diego Montes smiling warmly in professional attire"
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
              </div>
              <div>
                <RotatingText />
                <div></div>
                <ScrollAnimationWrapper delay={0.2}>
                  <div className="mt-6 space-y-6">
                    <p className="text-xl text-gray-600">
                      Don't let pain hold you back any longer. Dr. Diego Montes and his team are ready to help you
                      achieve optimal health and wellness through personalized chiropractic care.
                    </p>
                    <Button
                      onClick={handleNavClick("#contact-forms")}
                      className="bg-black text-white hover:bg-black/90"
                    >
                      Start Your Journey Today
                    </Button>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <section className="py-24 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7FFFD4] opacity-10 rounded-full -mt-32 -mr-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7FFFD4] opacity-10 rounded-full -mb-32 -ml-32"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-4xl font-light mb-4">Ready to Take the Next Step?</h3>
                <p className="text-xl text-gray-600 mb-8">Schedule your appointment or send us an inquiry below.</p>
                <Button
                  onClick={handleNavClick("#contact-forms")}
                  className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      <div id="contact-forms"></div>
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-full p-2 shadow-lg animate-bounce">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <ScrollAnimationWrapper>
        <section className="pt-16 pb-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <ScrollAnimationWrapper delay={0.2}>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl font-light mb-4">Request an Appointment</h2>
                      <p className="text-gray-600">Schedule your visit with Dr. Diego Montes</p>
                    </div>
                    {appointmentSuccess && (
                      <div
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                        role="alert"
                      >
                        <p className="font-bold">Thank you!</p>
                        <p className="block sm:inline">
                          Your submission has been received. Dr. Diego Montes' office will review your request and get
                          back to you soon.
                        </p>
                      </div>
                    )}
                    <form
                      className="space-y-6"
                      onSubmit={(e) => handleSubmit(e, "appointment")}
                      encType="multipart/form-data"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-1">
                            Upload Documents or Photos (Optional)
                          </label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors duration-300">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="files"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                >
                                  <span>Upload files</span>
                                  <input
                                    id="files"
                                    name="files"
                                    type="file"
                                    className="sr-only"
                                    multiple
                                    accept=".pdf,image/*"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">PDF or image files up to 5MB each</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full md:w-auto bg-black hover:bg-black/90 text-white">
                        Request Appointment
                      </Button>
                    </form>
                  </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper delay={0.4}>
                  <div className="relative">
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                    <div className="pl-16 space-y-8">
                      <div>
                        <h2 className="text-4xl font-light mb-4">General Inquiry</h2>
                        <p className="text-gray-600">Have questions? We're here to help</p>
                      </div>
                      {inquirySuccess && (
                        <div
                          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                          role="alert"
                        >
                          <p className="font-bold">Thank you!</p>
                          <p className="block sm:inline">
                            Your submission has been received. Dr. Diego Montes' office will review your request and get
                            back to you soon.
                          </p>
                        </div>
                      )}
                      <form
                        className="space-y-6"
                        onSubmit={(e) => handleSubmit(e, "inquiry")}
                        encType="multipart/form-data"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="contact-firstName" className="block text-sm font-medium text-gray-700 mb-1">
                              First Name
                            </label>
                            <input
                              type="text"
                              id="contact-firstName"
                              name="contact-firstName"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-lastName" className="block text-sm font-medium text-gray-700 mb-1">
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="contact-lastName"
                              name="contact-lastName"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-files" className="block text-sm font-medium text-gray-700 mb-1">
                            Upload Documents or Photos (Optional)
                          </label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors duration-300">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="contact-files"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                >
                                  <span>Upload files</span>
                                  <input
                                    id="contact-files"
                                    name="contact-files"
                                    type="file"
                                    className="sr-only"
                                    multiple
                                    accept=".pdf,image/*"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">PDF or image files up to 5MB each</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                          </label>
                          <textarea
                            id="contact-message"
                            name="contact-message"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          ></textarea>
                        </div>
                        <Button type="submit" className="w-full md:w-auto bg-black hover:bg-black/90 text-white">
                          Send Message
                        </Button>
                      </form>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>

            <ScrollAnimationGroup>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ScrollAnimationItem>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <MapPin className="w-6 h-6 text-black mb-4" />
                    <h3 className="font-medium mb-2">Address</h3>
                    <p className="text-gray-600">123 Wellness Street, Healthville, CA 90210</p>
                  </div>
                </ScrollAnimationItem>

                <ScrollAnimationItem>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Phone className="w-6 h-6 text-black mb-4" />
                    <h3 className="font-medium mb-2">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </ScrollAnimationItem>

                <ScrollAnimationItem>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Mail className="w-6 h-6 text-black mb-4" />
                    <h3 className="font-medium mb-2">Email</h3>
                    <p className="text-gray-600">info@drdiegomontes.com</p>
                  </div>
                </ScrollAnimationItem>

                <ScrollAnimationItem>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Calendar className="w-6 h-6 text-black mb-4" />
                    <h3 className="font-medium mb-2">Office Hours</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
                      <li>Sat: 10:00 AM - 2:00 PM</li>
                      <li>Sun: Closed</li>
                    </ul>
                  </div>
                </ScrollAnimationItem>
              </div>
            </ScrollAnimationGroup>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Transition section */}
      <ScrollAnimationWrapper>
        <section className="py-24 bg-gradient-to-b from-white via-gray-100 to-gray-300">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">Ready for Your Transformation?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Take the next step towards a healthier, pain-free life with Dr. Diego Montes.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                <div className="w-2 h-2 bg-gray-800 rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      <LetsWorkTogether />
      <div className="h-px bg-white"></div>
    </main>
  )
}

