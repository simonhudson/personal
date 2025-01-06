import { Hero } from './hero';
import { screen, render } from '@testing-library/react';

describe('Hero', () => {
	it(`should render as expected`, () => {
		// When
		render(<Hero />);

		// Then
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Hello, my name's Simon Hudson/);
		expect(screen.getByRole('paragraph')).toHaveTextContent(
			`I am an experienced Full Stack Developer who uses HTML, CSS and TypeScript to create accessible and usable websites and applications.`,
		);
	});
});
