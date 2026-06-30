/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F1117',
        surface: '#1A1D27',
        primary: '#6C63FF',
        accent: '#A78BFA',
        'text-primary': '#F1F1F1',
        'text-muted': '#6B7280',
        success: '#34D399',
        danger: '#F87171',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
