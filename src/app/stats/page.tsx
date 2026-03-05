'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

const stats = [
  { label: 'HLTV Rating', value: '1.67', desc: 'Literally impossible' },
  { label: 'Headshot %', value: '67%', desc: 'Obviously' },
  { label: 'K/D Ratio', value: '6.7', desc: 'Per round btw' },
  { label: 'Clutches Won', value: '6700+', desc: 'Lost count' },
  { label: 'AWP Kills', value: '67,000', desc: 'And counting' },
  { label: 'Maps Dominated', value: 'ALL', desc: 'Every single one' },
  { label: 'Tournaments Won', value: '67', desc: 'At least' },
  { label: 'Sigma Level', value: '67σ', desc: 'Maximum achieved' },
  { label: 'Fan Hearts Stolen', value: '∞', desc: 'Immeasurable' },
  { label: 'Enemies Tilted', value: '100%', desc: 'No survivors' },
  { label: 'Gaming Chair Power', value: '9001', desc: 'Its over 9000' },
  { label: 'Red Bull Consumed', value: '67L', desc: 'Per match' },
]

export default function StatsPage() {
  return (
    <main className="min-h-screen pt-20 pb-32 px-4">
      <Navigation />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-4">
            📊 GOD STATS
          </h1>
          <p className="text-xl text-gray-400">
            Numbers so good they should be illegal
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            >
              <p className="text-4xl md:text-5xl font-bold text-sigma-green mb-2">
                {stat.value}
              </p>
              <p className="text-white font-semibold">{stat.label}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-gray-600 text-sm mt-12"
        >
          * Statistics are 100% accurate and verified by the Church of Magixx
        </motion.p>
      </div>
    </main>
  )
}
