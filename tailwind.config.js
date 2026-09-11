/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gamer: {
          dark: '#0a0a0a',
          medium: '#1a1a1a',
          light: '#2a2a2a',
          accent: '#ffcc00', // Gold/Yellow for premium feel
          secondary: '#8b5cf6', // Purple accent
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
