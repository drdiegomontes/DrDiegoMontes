"use client"

import type React from "react"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: { name: string; href: string }[]
}

export default function Menu({ isOpen, onClose, navItems }: MenuProps) {
  const router = useRouter()

  const handleMenuClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    onClose()
    router.push(href)
    setTimeout(smoothScrollToTop, 100)
  }

  if (!isOpen) return null

  return (
    <div className="fixed top-20 right-8 w-64 bg-black text-white rounded-lg shadow-lg z-50 overflow-hidden mt-4">
      <nav className="py-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={handleMenuClick(item.href)}
                className="block px-6 py-2 text-lg hover:bg-gray-800 transition-colors w-full text-left"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-6 border-t border-gray-800">
        <h3 className="text-sm font-semibold mb-4">Subscribe to our newsletter</h3>
        <div className="flex items-center bg-white bg-opacity-10 rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow bg-transparent text-white px-4 py-2 text-sm focus:outline-none"
          />
          <button className="bg-white text-black p-2 rounded-full">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

