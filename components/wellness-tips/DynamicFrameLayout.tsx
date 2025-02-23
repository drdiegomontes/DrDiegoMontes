"use client"

import { useEffect } from "react"

import React, { useState, useCallback, useMemo } from "react"
import { motion } from "framer-motion"

interface Frame {
  id: string
  videoUrl: string
  defaultPosition: { x: number; y: number; width: number; height: number }
  mediaSize: { width: number; height: number }
  autoplay: boolean
  hover: boolean
}

const initialFrames: Frame[] = [
  {
    id: "1",
    videoUrl: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/Services-SpinalHealthImportance.mp4",
    defaultPosition: { x: 0, y: 0, width: 1, height: 1 },
    mediaSize: { width: 1920, height: 1080 },
    autoplay: false,
    hover: false,
  },
  {
    id: "2",
    videoUrl: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-VideoPlayer.mp4",
    defaultPosition: { x: 1, y: 0, width: 1, height: 1 },
    mediaSize: { width: 1920, height: 1080 },
    autoplay: false,
    hover: false,
  },
  {
    id: "3",
    videoUrl: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-VideoPlayer-2.mp4",
    defaultPosition: { x: 0, y: 1, width: 1, height: 1 },
    mediaSize: { width: 1920, height: 1080 },
    autoplay: false,
    hover: false,
  },
  {
    id: "4",
    videoUrl: "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/About-VideoPlayer-3.mp4",
    defaultPosition: { x: 1, y: 1, width: 1, height: 1 },
    mediaSize: { width: 1920, height: 1080 },
    autoplay: false,
    hover: false,
  },
]

const DynamicFrameLayout: React.FC = () => {
  const [frames, setFrames] = useState<Frame[]>(initialFrames)
  const [hoveredFrame, setHoveredFrame] = useState<{ row: number; col: number } | null>(null)
  const [hoverSize, setHoverSize] = useState(1.5)
  const [gapSize, setGapSize] = useState(10)
  const [loadingErrors, setLoadingErrors] = useState<Record<string, boolean>>({})

  const getRowSizes = useCallback(() => {
    if (!hoveredFrame) return ["1fr", "1fr"]
    return hoveredFrame.row === 0
      ? [`${hoverSize}fr`, "1fr"]
      : [
          "1fr",
          `${hoverSize}fr"]
  }, [hoveredFrame, hoverSize])

  const getColSizes = useCallback(() => {
    if (!hoveredFrame) return ["1fr", "1fr"]
    return hoveredFrame.col === 0 ? [\`${hoverSize}fr`,
          '1fr"] : ["1fr',
          `${hoverSize}fr`,
        ]
  }, [hoveredFrame, hoverSize])

  const getTransformOrigin = useCallback(
    (frameIndex: number) => {
      if (!hoveredFrame) return "center"
      const row = Math.floor(frameIndex / 2)
      const col = frameIndex % 2
      if (row === hoveredFrame.row && col === hoveredFrame.col) return "center"
      if (row === hoveredFrame.row) return col === 0 ? "right" : "left"
      if (col === hoveredFrame.col) return row === 0 ? "bottom" : "top"
      return "center"
    },
    [hoveredFrame],
  )

  const updateFrameProperty = useCallback((id: string, property: keyof Frame, value: any) => {
    setFrames((prevFrames) => prevFrames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
  }, [])

  const handleVideoError = useCallback((id: string) => {
    setLoadingErrors((prev) => ({ ...prev, [id]: true }))
  }, [])

  const ErrorFallback: React.FC<{ id: string }> = ({ id }) => (
    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
      Error loading video {id}
    </div>
  )

  const FrameComponent: React.FC<{
    frame: Frame
    isHovered: boolean
    onSizeChange: (width: number, height: number) => void
    onError: () => void
  }> = React.memo(({ frame, isHovered, onSizeChange, onError }) => {
    const videoRef = React.useRef<HTMLVideoElement>(null)

    useEffect(() => {
      const video = videoRef.current
      if (!video) return

      const handleLoadedMetadata = () => {
        onSizeChange(video.videoWidth, video.videoHeight)
      }

      const handlePlay = () => {
        updateFrameProperty(frame.id, "autoplay", true)
      }

      const handlePause = () => {
        updateFrameProperty(frame.id, "autoplay", false)
      }

      video.addEventListener("loadedmetadata", handleLoadedMetadata)
      video.addEventListener("play", handlePlay)
      video.addEventListener("pause", handlePause)
      video.addEventListener("error", onError)

      return () => {
        video?.removeEventListener("loadedmetadata", handleLoadedMetadata)
        video?.removeEventListener("play", handlePlay)
        video?.removeEventListener("pause", handlePause)
        video?.removeEventListener("error", onError)
      }
    }, [frame, onSizeChange, onError, updateFrameProperty])

    useEffect(() => {
      const video = videoRef.current
      if (!video) return

      if (isHovered && !frame.autoplay) {
        video.play().catch(() => {
          // Autoplay was prevented, handle if needed
        })
      } else if (!isHovered && frame.autoplay) {
        video.pause()
      }
    }, [isHovered, frame.autoplay])

    return (
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${loadingErrors[frame.id] ? "opacity-50" : ""}`}
        loop
        muted
        playsInline
        poster="/placeholder.svg"
      >
        <source src={frame.videoUrl} type="video/mp4" />
        <source src={frame.videoUrl.replace(".mp4", ".webm")} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    )
  })

  const memoizedFrames = useMemo(
    () =>
      frames.map((frame, index) => {
        const row = Math.floor(index / 2)
        const col = index % 2
        const isHovered = hoveredFrame?.row === row && hoveredFrame?.col === col

        return (
          <motion.div
            key={frame.id}
            className="relative overflow-hidden"
            style={{
              gridArea: `${row + 1} / ${col + 1} / span 1 / span 1`,
              transformOrigin: getTransformOrigin(index),
            }}
            whileHover={{ scale: hoverSize }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredFrame({ row, col })}
            onMouseLeave={() => setHoveredFrame(null)}
          >
            {loadingErrors[frame.id] ? (
              <ErrorFallback id={frame.id} />
            ) : (
              <FrameComponent
                frame={frame}
                isHovered={isHovered}
                onSizeChange={(width, height) => updateFrameProperty(frame.id, "mediaSize", { width, height })}
                onError={() => handleVideoError(frame.id)}
              />
            )}
          </motion.div>
        )
      }),
    [frames, hoveredFrame, hoverSize, loadingErrors, getTransformOrigin, handleVideoError, updateFrameProperty],
  )

  return (
    <section className="py-24 px-4 sm:px-8 bg-main-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8">Dynamic Health Tips</h2>
        <div
          className="grid gap-4"
          style={{
            gridTemplateRows: getRowSizes().join(" "),
            gridTemplateColumns: getColSizes().join(" "),
            gap: `${gapSize}px`,
          }}
        >
          {memoizedFrames}
        </div>
      </div>
    </section>
  )
}

export default DynamicFrameLayout

