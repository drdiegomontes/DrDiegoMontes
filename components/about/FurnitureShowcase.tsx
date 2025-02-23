"use client"

import { useState, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"

const SimpleScene = () => {
  const meshRef = useRef()
  const { clock } = useThree()

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(elapsedTime * 0.2) * 0.5
    meshRef.current.rotation.y = Math.cos(elapsedTime * 0.3) * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#e3f677" />
    </mesh>
  )
}

const items = [
  ["Sit straight.", "Stool", "Stretch often.", "Move regularly."],
  ["Stand up.", "Table", "Adjust height.", "Ergonomic setup.", "Bench"],
  ["Take breaks.", "Walk around.", "Change positions."],
  ["Maintain alignment.", "Practice good posture."],
]

export default function FurnitureShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="relative h-[30vh] sm:h-[50vh] bg-white">
      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 -mt-4 sm:mt-0">
          <div className="text-[4vw] sm:text-[2.5vw] md:text-[2vw] leading-relaxed font-light tracking-tight text-center">
            {items.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className="mb-1 sm:mb-1 bg-white/80 backdrop-blur-sm rounded-lg py-1 px-2 sm:bg-transparent sm:backdrop-blur-none sm:rounded-none sm:p-0"
              >
                {line.map((item, index) => (
                  <span
                    key={index}
                    className={`mr-2 ${
                      (item === "Bench" && currentIndex === 2) ||
                      (item === "Table" && currentIndex === 1) ||
                      (item === "Stool" && currentIndex === 0)
                        ? "text-black underline underline-offset-4 decoration-1"
                        : "text-gray-400"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-2 sm:mt-4 text-[3vw] sm:text-[1.5vw] font-light text-black text-center bg-white/80 backdrop-blur-sm rounded-lg py-1 px-2 sm:bg-transparent sm:backdrop-blur-none sm:rounded-none">
            Dr. Diego Montes
          </div>
        </div>
      </div>

      {/* 3D Scene */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <SimpleScene />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </motion.div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-black" : "bg-black/20"
            }`}
          />
        ))}
      </div>

      {/* Gradient overlays for smooth transitions */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}

