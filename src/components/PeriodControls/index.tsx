import cn from 'classnames';
import { useMemo } from 'react';
import { ArrowButton } from '../ArrowButton';
import { PeriodControlsProps } from './props';

import styles from './style.module.scss';

export const PeriodControls = ({ sliderId, totalAmount, activePeriod, setActivePeriod, className, ...rest }: PeriodControlsProps): JSX.Element => {

    const total = useMemo(() => String(totalAmount).padStart(2, '0'), [totalAmount]);
    const current = useMemo(() => String(activePeriod + 1).padStart(2, '0'), [activePeriod]);

    const handlePeriodChanging = (dir: 'next' | 'prev') => {
        if (dir === 'prev' && activePeriod > 0) {
            setActivePeriod(activePeriod - 1);
        }
        if (dir === 'next' && activePeriod < totalAmount - 1) {
            setActivePeriod(activePeriod + 1);
        }
    };

    return (
        <div className={cn(styles.controls, className)} {...rest}>
            <div className={styles.controlsCount}>
                <span>{current}</span>/
                <span>{total}</span>
            </div>

            <div className={styles.controlsBtns}>
                <ArrowButton
                    className={styles.controlsBtn}
                    arrow='left'
                    arrSize='m'
                    disabled={activePeriod === 0}
                    onClick={() => handlePeriodChanging('prev')} />
                <ArrowButton
                    className={styles.controlsBtn}
                    arrow='right'
                    arrSize='m'
                    disabled={activePeriod === totalAmount - 1}
                    onClick={() => handlePeriodChanging('next')} />
            </div>

            <div className={cn(styles.sliderPag, `pagination_${sliderId}`)}></div>
        </div>
    );
};
