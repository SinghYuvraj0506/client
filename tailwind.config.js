/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlack:'#131921',
        primaryYellow:'#FD9800'
      }
    },
  },
  plugins: [],
}