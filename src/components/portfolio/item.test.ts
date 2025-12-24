// import React from 'react';
// import { Item } from './item';
// import { screen, render } from '@testing-library/react';
// import { within } from '@testing-library/dom';
// import { PortfolioMock } from '@/test/mocks/cms/portfolio.mock';
// import { type IPortfolioItemFields } from '@/src/types/contentful';
// import type { describe, it, expect } from 'vitest';

// describe('Item', () => {
// 	it(`should not render when set to omit`, () => {
// 		// Given
// 		const item = { ...PortfolioMock[0] };
// 		item.omit = true;

// 		// When
// 		initialise(item);

// 		// Then
// 		expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
// 	});

// 	describe(`should render with expected`, () => {
// 		it('image', () => {
// 			// Given
// 			const item = { ...PortfolioMock[0] };

// 			// When
// 			initialise(item);

// 			// Then
// 			expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();

// 			const image = screen.getByRole('img');
// 			expect(image).toHaveAttribute('alt', 'Portfolio Item Foo screen shot');
// 			expect(image.getAttribute('src')).toContain('portfolio-item-foo.png');
// 		});

// 		it('heading', () => {
// 			// Given
// 			const item = { ...PortfolioMock[0] };

// 			// When
// 			initialise(item);

// 			// Then
// 			expect(screen.getByText('Personal / 2016 - 2023')).toBeInTheDocument();
// 			expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Portfolio Item Foo');
// 		});

// 		it('metadata', () => {
// 			// Given
// 			const item = { ...PortfolioMock[0] };

// 			// When
// 			initialise(item);

// 			// Then
// 			const metadataHeadings = screen.getAllByRole('heading', { level: 4 });
// 			expect(metadataHeadings.at(0)).toHaveTextContent('Made with');
// 			expect(metadataHeadings.at(0)).toHaveAttribute('id', 'portfolio-item-foo-Made-with');
// 			expect(metadataHeadings.at(1)).toHaveTextContent('Tested with');
// 			expect(metadataHeadings.at(1)).toHaveAttribute('id', 'portfolio-item-foo-Tested-with');
// 			expect(metadataHeadings.at(2)).toHaveTextContent('Built with');
// 			expect(metadataHeadings.at(2)).toHaveAttribute('id', 'portfolio-item-foo-Built-with');

// 			const metadataLists = screen.getAllByRole('list');
// 			const listOne = metadataLists[0];
// 			expect(listOne).toHaveAttribute('aria-labelledby', 'portfolio-item-foo-Made-with');
// 			const listOneItems = within(listOne).getAllByRole('listitem');
// 			expect(listOneItems.at(0)).toHaveTextContent('React');
// 			expect(listOneItems.at(1)).toHaveTextContent('TypeScript');
// 			expect(listOneItems.at(2)).toHaveTextContent('Styled Components');

// 			const listTwo = metadataLists[1];
// 			expect(listTwo).toHaveAttribute('aria-labelledby', 'portfolio-item-foo-Tested-with');
// 			const listTwoItems = within(listTwo).getAllByRole('listitem');
// 			expect(listTwoItems.at(0)).toHaveTextContent('Jest');
// 			expect(listTwoItems.at(1)).toHaveTextContent('React Testing Library');

// 			const listThree = metadataLists[2];
// 			expect(listThree).toHaveAttribute('aria-labelledby', 'portfolio-item-foo-Built-with');
// 			const listThreeItems = within(listThree).getAllByRole('listitem');
// 			expect(listThreeItems.at(0)).toHaveTextContent('Vercel');
// 		});

// 		describe('link', () => {
// 			it('for Github URL', () => {
// 				// Given
// 				const item = { ...PortfolioMock[0] };
// 				item.url = 'https://github.com/simonhudson/foo';

// 				// When
// 				initialise(item);

// 				// Then
// 				const link = screen.getAllByRole('link')[1];
// 				expect(link).toHaveTextContent('View Portfolio Item Foo on Github');
// 				expect(link).toHaveAttribute('href', 'http://www.github.com/item-foo');
// 			});

// 			it('for non-Github URL', () => {
// 				// Given
// 				const item = { ...PortfolioMock[0] };

// 				// When
// 				initialise(item);

// 				// Then
// 				const link = screen.getAllByRole('link')[0];
// 				expect(link).toHaveTextContent('View Portfolio Item Foo site');
// 				expect(link).toHaveAttribute('href', 'http://www.item-foo.com');
// 			});

// 			it('for archived URL', () => {
// 				// Given
// 				const item = { ...PortfolioMock[0] };
// 				item.isArchived = true;

// 				// When
// 				initialise(item);

// 				// Then
// 				const link = screen.getAllByRole('link')[0];
// 				expect(link).toHaveTextContent('View Portfolio Item Foo site (archived)');
// 				expect(link).toHaveAttribute('href', 'http://www.item-foo.com');
// 			});
// 		});
// 	});

// 	const initialise = (item: IPortfolioItemFields) => render(<Item item={item} index={0} />);
// });
