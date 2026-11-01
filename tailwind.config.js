/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Vibrant Temple Saffron
          600: '#ea580c', // Deep Saffron / Marigold
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          gold: '#eab308',
          amber: '#d97706'
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
          ocean: '#0369a1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif']
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(234, 88, 12, 0.15)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 12px 32px -4px rgba(15, 23, 42, 0.16)'
      }
    },
  },
  plugins: [],
}
