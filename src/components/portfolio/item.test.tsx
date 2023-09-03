import React from 'react';
import Item from './item';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import cloneDeep from 'lodash/cloneDeep';

const baseProps = {
	builtWith: ['Bryson', 'Hughes', 'Eustace'],
	client: 'Some client',
	date: '2023',
	isArchived: false,
	madeWith: ['Bruce', 'Clarence', 'Steve'],
	omit: false,
	position: 1,
	slug: 'some-slug',
	testedWith: ['Mick', 'Keith', 'Ronnie', 'Charlie'],
	title: 'Foo title',
	url: 'http://foo.com',
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
		expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
	});

	describe(`should render with expected`, () => {
		it('image', () => {
			// When
			initialise(props);

			// Then
			expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();

			const image = screen.getByRole('img');
			expect(image).toHaveAttribute('alt', 'Foo title screen shot');
			expect(image).toHaveAttribute('src', '/images/some-slug.png');
		});

		it('heading', () => {
			// When
			initialise(props);

			// Then
			expect(screen.getByText('Some client / 2023')).toBeInTheDocument();
			expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Foo title');
		});

		it('metadata', () => {
			// When
			initialise(props);

			// Then
			const metadataHeadings = screen.getAllByRole('heading', { level: 4 });
			expect(metadataHeadings.at(0)).toHaveTextContent('Made with');
			expect(metadataHeadings.at(0)).toHaveAttribute('id', 'some-slug-made-with');
			expect(metadataHeadings.at(1)).toHaveTextContent('Tested with');
			expect(metadataHeadings.at(1)).toHaveAttribute('id', 'some-slug-tested-with');
			expect(metadataHeadings.at(2)).toHaveTextContent('Built with');
			expect(metadataHeadings.at(2)).toHaveAttribute('id', 'some-slug-built-with');

			const listOne = screen.getAllByRole('list').at(0);
			expect(listOne).toHaveAttribute('aria-labelledby', 'some-slug-made-with');
			const listOneItems = within(listOne).getAllByRole('listitem');
			expect(listOneItems.at(0)).toHaveTextContent('Bruce');
			expect(listOneItems.at(1)).toHaveTextContent('Clarence');
			expect(listOneItems.at(2)).toHaveTextContent('Steve');

			const listTwo = screen.getAllByRole('list').at(1);
			expect(listTwo).toHaveAttribute('aria-labelledby', 'some-slug-tested-with');
			const listTwoItems = within(listTwo).getAllByRole('listitem');
			expect(listTwoItems.at(0)).toHaveTextContent('Mick');
			expect(listTwoItems.at(1)).toHaveTextContent('Keith');
			expect(listTwoItems.at(2)).toHaveTextContent('Ronnie');
			expect(listTwoItems.at(3)).toHaveTextContent('Charlie');

			const listThree = screen.getAllByRole('list').at(2);
			expect(listThree).toHaveAttribute('aria-labelledby', 'some-slug-built-with');
			const listThreeItems = within(listThree).getAllByRole('listitem');
			expect(listThreeItems.at(0)).toHaveTextContent('Bryson');
			expect(listThreeItems.at(1)).toHaveTextContent('Hughes');
			expect(listThreeItems.at(2)).toHaveTextContent('Eustace');
		});

		describe('link', () => {
			it('for Github URL', () => {
				// Given
				props.githubUrl = 'https://github.com/simonhudson/foo';

				// When
				initialise(props);

				// Then
				const links = screen.getAllByRole('link');
				expect(links.length).toEqual(2);
				expect(links[1]).toHaveTextContent('View Foo title on Github');
				expect(links[1]).toHaveAttribute('href', 'https://github.com/simonhudson/foo');
			});

			it('for non-Github URL', () => {
				// When
				initialise(props);

				// Then
				const links = screen.getAllByRole('link');
				expect(links.length).toEqual(1);
				expect(links[0]).toHaveTextContent('View Foo title site');
				expect(links[0]).toHaveAttribute('href', 'http://foo.com');
			});

			it('for archived URL', () => {
				// Given
				props.isArchived = true;

				// When
				initialise(props);

				// Then
				const links = screen.getAllByRole('link');
				expect(links.length).toEqual(1);
				expect(links[0]).toHaveTextContent('View Foo title site (archived)');
				expect(links[0]).toHaveAttribute('href', 'http://foo.com');
			});
		});
	});

	const initialise = (props) => render(<Item {...props} />);
});
