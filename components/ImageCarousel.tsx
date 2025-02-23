"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useCursor } from "@react-three/drei"
import { useSpring } from "@react-spring/three"
import { Canvas } from "@react-three/fiber"
import { ScrollControls, Environment } from "@react-three/drei"
import { Rig, Carousel } from "./Carousel"

type GLTFResult = any

const ImageCarousel: React.FC<{ url: string }> = ({ url }) => {
  const group = useRef<any>(null)
  const { nodes, materials, animations } = useGLTF(url) as GLTFResult
  const { actions } = useAnimations(animations, group)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  useCursor(hovered)

  const { scale } = useSpring({
    scale: clicked ? 1.2 : 1,
    config: { mass: 5, tension: 350, friction: 40 },
  })

  useEffect(() => {
    if (actions["ArmatureAction"]) {
      actions["ArmatureAction"].play()
    }
  }, [actions])

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta / 2
    }
  })

  return (
    <div className="relative p-4">
      {/* Golden/Orange glow frame */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-black border-4 border-[#B8860B]/40 shadow-[0_0_30px_rgba(184,134,11,0.3)]" />

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
  )
}

useGLTF.preload("/carousel.glb")

export default ImageCarousel

