import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        base: '#f2f2f2',
        header: '#6980a9',
        accent: '#81a1d4',
        secondary: '#dfe7f4',
        success: '#3a970a',
        'success-light': '#e6ffbe',
        'ticket-header': '#dfe7f4',
        light: '#a8ccec'
      },
      colors: {
        accent: '#81a1d4',
        light: '#a8ccec',
        disabled: '#9e9e9e',
        success: '#3a970a',
        'success-light': '#e6ffbe'
      }
    },
  },
  plugins: [],
}
export default config
