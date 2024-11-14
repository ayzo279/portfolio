/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}",
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
        'uplift-banner': "url('src/assets/images/uplift/uplift_banner.png')",
        'insights-banner': "url('src/assets/images/insights/engagement_after.png')",
        // 'arbimon-banner': "url('src/assets/images/arbimon/arbimon_banner.png')",
        // 'amplifi-banner': "url('src/assets/images/amplifi/amplifi_banner.png')",
      },
      backgroundSize: {
        'auto-110': 'auto 110%',
      },
      colors: {
        'black-translucent': 'rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}

