/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
      'monoton': ['Monoton', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif'],
      'orbitron': ['Orbitron', 'sans-serif'],
    },
    colors: {
      primary: '#AC2DE8',
      secondary: '#020654',
      white: '#FFFFFF',
      black: '#000000',
    }
  },
  plugins: [],
}
