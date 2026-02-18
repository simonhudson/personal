// import { describe, it, expect } from 'vitest';
// // import { Hero } from './hero';
// // import { screen, render } from '@testing-library/react';

// // describe('Hero', () => {
// // 	it(`should render as expected`, () => {
// // 		// When
// // 		render(<Hero />);

// // 		// Then
// // 		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Hello, my name's Simon Hudson/);
// // 		expect(screen.getByRole('paragraph')).toHaveTextContent(
// // 			`I am an experienced Full Stack Developer who uses HTML, CSS and TypeScript to create accessible and usable websites and applications.`,
// // 		);
// // 	});
// // });

import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Hero from './hero.astro';

test('Hero', async () => {
	const container = await AstroContainer.create();
	const result = await container.renderToString(Hero, {
		slots: {
			default: 'Hero content',
		},
	});

	expect(result).toContain('Simon Hudson');
});
