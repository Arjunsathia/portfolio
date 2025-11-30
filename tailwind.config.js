/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#333333",
        accent: "#10b981",
        "text-main": "#2c3e50",
        "text-muted": "#64748b",
        "bg-light": "#f8f9fa",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        outfit: ['"Outfit"', "sans-serif"],
      },
      animation: {
        float: 'float 12s infinite ease-in-out',
        'scroll-scale-fade': 'scroll-scale-fade 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(40px, -40px)' },
        },
        'scroll-scale-fade': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
