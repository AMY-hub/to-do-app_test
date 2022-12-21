import cn from 'classnames';
import { EventSlideProps } from './props';

import styles from './style.module.scss';

export const EventSlide = ({ date, info, className, ...rest }: EventSlideProps): JSX.Element => {

    return (
        <div className={cn(styles.slide, className)} {...rest}>
            <div className={styles.slideTitle}>{date}</div>
            <div className={styles.slideText}>{info}</div>
        </div>
    );
};
