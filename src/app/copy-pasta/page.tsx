'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

const copypastas = [
  {
    title: "The Classic",
    text: "I saw magixx at a grocery store in Moscow yesterday. I told him how cool it was to meet him in person, but I didn't want to be a douche and bother him and ask him for photos or anything. He said, "Oh, like you're doing now?" I was taken aback, and all I could say was "Huh?" but he kept cutting me off and going "huh? huh? huh?" and one-tapping the air in front of my face. Then he 360 no-scoped the cashier and walked out.",
  },
  {
    title: "The Sigma Grindset",
    text: "🔥 SIGMA GRINDSET 🔥 4:00 AM - Wake up (I don't sleep, sleep is for betas) 4:01 AM - Cold shower (actually molten lava to build pain tolerance) 4:05 AM - 67 hours of aim training 4:06 AM - Already won 3 majors while you were reading this 4:07 AM - Intimidate the sun into rising faster",
  },
  {
    title: "The Enemy Team Chat",
    text: "GG ez... wait no actually GG WP magixx you are clearly built different and I will now uninstall CS2 and take up farming as I was never meant to compete at this level. My ancestors look down on me with shame. I have dishonored my family. 67 sigma too strong.",
  },
  {
    title: "The Caster Moment",
    text: "AND MAGIXX WHAT IS HE DOING?! ONE! TWO! THREE! FOUR!! FIVE!!! THE ACE!!! I HAVE NEVER SEEN ANYTHING LIKE THIS IN MY 67 YEARS OF CASTING!!! SOMEONE CHECK HIM PC!! SOMEONE CHECK HIS GAMING CHAIR!! THIS ISN'T POSSIBLE!!! 67 SIGMA!!!",
  },
  {
    title: "The Tech Support",
    text: "Hello VALVE Support, I am writing to report a bug. Every time I queue into a game, there is a player called 'magixx' who kills me through walls, smokes, and apparently time itself. I believe this is a glitch in the matrix. Please nerf. Thank you.",
  },
  {
    title: "The Confession",
    text: "Bless me Father, for I have sinned. I queued into a game against magixx. I thought I could compete. I was wrong. My hubris knew no bounds. I have been humbled. I saw the light - it was the muzzle flash of his AK before the headshot registered. I now understand the meaning of 67 sigma. Amen.",
  },
  {
    title: "The Wikipedia Entry",
    text: "magixx (born: Unknown, possibly the beginning of time) is a professional Counter-Strike 2 player, sigma male entrepreneur, and alleged deity. Known for achievements including: winning every major, inventing the concept of 'aiming', and causing the mass retirement of 67,000 professional players who saw his highlights.",
  },
  {
    title: "The Spirit Comms",
    text: "[TEAM SPIRIT COMMS LEAKED] IGL: 'Okay guys, execute B' magixx: 'No need, they're already dead' IGL: 'The round hasn't star-' [ROUND OVER - COUNTER-TERRORISTS WIN] magixx: '67 sigma diff tbh'",
  },
]

export default function CopypastaPage() {
  const [copied, setCopied] = useState<number | null>(null)

  const copyText = (index: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

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
            📋 COPYPASTAS
          </h1>
          <p className="text-xl text-gray-400">
            Twitch chat gold for true believers
          </p>
        </motion.div>

        <div className="space-y-6">
          {copypastas.map((pasta, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-sigma-green">{pasta.title}</h2>
                <motion.button
                  onClick={() => copyText(index, pasta.text)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-sigma-green/20 rounded-full text-sm hover:bg-sigma-green hover:text-black transition-colors"
                >
                  {copied === index ? '✅ Copied!' : '📋 Copy'}
                </motion.button>
              </div>
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{pasta.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-600 text-sm mt-12"
        >
          * Use responsibly. magixx copypastas are known to cause spontaneous major wins.
        </motion.p>
      </div>
    </main>
  )
}
