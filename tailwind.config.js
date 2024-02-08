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
  plugins: [],
};
