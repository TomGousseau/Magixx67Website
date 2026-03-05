'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'

export default function AimTrainerPage() {
  const [score, setScore] = useState(0)
  const [targets, setTargets] = useState<{id: number, x: number, y: number}[]>([])
  const [gameActive, setGameActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(67)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setGameActive(false)
      if (score > highScore) setHighScore(score)
    }
  }, [gameActive, timeLeft, score, highScore])

  useEffect(() => {
    if (gameActive) {
      const spawnTarget = () => {
        const newTarget = {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
        }
        setTargets(prev => [...prev.slice(-4), newTarget])
      }
      spawnTarget()
      const interval = setInterval(spawnTarget, 800)
      return () => clearInterval(interval)
    }
  }, [gameActive])

  const startGame = () => {
    setScore(0)
    setTimeLeft(67)
    setTargets([])
    setGameActive(true)
  }

  const hitTarget = (id: number) => {
    setTargets(prev => prev.filter(t => t.id !== id))
    setScore(s => s + 67)
  }

  return (
    <main className="min-h-screen pt-20 pb-32 px-4">
      <Navigation />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-4">
            🎯 AIM TRAINER
          </h1>
          <p className="text-xl text-gray-400">
            Click the targets. Become sigma.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 mb-8">
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-sigma-green">{score}</p>
            <p className="text-xs text-gray-400">Score</p>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">{timeLeft}s</p>
            <p className="text-xs text-gray-400">Time</p>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-yellow-400">{highScore}</p>
            <p className="text-xs text-gray-400">High Score</p>
          </div>
        </div>

        <div className="glass rounded-2xl overflow-hidden relative" style={{ height: '500px' }}>
          {!gameActive && timeLeft === 67 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-2xl mb-4">Ready to train like magixx?</p>
              <motion.button
                onClick={startGame}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-4 bg-sigma-green text-black font-bold rounded-full text-xl"
              >
                START TRAINING
              </motion.button>
            </div>
          )}
          
          {!gameActive && timeLeft === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-4xl font-bold text-sigma-green mb-2">GAME OVER</p>
              <p className="text-2xl mb-4">Score: {score}</p>
              {score >= 6700 ? (
                <p className="text-xl text-yellow-400 mb-4">🏆 SIGMA TIER ACHIEVED!</p>
              ) : score >= 3350 ? (
                <p className="text-xl text-gray-400 mb-4">Not bad... for a non-sigma</p>
              ) : (
                <p className="text-xl text-red-400 mb-4">magixx does this blindfolded</p>
              )}
              <motion.button
                onClick={startGame}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-4 bg-sigma-green text-black font-bold rounded-full"
              >
                TRY AGAIN
              </motion.button>
            </div>
          )}

          {gameActive && targets.map(target => (
            <motion.button
              key={target.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => hitTarget(target.id)}
              className="absolute w-12 h-12 bg-red-500 rounded-full hover:bg-sigma-green transition-colors cursor-crosshair flex items-center justify-center"
              style={{ left: `${target.x}%`, top: `${target.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <span className="text-white font-bold">67</span>
            </motion.button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          * magixx's high score: 67,000,000 (he was warming up)
        </motion.p>
      </div>
    </main>
  )
}
