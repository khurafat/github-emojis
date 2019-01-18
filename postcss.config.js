const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("autoprefixer")
    // purgecss({
    //   content: ["./src/**/*.html", "./src/**/*.vue"],
    //   whitelist: ["w-1/3", "w-1/2"]
    // })
  ]
};
