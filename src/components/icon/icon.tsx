import { FileUser, Github, Linkedin } from 'lucide-react';
import { type IconNames } from '@/src/components/about/links';

type IconProps = {
	name: IconNames;
};

export const Icon = ({ name }: IconProps) => {
	let icon;
	const color = '#fff';
	const strokeWidth = 1.5;

	switch (name) {
		case 'cv':
			icon = <FileUser aria-hidden={true} color={color} strokeWidth={strokeWidth} />;
			break;
		case 'github':
			icon = <Github aria-hidden={true} color={color} strokeWidth={strokeWidth} />;
			break;
		case 'linkedin':
			icon = <Linkedin aria-hidden={true} color={color} strokeWidth={strokeWidth} />;
			break;
		default:
			break;
	}
	return icon;
};
