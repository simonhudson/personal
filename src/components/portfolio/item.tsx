type PortfolioItemProps = {
	builtWith?: string[];
	client: string;
	copyHtml?: string | null;
	date: string;
	githubUrl?: string;
	isArchived?: boolean;
	madeWith?: string[];
	omit?: boolean;
	position?: number;
	slug: string;
	testedWith?: string[];
	title: string;
	url?: string;
};

export const PortfolioItem = ({
	builtWith,
	client,
	copyHtml,
	date,
	githubUrl,
	isArchived,
	madeWith,
	omit,
	slug,
	testedWith,
	title,
	url,
}: PortfolioItemProps) => {
	return (
		<li>
			<p>{title}</p>
		</li>
	);
};
