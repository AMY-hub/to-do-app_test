import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { ArrowButtonProps } from './props';
import Arrow from '../../assets/icons/arrowRight.svg';

import styles from './style.module.scss';

export const ArrowButton = forwardRef(({ arrow, styleType = 'gray', arrSize = 's', className, ...rest }: ArrowButtonProps, ref: ForwardedRef<HTMLButtonElement>): JSX.Element => {

    const s = {
        width: 5,
        height: 10,
    };

    const m = {
        width: 10,
        height: 14,
    };

    return (
        <button
            className={cn(styles.arrowBtn, styles[styleType], styles[arrow], className)}
            aria-label={arrow === 'left' ?
                'К предыдущему слайду' : 'К следующему слайду'}
            {...rest}
            ref={ref}
        >
            <Arrow {...(arrSize === 'm' ? m : s)} />
        </button>
    );
});
