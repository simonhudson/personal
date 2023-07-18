import breakpoints from './breakpoints';

const applyStyles = (viewportWidth: number, styles: string): string => `@media (min-width: ${viewportWidth}px) { ${styles} }`;

type Media = {
	phonePortrait: (string) => string;
	tabletPortrait: (string) => string;
	tabletLandscape: (string) => string;
	desktop: (string) => string;
}

const media: Media = {
	phonePortrait: (styles) => applyStyles(breakpoints['phone-p'], styles),
	tabletPortrait: (styles) => applyStyles(breakpoints['tablet-p'], styles),
	tabletLandscape: (styles) => applyStyles(breakpoints['tablet-l'], styles),
	desktop: (styles) => applyStyles(breakpoints.desktop, styles)
};

export default media;