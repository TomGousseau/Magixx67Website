'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

const teammates = [
  { name: 'chopper', role: 'IGL', sigmaLevel: 60, desc: 'The brain behind the brawn', status: 'Sigma Approved' },
  { name: 'donk', role: 'Rifler', sigmaLevel: 65, desc: 'Young prodigy energy', status: 'Rising Sigma' },
  { name: 'zont1x', role: 'AWPer', sigmaLevel: 58, desc: 'Click heads professionally', status: 'Sigma Sniper' },
  { name: 'sh1ro', role: 'Star Player', sigmaLevel: 64, desc: 'Insane consistency', status: 'Sigma Elite' },
  { name: 'magixx', role: 'God', sigmaLevel: 67, desc: 'THE 67 SIGMA HIMSELF', status: '👑 MAXIMUM SIGMA' },
]

const achievements = [
  { title: 'PGL Major Copenhagen 2024', result: '🏆 Champions', desc: 'Destroyed everyone' },
  { title: 'IEM Katowice 2024', result: '🏆 Champions', desc: 'Polish crowd witnessed greatness' },
  { title: 'BLAST Premier', result: '🏆 Champions', desc: 'Blasted the competition' },
  { title: 'ESL Pro League', result: '🏆 Champions', desc: 'Pro league? More like our league' },
]

export default function SpiritPage() {
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
            👻 TEAM SPIRIT
          </h1>
          <p className="text-xl text-gray-400">
            The squad that carries magixx (jk he carries them)
          </p>
        </motion.div>

        {/* Roster */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {teammates.map((player, index) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-2xl p-6 text-center ${player.name === 'magixx' ? 'ring-2 ring-sigma-green' : ''}`}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-sigma-green/30 to-sigma-dark flex items-center justify-center">
                <span className="text-3xl">
                  {player.name === 'magixx' ? '👑' : '🎮'}
                </span>
              </div>
              <p className={`text-xl font-bold ${player.name === 'magixx' ? 'text-sigma-green glow-text' : 'text-white'}`}>
                {player.name}
              </p>
              <p className="text-sm text-gray-400">{player.role}</p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-sigma-green">{player.sigmaLevel}σ</p>
                <p className="text-xs text-gray-500">{player.status}</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">{player.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">🏆 Trophy Room</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 flex items-center gap-4"
              >
                <span className="text-4xl">{achievement.result.split(' ')[0]}</span>
                <div>
                  <p className="text-lg font-bold text-white">{achievement.title}</p>
                  <p className="text-sigma-green">{achievement.result}</p>
                  <p className="text-sm text-gray-500">{achievement.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 text-center"
        >
          <p className="text-2xl mb-4">👻 Fun Fact</p>
          <p className="text-xl text-gray-400">
            Team Spirit is called "Spirit" because enemies feel their souls leaving their bodies when playing against them.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Combined team sigma level: {teammates.reduce((acc, p) => acc + p.sigmaLevel, 0)}σ
          </p>
        </motion.div>
      </div>
    </main>
  )
}
