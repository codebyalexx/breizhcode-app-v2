/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
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
                'success-light': '#e6ffbe'
            },
            colors: {
                accent: '#81a1d4',
                disabled: '#9e9e9e',
                success: '#3a970a',
                'success-light': '#e6ffbe'
            }
        },
    },
    plugins: [],
}