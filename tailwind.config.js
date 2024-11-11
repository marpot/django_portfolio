/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',  // Szablony Django (jeśli używasz HTML)
    './static/**/*.js',       // Pliki JS (jeśli używasz)
    './static/**/*.css',      // Pliki CSS (jeśli używasz)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
