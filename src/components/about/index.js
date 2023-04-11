import React from 'react';
import { H2, Paragraph } from '~/theme/typography';
import { Section } from '~/theme/layout';
import { Wrap, Content, Aside } from './index.styles';
import LastFm from '~/components/lastfm';

const AboutMe = () => {
	return (
		<Section>
			<H2>About me</H2>
			<Wrap>
				<Content>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et lectus consequat, suscipit
						mi eget, viverra tortor. Sed rutrum congue odio, ut tempor diam convallis sit amet. In facilisis
						turpis a nunc venenatis, et dapibus risus sagittis. Quisque posuere diam a semper faucibus.
						Aenean id odio mi. Duis eget nisi est. Nullam dolor velit, eleifend id est quis, hendrerit
						finibus urna. Donec ac auctor nisi. Mauris semper lacus vitae urna faucibus, vel sodales augue
						placerat. Aliquam molestie mollis elit, eget commodo velit. Nam vitae mauris et leo dapibus
						tincidunt vel vitae lectus. Duis tempus nibh turpis, egestas accumsan sapien convallis sed.
						Curabitur odio odio, placerat vitae eleifend id, vestibulum a lorem. Pellentesque ornare
						efficitur nulla. Donec id tortor sollicitudin, venenatis magna nec, vehicula est. Proin molestie
						auctor quam ut scelerisque.
					</Paragraph>
				</Content>
				<Aside>
					<LastFm />
				</Aside>
			</Wrap>
		</Section>
	);
};

export default AboutMe;
