import React from 'react';
import About from './index';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';
import { act } from 'react-test-renderer';

describe('About', () => {
	const assertCommonElements = () => {
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About me');
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
		].forEach((item) => {
			expect(screen.getByText(item.text)).toHaveAttribute('href', item.href);
		});
	};

	it('should render as expected when CMS call successful', async () => {
		// When
		await initialise();

		// Then
		assertCommonElements();
		expect(screen.getByText('Foo')).toBeInTheDocument();
	});

	it('should render as expected when CMS call not successful', async () => {
		// Given
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(undefined),
				status: 404,
			}),
		) as jest.Mock;

		// When
		await initialise();

		// Then
		assertCommonElements();
		expect(screen.getByText('Foo')).not.toBeInTheDocument();
	});

	const initialise = async () => await act(async () => render(<About />));
});
