import { HTMLAttributes } from 'react';

export interface EventSlideProps extends HTMLAttributes<HTMLDivElement> {
    date: number;
    info: string;
}