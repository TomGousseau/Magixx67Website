'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

const timeline = [
  { year: 'Birth', event: '67 Sigma was born', desc: 'The universe trembled', icon: '👶' },
  { year: '2018', event: 'Started playing CS', desc: 'Already better than pros', icon: '🎮' },
  { year: '2019', event: 'Joined first team', desc: 'Teammates blessed', icon: '👥' },
  { year: '2020', event: 'Discovered sigma grindset', desc: 'Unlocked true potential', icon: '💪' },
  { year: '2021', event: 'Joined Team Spirit', desc: 'Spirit found its soul', icon: '👻' },
  { year: '2022', event: 'First major appearance', desc: 'Enemies first noticed fear', icon: '🏟️' },
  { year: '2023', event: 'Became 67 sigma', desc: 'Maximum level achieved', icon: '📈' },
  { year: '2024', event: 'Won everything', desc: 'Trophy room full', icon: '🏆' },
  { year: 'Future', event: 'World domination', desc: 'Only a matter of time', icon: '🌍' },
  { year: '∞', event: 'Eternal legend status', desc: 'Forever sigma', icon: '⭐' },
]

export default function TimelinePage() {
  return (
    <main className="min-h-screen pt-20 pb-32 px-4">
      <Navigation />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-4">
            📅 TIMELINE
          </h1>
          <p className="text-xl text-gray-400">
            The rise of the 67 sigma legend
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-sigma-green/30" />
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                className="absolute left-4 w-8 h-8 bg-sigma-green rounded-full flex items-center justify-center text-lg"
              >
                {item.icon}
              </motion.div>
              
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sigma-green font-mono font-bold">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.event}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-sm">
            * Timeline continues indefinitely. Sigma never stops grinding.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
