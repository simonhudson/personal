import { breakpoints } from './breakpoints';

const applyStyles = (viewportWidth: number, styles: string): string =>
	`@media (min-width: ${viewportWidth}px) { ${styles} }`;

interface Media {
	phonePortrait: (string) => string;
	phoneLandscape: (string) => string;
	tabletPortrait: (string) => string;
	tabletLandscape: (string) => string;
	desktop: (string) => string;
}

export const media: Media = {
	phonePortrait: (styles) => applyStyles(breakpoints['phone-p'], styles),
	phoneLandscape: (styles) => applyStyles(breakpoints['phone-l'], styles),
	tabletPortrait: (styles) => applyStyles(breakpoints['tablet-p'], styles),
	tabletLandscape: (styles) => applyStyles(breakpoints['tablet-l'], styles),
	desktop: (styles) => applyStyles(breakpoints.desktop, styles),
};
