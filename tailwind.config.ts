/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vscode-bg": "#1e1e1e",
        "vscode-sidebar": "#252526",
        "vscode-tab": "#2d2d30",
        "vscode-text": "#cccccc",
        "vscode-border": "#3e3e42",
      },
    },
  },
  plugins: [],
};
