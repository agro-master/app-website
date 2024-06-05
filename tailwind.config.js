import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontFamily: {
         outfit: ["Outfit", "sans-serif"],
         "open-sans": ["Open Sans", "sans-serif"],
      },
      extend: {
         fontSize: {
            "5.5xl": "3.438rem",
         },
         boxShadow: {
            outline: "0 0 10px 1px rgba(0, 0, 0, 0.1)",
            "outline-lg": "0 0 20px 2px rgba(0, 0, 0, 0.1)",
         },
      },
   },
   plugins: [daisyui],
   daisyui: {
      themes: [
         {
            "light-forest": {
               "color-scheme": "light",
               primary: "#1B5849",
               "primary-content": "#fff",
               secondary: "#0B9E7F",
               accent: "#1DB8AB",
               neutral: "#89BC66",
               "base-100": "oklch(100% 0 0)",
               "base-200": "#F2F2F2",
               "base-300": "#E5E6E6",
               "--rounded-btn": "1.9rem",
            },
            "dark-forest": {
               "color-scheme": "dark",
               primary: "#1B5849",
               "primary-content": "#000000",
               secondary: "#0B9E7F",
               accent: "#1DB8AB",
               neutral: "#89BC66",
               "base-100": "171212",
               "--rounded-btn": "1.9rem",
            },
         },
      ],
   },
};
