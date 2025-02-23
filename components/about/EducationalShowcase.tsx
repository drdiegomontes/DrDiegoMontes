"use client"

import { motion } from "framer-motion"
import { ChevronRight, Brain, SpadeIcon as Spine, Activity, Shield, Instagram, Facebook } from "lucide-react" // Added Facebook icon

export default function EducationalShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* iPhone Frame - Left side */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
              <div className="relative w-[800px] mx-auto">
                {/* Social Media Icons Container */}
                <div
                  className="absolute left-32 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10"
                  style={{
                    transform: "translateY(-50%) rotateY(25deg) rotateZ(15deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Instagram Link Button */}
                  <motion.a
                    href="https://www.instagram.com/reel/C8GEjlfvLR-/?igsh=a3h3ZjB4N2NuYml0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
                    whileHover={{ y: -2 }}
                  >
                    <Instagram className="w-6 h-6 text-[#E1306C] group-hover:scale-110 transition-transform" />
                    <span className="sr-only">View on Instagram</span>
                  </motion.a>

                  {/* Facebook Link Button */}
                  <motion.a
                    href="https://fb.watch/xUjQdYZ5Z3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
                    whileHover={{ y: -2 }}
                  >
                    <Facebook className="w-6 h-6 text-[#1877F2] group-hover:scale-110 transition-transform" />
                    <span className="sr-only">View on Facebook</span>
                  </motion.a>

                  {/* Decorative Line */}
                  <div className="w-px h-24 bg-gradient-to-b from-gray-300/50 to-transparent mx-auto"></div>
                </div>

                {/* iPhone Frame Container with perspective */}
                <div
                  className="relative w-[375px] h-[750px] mx-auto"
                  style={{
                    perspective: "1200px",
                  }}
                >
                  {/* Rest of the iPhone frame code remains the same */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="relative w-full h-full"
                    style={{
                      transform: "rotateY(25deg) rotateZ(15deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-[#e2e2e2] via-[#f5f5f5] to-[#e8e8e8] shadow-xl overflow-hidden"
                      style={{
                        boxShadow: `
                             -15px 15px 24px rgba(0,0,0,0.2),
                             inset -3px 0 8px rgba(255,255,255,0.8),
                             inset 3px 0 8px rgba(0,0,0,0.1)
                           `,
                      }}
                    >
                      <div className="absolute right-0 top-24 w-[3px] h-12 bg-[#d4d4d4] rounded-l-sm shadow-inner"></div>
                      <div className="absolute right-0 top-40 w-[3px] h-12 bg-[#d4d4d4] rounded-l-sm shadow-inner"></div>
                      <div className="absolute right-0 top-56 w-[3px] h-16 bg-[#d4d4d4] rounded-l-sm shadow-inner"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-2xl"></div>
                      <div className="absolute inset-[12px] rounded-[2.5rem] overflow-hidden bg-black">
                        <video
                          src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/AuntyTalking.MP4"
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Rest of the component remains unchanged */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-xl ml-auto space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Understanding Your Spine Health</h2>
                <p className="text-gray-600 mb-6">
                  Your spine is more than just a backbone – it's the central pillar of your overall well-being. Dr.
                  Montes brings over 15 years of specialized expertise in treating complex spinal conditions, utilizing
                  advanced diagnostic techniques and personalized treatment approaches.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Neurological Connection</h3>
                    <p className="text-gray-600">
                      Understand how your spine directly influences your nervous system and overall body function.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Spine className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Spinal Anatomy</h3>
                    <p className="text-gray-600">
                      Explore the intricate structure of your cervical spine and how it affects your daily movements and
                      comfort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Activity className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Preventive Care</h3>
                    <p className="text-gray-600">
                      Learn essential exercises and lifestyle adjustments to maintain optimal spinal health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Treatment</h3>
                    <p className="text-gray-600">
                      Access cutting-edge therapeutic techniques and personalized treatment plans.
                    </p>
                  </div>
                </div>
              </div>

              <button className="group flex items-center px-6 py-2 text-gray-900 hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                Discover Our Approach
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

