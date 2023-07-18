import { rem } from 'polished';
import font from './font';
const BASE_SIZE = font.size;

type Spacing = {
	default: number;
	xsm: number;
	sm: number;
	md: number;
	lg: number;
	xlg: number;
	xxlg: number;
	xxxlg: number;
}

const spacing: Spacing = {
	default: BASE_SIZE,
	xsm: BASE_SIZE / 4,
	sm: BASE_SIZE / 2,
	md: BASE_SIZE * 2,
	lg: BASE_SIZE * 4,
	xlg: BASE_SIZE * 6,
	xxlg: BASE_SIZE * 8,
	xxxlg: BASE_SIZE * 12,
};

let spacingObject = {};

for (let key in spacing) spacingObject[key] = rem(spacing[key]);

export default spacingObject;
