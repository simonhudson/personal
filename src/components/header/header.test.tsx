import { Header } from './header';
import { screen, render } from '@testing-library/react';

describe('Header', () => {
	it(`should render as expected`, () => {
		// When
		render(<Header />);

		// Then
		expect(screen.getByRole('banner')).toBeInTheDocument();
	});
});
