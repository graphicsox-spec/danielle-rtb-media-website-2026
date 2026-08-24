/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8eb',
          100: '#f5eecb',
          200: '#ebd996',
          300: '#e1c05d',
          400: '#d7ab32',
          500: '#c29221',
          600: '#a77319',
          700: '#845317',
          800: '#6f431a',
          900: '#5f381a',
          accent: '#F3D97A',
          metallic: '#D4AF37',
        },
        dark: {
          950: '#060608',
          900: '#0A0A0E',
          850: '#101017',
          800: '#171722',
          750: '#20202E',
          700: '#2D2D3F',
          600: '#474761',
        },
        brand: {
          primary: '#E5C07B',
          secondary: '#38BDF8',
          dark: '#09090b',
          card: '#121218',
          border: '#272733',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"DM Serif Display"', 'serif'],
        serif: ['"DM Serif Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      }
    },
  },
  plugins: [],
}
