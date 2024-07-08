import { InputHTMLAttributes } from 'react';

import styled from 'styled-components';

import { ReactComponent as CheckIcon } from '../../../assets/icons/done.svg';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isCheck: boolean;
    isDisabled?: boolean;
}

export const Checkbox = (props: Props) => {
    const { isCheck, onClick, ...rest } = props;

    return (
        <CheckboxWrapper onClick={onClick}>
            <input {...rest} type="checkbox" checked={isCheck} />
            <CheckIcon />
        </CheckboxWrapper>
    );
};

const CheckboxWrapper = styled.span`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;

    input[type='checkbox'] {
        -webkit-appearance: none;
        appearance: none;

        width: 16px;
        height: 16px;
        margin: -3px;
        flex-shrink: 0;
        border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
        border-radius: 4px;
        outline: none;
        transition: border 0.3s, background-color 0.3s;
        cursor: pointer;

        & + svg {
            pointer-events: none;
            position: absolute;
            flex-shrink: 0;
            z-index: 1;
            display: block;
            margin: auto;
            width: 16px;
            height: 16px;
            fill: ${({ theme }) => theme.colors.accent};
            opacity: 0;
            visibility: hidden;
            transition: fill 0.3s, opacity 0.3s, visibility 0.3s;
        }

        &:focus {
            outline: ${({ theme }) => `3px solid ${theme.colors.lightGray}`};
            outline-offset: 0px;
            &:not(:focus-visible) {
                outline: none;
            }
        }

        &:checked {
            border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
            background-color: 'transparent';

            & + svg {
                opacity: 1;
                visibility: visible;
            }
        }

        &:hover {
            border: ${({ theme }) => `1px solid ${theme.colors.accentLight}`};
        }

        &:disabled {
            pointer-events: none;
            border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
            background-color: 'transparent';
        }

        &:disabled:checked {
            border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
            background-color: ${({ theme }) => theme.colors.lightGray};

            & + svg {
                opacity: 1;
                visibility: visible;
            }
        }
    }
`;
