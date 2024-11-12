/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
      backgroundImage: {
        'uplift-gradient': "url('src/assets/images/uplift_gradient.png')",
        'insights-gradient': "url('src/assets/images/insights_gradient.png')",
        'arbimon-gradient': "url('src/assets/images/arbimon_gradient.png')",
        'amplifi-gradient': "url('src/assets/images/amplifi_gradient.png')",
      },
    },
  },
  plugins: [],
}

