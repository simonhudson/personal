import { getContent } from '@/utilities/get-content';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { slugify } from '@/utilities/slugify';
import { PortfolioItem } from '@/components/portfolio/item';

const getPortfolioData = async () => {
	const portfolioItems = [];
	const data = await getContent('portfolioItem');
	console.log('data----------------');
	console.log(data);
	console.log('/xxdata----------------');

	if (data) {
		data.items.forEach((item) => {
			const copyHtml = item.copy ? documentToHtmlString(item.copy) : null;

			portfolioItems.push({
				...item,
				slug: '',
				copyHtml,
			});
		});
		portfolioItems.forEach((item) => (item.slug = slugify(item.title)));

		portfolioItems.sort((a, b) => {
			const keyA = a.position;
			const keyB = b.position;
			if (keyA && keyB) {
				if (keyA > keyB) return -1;
				if (keyA < keyB) return 1;
			}
			return 0;
		});
		return portfolioItems;
	}
};

export const Portfolio = async () => {
	const data = await getPortfolioData();

	console.log('x----------------');
	console.log(data);
	console.log('xx----------------');

	return (
		<section>
			<h2>My work</h2>
			<ul>
				{data.map((item) => {
					return item ? (
						<PortfolioItem
							key={item.slug}
							builtWith={item.builtWith}
							client={item.client}
							copyHtml={item.copyHtml}
							date={item.date}
							githubUrl={item.githubUrl}
							isArchived={item.isArchived}
							madeWith={item.madeWith}
							omit={item.omit}
							position={item.position}
							slug={item.slug}
							testedWith={item.testedWith}
							title={item.title}
							url={item.url}
						/>
					) : null;
				})}
			</ul>
		</section>
	);
};
