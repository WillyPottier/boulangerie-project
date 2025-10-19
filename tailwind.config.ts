import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          beige: '#F5E6D3',
          brown: '#8B4513',
          gold: '#D4AF37',
        },
        neutral: {
          cream: '#FFF8DC',
          dark: '#2C1810',
        },
      },
    },
  },
  plugins: [],
}

export default config