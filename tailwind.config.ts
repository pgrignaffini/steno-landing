import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mona Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
