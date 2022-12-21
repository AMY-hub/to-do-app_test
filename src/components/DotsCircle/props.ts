import { HTMLAttributes } from 'react';
import { TimePeriod } from '../../types/interfaces';

export interface DotsCircleProps extends HTMLAttributes<HTMLUListElement> {
    timePeriods: TimePeriod[];
    currentPeriodIdx: number;
    setCurrentPeriodIdx: (n: number) => void;
}