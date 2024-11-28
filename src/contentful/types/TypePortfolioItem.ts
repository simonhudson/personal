import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypePortfolioItemFields {
	title: EntryFieldTypes.Symbol;
	client: EntryFieldTypes.Symbol;
	url?: EntryFieldTypes.Symbol;
	githubUrl?: EntryFieldTypes.Symbol;
	copy?: EntryFieldTypes.RichText;
	madeWith?: EntryFieldTypes.Array<
		EntryFieldTypes.Symbol<
			| 'CSS'
			| 'Express.js'
			| 'HTML'
			| 'Handlebars'
			| 'JavaScript (ES6)'
			| 'JavaScript'
			| 'MongoDB'
			| 'Next.js'
			| 'Node.js'
			| 'REST API (Next.js)'
			| 'React'
			| 'Sass'
			| 'Styled Components'
			| 'TypeScript'
			| 'Webpack'
			| 'jQuery'
		>
	>;
	testedWith?: EntryFieldTypes.Array<
		EntryFieldTypes.Symbol<
			| 'Aquasec'
			| 'Chai/Mocha'
			| 'Cypress'
			| 'Enzyme'
			| 'Jest'
			| 'NVDA'
			| 'Nightwatch'
			| 'Postman'
			| 'Rapid7'
			| 'React Testing Library'
			| 'Veracode'
		>
	>;
	builtWith?: EntryFieldTypes.Array<
		EntryFieldTypes.Symbol<
			'.NET' | 'AWS (CI/CD)' | 'Contentful' | 'Github' | 'Netlify' | 'Sharepoint' | 'Swagger' | 'Vercel'
		>
	>;
	date: EntryFieldTypes.Symbol;
	isArchived?: EntryFieldTypes.Boolean;
	omit?: EntryFieldTypes.Boolean;
	position?: EntryFieldTypes.Integer;
	image?: EntryFieldTypes.AssetLink;
}

export type TypePortfolioItemSkeleton = EntrySkeletonType<TypePortfolioItemFields, 'portfolioItem'>;
export type TypePortfolioItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
	TypePortfolioItemSkeleton,
	Modifiers,
	Locales
>;
