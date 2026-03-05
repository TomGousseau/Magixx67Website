'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

const therapySessions = [
  {
    patient: "Anonymous T-side Player",
    session: 1,
    transcript: [
      { speaker: "Therapist", text: "Tell me what happened." },
      { speaker: "Patient", text: "I... I was holding A site. Everything was fine." },
      { speaker: "Therapist", text: "Go on." },
      { speaker: "Patient", text: "Then I saw the crosshair. THE crosshair. Before I could react... *sobs*" },
      { speaker: "Therapist", text: "Take your time." },
      { speaker: "Patient", text: "It was magixx. He one-tapped me through the smoke. THREE ROUNDS IN A ROW." },
    ],
  },
  {
    patient: "Former AWPer (Retired)",
    session: 67,
    transcript: [
      { speaker: "Therapist", text: "You've made progress. How are the nightmares?" },
      { speaker: "Patient", text: "Still see the killfeed in my dreams. His name keeps appearing." },
      { speaker: "Therapist", text: "Have you tried the exercises we discussed?" },
      { speaker: "Patient", text: "I tried. But I can't hold an AWP anymore. My hands shake." },
      { speaker: "Therapist", text: "That's a normal response to 67 sigma trauma." },
    ],
  },
  {
    patient: "IGL with PTSD",
    session: 34,
    transcript: [
      { speaker: "Therapist", text: "Let's talk about the eco round incident." },
      { speaker: "Patient", text: "I had the PERFECT strat. Perfect timing. Perfect utility." },
      { speaker: "Therapist", text: "And then?" },
      { speaker: "Patient", text: "He... he just peeked. Alone. Against all 5 of us." },
      { speaker: "Therapist", text: "I understand. Did anyone survive?" },
      { speaker: "Patient", text: "My career didn't." },
    ],
  },
]

export default function TherapyPage() {
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
            🛋️ ENEMY THERAPY
          </h1>
          <p className="text-xl text-gray-400">
            Professional help for post-magixx trauma
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6 mb-8 text-center"
        >
          <p className="text-2xl">📞 Hotline: 1-800-67-SIGMA</p>
          <p className="text-gray-400 mt-2">Available 24/7 for victims of magixx</p>
        </motion.div>

        <div className="space-y-8">
          {therapySessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="bg-sigma-green/10 p-4 border-b border-white/5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white">{session.patient}</span>
                  <span className="text-sm text-gray-400">Session #{session.session}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {session.transcript.map((line, lineIndex) => (
                  <motion.div
                    key={lineIndex}
                    initial={{ opacity: 0, x: line.speaker === 'Therapist' ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 + lineIndex * 0.1 }}
                    className={`flex gap-3 ${line.speaker === 'Patient' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`px-4 py-2 rounded-xl max-w-[80%] ${
                      line.speaker === 'Therapist' 
                        ? 'bg-apple-gray text-gray-300' 
                        : 'bg-sigma-green/20 text-white'
                    }`}>
                      <p className="text-xs text-gray-500 mb-1">{line.speaker}</p>
                      <p>{line.text}</p>
                    </div>
                  </motion.div>
                ))}
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
          <h3 className="text-2xl font-bold mb-4">📊 Treatment Statistics</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold text-red-400">67,000+</p>
              <p className="text-sm text-gray-500">Victims treated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">2%</p>
              <p className="text-sm text-gray-500">Recovery rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-sigma-green">∞</p>
              <p className="text-sm text-gray-500">More victims daily</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
