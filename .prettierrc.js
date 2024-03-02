const styleguide = require("@vercel/style-guide/prettier");

module.exports = {
  ...styleguide,
  singleQuote: false,
  plugins: [...styleguide.plugins, "prettier-plugin-tailwindcss"],
};
