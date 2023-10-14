/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      customButton: {
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'z-index': '999',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}




