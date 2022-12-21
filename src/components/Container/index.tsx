import cn from 'classnames';
import { ContainerProps } from './props';

import styles from './style.module.scss';

export const Container = ({ children, className, ...rest }: ContainerProps): JSX.Element => {
    return (
        <div className={cn(styles.container, className)} {...rest}>
            {children}
        </div>
    );
};
