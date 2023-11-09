/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'Blue': '#2299F3',
        'Coral': '#FF6534',
        'Purple': '#63256B',
        'Gray': '#424242',
        'LightGray': '#FFE0D6',
      },
      fontFamily: {
        'Roboto': ['Roboto'],
        'Literata': ['Literata'],
        'WorkSans': ['Work Sans'],
        'Poppins': ['Poppins'],
        'Ubuntu': ['Ubuntu'],
        'Exo': ['Exo'],
        'Inter': ['Inter'],

      }
    },
  },
  plugins: [],
}
