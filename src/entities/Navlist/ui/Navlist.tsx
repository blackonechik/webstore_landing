import { FC } from 'react';
import { listVariants, NAVLIST_ITEMS } from '../constants';
import styles from './Navlist.module.scss';
import { motion } from 'framer-motion';

export const Navlist: FC = () => {
	return (
		<nav className={styles["nav"]}>
			<ul className={styles["nav__list"]}>
				{NAVLIST_ITEMS.map(({ title, path }, i) => (
					<motion.li
						key={i}
						variants={listVariants}
						initial="initial"
						animate="animate"
						custom={i}
					>
						<a className={styles["nav__link"]} href={path}>{title}</a>
					</motion.li>
				))}
			</ul>
		</nav>
	);
};
