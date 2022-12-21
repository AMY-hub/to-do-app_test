import { HTMLAttributes } from 'react';
import { DateEvent } from '../../types/interfaces';

export interface EventSliderProps extends HTMLAttributes<HTMLDivElement> {
    events: DateEvent[];
    topic: string;
    sliderId: string;
}