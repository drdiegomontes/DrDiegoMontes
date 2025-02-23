"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { THREE } from "@/utils/three"

type GLTFResult = any

export function Rig({ children }) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  return <group ref={ref}>{children}</group>
}

export function Carousel({ radius = 1.6, count = 10 }) {
  const ref = useRef()
  const { nodes, materials, animations } = useGLTF("/carousel.glb") as GLTFResult
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t
    ref.current.scale.setScalar(clicked ? 1.2 : 1)
    ref.current.material.color.lerp(new THREE.Color(clicked ? "#7FFFD4" : "#ffffff"), 0.1)
  })

  return (
    <group ref={ref}>
      {Array.from({ length: count }, (_, i) => (
        <mesh
          key={i}
          position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        >
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

