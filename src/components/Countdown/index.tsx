import cn from 'classnames';
import gsap from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react';
import { CountdownProps } from './props';

import styles from './style.module.scss';

export const Countdown = ({ number, styleType = 'accentFirst', className, ...rest }: CountdownProps): JSX.Element => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [value] = useState({ val: number });

    useLayoutEffect(() => {
        gsap.to(value, {
            duration: 0.6,
            val: number,
            onUpdate: updateHandler, ease: 'sine.out'
        });
        function updateHandler() {
            if (ref.current) {
                ref.current.innerText = `${value.val.toFixed()}`;
            }
        }
    }, [value, number]);

    return (
        <div className={cn(styles.countdown, styles[styleType], className)} {...rest} ref={ref}>
            {value.val}
        </div>
    );
};
