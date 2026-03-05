'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

const questions = [
  {
    q: "What is magixx's true sigma level?",
    options: ['5 sigma', '10 sigma', '67 sigma', '100 sigma'],
    correct: 2,
  },
  {
    q: "What does magixx eat for breakfast?",
    options: ['Cereal', 'Enemy tears', 'Nothing, food slows him down', 'All of the above'],
    correct: 1,
  },
  {
    q: "How many 1v5 clutches has magixx won?",
    options: ['A few', 'Many', 'All of them', 'He doesn\'t count anymore'],
    correct: 3,
  },
  {
    q: "What happens when magixx picks up an AWP?",
    options: ['Normal gameplay', 'Enemy team disconnects', 'Server crashes from too many kills', 'Time stops'],
    correct: 1,
  },
  {
    q: "What is magixx's warm-up routine?",
    options: ['Aim trainer for 2 hours', 'Deathmatch', 'He was born warmed up', 'Meditation'],
    correct: 2,
  },
  {
    q: "Why do enemies fear magixx?",
    options: ['His aim', 'His game sense', 'His sigma aura', 'All of the above'],
    correct: 3,
  },
  {
    q: "What team does magixx play for?",
    options: ['Team Spirit', 'Team Sigma', 'Team 67', 'All teams wish he played for them'],
    correct: 0,
  },
]

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    if (index === questions[currentQ].correct) {
      setScore(s => s + 1)
    }
    
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(q => q + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 1000)
  }

  const restart = () => {
    setCurrentQ(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
  }

  const getSigmaRank = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return { rank: '67 SIGMA MASTER', emoji: '👑', color: 'text-yellow-400' }
    if (percentage >= 70) return { rank: 'Sigma Apprentice', emoji: '🎯', color: 'text-sigma-green' }
    if (percentage >= 50) return { rank: 'Beta in Training', emoji: '📚', color: 'text-blue-400' }
    return { rank: 'Needs More Magixx', emoji: '💀', color: 'text-red-400' }
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
            ❓ SIGMA QUIZ
          </h1>
          <p className="text-xl text-gray-400">
            Test your magixx knowledge
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex justify-between mb-6">
              <span className="text-sigma-green font-mono">Q{currentQ + 1}/{questions.length}</span>
              <span className="text-gray-400">Score: {score}</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-8">{questions[currentQ].q}</h2>
            
            <div className="space-y-4">
              {questions[currentQ].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selectedAnswer === null && handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    selectedAnswer === null 
                      ? 'glass hover:bg-sigma-green/20' 
                      : selectedAnswer === index
                        ? index === questions[currentQ].correct
                          ? 'bg-green-500/30 border border-green-500'
                          : 'bg-red-500/30 border border-red-500'
                        : index === questions[currentQ].correct
                          ? 'bg-green-500/30 border border-green-500'
                          : 'glass opacity-50'
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  {option}
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
            <p className="text-6xl mb-4">{getSigmaRank().emoji}</p>
            <h2 className={`text-3xl font-bold mb-2 ${getSigmaRank().color}`}>
              {getSigmaRank().rank}
            </h2>
            <p className="text-xl mb-6">
              Score: <span className="text-sigma-green">{score}/{questions.length}</span>
            </p>
            <p className="text-gray-400 mb-8">
              {score === questions.length 
                ? "You are truly sigma. Magixx would be proud."
                : "Keep studying the way of the sigma."}
            </p>
            <motion.button
              onClick={restart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sigma-green text-black font-bold rounded-full"
            >
              TRY AGAIN
            </motion.button>
          </motion.div>
        )}
      </div>
    </main>
  )
}
