import type React from "react"

interface AboutVideoSectionProps {
  url: string
  videoRef: React.RefObject<HTMLVideoElement>
  isMuted: boolean
}

const AboutVideoSection: React.FC<AboutVideoSectionProps> = ({ url, videoRef, isMuted }) => {
  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={url}
        className="w-full h-full object-cover absolute inset-0"
        playsInline
        loop
        muted={isMuted}
        style={{ objectFit: "cover" }}
      />
    </div>
  )
}

export default AboutVideoSection

