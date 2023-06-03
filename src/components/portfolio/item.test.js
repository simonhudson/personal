import React from 'react';
import Item from './item';
import { render } from 'test/utils';
import { screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import { cloneDeep } from 'lodash';

const baseProps = {
	slug: 'some-slug',
	title: 'Foo title',
	client: 'Some client',
	url: 'http://foo.com',
	metadata: [
		{
			label: 'Made with',
			items: ['Bruce', 'Clarence', 'Steve'],
		},
		{
			label: 'Tested with',
			items: ['Mick', 'Keith', 'Ronnie', 'Charlie'],
		},
		{
			label: 'Built with',
			items: ['Bryson', 'Hughes', 'Thorne'],
		},
	],
	date: '2023',
};
describe('Item', () => {
	let props;

	beforeEach(() => {
		props = cloneDeep(baseProps);
	});

	it(`should not render when set to omit`, () => {
		// Given
		props.omit = true;

		// When
		initialise(props);

		// Then
		expect(screen.queryByTestId('portfolio-item')).not.toBeInTheDocument();
	});

	describe(`should render with expected`, () => {
		it('image', () => {
			// When
			initialise(props);

			// Then
			expect(screen.queryByTestId('portfolio-item')).toBeInTheDocument();

			const image = screen.getByRole('img');
			expect(image).toHaveAttribute('alt', 'Foo title screen shot');
			expect(image).toHaveAttribute('src', '/images/some-slug.png');
		});

		it('heading', () => {
			// When
			initialise(props);

			// Then
			expect(screen.queryByTestId('portfolio-item')).toBeInTheDocument();
			expect(screen.getByTestId('portfolio-item__client').textContent).toEqual('Some client / 2023');
			expect(screen.getAllByRole('heading')[0].textContent).toEqual('Foo title');
		});

		it('metadata', () => {
			// When
			initialise(props);

			// Then
			expect(screen.queryByTestId('portfolio-item')).toBeInTheDocument();

			expect(screen.getAllByRole('heading')[1].textContent).toEqual('Made with');
			const listOneItems = within(screen.getAllByRole('list')[0]).getAllByRole('listitem');
			expect(listOneItems[0].textContent).toEqual('Bruce');
			expect(listOneItems[1].textContent).toEqual('Clarence');
			expect(listOneItems[2].textContent).toEqual('Steve');

			expect(screen.getAllByRole('heading')[2].textContent).toEqual('Tested with');
			const listTwoItems = within(screen.getAllByRole('list')[1]).getAllByRole('listitem');
			expect(listTwoItems[0].textContent).toEqual('Mick');
			expect(listTwoItems[1].textContent).toEqual('Keith');
			expect(listTwoItems[2].textContent).toEqual('Ronnie');
			expect(listTwoItems[3].textContent).toEqual('Charlie');

			expect(screen.getAllByRole('heading')[3].textContent).toEqual('Built with');
			const listThreeItems = within(screen.getAllByRole('list')[2]).getAllByRole('listitem');
			expect(listThreeItems[0].textContent).toEqual('Bryson');
			expect(listThreeItems[1].textContent).toEqual('Hughes');
			expect(listThreeItems[2].textContent).toEqual('Thorne');
		});

		describe('link', () => {
			it('for Github URL', () => {
				// Given
				props.url = 'https://github.com/simonhudson/foo';

				// When
				initialise(props);

				// Then
				const link = screen.getByRole('link');
				expect(link.textContent).toEqual('View Foo title on Github');
				expect(link).toHaveAttribute('href', 'https://github.com/simonhudson/foo');
			});

			it('for non-Github URL', () => {
				// When
				initialise(props);

				// Then
				const link = screen.getByRole('link');
				expect(link.textContent).toEqual('View Foo title site');
				expect(link).toHaveAttribute('href', 'http://foo.com');
			});

			it('for archived URL', () => {
				// Given
				props.isArchived = true;

				// When
				initialise(props);

				// Then
				const link = screen.getByRole('link');
				expect(link.textContent).toEqual('View Foo title site (archived)');
				expect(link).toHaveAttribute('href', 'http://foo.com');
			});
		});
	});

	const initialise = (props) => render(<Item {...props} />);
});
