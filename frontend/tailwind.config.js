/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626', // Red for blood theme
        'primary-foreground': '#ffffff',
        secondary: '#f87171',
        accent: '#ef4444',
        background: '#fafafa',
        card: '#ffffff',
        border: '#e5e7eb',
        muted: '#6b7280',
        'muted-foreground': '#9ca3af',
        foreground: '#1f2937',
        'text-foreground': '#1f2937' // Adding explicit text color
      }
    },
  },
  plugins: [],
}

