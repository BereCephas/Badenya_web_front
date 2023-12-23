/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         beige: "#F7D08A",
//         marron: "#7C3626",
//         mate: "#4B5262",
//         blansale: "#FCDEBE",
//         bleu: "#42307D",
//       },
//     },
//   },
//   plugins: [
//     require("@tailwindcss/line-clamp"),
//     require("tw-elements-react/dist/plugin.cjs"),
//   ],
// };

export default module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F7D08A",
        marron: "#7C3626",
        mate: "#4B5262",
        blansale: "#FCDEBE",
        bleu: "#42307D",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
});
