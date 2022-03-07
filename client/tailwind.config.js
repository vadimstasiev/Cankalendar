module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '547px',
      // => @media (min-width: 547px) { ... }

      'lg': '775px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1680px) { ... }
    },
  },
  plugins: [],
}