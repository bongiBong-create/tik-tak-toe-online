/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        tight: "1.2",
      },
      gridTemplateColumns: {
        // custom
        "game-field": "repeat(3, 30px)",
      },
      gridTemplateRows: {
        // custom
        "game-field": "repeat(3, 30px)",
      },
    },
  },
  plugins: [],
};
