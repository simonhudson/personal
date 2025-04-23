'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './music.module.scss';
import { type MusicResponse } from '@/src/types/music';

export const Music = () => {
	const [data, setData] = useState<MusicResponse | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/music`);
			const responseData: MusicResponse = await response.json();
			setData(responseData);
			setIsLoading(false);
		})();
	}, []);

	return (
		<div className={styles.wrap}>
			<div className={styles.inner}>
				{isLoading && <p>Loading&hellip;</p>}
				{!isLoading && !data && <p>Sorry, we could not load data from Last.fm</p>}
				{!isLoading && data && (
					<>
						<Image
							alt={`Now playing "${data.name}" by ${data.artist}`}
							className={styles.image}
							height={300}
							src={data.image}
							width={300}
						/>
						<p className={styles.text}>
							<span>
								<Link href={data.url}>&quot;{data.name}&quot;</Link>{' '}
							</span>
							<span>
								<Link href={data.url}> {data.artist}</Link>
							</span>
							<span>{data.relativeTime}</span>
						</p>
					</>
				)}
			</div>
		</div>
	);
};
