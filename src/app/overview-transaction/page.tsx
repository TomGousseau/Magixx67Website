'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const defaultStats = {
  totalVolume: '$0',
  transactions: '0',
  successRate: '0%',
  avgAmount: '$0',
  topAsset: 'N/A',
  portfolioGain: '0%',
}

const statLabels: Record<string, string> = {
  totalVolume: '💵 Total Volume',
  transactions: '🔄 Transactions',
  successRate: '✅ Success Rate',
  avgAmount: '📊 Avg Amount',
  topAsset: '🏆 Top Asset',
  portfolioGain: '📈 Portfolio Gain',
}

function OverviewTransactionContent() {
  const searchParams = useSearchParams()

  // Read TransactionStats from URL search params (passed by the skibid-finance page).
  // This is the Next.js equivalent of the Mendix page parameter 'TransactionStats'.
  const stats = {
    totalVolume: searchParams.get('totalVolume') ?? defaultStats.totalVolume,
    transactions: searchParams.get('transactions') ?? defaultStats.transactions,
    successRate: searchParams.get('successRate') ?? defaultStats.successRate,
    avgAmount: searchParams.get('avgAmount') ?? defaultStats.avgAmount,
    topAsset: searchParams.get('topAsset') ?? defaultStats.topAsset,
    portfolioGain: searchParams.get('portfolioGain') ?? defaultStats.portfolioGain,
  }

  const hasStats = searchParams.has('totalVolume')

  return (
    <main className="min-h-screen bg-black text-sigma-green p-4 relative overflow-hidden">
      {/* Animated chart lines background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-20"
            style={{ top: `${10 + i * 12}%`, width: '100%' }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,255,65,0.03)_0px,rgba(0,255,65,0.03)_1px,transparent_1px,transparent_2px)] z-50" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-4"
            animate={{
              textShadow: [
                '0 0 10px #00ff41',
                '0 0 25px #00ff41, 0 0 50px #00ff41',
                '0 0 10px #00ff41',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📈 OVERVIEW TRANSACTION
          </motion.h1>
          <p className="text-xl text-green-400 font-mono">SKIBID FINANCE — TRANSACTION STATS</p>
        </motion.div>

        {/* Missing-stats warning (mirrors the Mendix CE1571/CE0127 situation) */}
        {!hasStats && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 p-5 border-2 border-red-500 rounded-2xl bg-red-500/10 text-center"
          >
            <p className="text-red-400 font-bold text-xl mb-1">
              ⚠️ NO TRANSACTION STATS PROVIDED
            </p>
            <p className="text-gray-400 text-sm">
              Navigate here from{' '}
              <Link href="/skibid-finance" className="underline text-yellow-400 hover:text-yellow-300">
                SkibidFinance Home
              </Link>{' '}
              to load your TransactionStats.
            </p>
          </motion.div>
        )}

        {/* TransactionStats display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          {Object.entries(stats).map(([key, value], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-700 rounded-2xl p-6 flex items-center gap-5"
              whileHover={{ borderColor: '#ffd700', scale: 1.02 }}
            >
              <div className="flex-1">
                <p className="text-gray-400 text-sm font-mono uppercase tracking-widest mb-1">
                  {statLabels[key] ?? key}
                </p>
                <motion.p
                  className="text-4xl font-black text-sigma-green"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  {value}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fake chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-green-700 rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-400">
            📊 SIGMA PORTFOLIO CHART
          </h2>
          <div className="flex items-end gap-2 h-32 justify-center">
            {[20, 45, 30, 67, 55, 80, 67, 90, 75, 100, 85, 67].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-green-700 to-sigma-green max-w-8"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.9 + i * 0.05, type: 'spring' }}
                style={{ height: `${h}%`, originY: 1 }}
              />
            ))}
          </div>
          <p className="text-center text-gray-600 text-xs mt-2">
            chart is 100% real and not made up
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <Link
            href="/skibid-finance"
            className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            ← SKIBID FINANCE HOME
          </Link>
          <Link
            href="/"
            className="bg-gray-800 text-sigma-green font-bold px-6 py-3 rounded-full border border-green-700 hover:border-green-400 transition-colors"
          >
            🏠 HOME
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

export default function OverviewTransactionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-sigma-green flex items-center justify-center text-2xl">Loading TransactionStats...</div>}>
      <OverviewTransactionContent />
    </Suspense>
  )
}
