"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function AutoScroll() {
  const pathname = usePathname()

  useEffect(() => {
    // Force scroll to top on route change
    const scrollToTop = () => {
      // Method 1: Using scrollTo
      window.scrollTo(0, 0)

      // Method 2: Using scroll
      window.scroll(0, 0)

      // Method 3: Using scrollIntoView on body
      document.body.scrollIntoView({ behavior: "auto", block: "start" })

      // Method 4: Using requestAnimationFrame for next frame
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
      })

      // Method 5: Multiple attempts with setTimeout
      ;[0, 100, 200].forEach((timeout) => {
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, timeout)
      })
    }

    // Execute scroll
    scrollToTop()

    // Disable browser's default scroll restoration
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual"
    }
  }, [pathname]) // Re-run when route changes

  return null
}

