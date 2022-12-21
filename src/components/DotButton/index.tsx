import cn from 'classnames';
import { gsap } from 'gsap';
import { MouseEvent, useLayoutEffect, useRef } from 'react';
import { DotButtonProps } from './props';

import styles from './style.module.scss';

export const DotButton = ({ text, label, setPeriod, isActive = false, className, ...rest }: DotButtonProps): JSX.Element => {

    const btnRef = useRef<HTMLButtonElement | null>(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline();
        const ctx = gsap.context(() => {
            if (isActive) {
                tl.to(btnRef.current, {
                    backgroundColor: 'rgb(244, 245, 249)',
                    border: '1px solid rgba(66, 86, 122, 0.5)',
                    scale: 1,
                    transformOrigin: 'center center',
                    delay: 1
                })
                    .to(btnRef.current, {
                        '--opacity': 1,
                    });
            }
        }, btnRef);

        return () => ctx.revert();
    }, [isActive]);

    const onEnter = ({ currentTarget }: MouseEvent) => {
        gsap.to(currentTarget, {
            backgroundColor: 'rgb(244, 245, 249)',
            border: '1px solid rgba(66, 86, 122, 0.5)',
            scale: 1,
            transformOrigin: 'center center'
        });
    };

    const onLeave = ({ currentTarget }: MouseEvent) => {
        gsap.to(currentTarget, {
            backgroundColor: 'rgb(66, 86, 122)',
            border: 'none',
            scale: 0.11
        });
    };

    return (
        <button className={cn(styles.dotBtn, className, {
            [styles.dotBtn_active]: isActive
        })}
            data-label={label}
            aria-label={`К периоду ${text}-${label}`}
            onMouseEnter={isActive ? undefined : onEnter}
            onMouseLeave={isActive ? undefined : onLeave}
            onClick={() => setPeriod((+text) - 1)}
            ref={btnRef}
            {...rest}>
            <span>{text}</span>
        </button>
    );
};
