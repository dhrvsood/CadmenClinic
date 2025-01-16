/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  safelist: [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'bg-plum',
    'border-plum',
    'hover:text-plum'
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          base: '#D09D45'
        },
        teal: {
          50: '#DAEEED',
          100: '#C7E5E4',
          200: '#ABD8D6',
          300: '#8FCCC9',
          400: '#65B8B4',
          500: '#4DA8A3',
          600: '#007478',
          700: '#004F52',
          800: '#003B3D',
          900: '#002729'
        },
        quicksand: { 
          normal: '#C69C93',
          light: '#E0C2B8',
          dark: '#9A6B63'
        },
        dawnPink: '#EBDBD6',
        beaver: '#8F7162',
        wildSand: '#F4F3EF',
        customBlack: '#231F20'
      },
      fontFamily: {
        display: [
          'le-monde-livre-classic-byol',
          'ui-serif',
          'Georgia',
        ],
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['Courier', 'Inconsolata']
      }
    }
  },
  plugins: [],
})
