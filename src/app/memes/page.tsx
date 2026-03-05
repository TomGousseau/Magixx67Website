'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PlaceholderImage from '@/components/PlaceholderImage'

const memes = [
  { id: 1, caption: "POV: You just queued into magixx", votes: 6700 },
  { id: 2, caption: "When the 67 sigma hits different", votes: 4200 },
  { id: 3, caption: "Enemies writing their will mid-match", votes: 5500 },
  { id: 4, caption: "Valorant players watching this like 👁️👄👁️", votes: 8900 },
  { id: 5, caption: "The crosshair placement is illegal", votes: 3200 },
  { id: 6, caption: "Spirit comms leaked: 'Just let magixx cook'", votes: 7800 },
  { id: 7, caption: "When you realize it's not a smurf, it's just magixx", votes: 6100 },
  { id: 8, caption: "Average magixx enjoyer vs Average aim trainer user", votes: 9200 },
  { id: 9, caption: "Enemies need this after facing magixx", votes: 4800 },
  { id: 10, caption: "The prophecy was true", votes: 5600 },
  { id: 11, caption: "67 reasons why you lost that game", votes: 6700 },
  { id: 12, caption: "Your favorite player's reaction to magixx highlights", votes: 7300 },
]

export default function MemesPage() {
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
            🤣 MEME GALLERY
          </h1>
          <p className="text-xl text-gray-400">
            Certified sigma classics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memes.map((meme, index) => (
            <motion.div
              key={meme.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <PlaceholderImage 
                alt={meme.caption}
                aspectRatio="1/1"
                label={`🤣 MEME #${meme.id}`}
                imageNumber={meme.id}
              />
              <div className="p-4">
                <p className="font-medium text-white mb-2">{meme.caption}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sigma-green text-sm">👍 {meme.votes.toLocaleString()}</span>
                  <span className="text-gray-500 text-xs">certified sigma</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-gray-600 text-sm mt-12"
        >
          * Submit your memes to /public/magixx/ folder to see them here
        </motion.p>
      </div>
    </main>
  )
}
