"use client"

import { useEffect, useRef } from "react"

export function SafeEventListener({ eventName, handler, element = "window" }) {
  const savedHandler = useRef(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    let targetElement: Window | Element | null = null

    const getTargetElement = () => {
      if (typeof window === "undefined") return null
      return element === "window" ? window : document.querySelector(element)
    }

    const attachListener = () => {
      targetElement = getTargetElement()
      if (targetElement) {
        targetElement.addEventListener(eventName, savedHandler.current)
      }
    }

    const detachListener = () => {
      if (targetElement) {
        targetElement.removeEventListener(eventName, savedHandler.current)
      }
    }

    attachListener()

    return () => {
      detachListener()
    }
  }, [eventName, element])

  return null
}

