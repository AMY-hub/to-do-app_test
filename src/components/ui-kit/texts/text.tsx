import { ReactNode } from 'react';

import styled, { RuleSet } from 'styled-components';

import { appTheme } from '../../../styled/appTheme';
import { typography, TypographyKeys } from '../typography/typography';

type TextAlign = 'center' | 'right' | 'left';

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    color?: string;
    align?: TextAlign;
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4';
    styles?: RuleSet<object>;
    font?: TypographyKeys;
}

export const Text = ({ children, color = appTheme.colors.mainDark, font, align = 'left', styles, ...rest }: Props) => (
    <TextContent $color={color} $font={font} $styles={styles} $align={align} {...rest}>
        {children}
    </TextContent>
);

export const TextContent = styled.span<{
    $color?: string;
    $font?: TypographyKeys;
    $align?: TextAlign;
    $styles?: RuleSet<object>;
}>`
    ${({ $font }) => ($font ? typography[$font] : typography.default)};
    color: ${({ $color }) => $color};
    text-align: ${({ $align }) => $align};
    margin: 0;
    padding: 0;
    transition: color 0.3s;
    ${(props) => props.$styles || ''};
`;
