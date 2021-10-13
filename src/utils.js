

export function css(styles = {}) {
	const toString = key => `${key}: ${styles[key]}`;
	return Object.keys(styles).map(toString).join(';');
}