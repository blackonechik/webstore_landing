import { Button } from 'shared/components/Button';
import PhoneIcon from '/assets/phoneIcon.svg';
import { Navlist } from 'entities/Navlist';
import styles from './Header.module.scss';
import { Logo } from 'shared/components/Logo';
import { motion } from 'framer-motion';
import { headerVariants, phoneVariants } from '../constants';

export const Header = () => {
	return (
		<header className={styles["header"]}>
			<div className={styles["header__container"]}>
				<div className={styles["header__top"]}>
					<motion.div
						className={styles["header__logo"]}
						variants={headerVariants}
						initial="initial"
						animate="animate"
					>
						<Logo />
					</motion.div>
					<motion.div
						className={styles["header__left"]}
						variants={phoneVariants}
						initial="initial"
						animate="animate"
					>
						<span className={styles["phone"]}>
							<img className={styles["phone__icon"]} src={PhoneIcon} alt="Телефон" />
							<a className={styles["phone__link"]} href="tel:+74959260126">+7 (495) 926-01-26</a>
						</span>
						<Button variant="secondary">Заказать сайт</Button>
					</motion.div>
				</div>
				<Navlist />
			</div>
		</header>
	);
};
