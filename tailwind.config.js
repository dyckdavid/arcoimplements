/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "arco-orange": "#d2582d",
      },
      backgroundImage: {
        arco1:
          'url("https://estufaselarco.com.mx/tienda/wp-content/uploads/2024/02/Arcobuilding.jpg")',
        arco2:
          'url("https://estufaselarco.com.mx/tienda/wp-content/uploads/2024/02/cloud.png")',
        arco3:
          'url("https://estufaselarco.com.mx/tienda/wp-content/uploads/2024/02/Arcobuilding.jpg")',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
