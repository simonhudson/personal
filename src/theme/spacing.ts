import { rem } from 'polished';
import { font } from './font';
export const BASE_SIZE = font.size;

type SpacingPx = {
	xsm: number;
	sm: number;
	default: number;
	md: number;
	lg: number;
	xlg: number;
	xxlg: number;
	xxxlg: number;
};

export const spacingPx: SpacingPx = {
	xsm: BASE_SIZE / 4,
	sm: BASE_SIZE / 2,
	default: BASE_SIZE,
	md: BASE_SIZE * 2,
	lg: BASE_SIZE * 4,
	xlg: BASE_SIZE * 6,
	xxlg: BASE_SIZE * 8,
	xxxlg: BASE_SIZE * 12,
};

type SpacingRem = {
	xsm: string;
	sm: string;
	default: string;
	md: string;
	lg: string;
	xlg: string;
	xxlg: string;
	xxxlg: string;
};

export const spacingRem: SpacingRem = {
	xsm: rem(spacingPx.xsm),
	sm: rem(spacingPx.sm),
	default: rem(spacingPx.default),
	md: rem(spacingPx.md),
	lg: rem(spacingPx.lg),
	xlg: rem(spacingPx.xlg),
	xxlg: rem(spacingPx.xxlg),
	xxxlg: rem(spacingPx.xxxlg),
};
