/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "beige":"#F7D08A",
        "marron":"#7C3626",
        "mate":"#4B5262",
        "blansale":"#FCDEBE"
        
      },
    },

  },
  plugins: [],
}

