/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "med-grey": "#9CA3AF",
        golden: "#FFC72C",
        "dark-grey": "#374151",
        "light-grey": "#F3F4F6",
        sand: "#F5DEB3",
        blue: "#2563EB",
        "dark-blue": "#1E3A8A",
        "light-blue": "#BFDBFE",
        "text-primary": "#1F2937",
        nude: "#D4C2B0",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0,0,0,0.05), 0 10px 15px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
