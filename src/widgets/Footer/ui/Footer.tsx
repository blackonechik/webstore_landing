import { FC } from 'react';
import styles from "./Footer.module.scss"
import clsx from 'clsx';

export const Footer: FC = () => {
	return (
		<footer className={styles["footer"]} id='contacts'>
			<div className={styles["footer__wrapper"]}>
				<div className={styles["footer__container"]}>
					<address className={styles["footer__address"]}>
						<div className={styles["footer__left"]}>
							<div className={styles["footer__text-container"]}>
								<strong className={clsx(styles["footer__title"], styles["footer__title--left"])}>Адрес:</strong>
								<span className={styles["footer__text"]}>г. Москва, ул.&nbsp;Дербеневская,&nbsp;дом&nbsp;1,&nbsp;строение&nbsp;6,&nbsp;подъезд&nbsp;4,&nbsp;этаж&nbsp;2.</span>
							</div>
							<div className={styles["footer__text-container"]}>
								<strong className={clsx(styles["footer__title"], styles["footer__title--left"])}>Телефон:</strong>
								<span className={styles["footer__phones"]}>
									<a href="tel:+74959260126">
										+7 (495) 926-01-26
									</a>
									<a href="tel:+74956460094">
										+7 (495) 646-00-94
									</a>
								</span>
							</div>
						</div>
						<div className={styles["footer__right"]}>
							<div className={styles["footer__text-container"]}>
								<strong className={styles["footer__title"]}>
									E-mail:
								</strong>
								<a className={styles["footer__email"]} href="mailto:info@nologostudio.ru">
									info@nologostudio.ru
								</a>
							</div>
							<div className={styles["footer__text-container"]}>
								<strong className={styles["footer__title"]}>
									Skype:
								</strong>
								<a href="https://join.skype.com/invite/alex-trainer">
									alex-trainer
								</a>
							</div>
							<span className={styles["footer__copyright"]}>© 1997-2014 WebStore</span>
						</div>
					</address>
				</div>

			</div>
		</footer>
	)
}