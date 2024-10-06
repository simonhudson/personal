type Category = {
	items?: string[];
	title?: 'Made' | 'Tested' | 'Built';
};

export type MetadataProps = {
	categories: Category[];
	slug: string;
};

export const Metadata = ({ categories, slug }: MetadataProps) => {
	return (
		<div>
			{categories.map(({ items, title }, index) => {
				if (!items || !items.length) return;
				return (
					<div key={`metadata-title-${index}`}>
						<h4 id={`${slug}-${title}-with`}>{title} with</h4>
						<ul aria-labelledby={`${slug}-${title}-with`}>
							{items.map((item, index) => (
								<li key={index}>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				);
			})}
		</div>
	);
};
