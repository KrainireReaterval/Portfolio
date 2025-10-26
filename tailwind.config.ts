import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f8f6f3',
        fg: '#2c2c2c',
        muted: '#8a8a8a',
        accent: '#d4a574',
        'warm-gray': '#6b6b6b',
        'soft-beige': '#f5f2ed',
        'dark-charcoal': '#1a1a1a',
      },
      borderColor: {
        DEFAULT: 'rgba(44,44,44,0.15)',
      },
      backgroundColor: {
        glass: 'rgba(255,255,255,0.7)',
      },
      boxShadow: {
        soft: '0 8px 32px rgba(44,44,44,0.1)',
      },
      borderRadius: {
        custom: '8px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #d4a574 0%, #c4965f 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f8f6f3 0%, #f0ede8 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-crimson)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
