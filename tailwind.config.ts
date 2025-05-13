module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#9333EA",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Pour styliser les formulaires
    require('@tailwindcss/typography'), // Pour un beau rendu des textes
    require('@tailwindcss/aspect-ratio'), // Pour gérer les ratios d'images
  ],

};