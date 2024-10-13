
import { FC } from 'react';
import { LayoutProps } from '../types';
import { Header } from 'widgets/Header';
import styles from './Layout.module.scss';
import { Footer } from 'widgets/Footer';

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles["main"]}>
				{children}
			</main>
			<Footer/>
		</>
	)
}