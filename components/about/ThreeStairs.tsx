"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useCursor } from "@react-three/drei"

const Stairs = ({ position, color = "white" }: any) => {
  const mesh = useRef<any>(null)
  const [hovered, setHover] = useState(false)
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta / 2
    mesh.current.rotation.y += delta / 2
  })
  useCursor(hovered)
  return (
    <mesh ref={mesh} position={position} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "orange" : color} />
    </mesh>
  )
}

const ThreeStairs = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <group>
        <Stairs position={[-1.2, 0, 0]} color={"blue"} />
        <Stairs position={[0, 0, 0]} color={"pink"} />
        <Stairs position={[1.2, 0, 0]} color={"green"} />
      </group>
    </Canvas>
  )
}

export default ThreeStairs

