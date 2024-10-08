module.exports = {
  content: [
    'src/app/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 👇 Add CSS variables
        lato: ['var(--font-lato)'],
        sedan: ['var(--font-sedan)'],
        marker: ['var(--font-marker)'],
      },
      fontSize: {
        'theme-heading-2xl': ['4.5rem', '5.625rem'],
        'theme-heading-xl': ['3.75rem', '4.5rem'],
        'theme-heading-lg': ['3rem', '3.75rem'],
        'theme-heading-md': ['2.25rem', '2.75rem'],
        'theme-heading-sm': ['1.875rem', '2.375rem'],
        'theme-heading-xs': ['1.5rem', '2rem'],
        'theme-xl': ['1.25rem', '1.875rem'],
        'theme-lg': ['1.125rem', '1.75rem'],
        'theme-md': ['1rem', '1.5rem'],
        'theme-sm': ['0.875rem', '1.25rem'],
        'theme-xs': ['0.75rem', '1.125rem'],
      },
      maxWidth: {
        'aa-mobile-screen': '1440px',
      },
      lineHeight: {
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
      },
      letterSpacing: {
        'theme-2xl': '-0.09rem',
        'theme-xl': '-0.075rem',
        'theme-lg': '-0.06rem',
        'theme-md': '-0.045rem',
      },
      backgroundImage: {
        'welcome-image': "url('/images/welcome-gray.png')",
      },
      backgroundColor: {
        'landing-solid': '#3E3E5D',
        'landing-day-overlay': 'rgba(13,26,66,0.8)',
        'landing-night-overlay': 'rgba(1,15,44,0.7)',
      },
      textShadow: {
        landing: '0px 0px 13px rgba(1, 15, 44, 1)',
      },
      colors: {
        'theme-black': '#0F0F0F',
        'theme-neutral-50': '#F6F5F5',
        'theme-neutral-100': '#E7E6E6',
        'theme-neutral-200': '#D2D0CF',
        'theme-neutral-300': '#B3AFAD',
        'theme-neutral-500': '#716C69',
        'theme-neutral-600': '#615D59',
        'theme-neutral-900': '#443F3C',
        'theme-primary-500': '#2E90FA',
        'theme-success-25': '#F6FEF9',
        'theme-success-50': '#ECFDF3',
        'theme-success-100': '#D1FADF',
        'theme-success-200': '#A6F4C5',
        'theme-success-300': '#6CE9A6',
        'theme-success-400': '#32D583',
        'theme-success-500': '#12B76A',
        'theme-success-600': '#039855',
        'theme-success-700': '#027A48',
        'theme-success-800': '#05603A',
        'theme-success-900': '#054F31',
      },
    },
  },
}
