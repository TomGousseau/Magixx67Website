'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

const excuses = [
  { excuse: "He's clearly using aimbot", copiumLevel: 100, emoji: "🤖" },
  { excuse: "My mouse stopped working", copiumLevel: 95, emoji: "🖱️" },
  { excuse: "Ping was 67ms (unplayable)", copiumLevel: 90, emoji: "📶" },
  { excuse: "My gaming chair broke mid-round", copiumLevel: 88, emoji: "🪑" },
  { excuse: "The sun was in my eyes (playing indoors)", copiumLevel: 85, emoji: "☀️" },
  { excuse: "My cat walked on my keyboard", copiumLevel: 80, emoji: "🐱" },
  { excuse: "I was just warming up", copiumLevel: 75, emoji: "🔥" },
  { excuse: "That angle is impossible to hold", copiumLevel: 70, emoji: "📐" },
  { excuse: "Teammates didn't call", copiumLevel: 65, emoji: "🔇" },
  { excuse: "I let him win on purpose", copiumLevel: 99, emoji: "🎭" },
  { excuse: "Server tick rate was off", copiumLevel: 72, emoji: "⏱️" },
  { excuse: "He probably studies my demos", copiumLevel: 60, emoji: "📺" },
  { excuse: "I'm saving strats for next game", copiumLevel: 78, emoji: "🧠" },
  { excuse: "My RGB lights weren't synced", copiumLevel: 92, emoji: "🌈" },
  { excuse: "The headset was too tight", copiumLevel: 67, emoji: "🎧" },
  { excuse: "I haven't played in 2 hours", copiumLevel: 55, emoji: "⏰" },
  { excuse: "That smoke bugged through", copiumLevel: 73, emoji: "💨" },
  { excuse: "I was checking Twitter", copiumLevel: 89, emoji: "📱" },
  { excuse: "My room was too cold/hot", copiumLevel: 81, emoji: "🌡️" },
  { excuse: "He just got lucky 67 times", copiumLevel: 100, emoji: "🍀" },
]

export default function ExcusesPage() {
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
            🥺 ENEMY EXCUSES
          </h1>
          <p className="text-xl text-gray-400">
            Real excuses from real victims (copium collection)
          </p>
        </motion.div>

        <div className="space-y-4">
          {excuses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-xl p-4 flex items-center gap-4"
            >
              <span className="text-3xl">{item.emoji}</span>
              <div className="flex-1">
                <p className="text-white font-medium">"{item.excuse}"</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500">Copium level:</span>
                  <div className="flex-1 h-2 bg-apple-gray rounded-full max-w-32">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.copiumLevel}%` }}
                      transition={{ delay: index * 0.05 + 0.3, duration: 0.5 }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: item.copiumLevel > 80 ? '#ef4444' : item.copiumLevel > 60 ? '#f97316' : '#22c55e'
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">{item.copiumLevel}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 glass rounded-2xl p-8 text-center"
        >
          <p className="text-2xl mb-4">💊 Daily Copium Intake</p>
          <p className="text-6xl font-bold text-sigma-green">∞ mg</p>
          <p className="text-gray-500 mt-2">Required to cope with facing magixx</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          * All excuses were collected from real match chats and post-game lobbies
        </motion.p>
      </div>
    </main>
  )
}
