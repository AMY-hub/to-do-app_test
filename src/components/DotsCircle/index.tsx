import cn from 'classnames';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { useMathMedia } from '../../hooks/useMathMedia';
import { DotButton } from '../DotButton';
import { DotsCircleProps } from './props';

import styles from './style.module.scss';

export const DotsCircle = ({ timePeriods, currentPeriodIdx, setCurrentPeriodIdx, className, ...rest }: DotsCircleProps): JSX.Element => {

    const isTablet = useMathMedia('(max-width: 1060px)');
    const listRef = useRef<HTMLUListElement | null>(null);
    const radius = isTablet ? '165px' : '262px';
    const start = -45;
    const interval = 360 / timePeriods.length;

    useLayoutEffect(() => {
        gsap.context(() => {
            gsap.to(listRef.current, {
                rotate: `-${currentPeriodIdx * interval}deg`,
                duration: 1,
                transformOrigin: 'center',
                ease: 'Sine.easeInOut'
            });
            gsap.to('button', {
                rotate: `${currentPeriodIdx * interval}deg`,
                backgroundColor: 'rgb(66, 86, 122)',
                border: 'none',
                scale: 0.11
            });
        }, listRef);
    }, [currentPeriodIdx, interval, start]);

    const dots = timePeriods.map((p, idx) => {
        const rotate = interval * idx + start;
        const rotateRev = rotate * -1;

        return (
            <li
                key={p.topic}
                className={styles.dotsItem}
                style={{
                    transform: `rotate(${rotate}deg) translate(${radius}) rotate(${rotateRev}deg)`
                }}>
                <DotButton
                    text={idx + 1}
                    label={p.topic}
                    setPeriod={setCurrentPeriodIdx}
                    isActive={currentPeriodIdx === idx}
                />
            </li>
        );
    });

    return (
        <ul className={cn(styles.dots, className)} {...rest} ref={listRef}>
            {dots}
        </ul>
    );
};
