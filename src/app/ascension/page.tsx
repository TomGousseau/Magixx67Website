'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function AscensionPage() {
  return (
    <main className="min-h-screen pt-20 pb-32 px-4 relative overflow-hidden">
      <Navigation />
      
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(67)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sigma-green rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
              opacity: 0.3 
            }}
            animate={{ 
              y: -100,
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-8xl mb-8"
          >
            🌟
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-4">
            ASCENSION
          </h1>
          <p className="text-xl text-gray-400">
            Page 67 of 67 - The Final Form
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-3xl p-12 text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-sigma-green">
            You have reached the end. Or have you?
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <p>
              67 pages. 67 images. 67 sigma moments.
            </p>
            <p>
              You have witnessed the complete magixx experience.
            </p>
            <p>
              But the journey never truly ends.
            </p>
            <p className="text-sigma-green text-xl font-bold">
              For magixx is eternal. And sigma is forever.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <p className="text-6xl font-bold text-sigma-green glow-text mb-4">67σ</p>
            <p className="text-gray-500">Maximum Sigma Achieved</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-2xl">📚</p>
            <p className="text-sm text-gray-400">67 Pages Explored</p>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-2xl">🖼️</p>
            <p className="text-sm text-gray-400">67 Magixx Images</p>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-2xl">∞</p>
            <p className="text-sm text-gray-400">Sigma Energy</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center"
        >
          <p className="text-gray-600 text-sm mb-8">
            "The universe started with a one-tap. It will end with one too." - Ancient Magixx Prophecy
          </p>
          
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-sigma-green text-black font-bold rounded-full text-xl"
          >
            🔄 RESTART THE JOURNEY
          </motion.a>
        </motion.div>
      </div>
    </main>
  )
}
