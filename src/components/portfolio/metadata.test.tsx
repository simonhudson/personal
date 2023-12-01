import React from 'react';
import { Metadata } from './metadata';
import type { MetadataProps } from './metadata';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import cloneDeep from 'lodash/cloneDeep';

const baseProps: MetadataProps = {
	categories: [
		{
			items: ['Bruce', 'Clarence', 'Steve'],
			title: 'Made',
		},
		{
			items: ['Mick', 'Keith', 'Ronnie', 'Charlie'],
			title: 'Tested',
		},
		{
			items: ['Bryson', 'Hughes', 'Eustace'],
			title: 'Built',
		},
	],
	slug: 'some-slug',
};

describe('Metadata', () => {
	let props: MetadataProps;

	beforeEach(() => {
		props = cloneDeep(baseProps);
	});

	it(`should render as expected`, () => {
		// When
		initialise(props);

		// Then
		const metadataHeadings = screen.getAllByRole('heading', { level: 4 });
		expect(metadataHeadings.at(0)).toHaveTextContent('Made with');
		expect(metadataHeadings.at(0)).toHaveAttribute('id', 'some-slug-Made-with');
		expect(metadataHeadings.at(1)).toHaveTextContent('Tested with');
		expect(metadataHeadings.at(1)).toHaveAttribute('id', 'some-slug-Tested-with');
		expect(metadataHeadings.at(2)).toHaveTextContent('Built with');
		expect(metadataHeadings.at(2)).toHaveAttribute('id', 'some-slug-Built-with');

		const listOne = screen.getAllByRole('list').at(0);
		expect(listOne).toHaveAttribute('aria-labelledby', 'some-slug-Made-with');
		const listOneItems = within(listOne).getAllByRole('listitem');
		expect(listOneItems.at(0)).toHaveTextContent('Bruce');
		expect(listOneItems.at(1)).toHaveTextContent('Clarence');
		expect(listOneItems.at(2)).toHaveTextContent('Steve');

		const listTwo = screen.getAllByRole('list').at(1);
		expect(listTwo).toHaveAttribute('aria-labelledby', 'some-slug-Tested-with');
		const listTwoItems = within(listTwo).getAllByRole('listitem');
		expect(listTwoItems.at(0)).toHaveTextContent('Mick');
		expect(listTwoItems.at(1)).toHaveTextContent('Keith');
		expect(listTwoItems.at(2)).toHaveTextContent('Ronnie');
		expect(listTwoItems.at(3)).toHaveTextContent('Charlie');

		const listThree = screen.getAllByRole('list').at(2);
		expect(listThree).toHaveAttribute('aria-labelledby', 'some-slug-Built-with');
		const listThreeItems = within(listThree).getAllByRole('listitem');
		expect(listThreeItems.at(0)).toHaveTextContent('Bryson');
		expect(listThreeItems.at(1)).toHaveTextContent('Hughes');
		expect(listThreeItems.at(2)).toHaveTextContent('Eustace');
	});

	it('should not render when list has no items', () => {
		// Given
		const newProps = cloneDeep(props);
		newProps.categories = newProps.categories.filter((item) => item.title !== 'Made');

		// When
		initialise(newProps);

		// Then
		const metadataHeadings = screen.getAllByRole('heading', { level: 4 });
		expect(metadataHeadings.at(0)).toHaveTextContent('Tested with');
		expect(metadataHeadings.at(0)).toHaveAttribute('id', 'some-slug-Tested-with');
		expect(metadataHeadings.at(1)).toHaveTextContent('Built with');
		expect(metadataHeadings.at(1)).toHaveAttribute('id', 'some-slug-Built-with');

		const listTwo = screen.getAllByRole('list').at(0);
		expect(listTwo).toHaveAttribute('aria-labelledby', 'some-slug-Tested-with');
		const listTwoItems = within(listTwo).getAllByRole('listitem');
		expect(listTwoItems.at(0)).toHaveTextContent('Mick');
		expect(listTwoItems.at(1)).toHaveTextContent('Keith');
		expect(listTwoItems.at(2)).toHaveTextContent('Ronnie');
		expect(listTwoItems.at(3)).toHaveTextContent('Charlie');

		const listThree = screen.getAllByRole('list').at(1);
		expect(listThree).toHaveAttribute('aria-labelledby', 'some-slug-Built-with');
		const listThreeItems = within(listThree).getAllByRole('listitem');
		expect(listThreeItems.at(0)).toHaveTextContent('Bryson');
		expect(listThreeItems.at(1)).toHaveTextContent('Hughes');
		expect(listThreeItems.at(2)).toHaveTextContent('Eustace');

		expect(screen.queryByText('Made with')).not.toBeInTheDocument();
		expect(screen.queryByText('Bruce')).not.toBeInTheDocument();
		expect(screen.queryByText('Clarence')).not.toBeInTheDocument();
		expect(screen.queryByText('Steve')).not.toBeInTheDocument();
	});

	const initialise = (props: MetadataProps) => render(<Metadata {...props} />);
});
