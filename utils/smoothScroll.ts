export function smoothScrollToTop() {
  if (typeof window === "undefined") return

  const scrollDuration = 300 // 300ms for a quick but smooth scroll
  const scrollStep = -window.scrollY / (scrollDuration / 15)

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep)
    } else {
      clearInterval(scrollInterval)
    }
  }, 15)
}

// Force immediate scroll without animation
export function forceScrollToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0)
  }
}

