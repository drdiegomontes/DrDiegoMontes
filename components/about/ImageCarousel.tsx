"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Image, Environment, ScrollControls, useScroll } from "@react-three/drei"
import { THREE } from "@/utils/three" // Changed to use centralized THREE import
import "@/utils/three-extend"
import type React from "react"

interface ImageCarouselProps {
  title?: string
}

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img8_.jpg-6RXH1EJfWVt3ZPrHtilXmrFPDuBDBp.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img10_.jpg-Bml44WbYQnJhAX5PYXcIVrZvEAyH1p.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img7_.jpg-UVWsfSymolKOBWsnUpZ3PRSnTYNX2Q.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img9_.jpg-vwn3MjQKedhLkT8i1pO0hdTqh4ZRc2.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6_.jpg-F5MzGNRZ7UzanVsTSux8EgFLvuq9V8.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patient-smile-1.webp-5NeQ5SJFJnu5RKEzFRUAh7AietrMjk.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patient-smile-2.webp-OvLIy47qsXiGYJCV1NIVe7sUVskvkj.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patient-smile-3.webp-oRftu5XZa6yWyZqVV1oc5fYZrj2vQE.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patient-smile-4.webp-PCbwYZXMAUQLKKxaZbLdyHURQ2ih5Q.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6.jpg-CxweHro2OUirJI9OcBTcsvpY2fML63.jpeg",
]

function Rig(props: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null)
  const scroll = useScroll()

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = -scroll.offset * (Math.PI * 2)
      state.events.update()
      state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, -state.pointer.x * 2, 0.3, delta)
      state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, state.pointer.y + 1.5, 0.3, delta)
      state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, 10, 0.3, delta)
      state.camera.lookAt(0, 0, 0)
    }
  })

  return <group ref={ref} {...props} />
}

function Card({ url, ...props }: { url: string } & JSX.IntrinsicElements["group"]) {
  const ref = useRef<THREE.Mesh>(null)
  const [hovered, hover] = useState(false)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, hovered ? 1.15 : 1, 0.1, delta)
      ref.current.scale.y = THREE.MathUtils.damp(ref.current.scale.y, hovered ? 1.15 : 1, 0.1, delta)
      ref.current.scale.z = THREE.MathUtils.damp(ref.current.scale.z, hovered ? 1.15 : 1, 0.1, delta)
      if (ref.current.material) {
        ref.current.material.radius = THREE.MathUtils.damp(
          ref.current.material.radius,
          hovered ? 0.25 : 0.1,
          0.2,
          delta,
        )
        ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, hovered ? 1 : 1.5, 0.2, delta)
      }
    }
  })

  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={(e) => (e.stopPropagation(), hover(true))}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  )
}

function Carousel({ radius = 1.6, count = 10 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={images[i]}
      position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ))
}

export default function ImageCarousel({ title }: ImageCarouselProps) {
  return (
    <section className="py-12 px-4 bg-black">
      {" "}
      {/* Changed bg-white to bg-black */}
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-4xl md:text-5xl font-light mb-6 text-center text-white">{title}</h2>}{" "}
        {/* Added text-white */}
        {/* Frame Container */}
        <div className="relative p-4">
          {/* Green glow frame with light effect */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-black border-4 border-[#e3f677] shadow-[0_0_30px_rgba(227,246,119,0.3),_0_0_60px_rgba(227,246,119,0.2),_0_0_90px_rgba(227,246,119,0.1)]" />
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
            <video
              src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/about-carousel-background.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-[110%] h-full object-cover left-1/2 -translate-x-1/2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
              <ScrollControls pages={4} infinite>
                <Rig rotation={[0, 0, 0.15]}>
                  <Carousel radius={1.6} count={10} />
                </Rig>
              </ScrollControls>
              <Environment preset="dawn" background={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

