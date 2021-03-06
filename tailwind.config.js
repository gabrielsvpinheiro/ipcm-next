module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: '#111827',
        'dark-light': '#182237',
        'dark-lighter': '#2a3849',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
}
