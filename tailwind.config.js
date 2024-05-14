/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'country': '0 0 8px 2px rgb(0 0 0 / 0.2)',
        'component': '2px 3px 10px rgb(0 0 0 / 0.2)'
      },
      colors: {
        darkElements: "hsl(var(--elements-dark) / <alpha-value>)",
        darkBg: "hsl(var(--bkg-dark) / <alpha-value>)",
        content: "hsl(var(--content) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        background: "hsl(var(--bkg) / <alpha-value>)",
        paragraph: "hsl(var(--paragraph) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}

