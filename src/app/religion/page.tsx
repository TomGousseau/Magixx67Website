'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function ReligionPage() {
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
            ⛪ CHURCH OF MAGIXX
          </h1>
          <p className="text-xl text-gray-400">
            Join the one true faith
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-sigma-green mb-6 text-center">📜 The 67 Commandments (Abridged)</h2>
          <div className="space-y-4">
            <p className="text-gray-300">I. Thou shalt click heads and only heads</p>
            <p className="text-gray-300">II. Thou shalt not blame teammates, for thou art the carry</p>
            <p className="text-gray-300">III. Honor thy gaming chair, for it provides +500 aim</p>
            <p className="text-gray-300">IV. Thou shalt warm up by simply existing</p>
            <p className="text-gray-300">V. Remember the spray pattern, and keep it tight</p>
            <p className="text-gray-300">VI. Thou shalt not ego peek unless thou art sigma</p>
            <p className="text-gray-300">VII. Six days thou shalt grind, and on the seventh, grind harder</p>
            <p className="text-gray-300 text-sigma-green font-bold">...</p>
            <p className="text-gray-300">LXVII. Thou shalt always be 67 sigma. This is the way.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-sigma-green mb-6 text-center">🙏 Daily Prayer</h2>
          <div className="text-center text-gray-300 italic space-y-2">
            <p>"Our magixx, who art in Spirit,</p>
            <p>Hallowed be thy aim.</p>
            <p>Thy clutches come, thy will be done,</p>
            <p>On Inferno as it is on Mirage.</p>
            <p>Give us this day our daily frags,</p>
            <p>And forgive us our whiffs,</p>
            <p>As we forgive those who whiff against us.</p>
            <p>Lead us not into Silver,</p>
            <p>But deliver us from Valorant.</p>
            <p className="text-sigma-green font-bold">For thine is the headshot, the spray, and the ace,</p>
            <p className="text-sigma-green font-bold">Forever and ever, GG."</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <span className="text-4xl mb-4 block">⛪</span>
            <h3 className="font-bold text-white mb-2">Holy Sites</h3>
            <p className="text-sm text-gray-400">A Site, B Site, and anywhere magixx stands</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <span className="text-4xl mb-4 block">📿</span>
            <h3 className="font-bold text-white mb-2">Sacred Objects</h3>
            <p className="text-sm text-gray-400">AK-47, AWP, and the holy gaming chair</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <span className="text-4xl mb-4 block">🕯️</span>
            <h3 className="font-bold text-white mb-2">Holy Days</h3>
            <p className="text-sm text-gray-400">Every day is holy when magixx plays</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-sigma-green text-black font-bold rounded-full text-xl"
          >
            🙏 I BELIEVE
          </motion.button>
          <p className="text-gray-600 text-sm mt-4">
            * Church of Magixx is a meme. Or is it? 👀
          </p>
        </motion.div>
      </div>
    </main>
  )
}
