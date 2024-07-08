import { AppTheme } from './theme.interface';

export const appTheme: AppTheme = {
    // theme-colors:
    colors: {
        bg: 'var(--bg)',
        header: 'var(--header)',
        mainLight: 'var(--mainLight)',
        mainDark: 'var(--mainDark)',
        accent: 'var(--accent)',
        accentLight: 'var(--accentLight)',
        accentPale: 'var(--accentPale)',
        ordTask: 'var(--ordTask)',
        impTask: 'var(--impTask)',
        doneTask: 'var(--doneTask)',
        lightGray: 'var(--lightGray)',
        darkGray: 'var(--darkGray)',
        extraLightGray: 'var(--extraLightGray)',

        shadow: '#4343431b',
    },

    // breakpoints:
    breakpoints: {
        sMobile: 320,
        xMobile: 600,
        Tablet: 768,
        xTablet: 960,
        Medium: 1024,
        xMedium: 1280,
        Large: 1440,
        xLarge: 1600,
        FHD: 1920,
    },

    // border-radius:
    border: {
        s_radius: '8px',
        m_radius: '14px',
        l_radius: '20px',
    },
};
