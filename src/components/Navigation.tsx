'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// All 67 pages
export const pages = [
  { id: 1, slug: '', title: 'Home', emoji: '🏠', description: 'The main shrine' },
  { id: 2, slug: 'stats', title: 'God Stats', emoji: '📊', description: 'Numbers dont lie' },
  { id: 3, slug: 'highlights', title: 'Highlights', emoji: '🎬', description: '67 best plays' },
  { id: 4, slug: 'quotes', title: 'Sigma Quotes', emoji: '💬', description: 'Words of wisdom' },
  { id: 5, slug: 'settings', title: 'Pro Settings', emoji: '⚙️', description: 'Copy his cfg' },
  { id: 6, slug: 'wallpapers', title: 'Wallpapers', emoji: '🖼️', description: '4K sigma pics' },
  { id: 7, slug: 'memes', title: 'Meme Gallery', emoji: '🤣', description: 'Certified classics' },
  { id: 8, slug: 'crosshair', title: 'Crosshair', emoji: '➕', description: 'The magic crosshair' },
  { id: 9, slug: 'timeline', title: 'Timeline', emoji: '📅', description: 'Rise to greatness' },
  { id: 10, slug: 'spirit', title: 'Team Spirit', emoji: '👻', description: 'The squad' },
  { id: 11, slug: 'achievements', title: 'Achievements', emoji: '🏆', description: 'Trophy room' },
  { id: 12, slug: 'enemies', title: 'Enemy Reactions', emoji: '😭', description: 'Salty tears' },
  { id: 13, slug: 'aim-trainer', title: 'Aim Trainer', emoji: '🎯', description: 'Click heads' },
  { id: 14, slug: 'soundboard', title: 'Soundboard', emoji: '🔊', description: 'POG sounds' },
  { id: 15, slug: 'quiz', title: 'Sigma Quiz', emoji: '❓', description: 'Test your knowledge' },
  { id: 16, slug: 'conspiracy', title: 'Conspiracy', emoji: '🔍', description: 'Is he human?' },
  { id: 17, slug: 'fan-art', title: 'Fan Art', emoji: '🎨', description: 'Community art' },
  { id: 18, slug: 'copy-pasta', title: 'Copypastas', emoji: '📋', description: 'Twitch chat gold' },
  { id: 19, slug: 'tierlist', title: 'Tier List', emoji: '📈', description: 'Magixx at top' },
  { id: 20, slug: 'clutches', title: '1v5 Clutches', emoji: '💪', description: 'Impossible plays' },
  { id: 21, slug: 'guides', title: 'How to Sigma', emoji: '📚', description: 'Be like magixx' },
  { id: 22, slug: 'prayers', title: 'Prayer Page', emoji: '🙏', description: 'Pray for enemies' },
  { id: 23, slug: 'confession', title: 'Confessions', emoji: '⛪', description: 'Admit defeat' },
  { id: 24, slug: 'calculator', title: 'Sigma Calculator', emoji: '🔢', description: 'How sigma are u' },
  { id: 25, slug: 'generator', title: 'Name Generator', emoji: '📝', description: 'Get sigma name' },
  { id: 26, slug: 'countdown', title: 'Next Match', emoji: '⏰', description: 'Countdown timer' },
  { id: 27, slug: 'bingo', title: 'Magixx Bingo', emoji: '🎰', description: 'Predict the ace' },
  { id: 28, slug: 'death-note', title: 'Death Note', emoji: '📓', description: 'Enemies list' },
  { id: 29, slug: 'shrine', title: 'Holy Shrine', emoji: '⛩️', description: 'Make offerings' },
  { id: 30, slug: 'excuses', title: 'Enemy Excuses', emoji: '🥺', description: 'Copium collection' },
  { id: 31, slug: 'vs', title: 'VS Comparison', emoji: '⚔️', description: 'Magixx vs all' },
  { id: 32, slug: 'weapons', title: 'Weapon Stats', emoji: '🔫', description: 'Every gun OP' },
  { id: 33, slug: 'maps', title: 'Map Domination', emoji: '🗺️', description: 'All maps owned' },
  { id: 34, slug: 'playlist', title: 'Gaming Playlist', emoji: '🎵', description: 'Sigma beats' },
  { id: 35, slug: 'nutrition', title: 'Sigma Diet', emoji: '🥗', description: 'Eat like pro' },
  { id: 36, slug: 'workout', title: 'Aim Workout', emoji: '💪', description: 'Get buff aim' },
  { id: 37, slug: 'schedule', title: 'Daily Schedule', emoji: '📆', description: 'Sigma routine' },
  { id: 38, slug: 'merchandise', title: 'Merch Store', emoji: '👕', description: 'Drip incoming' },
  { id: 39, slug: 'petition', title: 'Petitions', emoji: '✍️', description: 'Sign for magixx' },
  { id: 40, slug: 'dating', title: 'Sigma Dating', emoji: '❤️', description: 'Find sigma gf' },
  { id: 41, slug: 'horoscope', title: 'CS2 Horoscope', emoji: '♈', description: 'Sigma zodiac' },
  { id: 42, slug: 'dreams', title: 'Dream Decoder', emoji: '💭', description: 'Magixx dreams' },
  { id: 43, slug: 'therapy', title: 'Enemy Therapy', emoji: '🛋️', description: 'Post-magixx PTSD' },
  { id: 44, slug: 'court', title: 'Sigma Court', emoji: '⚖️', description: 'Judge the plays' },
  { id: 45, slug: 'dna', title: 'DNA Analysis', emoji: '🧬', description: 'Built different' },
  { id: 46, slug: 'museum', title: 'Ace Museum', emoji: '🏛️', description: 'Historical aces' },
  { id: 47, slug: 'prophecy', title: 'The Prophecy', emoji: '📜', description: 'It was foretold' },
  { id: 48, slug: 'aliens', title: 'Alien Theory', emoji: '👽', description: 'Not from earth' },
  { id: 49, slug: 'simulation', title: 'Simulation', emoji: '🤖', description: 'Matrix confirmed' },
  { id: 50, slug: 'religion', title: 'Church of Magixx', emoji: '⛪', description: 'Join the faith' },
  { id: 51, slug: 'cooking', title: 'Cooking Show', emoji: '👨‍🍳', description: 'Cooking enemies' },
  { id: 52, slug: 'resume', title: 'Enemy Resume', emoji: '📄', description: 'Career ended' },
  { id: 53, slug: 'support-group', title: 'Support Group', emoji: '🤝', description: 'Victim support' },
  { id: 54, slug: 'news', title: 'Breaking News', emoji: '📰', description: 'Magixx updates' },
  { id: 55, slug: 'weather', title: 'Sigma Weather', emoji: '🌤️', description: '100% headshots' },
  { id: 56, slug: 'stocks', title: 'Stock Market', emoji: '📈', description: 'MGXX to moon' },
  { id: 57, slug: 'recipes', title: 'Ace Recipes', emoji: '🍳', description: 'How to cook' },
  { id: 58, slug: 'poetry', title: 'Sigma Poetry', emoji: '📝', description: 'Beautiful words' },
  { id: 59, slug: 'movie', title: 'Movie Night', emoji: '🎬', description: 'Watch greatness' },
  { id: 60, slug: 'awards', title: 'Award Show', emoji: '🎖️', description: 'All the awards' },
  { id: 61, slug: 'memorial', title: 'Enemy Memorial', emoji: '🪦', description: 'RIP opponents' },
  { id: 62, slug: 'speedrun', title: 'Ace Speedrun', emoji: '⚡', description: 'Fastest aces' },
  { id: 63, slug: 'asmr', title: 'Headshot ASMR', emoji: '🎧', description: 'Satisfying clicks' },
  { id: 64, slug: 'contracts', title: 'Hit Contracts', emoji: '📃', description: 'Target list' },
  { id: 65, slug: 'hall-of-shame', title: 'Hall of Shame', emoji: '😈', description: 'Victims gallery' },
  { id: 66, slug: 'final-boss', title: 'Final Boss', emoji: '👹', description: 'The ultimate test' },
  { id: 67, slug: 'ascension', title: 'Ascension', emoji: '🌟', description: 'Beyond sigma' },
]

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold glow-text">
          67 MAGIXX
        </Link>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/all-pages" 
            className="text-sm text-gray-400 hover:text-sigma-green transition-colors"
          >
            All 67 Pages →
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
