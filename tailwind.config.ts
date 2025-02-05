import type { Config } from "tailwindcss";

const config: Config = {
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
        'number-background': 'url("/images/images/number-background-1.png")',
        'textarea-background': 'url("/images/images/pixelated-text-area.png")',
        'persona-background': 'url("/images/images/pixelated-border-bg.png")',
        'btn-background': 'url("/images/celebrity/button-background.png")',
        'up-arrow' : 'url("/images/images/pixelated-up-arrow.png")',
      },
      colors: {
        white: "#e2e8f0",
        danger: "#da6c5d",
        background: "#212127",
      },
      backgroundSize: {
        full: '100% 100%'
      }
    },
  },
  plugins: [],
};
export default config;


// purple: "#adadd9",
//         green:"#40B65A",
//         red: "#E15656",
//         violet: "#6A53AC",
//         yellow: "#FEAD61",