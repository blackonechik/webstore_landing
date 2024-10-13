import { Button } from 'shared/components/Button';
import styles from './HeroSection.module.scss';
import mac from '/assets/mac.webp';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { imageVariants, titleVariants } from '../constants';

export const HeroSection: FC = () => {
	return (
		<section className={styles["hero"]}>
			<div className={styles["hero__container"]}>
				<motion.h1
					className={styles["hero__title"]}
					variants={titleVariants}
					initial="initial"
					animate="animate"
				>
					<span className={styles["hero__title--primary"]}>
						Корпоративный сайт
					</span>
					от
					<span className={styles["hero__title--cost"]}>
						50 000
					</span>
					рублей
				</motion.h1>
				<motion.div
					variants={titleVariants}
					initial="initial"
					animate="animate"
					transition={{ delay: 0.2 }}
				>
					<Button variant="primary">Заказать сайт</Button>
				</motion.div>
				<motion.img
					className={styles["hero__image"]}
					src={mac}
					variants={imageVariants}
					initial="initial"
					animate="animate"
				/>
			</div>
		</section>
	);
};
