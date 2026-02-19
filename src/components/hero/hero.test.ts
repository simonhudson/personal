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
import { getByRole } from '@testing-library/dom';

test('Hero renders heading', async () => {
	const container = await AstroContainer.create();
	// Dynamically import the Astro component
	const { default: Hero } = await import('./hero.astro');
	const html = await container.renderToString(Hero, {
		slots: {
			default: 'Hero content',
		},
	});

	// Create a DOM from the rendered HTML
	const dom = document.createElement('div');
	dom.innerHTML = html;

	// Query the heading by role
	const heading = getByRole(dom, 'heading', { level: 1, name: /Hello, my name is Simon Hudson/ });
	expect(heading).toBeTruthy();
});
// import { expect, test } from 'vitest';
