/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        secondary: "var(--secondary)",
        primaryText: "var(--primary-text)"
      }
    },
  },
  plugins: [],
}

