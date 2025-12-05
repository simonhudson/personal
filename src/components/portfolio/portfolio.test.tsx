import { Portfolio } from './portfolio';
import { PortfolioMock } from '@/test/mocks/cms/portfolio.mock';
import { screen, render } from '@testing-library/react';

describe('Portfolio', () => {
	it(`should render as expected`, () => {
		// When
		render(<Portfolio items={PortfolioMock} />);

		// Then
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My work');
		const items = screen.getAllByRole('article');
		expect(items).toHaveLength(3);
		const headings = screen.getAllByRole('heading', { level: 3 });
		expect(headings[0]).toHaveTextContent('Portfolio Item Top');
		expect(headings[1]).toHaveTextContent('Portfolio Item Foo');
		expect(headings[2]).toHaveTextContent('Portfolio Item Bar');
	});
});
