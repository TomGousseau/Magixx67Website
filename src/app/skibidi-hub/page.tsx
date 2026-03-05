'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const skibidiPages = [
  { slug: 'skibidi-toilet-1', name: 'SKIBIDI TOILET #1', emoji: '🚽' },
  { slug: 'skibidi-toilet-2', name: 'SKIBIDI TOILET #2', emoji: '🚽' },
  { slug: 'skibidi-toilet-3', name: 'SKIBIDI TOILET #3', emoji: '🚽' },
  { slug: 'skibidi-toilet-4', name: 'SKIBIDI TOILET #4', emoji: '🚽' },
  { slug: 'skibidi-toilet-5', name: 'SKIBIDI TOILET #5', emoji: '🚽' },
  { slug: 'skibidi-dop-dop', name: 'DOP DOP DOP', emoji: '🎵' },
  { slug: 'skibidi-yes-yes', name: 'YES YES YES', emoji: '✅' },
  { slug: 'skibidi-sigma', name: 'SKIBIDI SIGMA', emoji: '💪' },
  { slug: 'skibidi-ohio', name: 'SKIBIDI OHIO', emoji: '🌽' },
  { slug: 'skibidi-rizz', name: 'SKIBIDI RIZZ', emoji: '😏' },
  { slug: 'skibidi-brainrot', name: 'SKIBIDI BRAINROT', emoji: '🧠' },
  { slug: 'skibidi-fanum-tax', name: 'FANUM TAX', emoji: '💰' },
  { slug: 'skibidi-gyatt', name: 'SKIBIDI GYATT', emoji: '😳' },
  { slug: 'skibidi-bussin', name: 'SKIBIDI BUSSIN', emoji: '🔥' },
  { slug: 'skibidi-cap', name: 'NO CAP TOILET', emoji: '🧢' },
  { slug: 'toilet-ascension', name: 'TOILET ASCENSION', emoji: '⬆️' },
  { slug: 'toilet-grindset', name: 'TOILET GRINDSET', emoji: '💼' },
  { slug: 'toilet-awakening', name: 'TOILET AWAKENING', emoji: '👁️' },
  { slug: 'toilet-prophecy', name: 'TOILET PROPHECY', emoji: '📜' },
  { slug: 'toilet-lore', name: 'TOILET LORE', emoji: '📚' },
  { slug: 'cameraman-1', name: 'CAMERAMAN #1', emoji: '📷' },
  { slug: 'cameraman-2', name: 'CAMERAMAN #2', emoji: '📸' },
  { slug: 'cameraman-titan', name: 'TITAN CAMERAMAN', emoji: '🦾' },
  { slug: 'cameraman-speakerman', name: 'CAM x SPEAKER', emoji: '🤝' },
  { slug: 'cameraman-tv', name: 'CAM x TV', emoji: '📺' },
  { slug: 'speakerman-1', name: 'SPEAKERMAN #1', emoji: '🔊' },
  { slug: 'speakerman-2', name: 'SPEAKERMAN #2', emoji: '🔉' },
  { slug: 'speakerman-giant', name: 'GIANT SPEAKER', emoji: '📢' },
  { slug: 'speakerman-boss', name: 'SPEAKER BOSS', emoji: '👑' },
  { slug: 'speakerman-god', name: 'SPEAKER GOD', emoji: '⚡' },
  { slug: 'tvman-1', name: 'TVMAN #1', emoji: '📺' },
  { slug: 'tvman-2', name: 'TVMAN #2', emoji: '🖥️' },
  { slug: 'tvman-titan', name: 'TITAN TVMAN', emoji: '🦿' },
  { slug: 'tvman-upgrade', name: 'TVMAN UPGRADE', emoji: '⬆️' },
  { slug: 'tvman-supreme', name: 'TVMAN SUPREME', emoji: '👑' },
  { slug: 'scientist-toilet', name: 'SCIENTIST TOILET', emoji: '🔬' },
  { slug: 'g-toilet', name: 'G-TOILET', emoji: '🅾️' },
  { slug: 'g-man-toilet', name: 'G-MAN TOILET', emoji: '🕴️' },
  { slug: 'astro-toilet', name: 'ASTRO TOILET', emoji: '🚀' },
  { slug: 'clock-toilet', name: 'CLOCK TOILET', emoji: '⏰' },
  { slug: 'brainrot-101', name: 'BRAINROT 101', emoji: '📖' },
  { slug: 'brainrot-advanced', name: 'BRAINROT ADV', emoji: '📕' },
  { slug: 'brainrot-master', name: 'BRAINROT MASTER', emoji: '🎓' },
  { slug: 'brainrot-sigma', name: 'BRAINROT SIGMA', emoji: '🗿' },
  { slug: 'brainrot-final', name: 'BRAINROT FINAL', emoji: '💀' },
  { slug: 'ohio-portal', name: 'OHIO PORTAL', emoji: '🌀' },
  { slug: 'ohio-final-boss', name: 'OHIO FINAL BOSS', emoji: '👹' },
  { slug: 'ohio-training', name: 'OHIO TRAINING', emoji: '🏋️' },
  { slug: 'ohio-survival', name: 'OHIO SURVIVAL', emoji: '🏃' },
  { slug: 'ohio-escape', name: 'OHIO ESCAPE', emoji: '🚪' },
  { slug: 'sigma-toilet', name: 'SIGMA TOILET', emoji: '🗿' },
  { slug: 'sigma-grind', name: 'SIGMA GRIND', emoji: '💰' },
  { slug: 'sigma-rise', name: 'SIGMA RISE', emoji: '📈' },
  { slug: 'sigma-peak', name: 'SIGMA PEAK', emoji: '🏔️' },
  { slug: 'sigma-transcend', name: 'SIGMA TRANSCEND', emoji: '✨' },
  { slug: 'alpha-toilet', name: 'ALPHA TOILET', emoji: '🦁' },
  { slug: 'beta-toilet', name: 'BETA TOILET', emoji: '🐕' },
  { slug: 'gamma-toilet', name: 'GAMMA TOILET', emoji: '☢️' },
  { slug: 'delta-toilet', name: 'DELTA TOILET', emoji: '🔺' },
  { slug: 'omega-toilet', name: 'OMEGA TOILET', emoji: 'Ω' },
  { slug: 'toilet-war-1', name: 'TOILET WAR I', emoji: '⚔️' },
  { slug: 'toilet-war-2', name: 'TOILET WAR II', emoji: '🗡️' },
  { slug: 'toilet-war-final', name: 'TOILET WAR FINAL', emoji: '💥' },
  { slug: 'toilet-multiverse', name: 'TOILET MULTIVERSE', emoji: '🌌' },
  { slug: 'toilet-origins', name: 'TOILET ORIGINS', emoji: '🌅' },
  { slug: 'skibidi-anthem', name: 'SKIBIDI ANTHEM', emoji: '🎤' },
  { slug: 'skibidi-dance', name: 'SKIBIDI DANCE', emoji: '💃' },
]

export default function SkibidiHubPage() {
  const [filter, setFilter] = useState('')
  
  const filteredPages = skibidiPages.filter(p => 
    p.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-black text-sigma-green p-4 relative overflow-hidden">
      {/* Floating Toilets Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            initial={{ x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            🚽
          </motion.div>
        ))}
      </div>

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,255,65,0.03)_0px,rgba(0,255,65,0.03)_1px,transparent_1px,transparent_2px)] z-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-black mb-4"
            animate={{ 
              textShadow: [
                '0 0 10px #00ff41',
                '0 0 30px #ff0000',
                '0 0 10px #00ff41',
              ]
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            🚽 SKIBIDI HUB 🚽
          </motion.h1>
          <p className="text-2xl text-green-400">67 PAGES OF PURE BRAINROT</p>
          <p className="text-lg text-gray-500 mt-2">dop dop dop yes yes yes</p>
        </motion.div>

        {/* Search */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="text"
            placeholder="🔍 Search for brainrot..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full bg-black border-2 border-green-500 rounded-xl p-4 text-xl text-green-400 placeholder-green-700 focus:border-red-500 focus:outline-none"
          />
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-700 rounded-xl p-4 text-center">
            <div className="text-4xl font-black text-green-400">67</div>
            <div className="text-sm text-gray-400">TOTAL PAGES</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-700 rounded-xl p-4 text-center">
            <div className="text-4xl font-black text-red-400">∞</div>
            <div className="text-sm text-gray-400">BRAINROT LEVEL</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-700 rounded-xl p-4 text-center">
            <div className="text-4xl font-black text-yellow-400">100%</div>
            <div className="text-sm text-gray-400">SIGMA CONTENT</div>
          </div>
        </motion.div>

        {/* Pages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
          {filteredPages.map((page, i) => (
            <motion.div
              key={page.slug}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.02 }}
            >
              <Link href={`/${page.slug}`}>
                <motion.div
                  className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-700 rounded-xl p-4 text-center cursor-pointer h-full"
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: '#ff0000',
                    boxShadow: '0 0 20px rgba(255,0,0,0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl mb-2">{page.emoji}</div>
                  <div className="text-sm font-bold text-green-400 truncate">{page.name}</div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
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
            ← ESCAPE THE BRAINROT
          </Link>
        </motion.div>

        {/* Warning */}
        <motion.div
          className="text-center mt-8 p-4 border border-red-500 rounded-xl bg-red-500/10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-red-400 font-bold">⚠️ WARNING: EXTREME BRAINROT AHEAD ⚠️</p>
          <p className="text-gray-500 text-sm">side effects include: constant dop dop thoughts, ohio visions, sigma energy</p>
        </motion.div>
      </div>
    </main>
  )
}
