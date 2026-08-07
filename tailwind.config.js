/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#111111",
          white: "#F8F6F2",
          ivory: "#EFEAE3",
          charcoal: "#2D2D2D",
          bronze: "#A57C52",
          gold: "#C5A06A",
          gray: "#E7E5E2",
          hoverBronze: "#8B6746",
          darkGray: "#1C1C1C",
          lightCard: "#F2EEE8",
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "'DM Serif Display'", "Georgia", "serif"],
        sans: ["'Manrope'", "'Satoshi'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      borderRadius: {
        'luxury': '12px',
      },
      boxShadow: {
        'subtle': '0 10px 30px -10px rgba(17, 17, 17, 0.05)',
        'elevated': '0 20px 40px -15px rgba(17, 17, 17, 0.1)',
        'glow': '0 0 25px rgba(165, 124, 82, 0.15)',
      },
    },
  },
  plugins: [],
}
