import { lazy } from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { useMathMedia } from '../../hooks/useMathMedia';
import { Countdown } from '../Countdown';
import { EventSlider } from '../EventSlider';
import { PeriodControls } from '../PeriodControls';
import { Title } from '../Title';
// import { DotsCircle } from '../DotsCircle';
const DotsCircle = lazy(() => import(/* webpackChunkName: "DotsCircle" */ '../DotsCircle')
    .then(module => ({ default: module.DotsCircle })));
import { DatesCarouselProps } from './props';

import styles from './style.module.scss';

export const DatesCarousel = ({ carouselId, carouselTitle, timePeriods, className, ...rest }: DatesCarouselProps): JSX.Element => {

    const [currentPeriodIdx, setCurrentPeriodIdx] = useState<number>(0);
    const isMobile = useMathMedia('(max-width: 525px)');

    return (
        <div className={cn(styles.carousel, className)} {...rest}>
            <Title>{carouselTitle}</Title>
            <div className={styles.carouselDataWrapper}>
                <div className={styles.carouselCountDown}>
                    <Countdown
                        number={timePeriods[currentPeriodIdx].period[0]} />
                    <Countdown
                        number={timePeriods[currentPeriodIdx].period[1]}
                        styleType='accentSecond' />
                </div>
                {!isMobile &&
                    <DotsCircle
                        timePeriods={timePeriods}
                        currentPeriodIdx={currentPeriodIdx}
                        setCurrentPeriodIdx={setCurrentPeriodIdx}
                    />}
            </div>
            <div className={styles.carouselSliderWrapper}>
                <PeriodControls
                    sliderId={carouselId}
                    className={styles.carouselControls}
                    totalAmount={timePeriods.length}
                    activePeriod={currentPeriodIdx}
                    setActivePeriod={setCurrentPeriodIdx}
                />
                <EventSlider
                    events={timePeriods[currentPeriodIdx].events}
                    topic={timePeriods[currentPeriodIdx].topic}
                    sliderId={carouselId}
                />
            </div>

        </div>
    );
};