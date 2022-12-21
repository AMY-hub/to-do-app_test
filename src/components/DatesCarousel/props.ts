import { HTMLAttributes } from 'react';
import { TimePeriod } from '../../types/interfaces';

export interface DatesCarouselProps extends HTMLAttributes<HTMLDivElement> {
    carouselId: string;
    timePeriods: TimePeriod[];
    carouselTitle: string | JSX.Element;
}