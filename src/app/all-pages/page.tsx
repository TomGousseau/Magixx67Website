'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { pages } from '@/components/Navigation'

export default function AllPages() {
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
            ALL 67 PAGES
          </h1>
          <p className="text-xl text-gray-400">
            The complete magixx experience. Every page is sigma.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {pages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
            >
              <Link
                href={page.slug === '' ? '/' : `/${page.slug}`}
                className="glass rounded-xl p-4 block hover:scale-105 transition-transform duration-300 group h-full"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {page.emoji}
                </div>
                <p className="font-semibold text-sm text-white group-hover:text-sigma-green transition-colors">
                  {page.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">{page.description}</p>
                <div className="text-xs text-sigma-green/50 mt-2 font-mono">#{page.id}/67</div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-6xl font-bold text-sigma-green glow-text">67</p>
          <p className="text-gray-400">Pages of Pure Sigma Content</p>
        </motion.div>
      </div>
    </main>
  )
}
