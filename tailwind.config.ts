import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#88aaee",
        mainAccent: "#4d80e6", // not needed for shadcn components
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#dfe5f2",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#272933",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#212121", // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: "16px",
      },
      boxShadow: {
        light: "2px 0px 0px 0px #000",
        dark: "2px 0px 0px 0px #000",
      },
      translate: {
        boxShadowX: "2px",
        boxShadowY: "0px",
        reverseBoxShadowX: "-2px",
        reverseBoxShadowY: "0px",
      },
      fontWeight: {
        base: "700",
        heading: "900",
      },
    },
  },
  plugins: [],
} satisfies Config;
