/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'animation': {
            'text':'text 5s ease infinite',
            'fade-up':'fade-up 500ms ease-out both',
        },
        'keyframes': {
            'text': {
                '0%, 100%': {
                   'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                   'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'fade-up': {
                '0%': { 'opacity': '0', 'transform': 'translateY(8px)' },
                '100%': { 'opacity': '1', 'transform': 'translateY(0)' }
            },
        }
    },
  },
  plugins: [],
}

