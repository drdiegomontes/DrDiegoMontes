"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook } from "lucide-react"

const quizQuestions = [
  {
    question: "How often do you experience back pain?",
    options: ["Never", "Occasionally", "Frequently", "Constantly"],
  },
  {
    question: "How would you rate your posture?",
    options: ["Excellent", "Good", "Fair", "Poor"],
  },
  {
    question: "How many hours do you sit each day?",
    options: ["Less than 4", "4-6 hours", "6-8 hours", "More than 8 hours"],
  },
  {
    question: "How often do you exercise?",
    options: ["Daily", "3-4 times a week", "1-2 times a week", "Rarely"],
  },
  {
    question: "How would you describe your stress levels?",
    options: ["Low", "Moderate", "High", "Very High"],
  },
]

export default function InteractiveWellnessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const handlePlay = useCallback(() => {
    //No handlePlay logic needed here.  This is just to satisfy the useEffect dependency array.
  }, [])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault()
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyPress)
      return () => {
        window.removeEventListener("keydown", handleKeyPress)
      }
    }
  }, [])

  const getWellnessScore = () => {
    const scoreMap: { [key: string]: number } = {
      Never: 4,
      Occasionally: 3,
      Frequently: 2,
      Constantly: 1,
      Excellent: 4,
      Good: 3,
      Fair: 2,
      Poor: 1,
      "Less than 4": 4,
      "4-6 hours": 3,
      "6-8 hours": 2,
      "More than 8 hours": 1,
      Daily: 4,
      "3-4 times a week": 3,
      "1-2 times a week": 2,
      Rarely: 1,
      Low: 4,
      Moderate: 3,
      High: 2,
      "Very High": 1,
    }

    const totalScore = answers.reduce((sum, answer) => sum + (scoreMap[answer] || 0), 0)
    const maxScore = quizQuestions.length * 4
    return Math.round((totalScore / maxScore) * 100)
  }

  return (
    <section className="py-24 px-8 bg-white text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-16 items-center">
          {/* Left side - iPhone frame with doctor's image */}
          <div className="relative z-10 lg:flex flex-col items-center">
            <div className="relative w-[500px] h-[800px] transform perspective-[1000px] rotate-y-3 rotate-x-2 hover:rotate-y-6 hover:rotate-x-4 transition-transform duration-300">
              {/* iPhone Frame */}
              <div className="absolute inset-0 bg-[#1a365d] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_16px_32px_rgba(0,0,0,0.1)]">
                {/* Inner Frame */}
                <div className="absolute inset-[8px] bg-gradient-to-b from-gray-900 to-black rounded-[1.5rem] overflow-hidden transform -translate-z-4 shadow-inner">
                  {/* Doctor's Image */}
                  <div className="relative h-full">
                    <video
                      src="https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/WELLNESS-TIPS-ELDERLY-KIDS.mov"
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                    {/* Text Overlay */}
                    <div className="absolute bottom-4 left-0 right-0 text-center p-4">
                      <h3 className="text-3xl font-light mb-2 text-white">Dr. Diego Montes</h3>
                      <p className="text-lg text-gray-300">Your Partner in Wellness</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 border-l-2 border-t-2 border-black/20 rounded-tl-3xl animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-r-2 border-b-2 border-black/20 rounded-br-3xl animate-pulse" />
            </div>

            {/* Social Media Icons - Now below the iPhone frame */}
            <div className="flex justify-center items-center gap-8 mt-12">
              <motion.a
                href="https://instagram.com/drdiegomontes"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={(e) => e.stopPropagation()}
                aria-label="Follow Dr. Diego Montes on Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram
                  size={32}
                  className="text-[#E1306C] transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-[#E1306C] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="https://facebook.com/drdiegomontes"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={(e) => e.stopPropagation()}
                aria-label="Follow Dr. Diego Montes on Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook
                  size={32}
                  className="text-[#1877F2] transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-[#1877F2] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.a>
            </div>
          </div>

          {/* Right side - Quiz content */}
          <div className="relative z-10 lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Wellness Self-Assessment Quiz</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl">
              Take our quick quiz to get personalized insights into your wellness journey and discover how Dr. Diego
              Montes can help you achieve optimal health.
            </p>

            <motion.div
              className="bg-gray-100 rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {!showResults ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-light mb-4">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </h3>
                    <p className="text-2xl font-light mb-6">{quizQuestions[currentQuestion].question}</p>
                    <div className="grid grid-cols-1 gap-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            onClick={() => handleAnswer(option)}
                            className="w-full py-4 text-lg bg-white text-[#2c3e50] hover:bg-gray-100 transition-all duration-300"
                          >
                            {option}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-3xl font-light mb-6">Your Wellness Score</h3>
                  <div className="text-6xl font-bold mb-8">{getWellnessScore()}%</div>
                  <p className="text-xl mb-8 text-gray-600">
                    Based on your answers, here's an estimate of your overall wellness. Remember, this is just a
                    starting point. For a comprehensive assessment and personalized advice, consult with Dr. Diego
                    Montes.
                  </p>
                  <Button
                    onClick={resetQuiz}
                    className="text-lg px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all duration-300"
                  >
                    Retake Quiz
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

