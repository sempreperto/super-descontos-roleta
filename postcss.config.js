// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // This is the required change
    autoprefixer: {},
  },
}
