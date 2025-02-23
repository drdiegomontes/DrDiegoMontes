"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { handleScrollRestoration, forceScrollToTop } from "@/utils/scrollUtils"

export function GlobalScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Set up scroll restoration behavior
    handleScrollRestoration()

    // Handle route changes
    forceScrollToTop()
  }, [])

  return null
}

