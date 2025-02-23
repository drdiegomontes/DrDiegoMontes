"use client"

import { useEffect, useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const FallbackContent = () => (
  <div className="flex items-center justify-center h-full bg-gray-100">
    <p className="text-lg text-gray-600">Unable to load 3D content. Please check your connection and try again.</p>
  </div>
)

const SceneComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const loadModel = async () => {
      try {
        // Simulating model loading
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsLoading(false)
      } catch (error) {
        console.error("Error loading model:", error)
        setHasError(true)
        setIsLoading(false)
      }
    }

    loadModel()
  }, [])

  if (hasError) {
    return <FallbackContent />
  }

  return (
    <div style={{ height: "400px", background: "#f0f0f0" }}>
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-lg text-gray-600">Loading 3D content...</p>
        </div>
      ) : (
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="blue" />
            </mesh>
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}

export default SceneComponent

