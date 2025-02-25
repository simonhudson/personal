import React from 'react';
import { About } from './about';
import { screen, render, within } from '@testing-library/react';
import { AboutMock } from '@/test/mocks/cms/about.mock';

jest.mock('@/src/components/music/music', () => ({
	Music: () => <div>Music</div>,
}));

describe('About', () => {
	it('should render expected copy', async () => {
		// When
		render(<About data={AboutMock} />);
		// Then
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About me');
		const paragraphs = screen.getAllByRole('paragraph');
		expect(paragraphs.length).toEqual(2);

		expect(paragraphs[0]).toHaveTextContent('Foo bar some link text');
		const paragraphLink = within(paragraphs[0]).getByRole('link');
		expect(paragraphLink).toHaveTextContent('some link text');
		expect(paragraphLink).toHaveAttribute('href', 'https://foo.com');

		expect(paragraphs[1]).toHaveTextContent('Some extra copy in a second paragraph');
	});

	it(`should render expected links`, async () => {
		// When
		render(<About data={AboutMock} />);

		// Then
		const links = within(screen.getByRole('list')).getAllByRole('link');
		[
			{
				text: 'Download my CV',
				href: '/files/Simon_Hudson_CV.pdf',
			},
			{
				text: 'Github profile',
				href: 'https://github.com/simonhudson',
			},
			{
				text: 'LinkedIn profile',
				href: 'https://www.linkedin.com/in/hellosimonhudson/',
			},
		].forEach((item, index) => {
			expect(links[index]).toHaveTextContent(item.text);
			expect(links[index]).toHaveAttribute('href', item.href);
		});
	});
});
