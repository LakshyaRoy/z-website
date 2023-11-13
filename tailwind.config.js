/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      HelveticaNowMTTextBold: ["HelveticaNowMTTextBold_normal_normal"],
      HelveticaNowMTTextMedium: ["HelveticaNowMTTextMedium_normal_normal"],
      HelveticaNowMTTextRegular: ["HelveticaNowMTTextRegular_normal_normal"],
    },
  },
  plugins: [],
};
