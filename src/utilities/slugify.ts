export const slugify = (str: string) =>
	str
		? str
				.toLowerCase()
				.trim()
				.replace(/[ ]{1,}/g, '-')
		: '';
