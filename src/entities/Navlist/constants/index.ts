import { NavlistItem } from '../types';

export const NAVLIST_ITEMS: NavlistItem[] = [
	{
		title: 'Компания',
		path: '#about',
	},
	{
		title: 'Услуги',
		path: '#',
	},
	{
		title: 'Работы',
		path: '#',
	},
	{
		title: 'Контакты',
		path: '#contacts',
	}
]

export const listVariants = {
	initial: { opacity: 0, y: 20 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: 'easeInOut',
			delay: i * 0.1, // Задержка для каждого элемента списка
		},
	}),
};