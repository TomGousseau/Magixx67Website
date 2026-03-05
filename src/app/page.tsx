'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import MatrixRain from '@/components/MatrixRain'
import HackerTerminal from '@/components/HackerTerminal'
import SigmaStats from '@/components/SigmaStats'
import HackerSkills from '@/components/HackerSkills'
import MagixxGallery from '@/components/MagixxGallery'
import PlaceholderImage from '@/components/PlaceholderImage'
import Footer from '@/components/Footer'

export default function Home() {
  const [isHacking, setIsHacking] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const hackTheMainframe = () => {
    setIsHacking(true)
    setTimeout(() => {
      alert('🔓 MAGIXX ACTIVATED\n\nYou are now 67 sigma like magixx.\nSpirit is proud.\n1.6 rating incoming.')
      setIsHacking(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen relative pt-16">
      <MatrixRain />
      
      {/* Hero Section - Apple Style */}
      <motion.section 
        style={{ opacity, scale }}
        className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm tracking-[0.3em] text-gray-400 mb-4 font-mono"
          >
            WELCOME TO THE MAINFRAME
          </motion.p>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight glow-text glitch"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          >
            67 MAGIXX
          </motion.h1>
          
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white/90 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            SIGMA SHRINE
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mt-8 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            He doesn&apos;t miss shots. The bullets <span className="text-sigma-green">fear</span> him.
          </motion.p>

          <motion.button
            onClick={hackTheMainframe}
            disabled={isHacking}
            className="mt-12 px-8 py-4 bg-sigma-green text-black font-semibold rounded-full text-lg
                       hover:bg-white transition-all duration-300 transform hover:scale-105
                       disabled:opacity-50 disabled:cursor-not-allowed glass"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {isHacking ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  🎯
                </motion.span>
                GETTING 67 KILLS...
              </span>
            ) : (
              '[ ACTIVATE MAGIXX MODE ]'
            )}
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-4xl">⬇️</span>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h3 className="text-5xl md:text-6xl font-bold mb-8">
                Not your average <span className="text-sigma-green">CS2 player</span>.
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                While other pros are still learning spray patterns, magixx has already 
                one-tapped the entire server. His sigma grindset is so powerful, 
                enemies surrender out of respect.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="glass rounded-2xl p-6 flex-1">
                  <p className="text-4xl font-bold text-sigma-green">67σ</p>
                  <p className="text-sm text-gray-400">Sigma Level</p>
                </div>
                <div className="glass rounded-2xl p-6 flex-1">
                  <p className="text-4xl font-bold text-sigma-green">1.6</p>
                  <p className="text-sm text-gray-400">Rating (real)</p>
                </div>
              </div>
            </div>
            <PlaceholderImage 
              alt="Magixx gaming setup" 
              aspectRatio="4/3"
              label="🎮 MAGIXX PIC HERE"
              imageNumber={1}
            />
          </motion.div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent via-sigma-green/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Magixx Live Stats Terminal
          </motion.h3>
          <HackerTerminal />
        </div>
      </section>

      {/* Stats Section */}
      <SigmaStats />

      {/* Skills Section */}
      <HackerSkills />

      {/* 67 MAGIXX Gallery Section */}
      <MagixxGallery />

      {/* CTA Section */}
      <section className="py-32 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass rounded-3xl p-16"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to become <span className="text-sigma-green">67 Magixx</span>?
          </h3>
          <p className="text-xl text-gray-400 mb-8">
            Warning: Side effects may include hitting only headshots and winning every major.
          </p>
          <motion.button
            className="px-12 py-5 bg-sigma-green text-black font-bold rounded-full text-xl
                       hover:bg-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
          >
            JOIN TEAM SPIRIT 🎯
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
