'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const transactionStats = {
  totalVolume: '$67,000,000',
  transactions: '6,700',
  successRate: '99.67%',
  avgAmount: '$9,999',
  topAsset: 'SIGMA COIN',
  portfolioGain: '+6700%',
}

export default function SkibidFinancePage() {
  const router = useRouter()

  const handleViewOverview = () => {
    const params = new URLSearchParams({
      totalVolume: transactionStats.totalVolume,
      transactions: transactionStats.transactions,
      successRate: transactionStats.successRate,
      avgAmount: transactionStats.avgAmount,
      topAsset: transactionStats.topAsset,
      portfolioGain: transactionStats.portfolioGain,
    })
    router.push(`/overview-transaction?${params.toString()}`)
  }

  return (
    <main className="min-h-screen bg-black text-sigma-green p-4 relative overflow-hidden">
      {/* Floating money background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-10"
            initial={{ x: Math.random() * 100 + '%', y: -50 }}
            animate={{ y: '120vh', rotate: [0, 360] }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            💰
          </motion.div>
        ))}
      </div>

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,255,65,0.03)_0px,rgba(0,255,65,0.03)_1px,transparent_1px,transparent_2px)] z-50" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-4"
            animate={{
              textShadow: [
                '0 0 10px #00ff41, 0 0 20px #00ff41',
                '0 0 30px #ffd700, 0 0 40px #ffd700',
                '0 0 10px #00ff41, 0 0 20px #00ff41',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💸 SKIBID FINANCE 💸
          </motion.h1>
          <motion.p
            className="text-2xl text-yellow-400 font-mono"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            SIGMA WEALTH MANAGEMENT
          </motion.p>
          <p className="text-gray-500 mt-2">your money is in safe hands (skibidi hands)</p>
        </motion.div>

        {/* Portfolio snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
            📊 PORTFOLIO SNAPSHOT
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(transactionStats).map(([key, value]) => (
              <div
                key={key}
                className="bg-black/60 border border-green-700 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-black text-sigma-green">{value}</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action button — equivalent to Mendix actionButton1 on Home_Web.
            Now correctly passes TransactionStats to the Overview_Transaction page. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <motion.button
            onClick={handleViewOverview}
            className="px-10 py-5 bg-gradient-to-r from-yellow-500 to-green-500 text-black font-black text-2xl rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            📈 VIEW TRANSACTION OVERVIEW
          </motion.button>
          <p className="text-gray-600 text-sm mt-3">
            opens Overview_Transaction with your TransactionStats
          </p>
        </motion.div>

        {/* Recent activity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-green-700 rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">⚡ RECENT ACTIVITY</h2>
          <div className="space-y-3">
            {[
              { type: 'BUY', asset: 'SIGMA COIN', amount: '+$9,999', time: '2s ago', color: 'text-green-400' },
              { type: 'SELL', asset: 'OHIO TOKEN', amount: '-$1,337', time: '1m ago', color: 'text-red-400' },
              { type: 'BUY', asset: 'SKIBIDI ETF', amount: '+$67,000', time: '5m ago', color: 'text-green-400' },
              { type: 'STAKE', asset: 'BRAINROT BOND', amount: '+$420', time: '12m ago', color: 'text-yellow-400' },
            ].map((tx, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between bg-black/50 rounded-xl p-3 border border-green-900"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded font-bold">
                  {tx.type}
                </span>
                <span className="text-white font-semibold">{tx.asset}</span>
                <span className={`font-bold ${tx.color}`}>{tx.amount}</span>
                <span className="text-gray-600 text-xs">{tx.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nav links */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="/"
            className="bg-green-500 text-black font-bold px-6 py-3 rounded-full hover:bg-green-400 transition-colors"
          >
            ← HOME
          </Link>
          <motion.button
            onClick={handleViewOverview}
            className="bg-gray-800 text-green-400 font-bold px-6 py-3 rounded-full border border-green-700 hover:border-green-400 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            OVERVIEW →
          </motion.button>
        </motion.div>
      </div>
    </main>
  )
}
