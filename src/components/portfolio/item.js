import React from 'react';
import { Wrap, Img, Content, Text, Title, MadeWithList, MadeWithItem } from './item.styles';
import PropTypes from 'prop-types';

const Item = ({ client, date, madeWith, omit, slug, text, title, url }) => {
	if (omit) return null;

	// const generateCopyMarkup = (props) => {
	// 	let paragraphs = [];
	// 	text.map((item, index) => paragraphs.push(`<p>${item}</p>`));
	// 	return paragraphs.join(' ');
	// };

	return (
		<Wrap data-test="portfolio-item">
			<Img alt={`${title} screen shot`} />
			<Content>
				<Text>
					<Title data-test="portfolio-item__title">
						<span>{title}</span> <span>{client}</span>
					</Title>
					{/* <MadeWithList>
						{madeWith.map((item, index) => {
							return <MadeWithItem key={`made-with-${index}`}>{item}</MadeWithItem>;
						})}
					</MadeWithList> */}
				</Text>
			</Content>
		</Wrap>
	);
};

Item.propTypes = {
	client: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	madeWith: PropTypes.arrayOf(PropTypes.string).isRequired,
	omit: PropTypes.bool,
	slug: PropTypes.string.isRequired,
	text: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string,
};

export default Item;
