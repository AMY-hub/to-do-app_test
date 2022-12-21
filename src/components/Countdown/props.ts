import { HTMLAttributes } from 'react';

export interface CountdownProps extends HTMLAttributes<HTMLDivElement> {
    number: number;
    styleType?: 'accentFirst' | 'accentSecond';
}