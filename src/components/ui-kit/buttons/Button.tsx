import { forwardRef } from 'react';

import styled, { css, RuleSet } from 'styled-components';

import { appTheme } from '../../../styled/appTheme';
import { mediaBreakpointDown } from '../functions/functions';
import { typography } from '../typography/typography';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    styles?: RuleSet<object>;
    isWide?: boolean;
    isSuccess?: boolean;
    wideOnBreakPoint?: number;
}

export const Button = forwardRef(function Button(props: Props, ref?: React.ForwardedRef<HTMLButtonElement>) {
    const { children, isWide, wideOnBreakPoint, ...rest } = props;

    return (
        <ButtonBody $isWide={isWide} $wideOnBreakPoint={wideOnBreakPoint} {...rest} ref={ref}>
            {children}
        </ButtonBody>
    );
});

const ButtonBody = styled.button<{
    styles?: RuleSet<object>;
    $isWide?: boolean;
    $wideOnBreakPoint?: number;
}>`
    ${typography.bodyMedium};
    padding: 12px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    width: ${({ $isWide }) => ($isWide ? '100%' : 'fit-content')};
    border-radius: ${({ theme }) => theme.border.m_radius};
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.mainLight};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;

    ${({ $wideOnBreakPoint }) =>
        $wideOnBreakPoint &&
        css`
            ${mediaBreakpointDown($wideOnBreakPoint)} {
                width: 100%;
            }
        `};

    &:disabled {
        pointer-events: none;
        background-color: ${({ theme }) => theme.colors.lightGray};

        svg {
            filter: grayscale(100%);
        }
    }

    &:focus {
        &:not(:focus-visible) {
            outline: none;
        }
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.accentLight};
    }

    svg {
        flex-shrink: 0;
        width: 18px;
        height: 18px;
    }

    ${mediaBreakpointDown(appTheme.breakpoints.xMedium)} {
        min-width: 100px;

        svg {
            width: 16px;
            height: 16px;
        }
    }

    ${mediaBreakpointDown(appTheme.breakpoints.Tablet)} {
        padding: 8px 12px;
        gap: 8px;

        svg {
            width: 14px;
            height: 14px;
        }
    }

    ${mediaBreakpointDown(appTheme.breakpoints.xMobile)} {
        padding: 8px;
        svg {
            width: 12px;
            height: 12px;
        }
    }

    ${(props) => props.styles};
`;
