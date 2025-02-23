"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import dynamic from "next/dynamic"

const AudioPlayer = dynamic(() => import("../AudioPlayer"), {
  ssr: false,
  loading: () => null,
})

export default function MobileHeader() {
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
    setIsMenuOpen(false)
    router.push(href)
    setTimeout(smoothScrollToTop, 100)
  }

  if (!isMounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group" onClick={handleNavClick("/")}>
            <span className="block text-xl font-medium tracking-tight text-black mb-1">Dr. Diego Montes</span>
            <span className="text-xs tracking-[0.2em] text-gray-600 font-normal uppercase">
              Chiropractic & Wellness
            </span>
          </Link>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2">
            <AudioPlayer />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full bg-black text-white border border-black hover:bg-white hover:text-black transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg">
            <nav className="px-4 py-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={handleNavClick(item.href)}
                      className="w-full text-left px-4 py-2 text-lg hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 px-4">
                <Button
                  className="w-full bg-[#e3f677] text-black hover:bg-[#d6e85e] transition-colors rounded-full"
                  onClick={handleNavClick("/contact")}
                >
                  LET'S TALK
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

