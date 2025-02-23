"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const spinalNerveData = [
  {
    level: "C1-C3",
    nerves: "C1, C2, C3",
    innervation: "Head, Neck",
    symptoms: "Headaches, Dizziness",
    y: 10,
    modelYRange: [1.8, 2],
  },
  {
    level: "C4-C5",
    nerves: "C4, C5",
    innervation: "Shoulders, Upper Arms",
    symptoms: "Shoulder Pain, Arm Weakness",
    y: 15,
    modelYRange: [1.5, 1.8],
  },
  {
    level: "C6-C7",
    nerves: "C6, C7",
    innervation: "Arms, Hands, Fingers",
    symptoms: "Wrist Pain, Finger Numbness",
    y: 20,
    modelYRange: [1.2, 1.5],
  },
  {
    level: "T1-T4",
    nerves: "T1, T2, T3, T4",
    innervation: "Chest, Upper Back",
    symptoms: "Upper Back Pain, Chest Tightness",
    y: 30,
    modelYRange: [0.6, 1.2],
  },
  {
    level: "T5-T8",
    nerves: "T5, T6, T7, T8",
    innervation: "Mid Back, Abdominal Muscles",
    symptoms: "Mid Back Pain, Abdominal Issues",
    y: 40,
    modelYRange: [0, 0.6],
  },
  {
    level: "T9-T12",
    nerves: "T9, T10, T11, T12",
    innervation: "Lower Back, Abdominal Organs",
    symptoms: "Lower Back Pain, Digestive Issues",
    y: 50,
    modelYRange: [-0.6, 0],
  },
  {
    level: "L1-L3",
    nerves: "L1, L2, L3",
    innervation: "Hips, Groin, Front of Thighs",
    symptoms: "Hip Pain, Thigh Numbness",
    y: 60,
    modelYRange: [-1.2, -0.6],
  },
  {
    level: "L4-L5",
    nerves: "L4, L5",
    innervation: "Legs, Feet",
    symptoms: "Leg Pain, Foot Weakness",
    y: 70,
    modelYRange: [-1.8, -1.2],
  },
  {
    level: "S1-S5",
    nerves: "S1, S2, S3, S4, S5",
    innervation: "Pelvic Area, Genitals, Back of Thighs",
    symptoms: "Sciatica, Bladder Issues",
    y: 80,
    modelYRange: [-2, -1.8],
  },
]

function SpineModel({ selectedLevel, setSelectedLevel }) {
  return (
    <group position={[0, 0, 0]} scale={1}>
      {spinalNerveData.map((data, index) => (
        <mesh
          key={data.level}
          position={[0, (data.modelYRange[0] + data.modelYRange[1]) / 2, 0]}
          onClick={(e) => {
            e.stopPropagation()
            setSelectedLevel(data.level)
          }}
        >
          <cylinderGeometry args={[0.5, 0.5, data.modelYRange[1] - data.modelYRange[0], 32]} />
          <meshStandardMaterial
            color={selectedLevel === data.level ? "#3b82f6" : "#ffffff"}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
      ))}
    </group>
  )
}

function Spine3DViewer() {
  return (
    <div className="h-full w-full">
      <iframe
        title="Spine"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src="https://sketchfab.com/models/39ad9be7118d402ca7266fab01b75fed/embed?ui_infos=0&ui_watermark_link=0&ui_watermark=0&dnt=1"
        className="w-full h-full"
      ></iframe>
    </div>
  )
}

function getSpineColor(level: string): string {
  if (["C1-C3", "C4-C5", "C6-C7"].includes(level)) return "bg-red-500 hover:bg-red-600"
  if (["T1-T4", "T5-T8", "T9-T12"].includes(level)) return "bg-blue-500 hover:bg-blue-600"
  if (["L1-L3", "L4-L5"].includes(level)) return "bg-amber-200 hover:bg-amber-300"
  if (level === "S1-S5") return "bg-green-500 hover:bg-green-600"
  return "bg-gray-50 hover:bg-gray-100"
}

function SpineLevelSelector({ selectedLevel, setSelectedLevel }) {
  return (
    <div className="h-full flex flex-col">
      <div className="relative h-[60%]">
        <video
          src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/drmontes-clientbench.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="h-[40%] flex flex-col justify-center px-4">
        <h3 className="text-2xl font-semibold mb-6 text-black text-center">Select a spine section to view details:</h3>
        <div className="grid grid-cols-3 gap-3">
          {spinalNerveData.map((data) => (
            <button
              key={data.level}
              onClick={() => setSelectedLevel(data.level)}
              className={cn(
                "px-3 py-2 rounded-lg text-base font-medium transition-colors",
                selectedLevel === data.level ? getSpineColor(data.level) : "bg-gray-50 text-gray-600 hover:bg-gray-100",
                selectedLevel === data.level ? "text-white" : "text-gray-600",
              )}
            >
              {data.level}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function SpinalNerveInfo({ selectedLevel }) {
  const selectedData = spinalNerveData.find((data) => data.level === selectedLevel)

  return (
    <div className="h-full overflow-y-auto px-2">
      <h3 className="text-2xl font-semibold mb-6 text-black text-center mt-12">Spinal Nerve Function</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Every cell in your body has a nerve component. The health of your spine directly impacts the function of these
        nerves and, consequently, your overall well-being.
      </p>
      {selectedLevel && selectedData ? (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2 text-lg">{selectedData.level}</h4>
            <p className="text-gray-600">
              <strong>Nerves:</strong> {selectedData.nerves}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <strong>Innervation:</strong> {selectedData.innervation}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <strong>Possible Symptoms:</strong> {selectedData.symptoms}
            </p>
          </div>
          <div className="mt-3">
            <h5 className="font-medium mb-2 text-base">Importance of This Spinal Section</h5>
            <p className="text-gray-600 leading-relaxed">
              The {selectedData.level} region of the spine plays a crucial role in your overall health and well-being.
              It's responsible for transmitting nerve signals between your brain and the{" "}
              {selectedData.innervation.toLowerCase()}. Proper alignment and function of this area are essential for
              maintaining optimal health in these body parts and systems.
            </p>
          </div>
          <div className="mt-3">
            <h5 className="font-medium mb-2 text-base">How Chiropractic Care Can Help</h5>
            <p className="text-gray-600 leading-relaxed">
              Chiropractic adjustments targeting the {selectedData.level} area can help alleviate{" "}
              {selectedData.symptoms.toLowerCase()}
              and improve overall function. By ensuring proper alignment of these vertebrae, we can enhance nerve
              communication, reduce inflammation, and promote natural healing processes in the affected areas.
            </p>
          </div>
          <div className="mt-3">
            <h5 className="font-medium mb-2 text-base">Preventive Care</h5>
            <p className="text-gray-600 leading-relaxed">
              Regular chiropractic check-ups can help maintain the health of your {selectedData.level} spinal region,
              potentially preventing issues before they arise. This proactive approach supports your body's natural
              ability to function optimally and resist disease.
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Select a spine level to view detailed information.</p>
      )}
    </div>
  )
}

export default function SpinalHealthImportance() {
  const [selectedLevel, setSelectedLevel] = useState(null)

  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="max-w-[1200px] mx-auto text-center mb-12">
          <div className="w-48 h-px bg-black mx-auto mb-8"></div>
          <h2 className="text-[4rem] md:text-[5.5rem] font-light mb-6 whitespace-nowrap">
            The Importance of Spinal Health
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your spine is more than just a support structure. It's the superhighway for your nervous system, controlling
            every function in your body. Understanding the connection between your spine and overall health is crucial
            for maintaining wellness.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 3D Viewer */}
            <div className="relative">
              <div className="absolute inset-0 bg-black rounded-[3rem] shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-20" />
                <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden">
                  <Spine3DViewer />
                </div>
              </div>
              <div className="pt-[200%]" /> {/* Aspect ratio placeholder */}
            </div>

            {/* Spine Level Selector */}
            <div className="relative">
              <div className="absolute inset-0 bg-black rounded-[3rem] shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-20" />
                <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden p-4">
                  <SpineLevelSelector selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} />
                </div>
              </div>
              <div className="pt-[200%]" /> {/* Aspect ratio placeholder */}
            </div>

            {/* Spinal Nerve Info */}
            <div className="relative">
              <div className="absolute inset-0 bg-black rounded-[3rem] shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-20" />
                <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden p-4">
                  <SpinalNerveInfo selectedLevel={selectedLevel} />
                </div>
              </div>
              <div className="pt-[200%]" /> {/* Aspect ratio placeholder */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

