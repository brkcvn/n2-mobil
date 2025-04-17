module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary_gray: '#5C6672',
                primary_dark_blue: '#26303E',
                primary_light_gray: '#D8D9DD',
                primary_purple: '#4F359B',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}