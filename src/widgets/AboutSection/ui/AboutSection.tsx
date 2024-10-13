import { Logo } from 'shared/components/Logo';
import styles from './AboutSection.module.scss';
import camera from '/assets/camera.webp';
import notebook from '/assets/notebook.webp';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { leftVariants, rightVariants } from '../constants';

export const AboutSection: FC = () => {
	return (
		<section className={styles["about"]} id='about'>
			<div className={styles["about__container"]}>
				<motion.div
					className={styles["about__left"]}
					variants={leftVariants}
					initial="initial"
					animate="animate"
				>
					<h2 className={styles["about__title"]}>О компании</h2>
					<div className={styles['about__text-container']}>
						<p className={styles["about__text"]}>
							<Logo />
							— многопрофильная студия дизайна, основанная в 2006 году. За эти годы мы успели поработать
							в разных направлениях, реализовали множество проектов, достигли профессиональных высот и собрали внушительное портфолио.
							Сегодня мы сосредоточились на том, что нам по-настоящему нравится: дизайн и разработка веб-сайтов
							и мобильных приложений.
						</p>
						<p className={styles["about__text"]}>
							Мы гордимся своей замечательной командой по-настоящему талантливых людей: дизайнеров, программистов, менеджеров, тестировщиков, проектировщиков. Все сотрудники <Logo /> работают в штате, поэтому мы гарантируем, что весь комплекс работ по разработке, созданию, поддержке и продвижению сайтов выполняется строго профессионально
							и качественно.
						</p>
						<p className={styles["about__text"]}>
							Мы уверены, что хорошая, чёткая и последовательная разработка имеет большое значение для эффективного маркетинга. Поэтому предлагаем высококачественный дизайн, удобство и функциональность, адаптированные под каждого клиента в зависимости от его потребностей
							и поставленных бизнес-задач.
						</p>
					</div>
				</motion.div>
				<motion.div
					className={styles["about__right"]}
					variants={rightVariants}
					initial="initial"
					animate="animate"
				>
					<img className={styles["about__image"]} src={camera} alt="Фотоаппарат" aria-hidden />
					<img className={styles["about__image"]} src={notebook} alt='Записная книжка' aria-hidden />
				</motion.div>
			</div>
		</section>
	);
};
