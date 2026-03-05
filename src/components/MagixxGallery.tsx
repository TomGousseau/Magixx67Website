'use client'

import { motion } from 'framer-motion'
import PlaceholderImage from './PlaceholderImage'

// 67 MAGIXX images with funny captions
const magixxImages = [
  { id: 1, caption: "POV: You're about to get one-tapped", emoji: "💀" },
  { id: 2, caption: "When the aim assist kicks in (its natural)", emoji: "🎯" },
  { id: 3, caption: "Sigma stare before ace", emoji: "👁️" },
  { id: 4, caption: "He's not camping, he's waiting strategically", emoji: "🧠" },
  { id: 5, caption: "67 sigma aura detected", emoji: "✨" },
  { id: 6, caption: "AWP? More like A-WIN-P", emoji: "🔫" },
  { id: 7, caption: "Enemies DC'd out of respect", emoji: "🙏" },
  { id: 8, caption: "This angle is ILLEGAL", emoji: "⚖️" },
  { id: 9, caption: "When you hit the nasty flick", emoji: "🔥" },
  { id: 10, caption: "Spirit diff tbh", emoji: "👻" },
  { id: 11, caption: "Valorant players could never", emoji: "🤡" },
  { id: 12, caption: "He doesn't check corners, corners check him", emoji: "📐" },
  { id: 13, caption: "1v5? More like 5v1 for them", emoji: "😤" },
  { id: 14, caption: "Major trophy holder (casual)", emoji: "🏆" },
  { id: 15, caption: "Your favorite player's favorite player", emoji: "⭐" },
  { id: 16, caption: "Built different (literally)", emoji: "🧬" },
  { id: 17, caption: "The council has decided your fate", emoji: "⚰️" },
  { id: 18, caption: "POV: Last thing T side sees", emoji: "👀" },
  { id: 19, caption: "Spray control? He controls the GAME", emoji: "🎮" },
  { id: 20, caption: "When you're 67 sigma, every day is major finals", emoji: "📅" },
  { id: 21, caption: "He's not cheating, he's just better", emoji: "🧐" },
  { id: 22, caption: "Faceit level: MAGIXX", emoji: "📊" },
  { id: 23, caption: "Crosshair placement? His crosshair places ITSELF", emoji: "➕" },
  { id: 24, caption: "Enemies need therapy after this", emoji: "🛋️" },
  { id: 25, caption: "Chat is going CRAZY rn", emoji: "💬" },
  { id: 26, caption: "He's locked in", emoji: "🔒" },
  { id: 27, caption: "This is what peak performance looks like", emoji: "📈" },
  { id: 28, caption: "Your settings won't save you", emoji: "⚙️" },
  { id: 29, caption: "When the gaming chair hits different", emoji: "🪑" },
  { id: 30, caption: "He doesn't warm up, he was born warm", emoji: "🌡️" },
  { id: 31, caption: "The enemies are already tilted", emoji: "😵" },
  { id: 32, caption: "Clutch minister right here", emoji: "🎭" },
  { id: 33, caption: "No comms needed, only sigma", emoji: "🤫" },
  { id: 34, caption: "When aim.exe is running", emoji: "💻" },
  { id: 35, caption: "The prophecy was true", emoji: "📜" },
  { id: 36, caption: "He's not toxic, he's just HONEST", emoji: "🗣️" },
  { id: 37, caption: "GG called at round 3", emoji: "🏳️" },
  { id: 38, caption: "That's not fair... for the enemies", emoji: "⚖️" },
  { id: 39, caption: "Defusing? Nah, they're already dead", emoji: "💣" },
  { id: 40, caption: "What 10000 hours looks like", emoji: "⏰" },
  { id: 41, caption: "The last thing your rank sees", emoji: "📉" },
  { id: 42, caption: "He's just built different fr fr", emoji: "🏗️" },
  { id: 43, caption: "Aim training? He IS the aim trainer", emoji: "🎯" },
  { id: 44, caption: "Zeus who? This is MAGIXX", emoji: "⚡" },
  { id: 45, caption: "The absolute state of T side", emoji: "😭" },
  { id: 46, caption: "Movement so clean you could eat off it", emoji: "🧹" },
  { id: 47, caption: "When the aimbot accusations start", emoji: "🤖" },
  { id: 48, caption: "Enemies typing !coach", emoji: "📝" },
  { id: 49, caption: "He's in the matrix rn", emoji: "🟩" },
  { id: 50, caption: "Sigma rule #67: Win", emoji: "📋" },
  { id: 51, caption: "Every pixel is a headshot", emoji: "🖼️" },
  { id: 52, caption: "The economy is recovering (his wallet)", emoji: "💰" },
  { id: 53, caption: "When you're down 15-14 but he's alive", emoji: "😌" },
  { id: 54, caption: "He doesn't eco, the eco eco's him", emoji: "♻️" },
  { id: 55, caption: "That's my goat 🐐", emoji: "🐐" },
  { id: 56, caption: "POV: You queued into magixx", emoji: "💀" },
  { id: 57, caption: "The crowd is going INSANE", emoji: "🎪" },
  { id: 58, caption: "Every major is HIS major", emoji: "🎖️" },
  { id: 59, caption: "Enemies calling admin", emoji: "📞" },
  { id: 60, caption: "The grind never stops", emoji: "💪" },
  { id: 61, caption: "When the Red Bull kicks in", emoji: "🥤" },
  { id: 62, caption: "He can see the future (its headshots)", emoji: "🔮" },
  { id: 63, caption: "Valorant devs studying this rn", emoji: "📚" },
  { id: 64, caption: "This is a 67 sigma moment", emoji: "📸" },
  { id: 65, caption: "Certified classic right here", emoji: "✅" },
  { id: 66, caption: "HLTV #1 loading...", emoji: "⏳" },
  { id: 67, caption: "THE LEGENDARY 67TH IMAGE", emoji: "👑" },
]

export default function MagixxGallery() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-4">
            The <span className="text-sigma-green">67 MAGIXX</span> Collection
          </h3>
          <p className="text-xl text-gray-400">
            67 legendary moments. 67 sigma images. Infinite greatness.
          </p>
          <p className="text-sm text-gray-500 mt-2 font-mono">
            [ Add your magixx pics to /public/magixx/ folder ]
          </p>
        </motion.div>
        
        {/* Featured row - bigger images */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {magixxImages.slice(0, 3).map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PlaceholderImage 
                alt={img.caption}
                aspectRatio="1/1"
                label={`${img.emoji} ${img.caption}`}
                imageNumber={img.id}
                isFeatured
              />
            </motion.div>
          ))}
        </div>
        
        {/* Main grid - all 67 images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {magixxImages.slice(3).map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 12) * 0.05 }}
            >
              <PlaceholderImage 
                alt={img.caption}
                aspectRatio="1/1"
                label={`${img.emoji} #${img.id}`}
                imageNumber={img.id}
                caption={img.caption}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-6xl font-bold text-sigma-green glow-text">67</p>
          <p className="text-gray-400">Magixx Images of Pure Sigma Energy</p>
        </motion.div>
      </div>
    </section>
  )
}
