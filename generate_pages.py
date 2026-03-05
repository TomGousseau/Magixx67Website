"""Generate 67 skibidi toilet pages with funny sigma hacker style"""
import os
import random

BASE_DIR = r"c:\Users\test\random project\sigma-hackor\src\app"

pages_data = [
    ("skibidi-toilet-1", "SKIBIDI TOILET #1", "The Original Brainrot", ["dop dop dop yes yes yes", "toilet go brrrrr", "sigma grindset activated"]),
    ("skibidi-toilet-2", "SKIBIDI TOILET #2", "Return of the Flush", ["more dop dop", "toilet 2 electric boogaloo", "the sequel nobody asked for"]),
    ("skibidi-toilet-3", "SKIBIDI TOILET #3", "Revenge of the Porcelain", ["triple dop combo", "toilet trio terror", "the triquel"]),
    ("skibidi-toilet-4", "SKIBIDI TOILET #4", "The Phantom Flush", ["quadruple flush", "4x brainrot", "tetra toilet"]),
    ("skibidi-toilet-5", "SKIBIDI TOILET #5", "Attack of the Clones", ["penta power", "5 toilets 1 brain", "the pentology"]),
    ("skibidi-dop-dop", "DOP DOP DOP", "The Sacred Sound", ["dop intensifies", "infinite dop loop", "dop achieved nirvana"]),
    ("skibidi-yes-yes", "YES YES YES", "Affirmation Station", ["yes to brainrot", "yes to sigma", "yes to everything"]),
    ("skibidi-sigma", "SKIBIDI SIGMA", "Peak Male Performance", ["sigma + toilet = unstoppable", "grind never stops", "toilet grindset"]),
    ("skibidi-ohio", "SKIBIDI OHIO", "Only in Ohio", ["ohio final boss", "ohio diff", "ohio gaming"]),
    ("skibidi-rizz", "SKIBIDI RIZZ", "Unspoken Rizz Master", ["W rizz only", "rizz god mode", "toilet rizz"]),
    ("skibidi-brainrot", "SKIBIDI BRAINROT", "Maximum Rot Achieved", ["brain: rotted", "rot level: 9000", "certified brainrot"]),
    ("skibidi-fanum-tax", "FANUM TAX TOILET", "Taxing Your Brain", ["tax collected: all of it", "fanum approved", "tax evasion impossible"]),
    ("skibidi-gyatt", "SKIBIDI GYATT", "GYATT DAMN", ["gyatt overload", "gyatt moment", "maximum gyatt"]),
    ("skibidi-bussin", "SKIBIDI BUSSIN", "This Toilet Bussin", ["bussin respectfully", "no cap bussin", "ong bussin"]),
    ("skibidi-cap", "NO CAP TOILET", "Zero Cap Zone", ["0 cap detected", "all facts", "truth only"]),
    ("toilet-ascension", "TOILET ASCENSION", "Transcending Porcelain", ["ascending...", "toilet heaven", "peak evolution"]),
    ("toilet-grindset", "TOILET GRINDSET", "24/7 Flush Grind", ["never stop flushing", "grind = flush", "toilet motivation"]),
    ("toilet-awakening", "TOILET AWAKENING", "The Third Eye Opens", ["toilet enlightenment", "woke toilet", "awakened flush"]),
    ("toilet-prophecy", "TOILET PROPHECY", "Ancient Predictions", ["the prophecy foretold", "toilet messiah coming", "2024 prophecy"]),
    ("toilet-lore", "TOILET LORE", "Deep Dive", ["lore explained", "1000 hours of lore", "iceberg deep"]),
    ("cameraman-1", "CAMERAMAN #1", "The First Recorder", ["recording everything", "cameraman grind", "footage secured"]),
    ("cameraman-2", "CAMERAMAN #2", "Double the Cameras", ["2x recording", "stereo vision", "cameraman returns"]),
    ("cameraman-titan", "TITAN CAMERAMAN", "Giant Recording", ["mega footage", "titan mode", "biggest camera"]),
    ("cameraman-speakerman", "CAMERAMAN x SPEAKERMAN", "Ultimate Collab", ["crossover event", "dual power", "alliance formed"]),
    ("cameraman-tv", "CAMERAMAN x TVMAN", "Screen Team", ["screen + camera", "visual combo", "recording broadcast"]),
    ("speakerman-1", "SPEAKERMAN #1", "First Sound", ["audio initiated", "speaker on", "sound wave 1"]),
    ("speakerman-2", "SPEAKERMAN #2", "Stereo Mode", ["dual speakers", "surround sound", "audio enhanced"]),
    ("speakerman-giant", "GIANT SPEAKERMAN", "Maximum Volume", ["LOUD", "bass boosted", "eardrums destroyed"]),
    ("speakerman-boss", "SPEAKERMAN BOSS", "Final Audio Form", ["boss music plays", "final speaker", "audio god"]),
    ("speakerman-god", "SPEAKERMAN GOD", "Divine Sound", ["holy audio", "god tier speaker", "omnisound"]),
    ("tvman-1", "TVMAN #1", "First Broadcast", ["channel 1", "static start", "tv on"]),
    ("tvman-2", "TVMAN #2", "Channel Surfing", ["channel 2", "remote needed", "tv returns"]),
    ("tvman-titan", "TITAN TVMAN", "Giant Screen", ["80 inch titan", "mega pixels", "screen supreme"]),
    ("tvman-upgrade", "TVMAN UPGRADE", "4K Mode", ["resolution increased", "hdmi 2.1", "refresh rate 144"]),
    ("tvman-supreme", "TVMAN SUPREME", "Ultimate Display", ["OLED Supreme", "infinite contrast", "tv transcended"]),
    ("scientist-toilet", "SCIENTIST TOILET", "Big Brain Flush", ["IQ: toilet", "science mode", "hypothesis: flush"]),
    ("g-toilet", "G-TOILET", "The G Stands For...", ["G = Gamer", "G = Goated", "G = Grind"]),
    ("g-man-toilet", "G-MAN TOILET", "Rise and Shine", ["wake up mr freeman", "briefcase toilet", "government toilet"]),
    ("astro-toilet", "ASTRO TOILET", "Space Flush", ["toilet in space", "zero gravity flush", "cosmic porcelain"]),
    ("clock-toilet", "CLOCK TOILET", "Time Is Ticking", ["tick tock flush", "toilet time", "12:00 AM flush"]),
    ("brainrot-101", "BRAINROT 101", "Beginner Course", ["intro to rot", "basic brainrot", "starter pack"]),
    ("brainrot-advanced", "BRAINROT ADVANCED", "Level Up", ["intermediate rot", "rot skills++", "brain rotting faster"]),
    ("brainrot-master", "BRAINROT MASTER", "Expert Level", ["master class rot", "rot sensei", "brainrot blackbelt"]),
    ("brainrot-sigma", "BRAINROT SIGMA", "Sigma Rot Energy", ["sigma rot combo", "peak rot", "rot grindset"]),
    ("brainrot-final", "BRAINROT FINAL", "Ultimate Form", ["final rot form", "rot complete", "brain: gone"]),
    ("ohio-portal", "OHIO PORTAL", "Enter if You Dare", ["portal to ohio", "ohio awaits", "no return"]),
    ("ohio-final-boss", "OHIO FINAL BOSS", "Face Your Destiny", ["boss hp: infinite", "ohio rage", "final form"]),
    ("ohio-training", "OHIO TRAINING", "Get Ready", ["training arc", "ohio gym", "power level up"]),
    ("ohio-survival", "OHIO SURVIVAL", "Good Luck", ["survive ohio", "day 1 in ohio", "ohio hunger games"]),
    ("ohio-escape", "OHIO ESCAPE", "Run While You Can", ["escape plan", "exit ohio", "freedom maybe"]),
    ("sigma-toilet", "SIGMA TOILET", "Ultimate Grind Station", ["sigma flush", "grind on toilet", "efficiency 100%"]),
    ("sigma-grind", "SIGMA GRIND TOILET", "Never Stop", ["grind life", "toilet productivity", "no breaks"]),
    ("sigma-rise", "SIGMA RISE", "Ascending", ["sigma rising", "toilet elevator", "going up"]),
    ("sigma-peak", "SIGMA PEAK", "Maximum Sigma", ["peak achieved", "sigma mountain", "top of toilet"]),
    ("sigma-transcend", "SIGMA TRANSCEND", "Beyond Sigma", ["giga transcendence", "ultra sigma", "toilet nirvana"]),
    ("alpha-toilet", "ALPHA TOILET", "Dominant Flush", ["alpha energy", "top toilet", "leader flush"]),
    ("beta-toilet", "BETA TOILET", "Regular Flush", ["beta mode", "average flush", "normal toilet"]),
    ("gamma-toilet", "GAMMA TOILET", "Radiation Flush", ["gamma rays", "radioactive flush", "mutant toilet"]),
    ("delta-toilet", "DELTA TOILET", "Change Flush", ["delta variant", "evolution flush", "adaptive toilet"]),
    ("omega-toilet", "OMEGA TOILET", "Final Flush", ["omega mode", "last toilet", "ultimate end"]),
    ("toilet-war-1", "TOILET WAR I", "The First Conflict", ["war begins", "battle 1", "toilet soldiers"]),
    ("toilet-war-2", "TOILET WAR II", "Electric Boogaloo", ["war 2", "revenge arc", "toilet army"]),
    ("toilet-war-final", "TOILET WAR FINAL", "Last Stand", ["final battle", "war ends", "peace maybe"]),
    ("toilet-multiverse", "TOILET MULTIVERSE", "Infinite Flushes", ["multiverse of toilets", "infinite timelines", "toilet variants"]),
    ("toilet-origins", "TOILET ORIGINS", "How It Started", ["origin story", "first flush ever", "toilet birth"]),
    ("skibidi-anthem", "SKIBIDI ANTHEM", "The Sacred Song", ["dop dop dop yes yes yes yes", "anthem playing", "national skibidi"]),
    ("skibidi-dance", "SKIBIDI DANCE", "Move Your Body", ["dance moves", "toilet choreography", "viral dance"]),
]

template = '''\'use client\'

import {{ motion }} from 'framer-motion'
import Link from 'next/link'
import {{ useState, useEffect }} from 'react'

export default function {func_name}Page() {{
  const [brainrot, setBrainrot] = useState(0)
  const [dopdop, setDopdop] = useState(false)
  
  useEffect(() => {{
    const interval = setInterval(() => {{
      setBrainrot(prev => prev + Math.floor(Math.random() * 67))
    }}, 100)
    return () => clearInterval(interval)
  }}, [])

  const quotes = {quotes}
  
  return (
    <main className="min-h-screen bg-black text-sigma-green p-4 overflow-hidden relative">
      {{/* Skibidi Background Animation */}}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {{[...Array(20)].map((_, i) => (
          <motion.div
            key={{i}}
            className="absolute text-4xl"
            initial={{{{ x: Math.random() * 100 + '%', y: -50 }}}}
            animate={{{{
              y: '120vh',
              rotate: [0, 360],
            }}}}
            transition={{{{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}}}
          >
            🚽
          </motion.div>
        ))}}
      </div>

      {{/* Scanlines */}}
      <div className="fixed inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,255,65,0.03)_0px,rgba(0,255,65,0.03)_1px,transparent_1px,transparent_2px)] z-50" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {{/* Header */}}
        <motion.div
          initial={{{{ opacity: 0, y: -50 }}}}
          animate={{{{ opacity: 1, y: 0 }}}}
          className="text-center mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-4 glitch-text"
            animate={{{{ 
              textShadow: [
                '0 0 10px #00ff41, 0 0 20px #00ff41',
                '0 0 30px #ff0000, 0 0 40px #ff0000',
                '0 0 10px #00ff41, 0 0 20px #00ff41',
              ]
            }}}}
            transition={{{{ duration: 0.5, repeat: Infinity }}}}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-2xl text-green-400 font-mono"
            animate={{{{ opacity: [1, 0.5, 1] }}}}
            transition={{{{ duration: 1, repeat: Infinity }}}}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {{/* Brainrot Counter */}}
        <motion.div
          className="bg-black/80 border-4 border-sigma-green rounded-xl p-6 mb-8 backdrop-blur"
          whileHover={{{{ scale: 1.02, borderColor: '#ff0000' }}}}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">🧠 BRAINROT LEVEL 🧠</h2>
          <motion.div 
            className="text-7xl font-black text-center text-red-500"
            animate={{{{ scale: [1, 1.1, 1] }}}}
            transition={{{{ duration: 0.2, repeat: Infinity }}}}
          >
            {{brainrot.toLocaleString()}}
          </motion.div>
          <div className="text-center mt-4 text-yellow-400 text-xl">
            {{brainrot > 10000 ? "MAXIMUM BRAINROT ACHIEVED" : "keep scrolling for more rot"}}
          </div>
        </motion.div>

        {{/* DOP DOP Button */}}
        <motion.button
          onClick={{() => setDopdop(!dopdop)}}
          className="w-full bg-gradient-to-r from-green-600 to-green-400 text-black font-black text-3xl py-6 rounded-xl mb-8"
          whileHover={{{{ scale: 1.05 }}}}
          whileTap={{{{ scale: 0.95 }}}}
        >
          {{dopdop ? "YES YES YES YES 🚽" : "DOP DOP DOP 🎵"}}
        </motion.button>

        {{/* Skibidi Wisdom */}}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-500 rounded-xl p-8 mb-8"
          initial={{{{ opacity: 0 }}}}
          animate={{{{ opacity: 1 }}}}
          transition={{{{ delay: 0.5 }}}}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">📜 SKIBIDI WISDOM 📜</h2>
          <div className="space-y-4">
            {{quotes.map((quote, i) => (
              <motion.div
                key={{i}}
                className="bg-black/50 p-4 rounded-lg border border-green-700"
                initial={{{{ x: -100, opacity: 0 }}}}
                animate={{{{ x: 0, opacity: 1 }}}}
                transition={{{{ delay: i * 0.2 }}}}
                whileHover={{{{ x: 10, borderColor: '#ff0000' }}}}
              >
                <span className="text-xl font-mono">🚽 {{quote}}</span>
              </motion.div>
            ))}}
          </div>
        </motion.div>

        {{/* Toilet Gallery */}}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {{[...Array(9)].map((_, i) => (
            <motion.div
              key={{i}}
              className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center text-6xl border-2 border-green-700"
              whileHover={{{{ 
                scale: 1.1, 
                rotate: [0, 10, -10, 0],
                borderColor: '#00ff41'
              }}}}
              whileTap={{{{ scale: 0.9 }}}}
              animate={{{{
                y: [0, -10, 0],
              }}}}
              transition={{{{
                y: {{ duration: 1 + i * 0.1, repeat: Infinity }}
              }}}}
            >
              {{['🚽', '🧠', '💀', '🗿', '💯', '🔥', '⚡', '👁️', '🎭'][i]}}
            </motion.div>
          ))}}
        </div>

        {{/* Back Link */}}
        <motion.div
          className="text-center"
          initial={{{{ opacity: 0 }}}}
          animate={{{{ opacity: 1 }}}}
          transition={{{{ delay: 1 }}}}
        >
          <Link 
            href="/"
            className="inline-block bg-green-500 text-black font-bold px-8 py-4 rounded-full text-xl hover:bg-green-400 transition-colors"
          >
            ← RETURN TO BASE (if you dare)
          </Link>
        </motion.div>

        {{/* Footer Brainrot */}}
        <motion.div
          className="text-center mt-12 text-gray-500"
          animate={{{{ opacity: [0.3, 1, 0.3] }}}}
          transition={{{{ duration: 2, repeat: Infinity }}}}
        >
          <p className="text-lg">this page has infected {{Math.floor(Math.random() * 999999)}} brains</p>
          <p className="text-sm mt-2">side effects may include: uncontrollable "dop dop dop", ohio visions, sigma thoughts</p>
        </motion.div>
      </div>
    </main>
  )
}}
'''

def make_func_name(slug):
    return ''.join(word.capitalize() for word in slug.replace('-', ' ').split())

for page_data in pages_data:
    slug, title, subtitle, quotes = page_data
    if isinstance(quotes, str):
        quotes = [quotes, "skibidi dop dop", "yes yes yes"]
    
    func_name = make_func_name(slug)
    quotes_str = str(quotes)
    
    content = template.format(
        func_name=func_name,
        title=title,
        subtitle=subtitle,
        quotes=quotes_str
    )
    
    page_path = os.path.join(BASE_DIR, slug, "page.tsx")
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Created: {slug}/page.tsx")

print(f"\n✅ Created {len(pages_data)} skibidi toilet pages!")
