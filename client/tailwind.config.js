/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f5f0',
          100: '#f3e8d6',
          200: '#e6d2b3',
          300: '#d9bb8f',
          400: '#cca66c',
          500: '#c08e49',
          600: '#b2753d',
          700: '#8b5d31',
          800: '#6f4b26',
          900: '#53391d',
          950: '#372617',
        },
        secondary: {
          50: '#f8f7f2',
          100: '#f4ebdc',
          200: '#e9d7b6',
          300: '#ddc58e',
          400: '#d2b26e',
          500: '#c79c48',
          600: '#bd8a3b',
          700: '#9d7131',
          800: '#7e5c2a',
          900: '#624623',
          950: '#3a2815',
        },
        accent: {
          50: '#fffaeb',
          100: '#fef0c7',
          200: '#fee08a',
          300: '#fdcc4d',
          400: '#faba20',
          500: '#e9a506',
          600: '#c77f05',
          700: '#a45909',
          800: '#88490f',
          900: '#733b11',
          950: '#431e06',
        },
        success: {
          500: '#4caf50',
          600: '#2e7d32',
        },
        warning: {
          500: '#ff9800',
          600: '#e65100',
        },
        error: {
          500: '#f44336',
          600: '#c62828',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'paper-texture': "url('https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [],
};