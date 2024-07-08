import { css } from 'styled-components';

import { appTheme } from '../../../styled/appTheme';
import { mediaBreakpointDown } from '../functions/functions';

const mainFont = css`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
`;

export const typography = {
    default: css`
        ${mainFont};
    `,
    medium: css`
        ${mainFont};
        font-weight: 500;
    `,

    title1: css`
        ${mainFont};
        font-weight: 600;
        font-size: 42px;
        line-height: 1.3;

        ${mediaBreakpointDown(appTheme.breakpoints.FHD)} {
            font-size: 40px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMedium)} {
            font-size: 39px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xTablet)} {
            font-size: 38px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
            font-size: 32px;
        }
    `,

    title2: css`
        ${mainFont};
        font-weight: 600;
        font-size: 34px;
        line-height: 1.3;

        ${mediaBreakpointDown(appTheme.breakpoints.FHD)} {
            font-size: 32px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMedium)} {
            font-size: 31px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xTablet)} {
            font-size: 30px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
            font-size: 28px;
        }
    `,
    heading2: css`
        ${mainFont};
        font-size: 22px;
        line-height: 1.4;

        ${mediaBreakpointDown(appTheme.breakpoints.FHD)} {
            font-size: 20px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMedium)} {
            font-size: 19px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xTablet)} {
            font-size: 18px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
            font-size: 17px;
        }
    `,
    heading3: css`
        ${mainFont};
        font-size: 20px;
        line-height: 1.4;

        ${mediaBreakpointDown(appTheme.breakpoints.FHD)} {
            font-size: 18px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMedium)} {
            font-size: 17px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xTablet)} {
            font-size: 16px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
            font-size: 15px;
        }
    `,
    bodyMedium: css`
        ${mainFont};
        font-weight: 500;
        font-size: 17px;
        line-height: 1.4;

        ${mediaBreakpointDown(appTheme.breakpoints.FHD)} {
            font-size: 16px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMedium)} {
            font-size: 15px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xTablet)} {
            font-size: 14px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
            font-size: 13px;
        }
    `,
    body: css`
        ${mainFont};
        font-weight: 400;
        font-size: 17px;
        line-height: 1.4;

        ${mediaBreakpointDown(appTheme.breakpoints.FHD)} {
            font-size: 16px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMedium)} {
            font-size: 15px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xTablet)} {
            font-size: 14px;
        }

        ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
            font-size: 13px;
        }
    `,
};

export type TypographyKeys = keyof typeof typography;
