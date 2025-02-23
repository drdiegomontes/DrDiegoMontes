"use client"

import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useCursor } from "@react-three/drei"

function Stair({ index, activeCycle, ...props }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    if (ref.current) {
      const isActive = index === activeCycle
      const scale = isActive ? 1.1 : hovered ? 1.05 : 1
      ref.current.scale.setScalar(scale)
    }
  })

  useCursor(hovered)

  return (
    <mesh
      {...props}
      ref={ref}
      receiveShadow
      castShadow
      onClick={(e) => (e.stopPropagation(), setClicked(!clicked))}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 6, 0.075]} />
      <meshStandardMaterial
        roughness={0.2}
        transparent
        opacity={0.6}
        color={clicked ? "#7FFFD4" : index === activeCycle ? "#7FFFD4" : hovered ? "white" : "white"}
      />
    </mesh>
  )
}

export default function StairsScene({ activeCycle }) {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[1, 10, -2]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-far={70}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-10, -10, 2]} intensity={2} />

      {/* Ground */}
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>

      {/* Stairs */}
      {Array.from({ length: 12 }, (_, i) => (
        <Stair
          key={i}
          index={i}
          activeCycle={activeCycle}
          rotation={[-Math.PI / 2, 0, i / Math.PI / 2]}
          position={[2 - Math.sin(i / 5) * 5, i * 0.5, 2 - Math.cos(i / 5) * 5]}
        />
      ))}
    </>
  )
}

