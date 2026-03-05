'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const hackerLines = [
  '> Initializing 67 SIGMA protocol...',
  '> Bypassing firewall... [████████████████] 100%',
  '> Accessing mainframe...',
  '> sudo rm -rf /your-weak-security/*',
  '> Downloading RAM... 🐏',
  '> Installing more RGB for +500 hacking power...',
  '> Hacking NASA with HTML... SUCCESS',
  '> Converting coffee to code... ☕→💻',
  '> Running exploit: social_engineering.exe',
  '> ERROR: You are already too sigma',
  '> Deploying cyber-ninja stealth mode...',
  '> Brute forcing with sigma energy...',
  '> Access granted. Welcome, elite hacker.',
  '> Your mom would be so proud rn 🥲',
  '> FBI has left the chat',
  '> Creating GUI interface using Visual Basic...',
  '> Tracing IP through 7 proxies...',
  '> Hack complete. You are now the CEO of the internet.',
]

export default function HackerTerminal() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= hackerLines.length) {
      // Reset after showing all lines
      setTimeout(() => {
        setLines([])
        setLineIndex(0)
        setCharIndex(0)
      }, 3000)
      return
    }

    if (charIndex < hackerLines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + hackerLines[lineIndex][charIndex])
        setCharIndex(prev => prev + 1)
      }, 30 + Math.random() * 50) // Variable typing speed for realism

      return () => clearTimeout(timeout)
    } else {
      // Line complete
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, currentLine])
        setCurrentLine('')
        setCharIndex(0)
        setLineIndex(prev => prev + 1)
      }, 500)

      return () => clearTimeout(timeout)
    }
  }, [lineIndex, charIndex, currentLine])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden"
    >
      {/* Terminal header - macOS style */}
      <div className="bg-apple-gray px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-sm text-gray-400 font-mono">sigma@hackor ~ zsh</span>
      </div>
      
      {/* Terminal body */}
      <div className="p-6 font-mono text-sm md:text-base h-96 overflow-y-auto bg-black/50">
        <div className="mb-2 text-gray-500">
          Last login: {new Date().toLocaleDateString()} on ttys000
        </div>
        <div className="text-sigma-green mb-4">
          ╔═══════════════════════════════════════════════════╗
          <br />
          ║&nbsp;&nbsp;&nbsp;67 SIGMA HACKOR TERMINAL v4.20.69&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║
          <br />
          ║&nbsp;&nbsp;&nbsp;&quot;With great power comes great responsibility&quot;&nbsp;║
          <br />
          ║&nbsp;&nbsp;&nbsp;- Uncle Ben (also a sigma)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║
          <br />
          ╚═══════════════════════════════════════════════════╝
        </div>
        
        {lines.map((line, i) => (
          <div key={i} className="mb-1">
            <span className={line.includes('ERROR') ? 'text-red-400' : line.includes('SUCCESS') || line.includes('complete') || line.includes('granted') ? 'text-sigma-green' : 'text-gray-300'}>
              {line}
            </span>
          </div>
        ))}
        
        {currentLine && (
          <div className="mb-1">
            <span className="text-gray-300">{currentLine}</span>
            <span className="typing-cursor">&nbsp;</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
