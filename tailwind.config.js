/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRightToLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideLeftToRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        downToUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        rightToLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        rotateMoveCircle: {
          "0%": { top: "-400px" },
          "50%": { right: "-200px" },
          "75%": { top: "-200px" },
          "100%": { top: "-400px" },
        },
        rotateMoveRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        rotateMoveLeft: {
          "0%": { top: "-200px" },
          "100%": { top: "0px" },
        },
      },
      animation: {
        rightToLeft: "slideRightToLeft 2s ease-in-out forwards",
        leftToRight: "slideLeftToRight 2s ease-in-out forwards",
        fadeInLeft: "fadeInLeft 2s ease-out",
        fadeInRight: "fadeInRight 2s ease-out",
        fadeIn: "fadeIn 2s ease-out forwards",
        downToUp: "downToUp 2s ease-out forwards",
        rotateMoveCircle: "rotateMoveCircle 10s linear infinite",
        rotateMoveRight: "rotateMoveRight 5s linear infinite",
        rotateMoveLeft: "rotateMoveLeft 5s linear infinite",
      },
      zIndex: {
        1: "1",
        2: "2",
        negative: "-1",
      },
      transitionTimingFunction: {
        ease: "ease",
        "in-out": "ease-in-out",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      backgroundOpacity: {
        89: "0.89",
      },
      colors: {
        primary: "#007bff",  // Primary color
        secondary: "#6c757d", // Secondary color
        accent: "#17a2b8",    // Accent color
        "overlay-gradient": "rgba(37, 37, 37, 0.5)",
        breadcrumbDark: '#111827',
      },
      spacing: {
        '1/4': '0.25rem',
        '1/2': '0.5rem',
        '3/4': '0.75rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        georgia: ["Georgia", "serif"],
        body: ["Poppins"],
      },
      backdropBlur: {
        "6px": "6px",
      },
      textShadow: {
        custom: "2px 2px 8px rgba(0, 0, 0, 0.8)",
        subtext: "1px 1px 6px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        breadcrumb: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/service/home/home.jpg')",
        boxBg: "url('/Software-Logos/img7.jpg')",
      },
    },
  },
  plugins: [],
};
