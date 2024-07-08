export const mediaBreakpointUp: (breakpoint: number) => string = (breakpoint) => `@media(min-width: ${breakpoint}px)`;

export const mediaBreakpointDown: (breakpoint: number) => string = (breakpoint) =>
    `@media(max-width: ${breakpoint - 1}px)`;

export const vw: (value: number, screenWidth?: number) => string = (value, screenWidth = 1920) =>
    `${(value / screenWidth) * 100}vw`;

export const vh: (value: number, screenHeight?: number) => string = (value, screenHeight = 1080) =>
    `${(value / screenHeight) * 100}vh`;
