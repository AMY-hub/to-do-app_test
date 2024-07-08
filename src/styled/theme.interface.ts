export interface Breakpoint {
    sMobile: number;
    xMobile: number;
    Tablet: number;
    xTablet: number;
    Medium: number;
    xMedium: number;
    Large: number;
    xLarge: number;
    FHD: number;
}

export interface Border {
    s_radius: string;
    m_radius: string;
    l_radius: string;
}

export interface Color {
    bg: string;
    header: string;
    mainLight: string;
    mainDark: string;
    accent: string;
    accentLight: string;
    accentPale: string;
    ordTask: string;
    impTask: string;
    doneTask: string;
    lightGray: string;
    extraLightGray: string;
    darkGray: string;
    shadow: string;
}

export interface AppTheme {
    // theme-colors:
    colors: Color;
    // breakpoints:
    breakpoints: Breakpoint;
    // border-radius:
    border: Border;
}
