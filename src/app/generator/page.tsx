'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

const prefixes = ['Sigma', 'Mega', 'Ultra', 'Giga', 'Supreme', 'Divine', 'Cosmic', 'Eternal', 'Infinite', 'Based']
const middles = ['magixx', 'Death', 'Head', 'Flick', 'Clutch', 'Ace', 'Spray', 'One', 'No', 'God']
const suffixes = ['67', 'Master', 'Lord', 'King', 'God', 'Destroyer', 'Slayer', 'Hunter', 'Demon', 'Legend']
const numbers = ['67', '777', '420', '1337', '9001', '666', '007', '360', '69', '100']

export default function GeneratorPage() {
  const [name, setName] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const generateName = () => {
    setIsGenerating(true)
    
    // Animate through random names
    let iterations = 0
    const interval = setInterval(() => {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
      const middle = middles[Math.floor(Math.random() * middles.length)]
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
      const num = numbers[Math.floor(Math.random() * numbers.length)]
      
      const formats = [
        `${prefix}${middle}${num}`,
        `${middle}_${suffix}_${num}`,
        `x${prefix}${middle}x`,
        `${prefix}${suffix}${num}`,
        `${middle}${middle}${num}`,
        `The${prefix}${middle}`,
        `${num}_${middle}_${suffix}`,
        `${prefix}${num}${suffix}`,
      ]
      
      setName(formats[Math.floor(Math.random() * formats.length)])
      iterations++
      
      if (iterations >= 20) {
        clearInterval(interval)
        setIsGenerating(false)
      }
    }, 50)
  }

  const copyName = () => {
    navigator.clipboard.writeText(name)
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
            📝 NAME GENERATOR
          </h1>
          <p className="text-xl text-gray-400">
            Get your sigma gamer tag
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <div className="h-24 flex items-center justify-center mb-8">
            {name ? (
              <motion.p
                key={name}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl md:text-5xl font-bold text-sigma-green font-mono"
              >
                {name}
              </motion.p>
            ) : (
              <p className="text-2xl text-gray-600">Your sigma name awaits...</p>
            )}
          </div>

          <div className="flex gap-4 justify-center">
            <motion.button
              onClick={generateName}
              disabled={isGenerating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sigma-green text-black font-bold rounded-full disabled:opacity-50"
            >
              {isGenerating ? '🎰 GENERATING...' : '🎲 GENERATE NAME'}
            </motion.button>
            
            {name && (
              <motion.button
                onClick={copyName}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full font-bold hover:bg-sigma-green/20"
              >
                📋 COPY
              </motion.button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold mb-4 text-sigma-green">🏆 Hall of Generated Names</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 font-mono">
            <p>SigmaAce67</p>
            <p>xMegaFlickx</p>
            <p>GodHead420</p>
            <p>The_Clutch_Master</p>
            <p>DivineDeath1337</p>
            <p>67_Spray_Lord</p>
            <p>CosmicmagixxGod</p>
            <p>UltraAceSlayer</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          * Name availability not guaranteed. Sigma energy is.
        </motion.p>
      </div>
    </main>
  )
}
