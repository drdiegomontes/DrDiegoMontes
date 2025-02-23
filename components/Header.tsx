"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Menu from "./Menu"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import dynamic from "next/dynamic"

const AudioPlayer = dynamic(() => import("./AudioPlayer"), {
  ssr: false,
  loading: () => null,
})

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "WELLNESS TIPS", href: "/wellness-tips" },
    { name: "CONTACT", href: "/contact" },
    { name: "BLOG", href: "/blog" },
  ]

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    setTimeout(smoothScrollToTop, 100) // Small delay to ensure navigation has started
  }

  if (!isMounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start">
          <Link href="/" className="group" onClick={handleNavClick("/")}>
            <span className="block text-[2.5rem] font-medium tracking-tight text-black mb-2">Dr. Diego Montes</span>
            <span className="text-base tracking-[0.2em] text-gray-600 font-normal uppercase">
              Chiropractic & Wellness
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <AudioPlayer />

          <Button
            className="bg-[#e3f677] text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#d6e85e] transition-colors text-base"
            onClick={handleNavClick("/contact")}
          >
            LET'S TALK
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
          </Button>

          <Button
            variant="outline"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full bg-black text-white border border-black hover:bg-white hover:text-black transition-colors duration-300 px-4 py-3 text-base"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </Button>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navItems={navItems} />
    </header>
  )
}

