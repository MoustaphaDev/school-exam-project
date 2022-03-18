module.exports = {
  content: ["./static/js/**/*.js", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        "3xl": "10px 0px 40px 0px rgba(0, 0, 0, 0.3)",
        "4xl": "-10px 0px 40px 0px rgba(0, 0, 0, 0.3)",
      },
      gridTemplateColumns: {
        "2-1": "2fr 1fr",
      },
      color: {
        black: "#0f141e",
      },
    },
  },
  plugins: [],
};
