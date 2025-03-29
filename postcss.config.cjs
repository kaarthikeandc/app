module.exports = {
  plugins: {
    'postcss-import': {},  // Required for Next.js + Tailwind
    tailwindcss: {},        // Correct way to include Tailwind
    autoprefixer: {},       // Ensures browser compatibility
  },
};
