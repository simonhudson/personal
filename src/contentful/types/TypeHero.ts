import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypeHeroFields {
	heading: EntryFieldTypes.RichText;
	subHeading: EntryFieldTypes.RichText;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, 'hero'>;
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
	TypeHeroSkeleton,
	Modifiers,
	Locales
>;
