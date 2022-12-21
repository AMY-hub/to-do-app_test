import { HTMLAttributes } from 'react';

export interface PeriodControlsProps extends HTMLAttributes<HTMLDivElement> {
    totalAmount: number;
    activePeriod: number;
    setActivePeriod: (p: number) => void;
    sliderId: string;
}