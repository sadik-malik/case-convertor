/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.pug',
    './src/**/*.{js,pug}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
