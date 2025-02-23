"use client"

import { useRouter } from "next/navigation"
import { ChevronRight, Instagram, Facebook, X, Linkedin } from "lucide-react"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Spinal Adjustment", href: "/services#spinal-adjustment" },
      { name: "Sports Rehabilitation", href: "/services#sports-rehabilitation" },
      { name: "Posture Correction", href: "/services#posture-correction" },
      { name: "Pain Management", href: "/services#pain-management" },
      { name: "Wellness Care", href: "/services#wellness-care" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Patient Education", href: "/wellness-tips" },
      { name: "FAQs", href: "/resources/faqs" },
      { name: "Health Tips", href: "/wellness-tips" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Dr. Diego Montes", href: "/about" },
      { name: "Our Approach", href: "/about#our-approach" },
      { name: "Facility", href: "/about#facility" },
      { name: "Careers", href: "/careers" },
      { name: "Testimonials", href: "/services#instagram-reviews" },
      { name: "Contact", href: "/contact" },
    ],
  },
]

const socialIcons = [
  { Icon: Instagram, href: "https://www.instagram.com/drdiegomontesdc?igsh=NTc4MTIwNjQ2YQ==", label: "Instagram" },
  { Icon: X, href: "https://x.com/DrDiegoMontes", label: "X (Twitter)" },
  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61550673299730", label: "Facebook" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/diegomontesjsu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    label: "LinkedIn",
  },
]

export default function Footer() {
  const router = useRouter()

  const handleFooterClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    setTimeout(() => {
      smoothScrollToTop()
    }, 100)
  }

  return (
    <footer className="bg-black text-white py-12 sm:py-16 px-4 sm:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, index) => (
            <div key={index} className="hidden sm:block">
              <h3 className="text-lg font-semibold mb-4 text-[#e3f677]">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button onClick={handleFooterClick(link.href)} className="hover:text-gray-300 transition-colors">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="sm:hidden">
            <Accordion type="single" collapsible className="w-full">
              {footerLinks.map((column, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-[#e3f677]">{column.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <button
                            onClick={handleFooterClick(link.href)}
                            className="hover:text-gray-300 transition-colors"
                          >
                            {link.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#e3f677]">Contact</h3>
            <div className="space-y-4">
              <div>
                <button className="flex items-center group" onClick={handleFooterClick("/contact")}>
                  <span className="mr-2">Schedule Appointment</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-gray-400 mt-1">
                  Book your chiropractic session or consultation with Dr. Diego Montes
                </p>
              </div>
              <div>
                <button className="flex items-center group" onClick={handleFooterClick("/contact")}>
                  <span className="mr-2">Patient Support</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-gray-400 mt-1">
                  Get assistance with your appointments, treatments, or general inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#e3f677] flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:gap-6 text-center sm:text-left">
            <button
              className="text-sm text-gray-400 hover:text-white transition-colors mb-2 sm:mb-0"
              onClick={handleFooterClick("/privacy-policy")}
            >
              Privacy Policy
            </button>
            <button
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={handleFooterClick("/terms-of-service")}
            >
              Terms of Service
            </button>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-0">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © 2025 Dr. Diego Montes Chiropractic. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e3f677] hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

