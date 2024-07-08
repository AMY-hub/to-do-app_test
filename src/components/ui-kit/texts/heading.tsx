import styled, { RuleSet } from 'styled-components';

import { appTheme } from '../../../styled/appTheme';
import { typography } from '../typography/typography';

export const Title1 = styled.h1<{
    $color?: string;
    $align?: 'center' | 'right' | 'left';
    $styles?: RuleSet<object>;
}>`
    ${typography.title1};
    color: ${({ $color }) => $color || appTheme.colors.mainDark};
    margin: 0;
    padding: 0;
    text-align: ${({ $align }) => $align || 'left'};
    ${(props) => props.$styles || ''};
`;

export const Title2 = styled.h2<{
    $color?: string;
    $align?: 'center' | 'right' | 'left';
    $styles?: RuleSet<object>;
}>`
    ${typography.title2};
    color: ${({ $color }) => $color || appTheme.colors.mainDark};
    margin: 0;
    padding: 0;
    text-align: ${({ $align }) => $align || 'left'};
    ${(props) => props.$styles || ''};
`;
