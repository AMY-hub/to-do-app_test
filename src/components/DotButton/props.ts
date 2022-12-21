import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface DotButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string | number;
    isActive?: boolean;
    label: string;
    setPeriod: (idx: number) => void;
}