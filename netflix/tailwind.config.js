/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nsans-light':['Nsans Light'],
        'nsans-Bold':['Nsans Bold'],
        'nsans-Medium':['Nsans Medium'],
        'nsans-Regular':['Nsans Regular'],

      }
    },
  },
  plugins: [],
}