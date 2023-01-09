/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'carousel-stadium': "url('/public/images/stadium-background-with-green-grass-pitch-daytime 1.jpg')",
       
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'red': '#E8282B',
      'grey':'#303437',
      'market-grey': '#F2F4F5',
      'market-hr': '#E3E5E6',
      'market-text-grey': '#6C7072',
      'btn-grey': '#CDCFD0',
      'attribute': '#979C9E',
      'bermuda': '#78dcca',
      'lineer': 'linear-gradient(180deg, #A3873C 0%, #E3D294 100%)',

    },
  },
  plugins: [],
}
