"use client"

import { useState, useEffect, useRef, useCallback } from "react"

export function useAudio(url: string) {
  // Refs and state
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Initialize audio
  useEffect(() => {
    // Only run on client side
    if (!isClient) return

    let audio: HTMLAudioElement | null = null

    try {
      audio = new Audio()
      audio.src = url
      audioRef.current = audio

      const handleCanPlay = () => setIsReady(true)
      const handleError = () => {
        setHasError(true)
        setIsReady(false)
        setIsPlaying(false)
      }
      const handleEnded = () => setIsPlaying(false)

      // Add event listeners
      audio.addEventListener("canplaythrough", handleCanPlay)
      audio.addEventListener("error", handleError)
      audio.addEventListener("ended", handleEnded)

      // Cleanup function
      return () => {
        if (audio) {
          audio.removeEventListener("canplaythrough", handleCanPlay)
          audio.removeEventListener("error", handleError)
          audio.removeEventListener("ended", handleEnded)
          audio.pause()
          audio.src = ""
          audioRef.current = null
        }
      }
    } catch (error) {
      console.error("Audio initialization error:", error)
      setHasError(true)
      return () => {}
    }
  }, [url, isClient])

  const togglePlay = useCallback(async () => {
    if (!isClient || !audioRef.current || !isReady || hasError) {
      return
    }

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          try {
            await playPromise
            setIsPlaying(true)
          } catch (error) {
            console.error("Play failed:", error)
            setHasError(true)
            setIsPlaying(false)
          }
        }
      }
    } catch (error) {
      console.error("Toggle play error:", error)
      setHasError(true)
      setIsPlaying(false)
    }
  }, [isPlaying, isReady, hasError, isClient])

  return {
    isPlaying,
    isReady: isClient && isReady && !hasError,
    hasError,
    togglePlay,
  }
}

