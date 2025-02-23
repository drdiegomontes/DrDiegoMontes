"use client"

// Force scroll to top with multiple approaches for reliability
export function forceScrollToTop() {
  if (typeof window === "undefined") return

  // Immediate scroll
  window.scrollTo(0, 0)

  // Backup with requestAnimationFrame
  requestAnimationFrame(() => {
    window.scrollTo(0, 0)
  })

  // Multiple attempts with setTimeout for reliability
  const attempts = [0, 50, 100]
  attempts.forEach((delay) => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, delay)
  })
}

// Disable browser's scroll restoration
export function disableScrollRestoration() {
  if (typeof window !== "undefined" && "scrollRestoration" in history) {
    history.scrollRestoration = "manual"
  }
}

