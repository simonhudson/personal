import type { PortfolioItem } from '@/src/components/portfolio/portfolio.d';
import type { AboutProps } from '@/src/components/about/about.d';
import type { LastFmDisplayData } from '@/src/components/lastfm/lastfm.d';

export interface HomeProps {
	aboutData: AboutProps;
	portfolioItems: PortfolioItem[];
	lastFmData: LastFmDisplayData;
}
