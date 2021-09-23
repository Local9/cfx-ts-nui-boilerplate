module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: ['Inter', 'Segoe UI', 'sans-serif'],
        },
        extend: {
            colors: {

            },
            backgroundImage: () => ({
                mock: "url('assets/mock.png')"
            })
        }
    },
    plugins: []
}
