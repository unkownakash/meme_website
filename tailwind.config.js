/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
      
      "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top,rgb(79, 19, 83),rgb(136, 11, 125),rgb(191, 27, 194),rgb(173, 36, 186),rgb(219, 38, 216))',
      },
    },
  },
  
  plugins: [],
}

