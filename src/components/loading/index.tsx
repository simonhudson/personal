import React from 'react';
import { StyledLoading } from './index.styles';
import { palette } from '@/src/theme/palette';

type LoadingProps = {
	isLoading?: boolean;
};

const Loading = ({ isLoading }: LoadingProps) => {
	if (!isLoading) return null;

	return (
		<StyledLoading viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" role="img" aria-label="Loading">
			<path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill={`${palette.primary.bodyText}`} stroke="none">
				<animateTransform
					attributeName="transform"
					type="rotate"
					dur="1s"
					repeatCount="indefinite"
					keyTimes="0;1"
					values="0 50 51;360 50 51"
				></animateTransform>
			</path>
		</StyledLoading>
	);
};

export default Loading;
