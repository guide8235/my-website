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
        primary: '#7657FF',
        accent: '#00D4FF',
        dark: {
          bg: '#080B14',
          secondary: '#101729',
          card: '#0D1425',
        },
        light: {
          bg: '#F5F7FA',
          secondary: '#FFFFFF',
          card: '#FFFFFF',
        },
        'text-secondary': '#A0A9BD',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(118, 87, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(118, 87, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
