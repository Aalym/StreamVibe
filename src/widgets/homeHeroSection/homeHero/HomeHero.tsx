import React from 'react'
import styles from './style.module.scss'
import MovieCarousel from '../movieCarousel/MovieCarousel'

export default function HomeHero() {
	return (
		<section className={styles.hero}>
			{/* Фоновые полосы постеров */}
			<div className={styles.rows}>
				<MovieCarousel direction='left' />
				<MovieCarousel direction='right' />
				<MovieCarousel direction='left' />
				<MovieCarousel direction='right' />
			</div>

			{/* Затемнённый стеклянный слой с текстом */}
			<div className={styles.overlay}>
				<div className={styles.glass}>
					<h1>The Best Streaming Experience</h1>
					<p>
						StreamVibe is the best streaming experience for watching your
						favorite movies and shows. Anytime. Anywhere.
					</p>
					<button>Start Watching Now</button>
				</div>
			</div>
		</section>
	)
}
