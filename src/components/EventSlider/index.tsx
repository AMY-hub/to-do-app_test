import cn from 'classnames';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import { EventSlide } from '../EventSlide';
import { ArrowButton } from '../ArrowButton';
import { EventSliderProps } from './props';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderStyle.scss';
import styles from './style.module.scss';

export const EventSlider = ({ sliderId, topic, events, className, ...rest }: EventSliderProps): JSX.Element => {
    const nextBtnRef = useRef<HTMLButtonElement | null>(null);
    const prevBtnRef = useRef<HTMLButtonElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sliderRef.current, {
                opacity: 0,
                duration: 1,
            });
        }, sliderRef);

        return () => ctx.revert();
    }, [sliderId, events]);

    const slides = events.map(e => (
        <SwiperSlide
            className={styles.sliderSlide}
            key={e.date}
        >
            <EventSlide date={e.date} info={e.event} />
        </SwiperSlide>
    ));

    const handleProgress = (progress: number) => {
        if (nextBtnRef.current && prevBtnRef.current) {
            if (progress <= 0) {
                prevBtnRef.current.style.opacity = '0';
            }
            if (progress === 1) {
                nextBtnRef.current.style.opacity = '0';
            }
            if (progress > 0 && progress < 1) {
                prevBtnRef.current.style.opacity = '1';
                nextBtnRef.current.style.opacity = '1';
            }
        }
    };

    return (
        <div className={cn(styles.slider, className)}
            {...rest}
            ref={sliderRef}>
            <span className={styles.sliderTopic}>{topic}</span>
            <ArrowButton
                arrow='left'
                styleType='blue'
                className={cn(styles.sliderNav_prev, `prev_${sliderId}`)}
                ref={prevBtnRef} />
            <Swiper
                className={styles.sliderWrapper}
                modules={[Navigation, Pagination, A11y]}
                navigation={{
                    prevEl: `.prev_${sliderId}`,
                    nextEl: `.next_${sliderId}`,
                }}
                pagination={{
                    clickable: true,
                    el: `.pagination_${sliderId}`,
                }}
                spaceBetween={20}
                breakpoints={{
                    525: {
                        spaceBetween: 40
                    },
                    725: {
                        spaceBetween: 80
                    }
                }}
                slidesPerView={'auto'}
                onProgress={(_, progress) => handleProgress(progress)}
                draggable
                grabCursor
                id={sliderId}
            >
                <div className="">{slides}</div>
            </Swiper>
            <ArrowButton
                arrow='right'
                styleType='blue'
                className={cn(styles.sliderNav_next, `next_${sliderId}`)}
                ref={nextBtnRef} />
        </div>
    );
};
