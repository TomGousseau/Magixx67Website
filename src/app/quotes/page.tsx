'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

const quotes = [
  { quote: "I don't aim. The bullets find the heads themselves.", author: "Magixx, probably" },
  { quote: "67 sigma isn't a number. It's a lifestyle.", author: "Ancient Proverb" },
  { quote: "They asked if I had aimbot. I said no, I AM the aimbot.", author: "Magixx (unconfirmed)" },
  { quote: "Some people practice. I just exist.", author: "The Legend" },
  { quote: "Headshots? I prefer calling them 'hello shots'.", author: "Magixx circa 2024" },
  { quote: "I don't clutch. I simply refuse to lose.", author: "Spirit Team Meeting" },
  { quote: "GG? More like G-GONE.", author: "Post-match interview" },
  { quote: "They say practice makes perfect. I was born perfect.", author: "Sigma Philosophy" },
  { quote: "AWP? More like A-WIN-P.", author: "Caster callout" },
  { quote: "I don't need a gaming chair. The chair needs ME.", author: "Equipment Review" },
  { quote: "Every spray is a one-tap if you're fast enough.", author: "Training Session" },
  { quote: "They banned my main account. I made another. And another.", author: "Origin Story" },
  { quote: "Sleep is for people who don't have enemies to destroy.", author: "3 AM Grind" },
  { quote: "I don't warm up. I'm always at maximum temperature.", author: "Pre-match ritual" },
  { quote: "Echo this, flash that... I just shoot heads.", author: "Utility Guide" },
  { quote: "My crosshair doesn't move to heads. Heads move to my crosshair.", author: "Physics Lesson" },
  { quote: "67 kills is a slow day.", author: "Match Review" },
]

export default function QuotesPage() {
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
            💬 SIGMA QUOTES
          </h1>
          <p className="text-xl text-gray-400">
            Words that changed the game forever
          </p>
        </motion.div>

        <div className="space-y-6">
          {quotes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <p className="text-xl md:text-2xl text-white italic mb-4">
                "{item.quote}"
              </p>
              <p className="text-sigma-green text-sm">— {item.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
