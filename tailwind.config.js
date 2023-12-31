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
        'Gradient-Product': 'linear-gradient(180deg, rgba(255, 101, 52, 0.20) 0%, rgba(144, 203, 248, 0.20) 100%)'
      },
      boxShadow: {
        'shadow1': "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
        'shadowBox': "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      colors: {
        'Blue': '#2299F3',
        'Coral': '#FF6534',
        'CoralLight': '#FFDACE',
        'Purple': '#63256B',
        'Gray': '#424242',
        'LightGray': '#FFE0D6',
        'MidGray': '#F0F0F0',
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
