import { Footer } from './footer';
import { screen, render } from '@testing-library/react';

jest.mock('@/src/components/music/music');

describe('Footer', () => {
	it(`should render as expected`, () => {
		// When
		render(<Footer />);

		// Then
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
		expect(screen.getByText('Simon Hudson', { exact: false })).toBeInTheDocument();
	});
});
