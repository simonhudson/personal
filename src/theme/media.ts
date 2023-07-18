import breakpoints from './breakpoints';

const applyStyles = (viewportWidth: number, styles: string) => `@media (min-width: ${viewportWidth}px) { ${styles} }`;

const media = {
	phonePortrait: (styles) => applyStyles(breakpoints['phone-p'], styles),
	tabletPortrait: (styles) => applyStyles(breakpoints['tablet-p'], styles),
	tabletLandscape: (styles) => applyStyles(breakpoints['tablet-l'], styles),
	desktop: (styles) => applyStyles(breakpoints.desktop, styles)
};

export default media;