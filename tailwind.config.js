/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      fontSize: {
        'custom-lg': "28px",
        'custom-xl': "46px",
        'custom-2xl': "85px",
      },
      colors: {
        'lite-blue': "#1643C3",
        'dark-blue': "#002F93",
        'blue2': "#4273FF",
        'lite-blue': "#1643C31A",

      },
      backgroundImage: {
        'roadmap-layer': "url('./assets/image/webp/roadlayer.webp')",
        'game-layer': "url('./assets/image/webp/game-sec-layer.webp')",
        'amplify-bg': "url('./assets/image/webp/amplify-bg.webp')",
      },
      fontFamily: {
        'plusJakarta': "plus,sans-serif",
        'raleway': "raleway,sans-serif"
      },
      boxShadow: {
        'custom-xl': "4.33px 4.33px 16.55px 0px #FFFFFF42"
      },
      lineHeight: {
        'custom-xl': "55px",
      },


    },
  },
  plugins: [],
}