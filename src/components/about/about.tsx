import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { IAboutMeFields, type IAboutMe } from '@/types/contentful';

interface AboutProps {
	aboutMeData: IAboutMe;
}

export const About = ({ aboutMeData }: AboutProps) => {
	const parseContent = (): string => {
		let copy = '';
		if ((aboutMeData.fields as IAboutMeFields).copy) {
			copy = documentToHtmlString((aboutMeData.fields as IAboutMeFields).copy);
		}

		return copy;
	};

	return (
		<section>
			<div className="inner-wrap">
				<h2> About me</h2>
				<div dangerouslySetInnerHTML={{ __html: parseContent() }}></div>
			</div>
		</section>
	);
};
