"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { forceScrollToTop } from "@/utils/scrollUtils"

export function ScrollToTopOnMount() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    forceScrollToTop()
  }, []) // Re-run when pathname or search params change

  return null
}

