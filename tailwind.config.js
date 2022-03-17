module.exports = {
    mode: 'jit',
    purge: {
        content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            red: '#CC0033',
            'dark-red': '#9C0F36',
            white: '#FFFFFF',
            grey: '#C4C4C4',
            lightgrey: '#EAEAEA',
            whitegrey: '#F5F5F5',
            'dark-grey': '#333333',
            blue: '#0098CD',
            black: '#000000',
            whatsappgreen: '#0bbd41',
            facebookblue: '#3b5997',
            xingdarkgreen: '#126567',
        },
        fontFamily: {
            'ss-pro-regular': ['ss-pro-regular', 'sans-serif'],
            'ss-pro-semibold': ['ss-pro-semibold', 'sans-serif'],
            'ss-pro-bold': ['ss-pro-bold', 'sans-serif'],
        },
        fontSize: {
            xl: ['68px', '50px'],
            h1: ['42px', '50px'],
            h2: ['32px', '44px'],
            h3: ['22px', '30px'],
            h4: ['18px', '24px'],
            body: ['18px', '28px'],
            md: ['16px', '20px'],
            sm: ['14px', '20px'],
            xs: ['11px', '16px'],
            label: ['16px', '16px'],
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
                lg: '916px',
                xl: '1472px',
            },
        },
        extend: {
            animation: {
                slideIn: 'slideIn 1s forwards',
                slideOut: 'slideOut 1s forwards',
                slideInMobile: 'slideInMobile 1s forwards',
                slideOutMobile: 'slideOutMobile 1s forwards',
                'video-ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                zoomIn: 'zoomIn 2s linear 1s forwards',
                drawIn: 'drawIn 6s ease',
                rightLeftFast: 'positionRightLeft 1s linear forwards',
                rightLeftSlow: 'positionRightLeft 1.2s linear forwards',
                bottomTopFast: 'positionBottomTop 1s linear forwards',
                bottomTopSlow: 'positionBottomTop 1.2s linear forwards',
                opacity: 'opacity 1s linear forwards',
                fadeIn: 'opacity 1s linear forwards',
                fadeOut: 'opacity 1s linear ',
            },
            keyframes: {
                slideIn: {
                    '0%': {
                        transform: 'skewX(-6deg) translateX(100%)',
                    },
                    '100%': {
                        transform: 'skewX(-6deg) translateX(0)',
                    },
                },
                slideOut: {
                    '0%': {
                        transform: 'skewX(-6deg) translateX(0)',
                    },
                    '100%': {
                        transform: 'skewX(-6deg) translateX(100%)',
                    },
                },
                slideInMobile: {
                    '0%': {
                        transform: 'translateX(100%)',
                    },
                    '100%': {
                        transform: 'translateX(0)',
                    },
                },
                slideOutMobile: {
                    '0%': {
                        transform: 'translateX(0)',
                    },
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
                zoomIn: {
                    '0%': {
                        transform: 'scale(1.0)',
                    },
                    '100%': {
                        transform: 'scale(1.1)',
                    },
                },
                drawIn: {
                    from: {
                        strokeDasharray: '100%',
                        strokeDashoffset: '0%',
                    },
                    to: {
                        strokeDasharray: '3800px',
                        strokeDashoffset: '100%',
                    },
                },
                positionRightLeft: {
                    '0%': {
                        transform: 'translate(20vw, 0)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translate(0, 0)',
                        opacity: '100%',
                    },
                },
                positionBottomTop: {
                    '0%': {
                        transform: 'translate(0, 30vh)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translate(0, 0)',
                        opacity: '100%',
                    },
                },
                opacity: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '100%',
                    },
                },
                fadeIn: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '100%',
                    },
                },
                fadeOut: {
                    '0%': {
                        opacity: '100%',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
            },
            width: {
                1440: '1440px',
            },
        },
        variants: {
            extend: {},
        },
        plugins: [],
    },
}
