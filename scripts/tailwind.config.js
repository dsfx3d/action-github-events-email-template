/* eslint-disable unicorn/prefer-module */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.tsx", "**/*/toHtml.ts"],
  plugins: [require("tailwindcss-email-variants"), require("daisyui")],
  daisyui: {
    theme: ["emerald"],
  },
  corePlugins: {
    preflight: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
};