import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-dark': '#030712',
        'custom-light': '#c5c5c5',
        'wun-primary': '#FC65C4',
        'wun-yellow': '#FFF965',
        'wun-green': '#C0FF72',
        'wun-purple': '#8C52FF',
        'wun-pink': '#FF65C3',
      },
      keyframes: {
        carouselSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        carouselSlide: 'carouselSlide 30s infinite linear',
      },
    },
  },
  plugins: [],
}
export default config
