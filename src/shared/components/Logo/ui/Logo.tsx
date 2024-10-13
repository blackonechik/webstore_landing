import clsx from 'clsx';
import styles from "./Logo.module.scss"
import { FC } from 'react';
import { LogoProps } from '../types';

export const Logo: FC<LogoProps> = ({ className }) => {
	return (
		<span className={clsx(styles["company-name"], className)}>
			<span className={styles["company-name__first"]}>Web</span>
			<span className={styles["company-name__second"]}>Store</span>
		</span>
	)
}
