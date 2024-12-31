import { FileUser, Github, Linkedin } from 'lucide-react';
import { type IconNames } from '@/src/components/about/links';

type IconProps = {
	name: IconNames;
};

export const Icon = ({ name }: IconProps) => {
	const props = {
		'aria-hidden': true,
		color: '#fff',
		'data-testid': 'icon',
		role: 'img',
		strokeWidth: 1.5,
	};

	let icon;

	switch (name) {
		case 'cv':
			icon = <FileUser {...props} />;
			break;
		case 'github':
			icon = <Github {...props} />;
			break;
		case 'linkedin':
			icon = <Linkedin {...props} />;
			break;
		default:
			break;
	}
	return icon;
};
