import React from 'react'
import styles from './style.module.scss'
import MovieCarousel from '../movieCarousel/MovieCarousel'

export default function HomeHero() {
	return (
		<section className={styles.hero}>
			<div className={styles.rows}>
				<MovieCarousel direction='left' />
				<MovieCarousel direction='right' />
				<MovieCarousel direction='left' />
				<MovieCarousel direction='right' />
			</div>

			<div className={styles.overlay}>
				<h1>The Best Streaming Experience</h1>
				<p>
					StreamVibe is the best streaming experience for watching your favorite
					movies...
				</p>
				<button>Start Watching Now</button>
			</div>
		</section>
	)
}
