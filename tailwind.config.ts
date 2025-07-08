// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Your shared components
    "./src/**/*.{js,ts,jsx,tsx}", // Optional: if you're using a /src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Customize your primary color
        secondary: "#9333EA", // Secondary color
        accent: "#10B981", // Accent color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default sans font
        mono: ["Fira Code", "monospace"], // Optional: monospace for code
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [
    // Optional: responsive video/images
    require("daisyui"),
  ],
  daisyui: {
    themes: ["winter"],
  },
};
