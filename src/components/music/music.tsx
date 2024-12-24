import Link from 'next/link';
import Image from 'next/image';
import styles from './music.module.scss';

export const Music = async () => {
	let data;
	const response = await fetch('http://localhost:3000/api/music');
	if (response) {
		data = await response.json();
	}
	return data ? (
		<div className={styles.wrap}>
			<h3 className={styles.heading}>Now playing</h3>
			<div className={styles.inner}>
				<Image
					alt={`Now playing "${data.name}" by ${data.artist?.['#text']}`}
					className={styles.image}
					height={300}
					src={data.image[3]['#text']}
					width={300}
				/>
				<p className={styles.text}>
					<span>
						<Link href={data.url}>&quot;{data.name}&quot;</Link>{' '}
					</span>
					<span>
						<em>by</em>
						<Link href={data.url}> {data.artist?.['#text']}</Link>
					</span>
					{/*<span>
						{data.relativeTime}
						<Image
							alt=""
							aria-hidden="true"
							className={styles['sound-icon']}
							height={64}
							src="/images/icon-audio-wave.gif"
							unoptimized={true}
							width={64}
						/> 
					</span>*/}
				</p>
			</div>
		</div>
	) : (
		<p>Sorry, we could not load data from Last.fm</p>
	);
};
