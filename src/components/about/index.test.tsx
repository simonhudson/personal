import React from 'react';
import About from './index';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';
import { act } from 'react-test-renderer';
import { cloneDeep } from 'lodash';

const baseProps = {
	aboutData: '<p>Foo</p>',
};

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
		].forEach((item, index) => {
			const link = screen.getAllByRole('link')[index];
			expect(link).toHaveAttribute('href', item.href);
			expect(link).toHaveTextContent(item.text);
		});
		expect(screen.getByAltText('Simon Hudson')).toBeInTheDocument();
	};

	it('should render as expected when CMS call successful', async () => {
		// Given
		const props = cloneDeep(baseProps);

		// When
		await initialise(props);

		// Then
		assertCommonElements();
		expect(screen.getByText('Foo')).toBeInTheDocument();
	});

	it('should render as expected when CMS call not successful', async () => {
		// Given
		const props = cloneDeep(baseProps);
		delete props.aboutData;

		// When
		await initialise(props);

		// Then
		assertCommonElements();
		expect(screen.queryByText('Foo')).not.toBeInTheDocument();
	});

	const initialise = async (props) => await act(async () => render(<About aboutData={props.aboutData} />));
});
