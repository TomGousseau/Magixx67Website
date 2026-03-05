'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface PlaceholderImageProps {
  alt: string
  aspectRatio?: string
  label?: string
  imageNumber?: number
  caption?: string
  isFeatured?: boolean
}

export default function PlaceholderImage({ 
  alt, 
  aspectRatio = '16/9', 
  label, 
  imageNumber,
  caption,
  isFeatured 
}: PlaceholderImageProps) {
  const [imageError, setImageError] = useState(false)
  const [showCaption, setShowCaption] = useState(false)
  
  // Try to load image from /public/magixx/1.png, 2.png, etc.
  const imagePath = imageNumber ? `/magixx/${imageNumber}.png` : null
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`relative glass rounded-2xl overflow-hidden group cursor-pointer ${isFeatured ? 'ring-2 ring-sigma-green' : ''}`}
      style={{ aspectRatio }}
      onMouseEnter={() => setShowCaption(true)}
      onMouseLeave={() => setShowCaption(false)}
    >
      {/* Try to show actual image if it exists */}
      {imagePath && !imageError ? (
        <Image
          src={imagePath}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />
      ) : (
        /* Placeholder content */
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-apple-gray to-sigma-dark">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }} />
          </div>
          
          {/* Animated corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-sigma-green" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-sigma-green" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-sigma-green" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-sigma-green" />
          
          {/* Center content */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
            className={`${isFeatured ? 'text-6xl' : 'text-4xl'} mb-2`}
          >
            🎯
          </motion.div>
          
          <p className={`text-sigma-green font-mono tracking-wider text-center px-2 ${isFeatured ? 'text-sm' : 'text-xs'}`}>
            {label || '[ MAGIXX PIC ]'}
          </p>
          {imageNumber && (
            <p className="text-gray-600 text-xs mt-1 font-mono">
              /magixx/{imageNumber}.png
            </p>
          )}
          
          {/* Scanning line effect */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-sigma-green to-transparent"
            animate={{ top: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
        </div>
      )}
      
      {/* Caption overlay on hover */}
      {caption && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showCaption ? 1 : 0, y: showCaption ? 0 : 20 }}
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3"
        >
          <p className="text-white text-xs font-medium text-center">{caption}</p>
        </motion.div>
      )}
      
      {/* Number badge */}
      {imageNumber && (
        <div className="absolute top-2 right-2 bg-sigma-green text-black text-xs font-bold px-2 py-1 rounded-full">
          #{imageNumber}
        </div>
      )}
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-sigma-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
