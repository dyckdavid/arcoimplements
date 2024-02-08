/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "arco-orange": "#d2582d",
      },
      backgroundImage: {
        'arco1': 'url("../src/lib/images/Arcobuilding.jpg")',
        'arco2': 'url("../src/lib/images/cloud.png")',
        'arco3': 'url("../src/lib/images/Arcobuilding.jpg")',
      }
    },
  },
  plugins: [
    require('taos/plugin'),
    require("tailwindcss-animate"),
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
};
