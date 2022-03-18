module.exports = {
    mode: 'jit',
    purge: {
        content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    },
    darkMode: false,
    theme: {
        colors: {
            white: '#FFFFFF',
            grey: '#C4C4C4',
            lightgrey: '#EAEAEA',
            whitegrey: '#F5F5F5',
            darkgrey: '#333333',
            black: '#000000',
            petrolblue: '#2596be',
            orangepink: '#e66465',
        },
        fontFamily: {
            'ss-pro-regular': ['ss-pro-regular', 'sans-serif'],
            'ss-pro-semibold': ['ss-pro-semibold', 'sans-serif'],
            'ss-pro-bold': ['ss-pro-bold', 'sans-serif'],
        },
        fontSize: {
            h1: ['42px', '50px'],
            h2: ['32px', '44px'],
            h3: ['22px', '30px'],
            h4: ['18px', '24px'],
            body: ['18px', '28px'],
        },
        screens: {
            sm: '375px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
            hd: '1920px',
        },
        container: {
            screens: {
                sm: '100%',
                md: '100%',
                lg: '960px',
                xl: '1440px',
            },
        },
        extend: {
            animation: {
                zoomInOut: 'zoomInOut 2s ease infinite',
            },
            keyframes: {
                zoomInOut: {
                    '0%': {
                        transform: 'scale(1, 1)',
                    },
                    '50%': {
                        transform: 'scale(1.25, 1.25)',
                    },
                    '100%': {
                        transform: 'scale(1, 1)',
                    },
                },
            },
        },
        variants: {
            extend: {},
        },
        plugins: [],
    },
}
