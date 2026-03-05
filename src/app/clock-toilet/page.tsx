'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function ClockToiletPage() {
  const [brainrot, setBrainrot] = useState(0)
  const [dopdop, setDopdop] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBrainrot(prev => prev + Math.floor(Math.random() * 67))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const quotes = ['tick tock flush', 'toilet time', '12:00 AM flush']
  
  return (
    <main className="min-h-screen bg-black text-sigma-green p-4 overflow-hidden relative">
      {/* Skibidi Background Animation */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{ x: Math.random() * 100 + '%', y: -50 }}
            animate={{
              y: '120vh',
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            🚽
          </motion.div>
        ))}
      </div>

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,255,65,0.03)_0px,rgba(0,255,65,0.03)_1px,transparent_1px,transparent_2px)] z-50" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-4 glitch-text"
            animate={{ 
              textShadow: [
                '0 0 10px #00ff41, 0 0 20px #00ff41',
                '0 0 30px #ff0000, 0 0 40px #ff0000',
                '0 0 10px #00ff41, 0 0 20px #00ff41',
              ]
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            CLOCK TOILET
          </motion.h1>
          <motion.p 
            className="text-2xl text-green-400 font-mono"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Time Is Ticking
          </motion.p>
        </motion.div>

        {/* Brainrot Counter */}
        <motion.div
          className="bg-black/80 border-4 border-sigma-green rounded-xl p-6 mb-8 backdrop-blur"
          whileHover={{ scale: 1.02, borderColor: '#ff0000' }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">🧠 BRAINROT LEVEL 🧠</h2>
          <motion.div 
            className="text-7xl font-black text-center text-red-500"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.2, repeat: Infinity }}
          >
            {brainrot.toLocaleString()}
          </motion.div>
          <div className="text-center mt-4 text-yellow-400 text-xl">
            {brainrot > 10000 ? "MAXIMUM BRAINROT ACHIEVED" : "keep scrolling for more rot"}
          </div>
        </motion.div>

        {/* DOP DOP Button */}
        <motion.button
          onClick={() => setDopdop(!dopdop)}
          className="w-full bg-gradient-to-r from-green-600 to-green-400 text-black font-black text-3xl py-6 rounded-xl mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {dopdop ? "YES YES YES YES 🚽" : "DOP DOP DOP 🎵"}
        </motion.button>

        {/* Skibidi Wisdom */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-500 rounded-xl p-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">📜 SKIBIDI WISDOM 📜</h2>
          <div className="space-y-4">
            {quotes.map((quote, i) => (
              <motion.div
                key={i}
                className="bg-black/50 p-4 rounded-lg border border-green-700"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ x: 10, borderColor: '#ff0000' }}
              >
                <span className="text-xl font-mono">🚽 {quote}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Toilet Gallery */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center text-6xl border-2 border-green-700"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, 10, -10, 0],
                borderColor: '#00ff41'
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: { duration: 1 + i * 0.1, repeat: Infinity }
              }}
            >
              {['🚽', '🧠', '💀', '🗿', '💯', '🔥', '⚡', '👁️', '🎭'][i]}
            </motion.div>
          ))}
        </div>

        {/* Back Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link 
            href="/"
            className="inline-block bg-green-500 text-black font-bold px-8 py-4 rounded-full text-xl hover:bg-green-400 transition-colors"
          >
            ← RETURN TO BASE (if you dare)
          </Link>
        </motion.div>

        {/* Footer Brainrot */}
        <motion.div
          className="text-center mt-12 text-gray-500"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-lg">this page has infected {Math.floor(Math.random() * 999999)} brains</p>
          <p className="text-sm mt-2">side effects may include: uncontrollable "dop dop dop", ohio visions, sigma thoughts</p>
        </motion.div>
      </div>
    </main>
  )
}
