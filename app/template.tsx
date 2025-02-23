"use client"

import type React from "react"

import { useEffect } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable browser's default scroll restoration
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual"
    }
  }, [])

  return <>{children}</>
}

