import cn from 'classnames';
import { TitleProps } from './props';

import styles from './style.module.scss';

export const Title = ({ children, className, ...rest }: TitleProps): JSX.Element => {
    return (
        <h2 className={cn(styles.title, className)} {...rest}>
            {children}
        </h2>
    );
};