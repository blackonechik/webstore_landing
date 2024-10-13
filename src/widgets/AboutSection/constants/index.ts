export const leftVariants = {
	initial: { opacity: 0, x: -30 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export const rightVariants = {
	initial: { opacity: 0, x: 30 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 } },
};