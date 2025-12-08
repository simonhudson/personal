import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './music.module.scss';
import { type MusicResponse } from '@/src/types/music';

const MusicInfo = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/music`, {
		cache: 'no-store',
	});
	const data: MusicResponse = await response.json();
	return (
		<>
			<Image
				alt={`Now playing "${data.name}" by ${data.artist}`}
				className={styles.image}
				height={300}
				src={data.image}
				width={300}
			/>
			<p className={styles.text}>
				<span className={styles.heading}>
					<Link href={data.url}> {data.artist}</Link>
				</span>
				<span>
					<Link href={data.url}>&quot;{data.name}&quot;</Link>{' '}
				</span>
				<span>{data.relativeTime}</span>
			</p>
		</>
	);
};

export const Music = async () => {
	return (
		<div className={styles.wrap}>
			<div className={styles.inner}>
				<Suspense fallback={<div>Loading...</div>}>
					<MusicInfo />
				</Suspense>
			</div>
		</div>
	);
};
