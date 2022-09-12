/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}",
  ],
  theme: {
    extend: {},
    colors: {
      gray: "#dddce5",
      tan: "#a9a2a4",
      blue: "#a9d8ff",
      brown: "#74686c",
      coffee: "#3f3539",
      roast: "#231e20",
      white: "#fff",
      black: "#000",
      yellow: "#FFE81F",
      orange: "#e8aa44",
      burgundy: "#6f393f",
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'title' : ['Arial Black'],
    },
  },
  plugins: [],
}
