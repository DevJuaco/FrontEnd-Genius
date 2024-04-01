/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-950": "#081A51",
        "purple-900": "#0632a2",
        "purple-800": "#0033cf",
        "purple-700": "#003eff",
        "purple-600": "#0057ff",
        "purple-500": "#127cff",
        "purple-400": "#3ea4ff",
        "purple-300": "#7cc6ff",
        "purple-200": "#b1daff",
        "purple-100": "#d3eaff",
        "purple-50": "#ebf6ff",
        "light-white": "rgba(255,255,255,0.18)"
      }
    },
  },
  plugins: []
}

