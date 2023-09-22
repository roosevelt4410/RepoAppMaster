/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'empresa-rojo': '#B12923',
        'empresa-verde': '#008C4F',
      },
    },
  },
  plugins: [],
}

