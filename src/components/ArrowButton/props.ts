import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ArrowButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    styleType?: 'gray' | 'blue';
    arrow: 'right' | 'left';
    arrSize?: 's' | 'm';
}