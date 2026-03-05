'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-16 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-2xl font-bold glow-text mb-4">67 SIGMA</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              The most elite hacking collective that definitely exists and is totally not 
              a joke website made for laughs.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-sigma-green transition-colors">Hack NASA (easy)</a></li>
              <li><a href="#" className="hover:text-sigma-green transition-colors">Download More RAM</a></li>
              <li><a href="#" className="hover:text-sigma-green transition-colors">Delete System32</a></li>
              <li><a href="#" className="hover:text-sigma-green transition-colors">Become Sigma</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact the Elite</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 hack@mainframe.localhost</li>
              <li>🌐 127.0.0.1 (we&apos;re already inside)</li>
              <li>📍 Behind 7 proxies</li>
              <li>🔐 Password: ********</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} 67 SIGMA HACKOR. No rights reserved. We don&apos;t believe in copyright.
          </p>
          
          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-2xl"
              aria-label="GitHub but hacked"
            >
              💀
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -10 }}
              className="text-2xl"
              aria-label="Twitter but sigma"
            >
              🐦
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-2xl"
              aria-label="Discord for hackers"
            >
              🎮
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -10 }}
              className="text-2xl"
              aria-label="LinkedIn (we're professionals)"
            >
              💼
            </motion.a>
          </div>
        </div>
        
        {/* Easter egg */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 text-xs mt-8 font-mono"
        >
          {"<!-- If you can read this, you're already sigma enough -->"}
        </motion.p>
      </div>
    </footer>
  )
}
