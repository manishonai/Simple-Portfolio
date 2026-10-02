/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Channels live in index.css so the `dark` class on <html> can swap them.
      colors: Object.fromEntries(
        ['ink', 'fg', 'muted', 'accent'].map((name) => [name, `rgb(var(--${name}) / <alpha-value>)`]),
      ),
      keyframes: {
        shimmer: { to: { backgroundPosition: '200% 50%' } },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
}
