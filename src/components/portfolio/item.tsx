import Image from 'next/image';
import { Metadata } from './metadata';

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
	if (omit) return null;
	return (
		<div>
			<div>
				<div>
					<header>
						<h3>{title}</h3>
						<span>
							{client} / {date}
						</span>
					</header>
					{copyHtml && <div dangerouslySetInnerHTML={{ __html: copyHtml }}></div>}
					<Metadata
						categories={[
							{ title: 'Made', items: madeWith },
							{ title: 'Tested', items: testedWith },
							{ title: 'Built', items: builtWith },
						]}
						slug={slug}
					/>
				</div>
				<div>
					<Image alt={`${title} screen shot`} loading="lazy" src={`/images/${slug}.png`} />
				</div>
			</div>
			<footer>
				<ul>
					{url && (
						<li>
							<a href={url}>
								View <span>{title} </span>site
								{isArchived ? ' (archived)' : null}
							</a>
						</li>
					)}
					{githubUrl && (
						<li>
							<a href={githubUrl}>
								View <span>{title} </span> on Github
							</a>
						</li>
					)}
				</ul>
			</footer>
		</div>
	);
};
