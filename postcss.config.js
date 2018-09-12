// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {}
//   }
// };

let tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    // ...
    tailwindcss("./tailwind.js"),
    require("autoprefixer")
    // ...
  ]
};
