import breakpoints from './breakpoints';

const applyStyles = (viewportWidth, styles) => `@media (min-width: ${viewportWidth}px) { ${styles} }`;

module.exports = {
	phonePortrait(styles) {
		return applyStyles(breakpoints['phone-p'], styles);
	},
	tabletPortrait(styles) {
		return applyStyles(breakpoints['tablet-p'], styles);
	},
	tabletLandscape(styles) {
		return applyStyles(breakpoints['tablet-l'], styles);
	},
	desktop(styles) {
		return applyStyles(breakpoints.desktop, styles);
	},
};
