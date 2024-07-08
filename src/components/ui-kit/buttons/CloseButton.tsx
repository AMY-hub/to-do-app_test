import { ButtonHTMLAttributes } from 'react';

import styled, { RuleSet } from 'styled-components';

import { ReactComponent as CloseIcon } from '../../../assets/icons/remove.svg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    styles?: RuleSet<object>;
}

export const CloseButton = ({ styles, ...rest }: Props) => (
    <Button $styles={styles} type="button" {...rest}>
        <CloseIcon />
    </Button>
);

const Button = styled.button<{ $styles?: RuleSet<object> }>`
    width: 20px;
    height: 20px;
    cursor: pointer;
    flex-shrink: 0;

    svg {
        width: 100%;
        height: 100%;
        fill: ${({ theme }) => theme.colors.darkGray};
        transition: fill 0.3s;
    }

    &:hover {
        svg {
            fill: ${({ theme }) => theme.colors.accent};
        }
    }

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    &:focus {
        outline: 3px solid ${({ theme }) => theme.colors.accentLight};
        outline-offset: 0px;
        &:not(:focus-visible) {
            outline: none;
        }
    }
    ${({ $styles }) => $styles};
`;
