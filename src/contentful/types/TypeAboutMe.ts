import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypeAboutMeFields {
	copy: EntryFieldTypes.RichText;
}

export type TypeAboutMeSkeleton = EntrySkeletonType<TypeAboutMeFields, 'aboutMe'>;
export type TypeAboutMe<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
	TypeAboutMeSkeleton,
	Modifiers,
	Locales
>;
