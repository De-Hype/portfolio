/** @type {import('tailwindcss').Config} */
module.exports = {
  
content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      laptop: { max: "1084px" },
      tablet: { max: "768px" },
      pad: { max: "520px" },
      phone: { max: "380px" },
    },
    extend: {},
  },
  plugins: [],
};
