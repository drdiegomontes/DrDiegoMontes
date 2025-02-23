"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

interface Props {
  children: React.ReactNode
}

export default function ClientLayout({ children }: Props) {
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)

    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768)
      }
    }

    // Initial check
    checkMobile()

    // Add event listener only in browser environment
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile)

      // Cleanup
      return () => {
        window.removeEventListener("resize", checkMobile)
      }
    }
  }, [])

  if (!isMounted) {
    return null
  }

  return <>{isMobile ? <MobileView>{children}</MobileView> : <DesktopView>{children}</DesktopView>}</>

  function DesktopView({ children }: { children: React.ReactNode }) {
    return <>{children}</>
  }

  function MobileView({ children }: { children: React.ReactNode }) {
    return <>{children}</>
  }
}

