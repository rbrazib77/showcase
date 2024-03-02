/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        // padding: '2rem',
      },
      fontFamily:{
        'helvetica':['Helvetica Now Display'],
        'artusi':['Artusi'],
        'artusiG':['Artusi-Grande'],
        'artusiC':['ArtusiC'],
      },
      colors:{
        'highlight':'#F7381E',
        'menu':'#C0C0C0',
        'footer':'#DEE4D3',
      }
    },
  },
  plugins: [],
}

