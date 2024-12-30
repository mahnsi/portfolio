module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "portfolio-bg": "url('/src/assets/bg.webp')",
        "footer-texture": "url('/src/images/footer-texture.svg')",
      }),
    },
  },
  plugins: [],
};
