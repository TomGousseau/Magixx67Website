'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

const sigmaQuestions = [
  { q: "How many hours do you play CS2 daily?", weights: [0, 2, 5, 10] },
  { q: "Do you blame teammates for losses?", weights: [10, 5, 2, 0] },
  { q: "What's your reaction to losing?", weights: [0, 3, 7, 10] },
  { q: "Do you have a gaming chair?", weights: [1, 3, 6, 10] },
  { q: "How many monitors do you have?", weights: [0, 3, 7, 10] },
]

const answers = [
  ["0-2", "2-4", "4-8", "8+"],
  ["Always", "Sometimes", "Rarely", "Never, I AM the team"],
  ["Rage quit", "Complain", "Analyze", "Already in next game"],
  ["Office chair", "Basic gaming", "RGB gaming", "Same as magixx"],
  ["1", "2", "3", "67"],
]

export default function CalculatorPage() {
  const [currentQ, setCurrentQ] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    const points = sigmaQuestions[currentQ].weights[answerIndex]
    setTotalScore(s => s + points)
    
    if (currentQ < sigmaQuestions.length - 1) {
      setCurrentQ(q => q + 1)
    } else {
      setShowResult(true)
    }
  }

  const getSigmaLevel = () => {
    const maxScore = sigmaQuestions.reduce((acc, q) => acc + Math.max(...q.weights), 0)
    const percentage = (totalScore / maxScore) * 100
    
    if (percentage >= 90) return { level: 67, title: "MAXIMUM SIGMA", desc: "You ARE magixx", color: "text-yellow-400" }
    if (percentage >= 70) return { level: 50, title: "Based Sigma", desc: "Almost there", color: "text-sigma-green" }
    if (percentage >= 50) return { level: 30, title: "Sigma in Training", desc: "Keep grinding", color: "text-blue-400" }
    if (percentage >= 30) return { level: 10, title: "Beta with Potential", desc: "Watch more magixx", color: "text-orange-400" }
    return { level: 1, title: "Omega Male", desc: "Start over", color: "text-red-400" }
  }

  const restart = () => {
    setCurrentQ(0)
    setTotalScore(0)
    setShowResult(false)
  }

  return (
    <main className="min-h-screen pt-20 pb-32 px-4">
      <Navigation />
      
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-4">
            🔢 SIGMA CALCULATOR
          </h1>
          <p className="text-xl text-gray-400">
            Discover your true sigma level
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-8"
          >
            <p className="text-sigma-green font-mono mb-6">
              Question {currentQ + 1} of {sigmaQuestions.length}
            </p>
            <h2 className="text-2xl font-bold mb-8">{sigmaQuestions[currentQ].q}</h2>
            <div className="space-y-4">
              {answers[currentQ].map((answer, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-4 glass rounded-xl hover:bg-sigma-green/20 transition-colors"
                >
                  {answer}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="mb-6"
            >
              <p className={`text-8xl font-bold ${getSigmaLevel().color}`}>
                {getSigmaLevel().level}σ
              </p>
            </motion.div>
            <h2 className={`text-3xl font-bold mb-2 ${getSigmaLevel().color}`}>
              {getSigmaLevel().title}
            </h2>
            <p className="text-gray-400 mb-8">{getSigmaLevel().desc}</p>
            
            <div className="w-full bg-apple-gray rounded-full h-4 mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(getSigmaLevel().level / 67) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-sigma-green rounded-full"
              />
            </div>
            <p className="text-sm text-gray-500 mb-8">
              {getSigmaLevel().level}/67 sigma points
            </p>

            <motion.button
              onClick={restart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sigma-green text-black font-bold rounded-full"
            >
              CALCULATE AGAIN
            </motion.button>
          </motion.div>
        )}
      </div>
    </main>
  )
}
