/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        InterBold:"InterBold",
        Inter:"Inter"
      },
      colors:{
        'des-blue':'hsl(228, 34%, 66%)',
        'dark-des-blue':'hsl(228, 28%, 20%)',
        'dark-des-blue-h':'#40486d',
        'lime-green':'hsl(163, 72%, 41%)',
        'facebook':'hsl(208, 92%, 53%)',
        'twitter':'hsl(203, 89%, 53%)',
        'bg':'hsl(230, 17%, 14%)',
        'instaBGO':'hsl(37, 97%, 70%)',
        'instaBGT':'hsl(329, 70%, 58%)',
        'youtube':'hsl(348, 97%, 39%)',
        'err':'hsl(356, 69%, 56%)',
        'tgO':'hsl(210, 78%, 56%)',
        'tgT':'hsl(146, 68%, 55%)',
        'lcbg':'hsl(227, 47%, 96%)',
        'lcbgH':'#cdced5',
        'ltO':'hsl(228, 12%, 44%)',
        'ltT':'hsl(230, 17%, 14%)'
      }
    },
  },
  plugins: [],
}

