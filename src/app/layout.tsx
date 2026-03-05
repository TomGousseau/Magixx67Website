import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: '67 MAGIXX SIGMA SHRINE | CS2 Legend',
  description: 'The most elite 67 sigma magixx shrine. 67 pages of pure sigma energy. Team Spirit legend appreciation website.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎯</text></svg>",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="scanlines antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
