import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sigma-green': '#00ff41',
        'sigma-dark': '#0d0d0d',
        'apple-gray': '#1d1d1f',
        'apple-light': '#f5f5f7',
      },
      fontFamily: {
        'sf': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['SF Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'matrix': 'matrix 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typewriter 4s steps(44) 1s forwards',
      },
      keyframes: {
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glow: {
          '0%': { textShadow: '0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41' },
          '100%': { textShadow: '0 0 30px #00ff41, 0 0 50px #00ff41, 0 0 70px #00ff41' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typewriter: {
          'to': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
