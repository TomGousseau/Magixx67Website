'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

const settings = {
  mouse: [
    { label: 'DPI', value: '400', note: 'Or 800, doesn\'t matter when you\'re sigma' },
    { label: 'In-game Sensitivity', value: '6.7', note: 'Obviously' },
    { label: 'eDPI', value: '2680', note: 'The magic number' },
    { label: 'Zoom Sensitivity', value: '0.67', note: 'For AWP domination' },
    { label: 'Raw Input', value: 'ON', note: 'No filters needed' },
    { label: 'Mouse Acceleration', value: 'OFF', note: 'We\'re not animals' },
  ],
  crosshair: [
    { label: 'Style', value: '4', note: 'Classic sigma style' },
    { label: 'Size', value: '2', note: 'Small but deadly' },
    { label: 'Gap', value: '-3', note: 'Tight like his aim' },
    { label: 'Thickness', value: '0.5', note: 'Precision matters' },
    { label: 'Color', value: 'Green', note: 'Sigma green obviously' },
    { label: 'Code', value: 'CSGO-xxxxx-67xxx-SIGMA', note: 'Copy this exact code' },
  ],
  video: [
    { label: 'Resolution', value: '1920x1080', note: 'Full HD for full sigma' },
    { label: 'Aspect Ratio', value: '16:9', note: 'To see all the enemies' },
    { label: 'Display Mode', value: 'Fullscreen', note: 'No distractions' },
    { label: 'FPS Cap', value: '∞', note: 'His PC doesn\'t have limits' },
    { label: 'Nvidia Filters', value: 'SECRET', note: 'Can\'t reveal everything' },
  ],
  hardware: [
    { label: 'Mouse', value: 'Logitech G Pro X', note: 'The sigma stick' },
    { label: 'Keyboard', value: 'Custom 67%', note: 'Obviously 67%' },
    { label: 'Monitor', value: '360Hz', note: 'Sees the future' },
    { label: 'Headset', value: 'HyperX Cloud', note: 'Hears your footsteps' },
    { label: 'Chair', value: 'Secret Sigma Model', note: '+500 aim bonus' },
    { label: 'Mousepad', value: 'Extra Thicc', note: 'For extra flicks' },
  ],
}

export default function SettingsPage() {
  const [copied, setCopied] = useState(false)

  const copyConfig = () => {
    navigator.clipboard.writeText('// MAGIXX SIGMA CONFIG v67\n// Warning: Using this config may cause excessive winning\n\nsensitivity "6.7"\nzoom_sensitivity_ratio "0.67"\ncl_crosshairsize "2"\ncl_crosshairgap "-3"\n// The rest is pure talent')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
            ⚙️ PRO SETTINGS
          </h1>
          <p className="text-xl text-gray-400">
            Copy these and instantly become 67% better
          </p>
        </motion.div>

        <motion.button
          onClick={copyConfig}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto block mb-12 px-8 py-4 bg-sigma-green text-black font-bold rounded-full"
        >
          {copied ? '✅ CONFIG COPIED!' : '📋 COPY FULL CONFIG'}
        </motion.button>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(settings).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold text-sigma-green mb-6 capitalize">
                {category === 'mouse' ? '🖱️' : category === 'crosshair' ? '➕' : category === 'video' ? '🖥️' : '🎮'} {category}
              </h2>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.note}</p>
                    </div>
                    <p className="text-sigma-green font-mono font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-600 text-sm mt-12"
        >
          * Warning: Settings alone won't make you sigma. You need to be born different.
        </motion.p>
      </div>
    </main>
  )
}
