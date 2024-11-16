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
        'uplift-gradient': "url('/images/uplift_gradient.png')",
        'insights-gradient': "url('/images/insights_gradient.png')",
        'arbimon-gradient': "url('/images/arbimon_gradient.png')",
        'amplifi-gradient': "url('/images/amplifi_gradient.png')",
        'uplift-banner': "url('/images/uplift/uplift_banner.png')",
        'insights-banner': "url('/images/insights/engagement_after.png')",
        'arbimon-banner': "url('/images/arbimon/hifi1.png')",
        'amplifi-banner': "url('/images/amplifi/ampproto.png')",
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

