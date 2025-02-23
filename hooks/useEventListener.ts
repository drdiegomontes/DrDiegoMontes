"use client"

import { useEffect, useRef } from "react"

type EventListener = (event: Event) => void

export function useEventListener(
  eventName: string,
  handler: EventListener,
  element: Window | Document | HTMLElement | null = typeof window !== "undefined" ? window : null,
) {
  const savedHandler = useRef<EventListener>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (!element || typeof element.addEventListener !== "function") {
      return
    }

    const eventListener: EventListener = (event) => savedHandler.current?.(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

