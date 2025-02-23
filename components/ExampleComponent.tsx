"use client"

import { useState, useEffect } from "react"
import { useEventListener } from "../hooks/useEventListener"

export default function ExampleComponent() {
  const [windowWidth, setWindowWidth] = useState(0)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEventListener("resize", handleResize)

  useEffect(() => {
    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
    }
  }, [])

  return (
    <div>
      <h1>Example Component</h1>
      <p>Window width: {windowWidth}px</p>
    </div>
  )
}

