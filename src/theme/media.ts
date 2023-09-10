import { breakpoints } from './breakpoints';

const applyStyles = (viewportWidth: number, styles: string): string =>
	`@media (min-width: ${viewportWidth}px) { ${styles} }`;

interface Media {
	phonePortrait: (string: string) => string;
	phoneLandscape: (string: string) => string;
	tabletPortrait: (string: string) => string;
	tabletLandscape: (string: string) => string;
	desktop: (string: string) => string;
}

export const media: Media = {
	phonePortrait: (styles) => applyStyles(breakpoints['phone-p'], styles),
	phoneLandscape: (styles) => applyStyles(breakpoints['phone-l'], styles),
	tabletPortrait: (styles) => applyStyles(breakpoints['tablet-p'], styles),
	tabletLandscape: (styles) => applyStyles(breakpoints['tablet-l'], styles),
	desktop: (styles) => applyStyles(breakpoints.desktop, styles),
};
