export const headerVariants = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export const phoneVariants = {
	initial: { opacity: 0, x: 50 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 } },
};