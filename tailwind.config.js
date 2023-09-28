/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "custom-black": "#171717",
        "custom-grey": "#1d1d1d",
        "custom-lightGrey": "#2D2D2D",
      },
      borderColor: {
        "custom-grey": "#2D2D2D",
      },
      textColor: {
        "custom-grey": "#6d6b6b",
      },
      fontFamily: {},
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
      },
    },
  },
  plugins: [],
};
